import { fetchDisneyCharacters } from '../util/Networking';
import { characterActions } from './character-slice';

export const getCharacterList = () => {
    return async (dispatch) => {
        try{
            const characterList = await fetchDisneyCharacters();
            dispatch(characterActions.setCharacterList(characterList));
            dispatch(characterActions.setFilteredCharacterList(characterList));
        }
        catch(error){
            console.log('There is some error in fetching disney characters. Error is:', error);
        }
    }
}