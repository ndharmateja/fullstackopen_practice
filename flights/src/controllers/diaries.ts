import express from "express";

export const getDiaries = (_req: express.Request, res: express.Response) => {
  return res.send("get all diaries");
};

export const postDiaries = (_req: express.Request, res: express.Response) => {
  return res.send("add new diary");
};
