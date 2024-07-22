# BottomSheet Component Usage

This document provides instructions on how to use the BottomSheet component in your React Native application with theme support.

## Import BottomSheet Component

First, import the BottomSheet component into your component file:

```typescript
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomSheet from './BottomSheet'; // Adjust the import path as per your project structure
```

## Usage Example

Here's how you can use the BottomSheet component with theme support:

```typescript
const ExampleScreen: React.FC = () => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const theme = {
    overlayColor: 'rgba(0, 0, 0, 0.5)',
    sheetBackgroundColor: '#fff',
  };

  const toggleBottomSheet = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };

  return (
    <View style={styles.container}>
      <Text onPress={toggleBottomSheet}>Open Bottom Sheet</Text>
      <BottomSheet
        isVisible={bottomSheetVisible}
        onClose={toggleBottomSheet}
        content={
          <View style={styles.bottomSheetContent}>
            <Text>Content goes here</Text>
          </View>
        }
        theme={theme}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheetContent: {
    padding: 20,
  },
});
```
