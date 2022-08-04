import { getUserByEmail } from "../../repositories/authRepository.js";

async function checkIfUserExists(req, res, next) {
    const { email } = req.body;
    try {
        const { rowCount : user } = await getUserByEmail(email);
        const isUserRegistered = user > 0;
        if(isUserRegistered) {
            return res.sendStatus(409);
        }
        next();
    } catch {
        res.sendStatus(500);
    }   
}

export default checkIfUserExists;