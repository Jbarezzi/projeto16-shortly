import { Router } from "express";
import { createShortUrl, getUrl, handleUrlDelete, redirectUser, returnRanking } from "./../controllers/urlController.js";
import { checkIfShortUrlExists, checkIfUrlExists, checkIfUrlIsFromUser, increaseVisitCount, validateJwtToken, validateWithJoi } from "./../middlewares/index.js";
import newUrl from "./../schemas/urlSchemas.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten", validateJwtToken, validateWithJoi(newUrl), createShortUrl);
urlRouter.get("/urls/:id", checkIfUrlExists, getUrl);
urlRouter.get("/urls/open/:shortUrl", checkIfShortUrlExists, increaseVisitCount, redirectUser);
urlRouter.delete("/urls/:id", validateJwtToken, checkIfUrlExists, checkIfUrlIsFromUser, handleUrlDelete);
urlRouter.get("/ranking", returnRanking);

export default urlRouter;