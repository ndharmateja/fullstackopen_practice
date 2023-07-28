import diaries from "../data/entries";
import { DiaryEntry } from "../types";

const diaryData: DiaryEntry[] = diaries;

const getEntries = (): DiaryEntry[] => {
  return diaryData;
};

const addEntry = () => {
  return null;
};

export default { getEntries, addEntry };
