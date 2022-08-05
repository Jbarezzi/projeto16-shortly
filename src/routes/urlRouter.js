import { Router } from "express";
import { createShortUrl } from "./../controllers/urlController.js";
import { validateJwtToken, validateWithJoi } from "./../middlewares/index.js";
import newUrl from "./../schemas/urlSchemas.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten", validateJwtToken, validateWithJoi(newUrl), createShortUrl);


export default urlRouter;