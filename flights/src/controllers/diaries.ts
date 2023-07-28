import express from "express";
import diaryService from "../services/diaryService";

export const getDiaries = (_req: express.Request, res: express.Response) => {
  return res.json(diaryService.getNonSensitiveDiaryEntries());
};

export const postDiaries = (_req: express.Request, res: express.Response) => {
  return res.send("add new diary");
};
