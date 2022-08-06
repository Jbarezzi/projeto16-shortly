import { getShortUrl } from "./../../repositories/urlRepository.js";

async function checkIfShortUrlExists(req, res, next) {
    const shortUrl = req.params.shortUrl;
    const { rowCount: url } = await getShortUrl(shortUrl);
    const hasUrl = url === 1;
    if(hasUrl) {
        return next();
    }
    res.sendStatus(404);
}

export default checkIfShortUrlExists;