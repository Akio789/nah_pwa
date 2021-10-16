import APIConnector from './APIConnector';

export const login = async (email, password) => {
  const { data } = await APIConnector.put('/auth', { email, password });
  return data;
}

export const register = async (email, password) => {
  const { data } = await APIConnector.post('/auth', { email, password });
  return data;
}
