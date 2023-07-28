import express from "express";
import { getDiaries, getDiary, postDiaries } from "../controllers/diaries";

const router = express.Router();

router.route("/").get(getDiaries).post(postDiaries);
router.route("/:id").get(getDiary);

export default router;
