import { Router } from "express";
import { postBattle } from "../controllers/battleControllers";

const battleRouter = Router();

battleRouter.post("/battle", postBattle);

export default battleRouter;