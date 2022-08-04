import connection from "./../database/postgre.js"

async function getUserByEmail(email) {
    const query = "SELECT * FROM users WHERE email = $1;";
    const user = await connection.query(query, [email]);
    return user;
}

async function registerUser(user, hash) {
    const { name, email } = user;
    const query = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3);";
    await connection.query(query, [name, email, hash]);
}

export { getUserByEmail, registerUser };