import React from 'react'
import {View, ActivityIndicator} from 'react-native'

import {styles} from './LoadingIndicator.style'

interface LoadingIndicatorProps {
    indicatorColor?: string
    backgroundColor?: string
    size?: 'small' | 'large'
}

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
    indicatorColor = '#0000ff',
    backgroundColor = 'rgba(0, 0, 0, 0.3)',
    size = 'large',
}) => {
    return (
        <View style={[styles.container, {backgroundColor}]}>
            <ActivityIndicator size={size} color={indicatorColor}/>
        </View>
    )
}
