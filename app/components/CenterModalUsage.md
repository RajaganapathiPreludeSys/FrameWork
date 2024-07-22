# CenterModal Component Usage

This document provides instructions on how to use the CenterModal component in your React Native application with theme support.

## Import CenterModal Component

First, import the CenterModal component into your component file:

```typescript
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CenterModal from './CenterModal'; // Adjust the import path as per your project structure
```

## Usage Example

Here's how you can use the CenterModal component with theme support:

```typescript
const ExampleScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const theme = {
    modalBackgroundColor: '#f0f0f0',
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Text onPress={toggleModal}>Open Modal</Text>
      <CenterModal
        isVisible={modalVisible}
        onClose={toggleModal}
        content={
          <View style={styles.modalContent}>
            <Text>Modal content goes here</Text>
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
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
});
```
