# Button Component Usage

This Markdown file demonstrates how to use the `Button` component in your React Native application.


## Import Button Component

First, import the `Button` component into your component file:

```typescript
import React from 'react';
import { View } from 'react-native';
import { Button } from '../../components/Button';; // Adjust the path as per your project structure
```

## Create Button Component

Now, you can use the `Button` component in your application. Here's an example usage:

```typescript
const RocketIcon = () => {
  return (
    <View style={{ width: 24, height: 24, backgroundColor: 'yellow' }}>
      <Text>Rocket</Text>
    </View>
  );
};

const App = () => {
  const handlePress = () => {
    console.log('Button pressed!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Press Me" onPress={handlePress} icon={<RocketIcon />} />
    </View>
  );
};

export default App;
```

In this example, the `RocketIcon` component is used as an icon for the button. You can replace it with any other icon component as per your requirements.
