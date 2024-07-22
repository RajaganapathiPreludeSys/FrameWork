# ToggleSwitch Component Usage

This document provides instructions on how to use the ToggleSwitch component in your React Native application with theme support.

## Import ToggleSwitch Component

First, import the ToggleSwitch component into your component file:

```typescript
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ToggleSwitch from './ToggleSwitch'; // Adjust the import path as per your project structure
```

## Usage Example

Here's how you can use the ToggleSwitch component with theme customization:

```typescript
const ExampleScreen: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = (value: boolean) => {
    setIsEnabled(value);
  };

  return (
    <View style={styles.container}>
      <ToggleSwitch
        value={isEnabled}
        onValueChange={toggleSwitch}
        theme={{
          activeTrackColor: 'green',
          inactiveTrackColor: 'red',
          thumbColor: 'yellow',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
});
```