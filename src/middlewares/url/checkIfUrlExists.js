import getUrlById from "./../../repositories/urlRepository.js;"

async function checkIfUrlExists(req, res, next) {
    const id = req.params;
    const { rowCount: url } = await getUrlById(id);
    const hasUrl = url === 1;
    if(hasUrl) {
        return next();
    }
    res.sendStatus(404);
}

export default checkIfUrlExists;