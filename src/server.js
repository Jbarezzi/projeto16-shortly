import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js";

dotenv.config();
const app = express();

app.use(cors(), express.json());
app.use(router);

const PORT = process.env.PORT || 4000;
app.listen(PORT);