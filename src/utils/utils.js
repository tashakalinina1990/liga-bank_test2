import { MAX_RECORDS } from "../const";

export const formatDate = (date) => {
  const day = date.getDate() <= 9 ? `0${date.getDate()}` : date.getDate();
  const month =
    date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth();
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

export const formatDateToSting = (date) => {
  const str = date.split("-");

  return `${str[2]}.${str[1]}.${str[0]}`;
};

export const addRecord = (record, store) => {
  if (store.length >= MAX_RECORDS) {
    store.pop();
    store.unshift(record);
    return store;
  }

  if (store.length < MAX_RECORDS) {
    store.unshift(record);
    return store;
  }
};
