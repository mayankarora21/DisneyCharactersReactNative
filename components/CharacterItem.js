import {View, Text, Image, StyleSheet, Pressable, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CharacterItem = ({character}) => {
    const navigation = useNavigation();
    
    const handlePress = () => {
        navigation.navigate('Details', {
            character: character
        });
    }

    return (
        <Pressable style = {styles.characterContainer} onPress = {handlePress}>
            <Text>{character.name}</Text>
            <Image source={{uri: character.imageUrl}} style = {styles.image}></Image>
        </Pressable>
    );
}

export default CharacterItem;


const styles = StyleSheet.create({
    characterContainer: {
        borderBottomWidth: 1,
        marginBottom: 10,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        height: 100,
        width: 100,
        resizeMode: 'stretch',
        borderRadius: 50
    }
})