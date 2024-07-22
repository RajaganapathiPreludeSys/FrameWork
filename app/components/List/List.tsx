import React from 'react'
import {FlatList, View, Text} from 'react-native'

import {DefaultItem} from './DefaultItem'
import {styles} from './List.style'

export interface ListItem {
    id: string
    title: string
}

export interface ListProps {
    data: ListItem[]
    type: 'vertical' | 'horizontal' | 'sectioned' | 'grid'
    theme?: {
        itemBackgroundColor?: string
        itemTextColor?: string
        sectionHeaderBackgroundColor?: string
        sectionHeaderTextColor?: string
    }
    renderItem?: (item: ListItem) => JSX.Element
}

export const List: React.FC<ListProps> = ({data, type, theme, renderItem}) => {
    const keyExtractor = (item: ListItem): string => item.id

    const sectionHeader =
    type === 'sectioned'
        ? (): JSX.Element => (
            <View
                style={[
                    styles.header,
                    {backgroundColor: theme?.sectionHeaderBackgroundColor},
                ]}
            >
                <Text style={{color: theme?.sectionHeaderTextColor}}>
              Section Header
                </Text>
            </View>
        )
        : undefined

    return (
        <FlatList
            data={data}
            renderItem={({item}): JSX.Element =>
                renderItem ? (
                    renderItem(item)
                ) : (
                    <DefaultItem item={item} theme={theme}/>
                )
            }
            keyExtractor={keyExtractor}
            horizontal={type === 'horizontal'}
            numColumns={type === 'grid' ? 2 : 1}
            ItemSeparatorComponent={() => <View style={styles.separator}/>}
            ListHeaderComponent={sectionHeader}
        />
    )
}
