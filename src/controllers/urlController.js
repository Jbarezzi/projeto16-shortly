import { nanoid } from "nanoid";
import { deleteUrl, getRanking, getShortUrl, getUrlById, registerUrl } from "./../repositories/urlRepository.js";

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

async function redirectUser(req, res) {
    const shortUrl = req.params.shortUrl;
    try {
        const { rows: urls } = await getShortUrl(shortUrl);
        const url = urls[0].url;
        res.redirect(url);
    } catch {
        res.status(500).send({message: "Não foi possível redirecionar para essa url."});
    }
}

async function handleUrlDelete(req, res) {
    const id = req.params;
    try {
        await deleteUrl(id);
        res.sendStatus(204);
    } catch {
        res.status(500).send({message: "Não foi possivel deletar a url."});
    }
}

async function returnRanking(_req, res) {
    const ranking = await getRanking();
    res.status(200).send(ranking);
}

export { createShortUrl, getUrl, redirectUser, handleUrlDelete, returnRanking };