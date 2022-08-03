import connection from "@database/postgre";

function signup(req, res) {
    const { name, email, password } = req.body;
    const query = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3);";
    await connection.query(query, [name, email, password]);
    res.sendStatus(201);
}

export default signup;