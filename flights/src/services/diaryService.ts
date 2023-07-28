import diaries from "../data/entries";
import { DiaryEntry } from "../types";

const getEntries = (): DiaryEntry[] => {
  return diaries;
};

const addEntry = () => {
  return null;
};

export default { getEntries, addEntry };
