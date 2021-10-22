import APIConnector from './APIConnector';

export const fetchAllCulture = async () => {
  const { data } = await APIConnector.get('/culture');
  return data;
}

export const fetchCulture = async (id) => {
  const { data } = await APIConnector.get(`/culture/${id}`);
  return data;
}
