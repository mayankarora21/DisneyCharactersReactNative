import { useEffect } from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import SearchBar  from './SearchBar';
import CharacterItem from './CharacterItem';

import { getCharacterList } from '../store/character-actions';
import {useSelector, useDispatch} from 'react-redux';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const filteredDisneyCharacterList = useSelector(state => state.filteredDisneyCharacterList);
    
    useEffect(() => {
        dispatch(getCharacterList());
    }, [])


    return (
        <View style = {styles.container}>
            <SearchBar></SearchBar>
            <FlatList data = {filteredDisneyCharacterList} keyExtractor = {(item, index) => index} renderItem = {(itemData) => {
                return (
                    <CharacterItem character = {itemData.item}></CharacterItem>
                );
            }}></FlatList>
        </View>
    );
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
    }
})