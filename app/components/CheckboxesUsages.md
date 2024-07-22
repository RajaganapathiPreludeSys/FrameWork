# Checkboxes Component Usage

This document provides instructions on how to use the Checkboxes component in your React Native application.

## Import Checkboxes Component

First, import the Checkboxes component into your component file:

```typescript
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Checkboxes from './Checkboxes'; // Adjust the import path as per your project structure
```

## Usage Example

Here's how you can use the Checkboxes component with single or multiple selection:

### Single Selection (Radio Buttons)

```typescript
const ExampleScreen: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <View style={styles.container}>
      <Checkboxes
        options={[
          {label: 'Option 1', value: 'option1'},
          {label: 'Option 2', value: 'option2'},
          {label: 'Option 3', value: 'option3'},
        ]}
        selectedValue={selectedOption}
        onValueChange={handleOptionChange}
        mode="single"
      />
    </View>
  );
};
```

### Multiple Selection (Checkboxes)

```typescript
const ExampleScreen: React.FC = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionsChange = (values: string[]) => {
    setSelectedOptions(values);
  };

  return (
    <View style={styles.container}>
      <Checkboxes
        options={[
          {label: 'Option 1', value: 'option1'},
          {label: 'Option 2', value: 'option2'},
          {label: 'Option 3', value: 'option3'},
        ]}
        selectedValue={selectedOptions}
        onValueChange={handleOptionsChange}
        mode="multiple"
      />
    </View>
  );
};
```
