# Avatar Component Usage

This Markdown file demonstrates how to use the `Avatar` component in your React Native application.

## Import Avatar Component

First, import the `Avatar` component into your component file:

```typescript
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Avatar from './components/Avatar'; // Adjust the import path as per your project structure
```

## Create Avatar Component

Now, you can use the Avatar component in your application. Here's an example usage:

```typescript
const MainScreen = () => {
  const theme = {
    avatarSize: 50,
    avatarBackgroundColor: 'lightblue',
    avatarTextColor: 'white',
  };

  return (
    <View style={styles.container}>
      <Avatar text="JD" theme={theme} />
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

export default MainScreen;

```