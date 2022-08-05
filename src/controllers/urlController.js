import { nanoid } from "nanoid";
import { registerUrl } from "./../repositories/urlRepository.js";

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

export { createShortUrl };