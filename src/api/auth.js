import APIConnector from './APIConnector';

export const login = async (email, password) => {
  const { data } = await APIConnector.put('/auth', { email, password });
  return data;
}
