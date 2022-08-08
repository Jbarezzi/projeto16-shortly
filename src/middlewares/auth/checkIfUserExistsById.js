import { getUserById } from "../../repositories/authRepository.js";

async function checkIfUserExistsById(_req, res, next) {
    const { id } = res.locals.user;
    try {
        const { rowCount : user } = await getUserById(id);
        const isUserRegistered = user > 0;
        if(isUserRegistered) {
            return next();
        }
        res.sendStatus(404);
    } catch {
        res.sendStatus(500);
    }   
}

export default checkIfUserExistsById;