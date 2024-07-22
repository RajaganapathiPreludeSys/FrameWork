# AlertDialog Component Usage

This Markdown file demonstrates how to use the `AlertDialog` component with themes in your React Native application.

## Import AlertDialog Component

First, import the `AlertDialog` component into your component file:

```typescript
import React from 'react';
import { View, StyleSheet } from 'react-native';
import AlertDialog from './components/AlertDialog'; // Adjust the import path as per your project structure
```

## Create AlertDialog Components

Now, you can use the AlertDialog component in your application. Here are examples for basic, error, and success alert dialogs:

### Basic AlertDialog

```typescript
const BasicAlertDialogScreen = () => {
  const theme = {
    basic: {
      containerBackgroundColor: '#ffffff',
      titleTextColor: '#000000',
      messageTextColor: '#333333',
      buttonBackgroundColor: '#007bff',
      buttonTextColor: '#ffffff',
    },
  };

  return (
    <View style={styles.container}>
      <AlertDialog
        type="basic"
        title="Basic Alert"
        message="This is a basic alert dialog."
        onDismiss={() => console.log('Dismissed')}
        theme={theme}
      />
    </View>
  );
};
```

### Error AlertDialog

```typescript
const ErrorAlertDialogScreen = () => {
  const theme = {
    error: {
      containerBackgroundColor: '#ffffff',
      titleTextColor: '#ffffff',
      messageTextColor: '#ffffff',
      buttonBackgroundColor: '#dc3545',
      buttonTextColor: '#ffffff',
    },
  };

  return (
    <View style={styles.container}>
      <AlertDialog
        type="error"
        title="Error Alert"
        message="An error occurred."
        onDismiss={() => console.log('Dismissed')}
        theme={theme}
      />
    </View>
  );
};
```

### Success AlertDialog

```typescript
const SuccessAlertDialogScreen = () => {
  const theme = {
    success: {
      containerBackgroundColor: '#ffffff',
      titleTextColor: '#ffffff',
      messageTextColor: '#ffffff',
      buttonBackgroundColor: '#28a745',
      buttonTextColor: '#ffffff',
    },
  };

  return (
    <View style={styles.container}>
      <AlertDialog
        type="success"
        title="Success Alert"
        message="Operation successful."
        onDismiss={() => console.log('Dismissed')}
        theme={theme}
      />
    </View>
  );
};
```

# ConfirmationAlertDialog Component Usage

This Markdown file demonstrates how to use the `ConfirmationAlertDialog` component in your React Native application.

## Import ConfirmationAlertDialog Component

First, import the `ConfirmationAlertDialog` component into your component file:

```typescript
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ConfirmationAlertDialog from './components/ConfirmationAlertDialog'; // Adjust the import path as per your project structure
```

## Create ConfirmationAlertDialog Component

Now, you can use the ConfirmationAlertDialog component in your application. Here's an example usage:

```typescript
const ConfirmationAlertDialogScreen = () => {
  const theme = {
    containerBackgroundColor: '#fff',
    titleTextColor: '#000',
    messageTextColor: '#333',
    confirmButtonBackgroundColor: '#007bff',
    confirmButtonTextColor: '#fff',
    cancelButtonBackgroundColor: '#dc3545',
    cancelButtonTextColor: '#fff',
  };

  return (
    <View style={styles.container}>
      <ConfirmationAlertDialog
        title="Confirmation"
        message="Are you sure you want to proceed?"
        onConfirm={() => console.log('Confirmed')}
        onCancel={() => console.log('Cancelled')}
        theme={theme}
      />
    </View>
  );
};
```


