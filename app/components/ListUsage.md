# List Component Usage

This document provides instructions on how to use the List component in your React Native application.

## Import List Component

First, import the List component into your component file:

```typescript
import React from 'react';
import {View, StyleSheet} from 'react-native';
import List from './List'; // Adjust the import path as per your project structure
```

## Usage Example

Here's how you can use the List component with different types and themes:

### Vertical List

```typescript
const verticalData = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
  // Add more items as needed
];

<List data={verticalData} type="vertical" theme={{}} />;
```

### Horizontal List (e.g., for Carousels)

```typescript
const verticalData = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
  // Add more items as needed
];

<List data={horizontalData} type="horizontal" theme={{}} />;
```

### Sectioned List

```typescript
const sectionedData = [
  {
    title: 'Section 1',
    data: [
      {id: '1', title: 'Item 1'},
      {id: '2', title: 'Item 2'},
    ],
  },
  {
    title: 'Section 2',
    data: [
      {id: '3', title: 'Item 3'},
      {id: '4', title: 'Item 4'},
    ],
  },
  // Add more sections and items as needed
];

<List data={sectionedData} type="sectioned" theme={{}} />;
```

### Grid List

```typescript
const gridData = [
  {id: '1', title: 'Item 1'},
  {id: '2', title: 'Item 2'},
  {id: '3', title: 'Item 3'},
  // Add more items as needed
];

<List data={gridData} type="grid" theme={{}} />;
```

### Customizing renderItem

You can customize the renderItem function to render list items as needed. For example:

```typescript
const customRenderItem = (item: ListItem) => <CustomItem item={item} />;

<List data={data} type="vertical" theme={{}} renderItem={customRenderItem} />;
```
