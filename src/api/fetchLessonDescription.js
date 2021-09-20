import APIConnector from './APIConnector';

export const fetchLessonDescription = async (id) => {
    const { data } = await APIConnector.get(`/lessonDescriptions`);
    const sortedData = data.sort((a, b) => parseInt(a.id) - parseInt(b.id));
    return sortedData;
}
