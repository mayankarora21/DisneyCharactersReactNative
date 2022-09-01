import { Text, StyleSheet } from "react-native";

const DetailItem = ({ character, keyObject }) => {
  return (
    <Text style = {styles.text}>
        {keyObject.visibleKey}: {character[keyObject.actualKey].length !== 0 ? character[keyObject.actualKey].join(", ") : `No ${keyObject.visibleKey}`}
    </Text>
  );
};

export default DetailItem;

const styles = StyleSheet.create({
    text: {
        borderBottomWidth: 1,
        padding: 10
    }
})