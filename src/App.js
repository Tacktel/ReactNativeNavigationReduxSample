import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import MainView from './components/MainView'
import { Navigator } from './Navigator'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}