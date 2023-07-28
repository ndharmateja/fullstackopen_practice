import express from "express";
import diaryService from "../services/diary_service";
import { toNewDiaryEntry } from "../utils";

export const getDiaries = (_req: express.Request, res: express.Response) => {
  return res.json(diaryService.getNonSensitiveDiaryEntries());
};

export const getDiary = (req: express.Request, res: express.Response) => {
  const id = Number(req.params.id);
  const entry = diaryService.getEntryById(id);
  return entry ? res.json(entry) : res.sendStatus(404);
};

export const postDiaries = (req: express.Request, res: express.Response) => {
  const newDiary = toNewDiaryEntry(req.body);
  const diaryEntry = diaryService.addEntry(newDiary);
  return res.json(diaryEntry);
};
