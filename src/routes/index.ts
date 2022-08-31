import { Router } from "express"

import rankingRouter from "./rankingRouter";
import battleRouter from "./battleRouter";

const router = Router();

router.use(rankingRouter);
router.use(battleRouter);

export default router;