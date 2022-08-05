import { Router } from "express";
import validateJwtToken from "./../middlewares/url/validateJwtToken";
import validateWithJoi from "./../middlewares/validateWithJoi";
import newUrl from "./../schemas/urlSchemas.js";

const urlRouter = Router();

urlRouter.post("/urls/shorten", validateJwtToken, validateWithJoi(newUrl));

export default urlRouter;