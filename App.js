import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const {Navigator, Screen} = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Navigator screenOptions={{headerTitleAlign: 'center'}}>
          <Screen name = "Home" component={HomeScreen} options = {{headerTitle: 'Disney Characters'}}></Screen>
          <Screen name = "Details" component={DetailsScreen}></Screen>
        </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
