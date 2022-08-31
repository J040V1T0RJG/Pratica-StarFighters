import cors from "cors";
import express from "express";
import router from "./routes/index";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(router);

const PORT: number = Number(process.env.PORT) || 4000;

app.listen(PORT, () => console.log(`Server is up on port: ${PORT}`))