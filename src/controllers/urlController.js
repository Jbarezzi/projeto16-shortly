import { nanoid } from "nanoid";
import { getUrlById, registerUrl } from "./../repositories/urlRepository.js";

async function createShortUrl(req, res) {
    const { id } = res.locals.user;
    const newUrl = {
        url: req.body,
        shortUrl: nanoid(),
        userId: id,
    }
    try {
        await registerUrl(newUrl);
        res.status(201).send(newUrl.shortUrl);
    } catch {
        res.status(500).send({message: "Não foi possível encurtar o link."})
    }
}

async function getUrl(req, res) {
    const id = req.params;
    try {
        const { rows: urlDb } = await getUrlById(id);
        const urlToReturn = {
            id: urlDb[0].id,
            shortUrl: urlDb[0].shortUrl,
            url: urlDb[0].url,
        };
        res.status(200).send(urlToReturn);
    } catch {
        res.status(500).send({message: "Não foi possível encontrar a URL."});
    }
}

export { createShortUrl, getUrl };