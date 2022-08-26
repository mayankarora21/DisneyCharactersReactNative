import axios from 'axios';

const URL = 'https://api.disneyapi.dev/characters';

export const fetchDisneyCharacters = async () => {
    const responseData = await axios.get(URL);
    console.log('response data is', responseData);
    return responseData.data.data;
}