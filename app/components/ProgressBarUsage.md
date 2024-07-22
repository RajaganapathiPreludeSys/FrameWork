# ProgressBar Component Usage

This document provides instructions on how to use the ProgressBar component in your React Native application with theme support.

## Import ProgressBar Component

First, import the ProgressBar component into your component file:

```typescript
import React from 'react';
import {View, StyleSheet} from 'react-native';
import ProgressBar from './ProgressBar'; // Adjust the import path as per your project structure
```

## Usage Example

Here's how you can use the ProgressBar component with theme customization:

```typescript
const ExampleScreen: React.FC = () => {
  const theme = {
    primaryColor: 'green',
  };

  return (
    <View style={styles.container}>
      <ProgressBar progress={0.5} theme={theme} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
```
