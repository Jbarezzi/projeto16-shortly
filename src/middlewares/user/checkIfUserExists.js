import connection from "@database/postgre";

async function checkIfUserExists(req, res, next) {
    const { email } = req.body;
    const query = "SELECT * FROM users WHERE email = '$1'"
    const { rowCount : user } = await connection.query(query, [email]);
    const isUserRegistered = user > 0;
    if(isUserRegistered) {
        return res.sendStatus(409);
    }
    next();
}

export default checkIfUserExists;