import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { ErrorBoundary } from 'react-error-boundary';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import MainNavigation from '@/navigation';
import Fallback from '@/components/Fallback';
import { store, persistor } from '@/store';
import {
  PaperProvider,
  MD3LightTheme,
  adaptNavigationTheme,
} from 'react-native-paper';

const { LightTheme } = adaptNavigationTheme({
  reactNavigationLight: DefaultTheme,
});

const App = () => (
  <PaperProvider theme={MD3LightTheme}>
    <ErrorBoundary FallbackComponent={Fallback}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer theme={LightTheme}>
            <MainNavigation />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  </PaperProvider>
);

export default App;
