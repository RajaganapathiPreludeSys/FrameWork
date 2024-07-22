# Using Toast in Your React Native Application

This guide demonstrates how to use the `Toast` component with the `ToastContext` in your React Native application.

## 1. Import ToastProvider

Import the `ToastProvider` component from the `ToastContext.tsx` file in your top-level component or in the component where you want to use toast messages.

Example:

```typescript
import React from 'react';
import { ToastProvider } from './contexts/ToastContext';
import MainScreen from './MainScreen';

const App = () => {
  return (
    <ToastProvider>
      <MainScreen />
    </ToastProvider>
  );
};

export default App;
```

## 2. Show Toast Messages

Use the useToast hook from the ToastContext.tsx file to show toast messages in your components.

Example:

```typescript
import React from 'react';
import { View, Button } from 'react-native';
import { useToast } from '../contexts/ToastContext';

const MainScreen = () => {
  const showToast = useToast();

  const handlePress = () => {
    showToast('Hello, world!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Show Toast" onPress={handlePress} />
    </View>
  );
};

export default MainScreen;
```