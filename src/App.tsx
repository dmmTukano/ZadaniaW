import React from 'react';
import {NativeBaseProvider} from 'native-base';
import AppNavigation from 'navigation/Routes';
import {Provider} from 'react-redux';
import {store} from 'redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <AppNavigation />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
