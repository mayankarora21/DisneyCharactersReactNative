import { View, TextInput, StyleSheet } from "react-native";

const SearchBar = ({ handleTextChange }) => {
  return (
    <View>
      <TextInput
        placeholder="Search"
        onChangeText={(text) => handleTextChange(text)}
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