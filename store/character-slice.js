import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    disneyCharacterList: [],
    filteredDisneyCharacterList: []
}

const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        setCharacterList(state, action) {
            state.disneyCharacterList = action.payload
        },
        setFilteredCharacterList(state, action) {
            state.filteredDisneyCharacterList = action.payload
        },
        filterCharacterList(state, action) {
            const searchText = action.payload;
            state.filteredDisneyCharacterList = state.disneyCharacterList.filter(character => character.name.toLowerCase().includes(searchText.toLowerCase()));
        }
    }
})

export const characterActions = characterSlice.actions;

export default characterSlice.reducer;