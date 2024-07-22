import React from 'react'
import {View, StyleSheet} from 'react-native'

import {useTheme} from '../../contexts/ThemeContext'

const styles = StyleSheet.create({
    divider: {
        flex: 1,
    },
})

export const Divider: React.FC = () => {
    const {theme} = useTheme()
    return (
        <View
            style={[
                styles.divider,
                {height: 1, backgroundColor: theme.divider.color},
            ]}
        />
    )
}
