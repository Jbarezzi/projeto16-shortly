import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getUserData, registerUser } from "../repositories/authRepository.js";

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

async function signin(_req, res) {
    const user = res.locals.user;
    const data = {
        name: user.name,
        email: user.email,
        id: user.id
    }
    const token = jwt.sign(data, process.env.JWT_SECRET_KEY);
    res.status(200).send(token);
}

async function returnUserData(_req, res) {
    const { id } = res.locals.user;
    const userData = await getUserData(id);
    res.status(200).send(userData);
}

export { signup, signin, returnUserData } ;