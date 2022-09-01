import axios from 'axios';

const URL = 'https://api.disneyapi.dev/characters';

export const fetchDisneyCharacters = async () => {
    const responseData = await axios.get(URL);
    return responseData.data.data;
}