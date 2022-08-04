import bcrypt from "bcrypt";
import { registerUser } from "../repositories/authRepository.js";

async function signup(req, res) {
    const user = req.body;
    const saltRounds = 10;
    const hash = bcrypt.hash(user.password, saltRounds);
    try {
        await registerUser(user, hash);
        res.sendStatus(201);
    } catch {
        res.status(500).send({message: "Não foi possível cadastrar o usuário."})
    }   
}

export default signup;