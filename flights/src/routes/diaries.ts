import express from "express";
import { getDiaries, postDiaries } from "../controllers/diaries";

const router = express.Router();

router.route("/").get(getDiaries).post(postDiaries);

export default router;
