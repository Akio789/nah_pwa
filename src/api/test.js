import APIConnector from './APIConnector';

export const test1 = async (id) => {
  const { data } = await APIConnector.get(`/lesson/${id}`);
  return data;
}
