import { StyleSheet } from 'react-native';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './store/store';
import { Provider } from 'react-redux';

const {Navigator, Screen} = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store = {store}>
      <NavigationContainer>
          <Navigator screenOptions={{headerTitleAlign: 'center'}}>
            <Screen name = "Home" component={HomeScreen} options = {{headerTitle: 'Disney Characters'}}></Screen>
            <Screen name = "Details" component={DetailsScreen}></Screen>
          </Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
