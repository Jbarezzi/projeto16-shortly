import { addVisitsToUrl } from "../../repositories/urlRepository.js";

async function increaseVisitCount(req, _res, next) {
    const shortUrl = req.body;
    await addVisitsToUrl(shortUrl);
    next();
}

export default increaseVisitCount;