import connection from "./../database/postgre.js"

async function getUserByEmail(email) {
    const query = `SELECT * FROM users WHERE email = $1;`;
    const user = await connection.query(query, [email]);
    return user;
}

async function registerUser(user, hash) {
    const { name, email } = user;
    const query = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`;
    await connection.query(query, [name, email, hash]);
}

async function getUserById(id) {
    const query = `SELECT * FROM users WHERE id = $1;`;
    const user = await connection.query(query, [id]);
    return user;
}

async function getUserData(id) {
    const query = `SELECT users.id, 
        users.name, 
        COALESCE(SUM(urls."visitCount"), 0) AS "visitCount", 
        ( JSON_AGG( JSON_BUILD_OBJECT(
                'id', urls.id,
                'shortUrl', urls."shortUrl",
                'url', urls.url,
                'visitCount', urls."visitCount"))) AS "shortenedUrls"
    FROM users
    LEFT JOIN urls ON urls."userId" = users.id
    WHERE users.id = $1
    GROUP BY users.id;`;
    const userData = await connection.query(query, [id]);
    return userData;
}

export { getUserByEmail, registerUser, getUserById, getUserData };