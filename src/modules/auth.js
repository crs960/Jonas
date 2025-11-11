import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import database from '../config/database.js';
import middleware from '../middleware/auth.js';


const router = express.Router();
const jwtSecret = process.env.JWT_SECRET || "";


router.post("/createLogin", middleware, async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

        if(typeof(await findUserByEmail(email)) == "undefined") {
            const passwordHash = await hash(password);
            database(
                'INSERT INTO users(email, password) VALUES($1, $2);',
                [email, passwordHash]
            );
            res.sendStatus(201);
        } else {
            res.sendStatus(409);
        }    
});

router.post("/login", middleware ,async (req, res) => {
    const email = await req.body.email;
    const password = await req.body.password;

    const user = await findUserByEmail(email);
    if(typeof(user) != "undefined") {
        if(await authPassword(password, user.password)) {
            res.send(createToken(user.id,user.role));
        } else {
            res.sendStatus(403);
        }
    } else {
        res.sendStatus(404);
    }
});

async function hash(password) {
    const saltRounds = 12;
    const hash = await bcrypt.hash(password, saltRounds);
    return hash;
}

async function authPassword(password, hash) {
    return await bcrypt.compare(password, hash);
}

async function findUserByEmail(email) {
    const tst = await database('SELECT * FROM users WHERE email = $1;',[email]);
    return await tst.rows[0];
}

function createToken(id, role) {
    return jwt.sign({id: id, role: role}, jwtSecret);
}
 
export default router;