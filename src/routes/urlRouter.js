import { Router } from "express";
import { createShortUrl, getUrl, redirectUser } from "./../controllers/urlController.js";
import { checkIfShortUrlExists, checkIfUrlExists, increaseVisitCount, validateJwtToken, validateWithJoi } from "./../middlewares/index.js";
import newUrl from "./../schemas/urlSchemas.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten", validateJwtToken, validateWithJoi(newUrl), createShortUrl);
urlRouter.get("/urls/:id", checkIfUrlExists, getUrl);
urlRouter.get("/urls/open/:shortUrl", checkIfShortUrlExists, increaseVisitCount, redirectUser);

export default urlRouter;