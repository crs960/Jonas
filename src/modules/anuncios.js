import express from 'express';
import jwt from 'jsonwebtoken';
import database from '../config/database.js';
import middleware from '../middleware/user.js';

const router = express.Router();
const jwtSecret = process.env.JWT_SECRET || "";

router.get("/anuncios", middleware, async (req, res) => {
    const user_id = getIdByToken(req);

    const noticias = await database('SELECT * FROM anuncios WHERE user_id = $1;',[user_id]);
    res.send(noticias.rows);
});

router.post("/anuncios", middleware, (req, res) => {
    const {nome, empresa, email, tipo, mensagem, telefone} = req.body;
    const user_id = getIdByToken(req);

    database(
        'INSERT INTO anuncios(user_id, nome, empresa, email, tipo, mensagem, telefone) VALUES($1, $2, $3, $4, $5, $6, $7);',
        [user_id, nome, empresa, email, tipo, mensagem, telefone]
    );

    res.sendStatus(201);
});

function getIdByToken(req) {
    const token = req.headers['authorization'].split(" ")[1];
    var user = jwt.verify(token, jwtSecret);
    return user.id;
}

export default router;