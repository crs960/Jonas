import express from 'express';
import jwt from 'jsonwebtoken';
import database from '../config/database.js';
import middleware from '../middleware/user.js';

const router = express.Router();
const jwtSecret = process.env.JWT_SECRET || "";

router.get("/admin/noticias", middleware, async (req, res) => {
    const user_id = getIdByToken(req);

    const noticias = await database('SELECT * FROM noticias WHERE user_id = $1;',[user_id]);
    res.send(noticias.rows);
});

router.post("/admin/noticias", middleware, (req, res) => {
    const {titulo, categoria, resumo, corpo} = req.body;
    const user_id = getIdByToken(req);

    database(
        'INSERT INTO noticias(user_id, titulo, categoria, resumo, corpo) VALUES($1, $2, $3, $4, $5);',
        [user_id, titulo, categoria, resumo, corpo]
    );

    res.sendStatus(201);
});

function getIdByToken(req) {
    const token = req.headers['authorization'].split(" ")[1];
    var user = jwt.verify(token, jwtSecret);
    return user.id;
}

export default router;