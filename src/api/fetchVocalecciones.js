import APIConnector from './APIConnector';

export const fetchVocalecciones = async (id) => {
    const vocalecciones = await APIConnector.get(`/vocabulary/${id}`);
    return vocalecciones;
}
