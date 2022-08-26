import { useEffect, useState } from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import disneyCharacterList from '../data/DisneyCharactersList';
import { fetchDisneyCharacters } from '../util/Networking';
import CharacterItem from './CharacterItem';

const HomeScreen = () => {
    const [disneyCharacterList, setDisneyCharacterList] = useState([]);

    useEffect(() => {
        const getCharacterList = async () => {
            try{
                const characterList = await fetchDisneyCharacters();
                console.log('character list is', characterList);
                setDisneyCharacterList(characterList);
            }
            catch(error){
                console.log('There is some error in fetching disney characters. Error is:', error);
            }
        }
        getCharacterList();
    }, [])

    return (
        <View style = {styles.container}>
            <FlatList data = {disneyCharacterList} keyExtractor = {(item, index) => index} renderItem = {(itemData) => {
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