import jwt from 'jsonwebtoken';

const jwtSecret = process.env.JWT_SECRET || "";

export default function userAuth(req, res, next) {
    if(req.headers['authorization'] && typeof(req.headers['authorization'].split(" ")[1]) == "string") {
        const token = req.headers['authorization'].split(" ")[1];
        if(token) {
            jwt.verify(token, jwtSecret, function(err, decoded) {
                if(err == null && typeof(decoded.id) == "number") {
                    next();
                } else {
                    res.sendStatus(401);
                }
            }); 
        } else {
            res.sendStatus(400);
        }
    } else {
        res.sendStatus(400);
    }
}