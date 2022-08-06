import { Router } from "express";
import { createShortUrl, getUrl } from "./../controllers/urlController.js";
import { checkIfUrlExists, validateJwtToken, validateWithJoi } from "./../middlewares/index.js";
import newUrl from "./../schemas/urlSchemas.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten", validateJwtToken, validateWithJoi(newUrl), createShortUrl);
urlRouter.get("/urls/:id", checkIfUrlExists, getUrl);

export default urlRouter;