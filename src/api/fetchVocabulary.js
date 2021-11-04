import APIConnector from './APIConnector';

export const fetchVocabulary = async () => {
    const { data } = await APIConnector.get(`/vocabulary`);
    return data;
}
