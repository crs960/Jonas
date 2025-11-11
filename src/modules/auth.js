import express from 'express';

const router = express.Router();

router.post("/login", (req, res) => {
    const email = req.body.email;
    const senha = req.body.senha;
    
    res.json({
        email: email,
        senha: senha
    });
})

export default router;