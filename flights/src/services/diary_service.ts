import diaries from "../data/entries";
import { DiaryEntry, NewDiaryEntry, NonSensitiveDiaryEntry } from "../types";

const diaryData: DiaryEntry[] = diaries;

const getEntries = (): DiaryEntry[] => {
  return diaryData;
};

const getNonSensitiveDiaryEntries = (): NonSensitiveDiaryEntry[] => {
  return diaryData.map(diaryEntryToNonSensitive);
};

const diaryEntryToNonSensitive = (
  entry: DiaryEntry
): NonSensitiveDiaryEntry => {
  const { id, date, weather, visibility } = entry;
  return { id, date, weather, visibility };
};

const getEntryById = (id: number): NonSensitiveDiaryEntry | undefined => {
  const nonSensitiveEntries = getNonSensitiveDiaryEntries();
  return nonSensitiveEntries.find((entry) => entry.id === id);
};

const addEntry = (newEntry: NewDiaryEntry): DiaryEntry => {
  const diaryEntry: DiaryEntry = { ...newEntry, id: diaryData.length + 1 };
  diaryData.push(diaryEntry);
  return diaryEntry;
};

export default {
  getEntries,
  addEntry,
  getNonSensitiveDiaryEntries,
  getEntryById,
};
