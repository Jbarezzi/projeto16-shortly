import connection from "./../database/postgre.js";

async function registerUrl(newUrl) {
    const { url, shortUrl, userId } = newUrl;
    const query = `INSERT INTO urls (url, "shortUrl", "userId") VALUES ($1, $2, $3);`;
    await connection.query(query, [url, shortUrl, userId]);
}

async function getUrlById(urlId) {
    const query = `SELECT * FROM urls WHERE urlId = $1;`;
    const url = await connection.query(query, [id]);
    return url;
}

async function getShortUrl(shortUrl) {
    const query = `SELECT * FROM urls WHERE "shortUrl" = $1;`;
    const url = await connection.query(query, [shortUrl]);
    return url;
}

async function addVisitsToUrl(shortUrl) {
    const query = `UPDATE urls SET "visitCount" = "visitCount" + 1 WHERE "shortUrl" = $1;`;
    await connection.query(query, [shortUrl]);
}

async function deleteUrl(urlId) {
    const query = `DELETE FROM urls WHERE id = $1;`;
    await connection.query(query, [urlId]);
}

async function getRanking() {
    const query = `SELECT users.id,
                users.name,
                COUNT(urls."userId") AS "linksCount",
                COALESCE(SUM(urls."visitCount"), 0) AS "visitCount"
            FROM users
            LEFT JOIN urls ON users.id = urls."userId"
            GROUP BY users.id
            ORDER BY "visitCount" DESC
            LIMIT 10;`;
    const ranking = await connection.query(query);
    return ranking;
}

export { registerUrl, getUrlById, getShortUrl, addVisitsToUrl, deleteUrl, getRanking };