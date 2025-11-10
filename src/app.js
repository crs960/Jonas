import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: '50kb' }));
app.use(bodyParser.json({ limit: '50kb' }));

app.use(cors());

app.use((err, _, res, _next) => {
    res.sendStatus(400).json({"status": "Requisição inválida", "erro:": err.message});
});

//app.use("/", user);

export default app;