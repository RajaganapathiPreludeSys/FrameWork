import React from 'react'
import {View, Text} from 'react-native'

import {ListItem, ListProps} from './List'
import {styles} from './List.style'

export const DefaultItem: React.FC<{item: ListItem; theme?: ListProps['theme']}> = ({item, theme}) => (
    <View style={[styles.item, {backgroundColor: theme?.itemBackgroundColor}]}>
        <Text style={{color: theme?.itemTextColor}}>{item.title}</Text>
    </View>
)
