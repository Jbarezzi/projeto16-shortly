import jwt from "jsonwebtoken";

function validateJwtToken(req, res, next) {
    const token = req.headers;
    token?.replace("Bearer ", "");
    const user = jwt.decode(token);
    res.locals.user = user;
    try {
        jwt.verify(token, process.env.JWT_SECRET_KEY);
        next();
    } catch {
        res.sendStatus(401);
    }
}

export default validateJwtToken;