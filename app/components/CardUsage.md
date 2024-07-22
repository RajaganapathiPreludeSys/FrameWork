# Card Component Usage

This document provides instructions on how to use the Card component in your React Native application with theming support.

## Import Card Component

First, import the Card component into your component file:

```typescript
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from './Card'; // Adjust the import path as per your project structure
```

## Usage Example

Here's how you can use the Card component with different themes:

```typescript
const ExampleScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Card
        title="Card Title"
        content="This is the content of the card."
        theme={{
          cardBackgroundColor: '#ffffff',
          titleColor: '#000000',
          contentColor: '#333333',
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

# ImageCard Component Usage

This document provides instructions on how to use the ImageCard component in your React Native application.

## Import ImageCard Component

First, import the ImageCard component into your component file:

```typescript
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageCard from './ImageCard'; // Adjust the import path as per your project structure
```

## Usage Example

Here's how you can use the ImageCard component with an image, title, and content:

```typescript
const ExampleScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageCard
        title="Card Title"
        content="This is the content of the card."
        imageUrl="https://example.com/image.jpg"
        theme={{
          cardBackgroundColor: '#ffffff',
          titleColor: '#000000',
          contentColor: '#333333',
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
