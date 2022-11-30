import { Router } from "express";
import homeRouter from "./home";
import accountsRouter from "./accounts";
import authRouter from "./auth";

const router = Router();

router.use("/users", accountsRouter);
router.use("/auth", authRouter);
router.use("/", homeRouter);

export default router;
