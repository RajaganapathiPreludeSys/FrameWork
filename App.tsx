// App.tsx
import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';

import {ProfileIcon} from './app/assets/icons/svg/ProfileIcon';
import {Button} from './app/components/Button';
import {TextInput} from './app/components/TextInput';
import {ThemeProvider} from './app/contexts/ThemeContext';
import LoginScreen from './app/screens/Login';
import RegisterScreen from './app/screens/Register';
import {themes} from './app/themes/themes';
import {Provider} from 'react-redux';
import {store} from './app/slice/store';

const App: React.FC = () => {
  // Provide your custom theme here, or leave it undefined to use default theme
  const customTheme = themes.light;

  return (
    <ThemeProvider initialTheme={customTheme}>
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <LoginScreen />

          {/* <RegisterScreen/> */}
          {/* Other components using the theme */}
        </SafeAreaView>
      </Provider>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
