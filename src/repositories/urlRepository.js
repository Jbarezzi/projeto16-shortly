import connection from "./../database/postgre.js";

async function registerUrl(newUrl) {
    const { url, shortUrl, userId } = newUrl;
    const query = 'INSERT INTO urls (url, "shortUrl", "userId") VALUES ($1, $2, $3);';
    await connection.query(query, [url, shortUrl, userId]);
}

export { registerUrl };