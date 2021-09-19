import APIConnector from './APIConnector';

export const fetchLesson = async (id) => {
    const { data } = await APIConnector.get(`/lesson/${id}`);
    return data;
}