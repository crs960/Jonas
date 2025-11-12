import express from 'express';
import database from '../config/database.js';

const router = express.Router();

router.get("/noticias", async (_req, res) => {
    const noticias = await database('SELECT * FROM noticias;');
    res.send(noticias.rows);
});

router.get("/noticias/:categoria", async (req, res) => {
    const categoria = req.params.categoria;
    const noticias = await database('SELECT * FROM noticias WHERE categoria = $1',[categoria]);

    res.send(noticias.rows);
});

export default router;