import connection from "./../database/postgre.js";

async function registerUrl(newUrl) {
    const { url, shortUrl, userId } = newUrl;
    const query = `INSERT INTO urls (url, "shortUrl", "userId") VALUES ($1, $2, $3);`;
    await connection.query(query, [url, shortUrl, userId]);
}

async function getUrlById(id) {
    const query = `SELECT * FROM urls WHERE id = $1;`;
    const url = await connection.query(query, [id]);
    return url;
}

async function getShortUrl(shortUrl) {
    const query = `SELECT * FROM urls WHERE "shortUrl" = $1;`;
    const url = await connection.query(query, [shortUrl]);
    return url;
}

export { registerUrl, getUrlById, getShortUrl };