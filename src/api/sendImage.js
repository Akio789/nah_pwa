import APIConnector from './APIConnector';

export const sendImage = async (image) => {
    return await APIConnector.post('/fruit', image, {
        headers: {
         'content-type': 'multipart/form-data' 
        }})
}


