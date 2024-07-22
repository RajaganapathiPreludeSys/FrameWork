# Divider Component Usage

This document provides instructions on how to use the Divider component in your React Native application.

## Import Divider Component

First, import the Divider component into your component file:

```typescript
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Divider from './Layout'; // Adjust the import path as per your project structure
```

## Usage Example

Here's how you can use the Divider component to separate content in your layout:

```typescript
const ExampleScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Some content above the divider</Text>
      <Divider color="red" />
      <Text>Some content below the divider</Text>
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

# Space Component Usage

This document provides instructions on how to use the `Space` component in your React Native application.

## Import Space Component

First, import the `Space` component into your component file:

```typescript
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Space from './Space'; // Adjust the import path as per your project structure
```

## Usage Example

Here's how you can use the Space component to create space between two views:

```typescript
const ExampleScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view1} />
      <Space size={20} />
      <View style={styles.view2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view1: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
  view2: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});
```
