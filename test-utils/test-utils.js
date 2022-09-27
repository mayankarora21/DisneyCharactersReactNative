import React from 'react'
import {render} from '@testing-library/react-native';
import store from '../store/store';
import { Provider } from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

const AllTheProviders = ({children}) => {
  return (
    <Provider store = {store}>
      <NavigationContainer>
            {children}
      </NavigationContainer>
    </Provider>
  )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react-native'

// override render method
export {customRender as render}