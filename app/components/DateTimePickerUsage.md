# CustomDateTimePicker Component Usage

This document provides instructions on how to use the CustomDateTimePicker component in your React Native application with theme support.

## Import CustomDateTimePicker Component

First, import the CustomDateTimePicker component into your component file:

```typescript
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomDateTimePicker from './CustomDateTimePicker'; // Adjust the import path as per your project structure
```

## Usage Example
Here's how you can use the CustomDateTimePicker component with theme customization:

```typescript
const ExampleScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const theme = {
    primaryColor: 'green',
    modalBackgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  return (
    <View style={styles.container}>
      <CustomDateTimePicker mode="date" value={selectedDate} onChange={handleDateChange} theme={theme} />
      {/* For Time Picker */}
      {/* <CustomDateTimePicker mode="time" value={selectedDate} onChange={handleDateChange} theme={theme} /> */}
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