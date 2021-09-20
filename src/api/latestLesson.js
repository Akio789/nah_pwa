import APIConnector from './APIConnector';

export const saveLatestLesson = async (email, latest_lesson) => {
  return await APIConnector.post('/user', { email, latest_lesson });
}

export const getLatestLesson = async (email) => {
  const { data } = await APIConnector.get('/user/' + email);
  return data;
}