import connection from "./../database/postgre.js"

async function registerUser(user, hash) {
    const { name, email } = user;
    const query = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3);";
    await connection.query(query, [name, email, hash]);
}

export { registerUser };