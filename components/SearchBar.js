import { View, TextInput, StyleSheet } from "react-native";
import { characterActions } from "../store/character-slice";
import {useDispatch} from 'react-redux';

const SearchBar = () => {

  const dispatch = useDispatch();

  const handleTextChange = (text) => {
    dispatch(characterActions.filterCharacterList(text));
  }

  return (
    <View>
      <TextInput
        placeholder="Search"
        onChangeText={handleTextChange}
        style = {styles.searchBar}
      ></TextInput>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
    searchBar: {
        borderWidth: 1,
        padding: 10,
    }
})