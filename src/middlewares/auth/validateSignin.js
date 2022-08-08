import bcrypt from "bcrypt";
import { getUserByEmail } from "./../../repositories/authRepository.js";

async function validateSignin(req, res, next) {
    const { email, password } = req.body;
    try {
        const { rows: user } = await getUserByEmail(email);
        const isUserRegistered = user.length === 1;
        const isPasswordValid = isUserRegistered ? await bcrypt.compare(password, user[0].password) : false;
        if(isPasswordValid) {
            res.locals.user = user[0];
            return next();
        }
        res.status(401).send({message: "Email ou Senha incorretos."});
    } catch {
        res.sendStatus(500);
    }
}

export default validateSignin;