import APIConnector from './APIConnector';

export const fetchLessonDescription = async (id) => {
    const { data } = await APIConnector.get(`/lessonDescriptions`);
    return data;
}
