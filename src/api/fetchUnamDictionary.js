import APIConnector from './APIConnector';

export const fetchUnamDicionary = async (language, query) => {
  const { data } = await APIConnector.get(`/unamDictionary/${language}/${query}`);
  return data;
}