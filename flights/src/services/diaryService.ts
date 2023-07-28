import diaries from "../data/entries";
import { DiaryEntry, NonSensitiveDiaryEntry } from "../types";

const diaryData: DiaryEntry[] = diaries;

const getEntries = (): DiaryEntry[] => {
  return diaryData;
};

const getNonSensitiveDiaryEntries = (): NonSensitiveDiaryEntry[] => {
  return diaryData.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

const addEntry = () => {
  return null;
};

export default { getEntries, addEntry, getNonSensitiveDiaryEntries };
