import APIConnector from './APIConnector';

export const fetchAllCodex = async () => {
  const { data } = await APIConnector.get('/all_codex');
  return data;
}

export const fetchCodex = async (id) => {
  const { data } = await APIConnector.get(`/codex/${id}`);
  return data;
}
