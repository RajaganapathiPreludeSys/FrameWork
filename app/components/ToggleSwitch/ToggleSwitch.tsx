import React from 'react'
import {TouchableOpacity, View} from 'react-native'

import {styles} from './ToggleSwitch.style'

interface ToggleSwitchProps {
    value: boolean
    onValueChange: (value: boolean) => void
    theme?: {
        activeTrackColor?: string
        inactiveTrackColor?: string
        thumbColor?: string
    }
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({value, onValueChange, theme}) => {
    const toggleSwitch = (): void => {
        onValueChange(!value)
    }

    const containerStyle = [
        styles.container,
        {backgroundColor: value ? theme?.activeTrackColor || 'blue' : theme?.inactiveTrackColor || 'gray'},
    ]

    const thumbStyle = [
        styles.thumb,
        {backgroundColor: theme?.thumbColor || 'white'},
        value ? styles.active : null,
    ]

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={toggleSwitch}>
            <View style={containerStyle}>
                <View style={thumbStyle}/>
            </View>
        </TouchableOpacity>
    )
}
