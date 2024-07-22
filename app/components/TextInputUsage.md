# TextInput Component Usage

This Markdown file demonstrates how to use the `TextInput` component in your React Native application.

## Import TextInput Component

First, import the `TextInput` component into your component file:

```typescript
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from '../../components/TextInput';// Adjust the import path as per your project structure
```

## Create TextInput Component

Now, you can use the `TextInput` component in your application. Here's an example usage:

```typescript
const App = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleValidation = () => {
    if (text === '') {
      setError('Please enter some text');
      return;
    }
    if (password === '') {
      setError('Please enter a password');
      return;
    }
    setError('');
    // Perform further actions
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter text"
        value={text}
        onChangeText={setText}
        error={error} // Pass the error message here
        theme={{ colors: { primary: '#007bff', error: 'red' } }} // Customize colors as needed
        style={styles.input}
      />
      <TextInput
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        error={error} // Pass the error message here
        theme={{ colors: { primary: '#007bff', error: 'red' } }} // Customize colors as needed
        style={styles.input}
      />
      <Button title="Submit" onPress={handleValidation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
  },
});

export default App;
```