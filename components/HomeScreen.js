import { useEffect, useState } from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import SearchBar  from './SearchBar';
import disneyCharacterList from '../data/DisneyCharactersList';
import { fetchDisneyCharacters } from '../util/Networking';
import CharacterItem from './CharacterItem';

const HomeScreen = () => {
    const [disneyCharacterList, setDisneyCharacterList] = useState([]);
    const [filteredDisneyCharacterList, setFilteredDisneyCharacterList] = useState([]);

    useEffect(() => {
        const getCharacterList = async () => {
            try{
                const characterList = await fetchDisneyCharacters();
                console.log('character list is', characterList);
                setDisneyCharacterList(characterList);
                setFilteredDisneyCharacterList(characterList);
            }
            catch(error){
                console.log('There is some error in fetching disney characters. Error is:', error);
            }
        }
        getCharacterList();
    }, [])

    const filterCharacterList = (searchText) => {
        setFilteredDisneyCharacterList(disneyCharacterList.filter(character => character.name.toLowerCase().includes(searchText.toLowerCase())));
    }
    return (
        <View style = {styles.container}>
            <SearchBar handleTextChange={filterCharacterList}></SearchBar>
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
    }
})