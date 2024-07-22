# Image Component Usage

This document provides instructions on how to use the Image component in your React Native application with support for loading indicators, error handling, and theme-based styling.

## Import Image Component

First, import the Image component into your component file:

```typescript
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Image from './Image'; // Adjust the import path as per your project structure
```

## Usage Example

Here's how you can use the Image component with support for loading indicators, error handling, and theme-based styling:

```typescript
const ExampleScreen: React.FC = () => {
  const customErrorComponent = (
    <View style={styles.customErrorContainer}>
      <Text style={styles.customErrorText}>Custom error message goes here</Text>
    </View>
  );

  const theme = {
    errorTextColor: 'red',
  };

  return (
    <View style={styles.container}>
      <Image
        source="https://example.com/image.jpg"
        errorComponent={customErrorComponent}
        theme={theme}
        style={styles.image}
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
  image: {
    width: 200,
    height: 200,
  },
  customErrorContainer: {
    alignItems: 'center',
  },
  customErrorText: {
    color: 'red',
    fontSize: 16,
  },
});
```

# ImageModal Component Usage

This document provides instructions on how to use the `ImageModal` component in your React Native application.

## Import ImageModal Component

First, import the `ImageModal` component into your component file:

```typescript
import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import ImageModal from './ImageModal'; // Adjust the import path as per your project structure
```

## Usage Example

Here's how you can use the ImageModal component to display an image in a popup modal/alert:

```typescript
const ExampleScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
        <Text>View Image</Text>
      </TouchableOpacity>
      <ImageModal
        imageUrl="https://example.com/image.jpg"
        isVisible={modalVisible}
        onClose={toggleModal}
        theme={{modalBackgroundColor: 'rgba(0, 0, 0, 0.5)', modalHeight: 400}}
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
});
```
