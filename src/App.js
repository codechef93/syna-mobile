import React from 'react';
import {Provider} from 'react-redux';
import {MenuProvider} from 'react-native-popup-menu';

import AppNavigation from './navigation';
import configureStore from './redux/configureStore';

const store = configureStore();

/* =============================================================================
<App />
============================================================================= */
const App = () => {
  return (
    <Provider store={store}>
      <MenuProvider>
        <AppNavigation />
      </MenuProvider>
    </Provider>
  );
};

export default App;
