import APIConnector from './APIConnector';

export const fetchGlossary = async () => {
    const { data } = await APIConnector.get(`/glossary`);
    return data;
}
