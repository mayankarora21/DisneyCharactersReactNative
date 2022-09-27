import axios from 'axios';
import { fetchDisneyCharacters } from '../../util/Networking';

jest.mock('axios');

test('Disney Characters should be fetched successfully', async () => {
    const characterListResponse = {
        data: {
            data: [
                {name: "Character 1", imageUrl: ""},
                {name: "Character 2", imageUrl: ""},
                {name: "Character 3", imageUrl: ""},
            ]
        }
    }

    axios.get.mockResolvedValue(characterListResponse);
    const characterList = await fetchDisneyCharacters();
    expect(characterList.length).toBe(3);
})