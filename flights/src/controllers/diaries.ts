import express from "express";
import diaryService from "../services/diary_service";

export const getDiaries = (_req: express.Request, res: express.Response) => {
  return res.json(diaryService.getNonSensitiveDiaryEntries());
};

export const getDiary = (req: express.Request, res: express.Response) => {
  const id = Number(req.params.id);
  const entry = diaryService.getEntryById(id);
  return entry ? res.json(entry) : res.sendStatus(404);
};

export const postDiaries = (_req: express.Request, res: express.Response) => {
  return res.send("add new diary");
};
