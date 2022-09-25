import { View, Image, ScrollView, StyleSheet } from "react-native";
import { useEffect } from "react";
import DetailItem from "./DetailItem";

const DetailsScreen = ({route, navigation}) => {
  const character = route.params.character;

  useEffect(() => {
    navigation.setOptions({ title: character.name });
  }, [navigation, character]);

  const keys = [
    { visibleKey: "Films", actualKey: "films" },
    { visibleKey: "Short Films", actualKey: "shortFilms" },
    { visibleKey: "TV Shows", actualKey: "tvShows" },
    { visibleKey: "Video Games", actualKey: "videoGames" },
    { visibleKey: "Park Attractions", actualKey: "parkAttractions" },
    { visibleKey: "Allies", actualKey: "allies" },
    { visibleKey: "Enemies", actualKey: "enemies" },
  ];

  return (
    <View style={styles.rootContainer}>
      <Image source={{ uri: character.imageUrl }} style={styles.image}></Image>
      <View style = {styles.detailsContainer}>
        <ScrollView>
          {
              keys.map((key, index) => {
                  return (
                      <DetailItem character={character} key = {index} keyObject = {key}></DetailItem>
                  );
              })
          }
        </ScrollView>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center",
    flex: 1
  },
  image: {
    height: 200,
    width: 200,
    resizeMode: "stretch",
    borderRadius: 100,
    marginVertical: 15
  },
  detailsContainer: {
    width: '90%',
    flex: 1,
    marginBottom: 15
  }
});