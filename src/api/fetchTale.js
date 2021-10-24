import APIConnector from './APIConnector';

export const fetchAllTales = async () => {
  const { data } = await APIConnector.get('/all_tales');
  return data;
}

export const fetchTale = async (id) => {
  const { data } = await APIConnector.get(`/tales/${id}`);
  return data;
}
