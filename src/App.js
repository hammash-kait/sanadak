import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import './I18n';
import {store, persistor} from './Store';
import ApplicationNavigator from './Navigators/Application';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={false} persistor={persistor}>
        <SafeAreaProvider>
          <ApplicationNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
