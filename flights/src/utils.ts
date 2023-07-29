import { NewDiaryEntry, Visibility, Weather } from "./types";

// Type guard =>
// eturns "boolean"
// and return type is "type predicate"
// We return the type predicate so that ts knows if this function returns true
// the parameter is a string
const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const parseComment = (comment: unknown): string => {
  if (!comment || !isString(comment)) {
    throw new Error("Incorrect or missing comment");
  }
  return comment;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error(`Incorrect or missing date: ${date}`);
  }
  return date;
};

const isWeather = (weather: string): weather is Weather => {
  return Object.values(Weather)
    .map((w) => w.toString())
    .includes(weather);
};

const parseWeather = (weather: unknown): Weather => {
  if (!weather || !isString(weather) || !isWeather(weather)) {
    throw new Error(`Incorrect or missing weather: ${weather}`);
  }
  return weather;
};

const isVisibility = (visibility: string): visibility is Visibility => {
  return Object.values(Visibility)
    .map((v) => v.toString())
    .includes(visibility);
};

const parseVisibility = (visibility: unknown): Visibility => {
  if (!visibility || !isString(visibility) || !isVisibility(visibility)) {
    throw new Error(`Incorrect or missing visibility: ${visibility}`);
  }
  return visibility;
};

export const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  if (!object || typeof object !== "object")
    throw new Error("Incorrect or missing data");

  if (!("visibility" in object)) throw new Error("Missing field: visibility");
  if (!("date" in object)) throw new Error("Missing field: date");
  if (!("weather" in object)) throw new Error("Missing field: weather");
  if (!("comment" in object)) throw new Error("Missing field: comment");

  const newEntry: NewDiaryEntry = {
    date: parseDate(object.date),
    comment: parseComment(object.comment),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
  };
  return newEntry;
};
