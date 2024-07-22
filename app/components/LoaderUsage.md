# Loading Indicator and Provider Usage

This document demonstrates how to use the loading indicator and provider components in your React Native application.

## Usage Example

### 1. Import the LoadingProvider and useLoading

```typescript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LoadingProvider, useLoading } from './LoadingContext'; // Adjust the import path as per your project structure
```

### 2. Wrap your application with the LoadingProvider

```typescript
const App = () => {
  return (
    <LoadingProvider>
      <MyComponent />
    </LoadingProvider>
  );
};
```

### 3. Use the useLoading hook in your component

```typescript
const MyComponent = () => {
  const { showLoading, hideLoading } = useLoading();

  const fetchData = async () => {
    try {
      showLoading();
      // Perform data fetching or other async operations
      await fetch('https://api.example.com/data');
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      hideLoading();
    }
  };

  return (
    <View style={styles.container}>
      <Text onPress={fetchData}>Fetch Data</Text>
    </View>
  );
};
```