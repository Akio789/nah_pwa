import axios from 'axios';

URL = 'https://gist.githubusercontent.com/GerardoArturoMiranda/e31cd231b5f61fb301a275f65ee1dc94/raw/374f0a7671285a2699feacfd11ebc874e01c2b6b/Vocalecci%25C3%25B3n';

export const fetchVocalecciones = async () => {
    const vocalecciones = await axios.get(URL, {
        params: {
            answer: { toJSON: () => 42 },
        }
    });
    return vocalecciones;
}




