import diaries from "../data/entries";
import { DiaryEntry, NonSensitiveDiaryEntry } from "../types";

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

const addEntry = () => {
  return null;
};

export default {
  getEntries,
  addEntry,
  getNonSensitiveDiaryEntries,
  getEntryById,
};
