import React from 'react'
import {View, Text} from 'react-native'

import {styles} from './Avatar.style'

interface AvatarProps {
    size?: number
    backgroundColor?: string
    textColor?: string
    text: string
    theme: {
        avatarSize: number
        avatarBackgroundColor: string
        avatarTextColor: string
    }
}

export const Avatar: React.FC<AvatarProps> = ({
    size = 50,
    backgroundColor,
    textColor,
    text,
    theme,
}) => {
    const {avatarSize, avatarBackgroundColor, avatarTextColor} = theme

    return (
        <View
            style={[
                styles.avatarContainer,
                {
                    width: size || avatarSize,
                    height: size || avatarSize,
                    backgroundColor: backgroundColor || avatarBackgroundColor,
                },
            ]}
        >
            <Text style={[styles.avatarText, {color: textColor || avatarTextColor}]}>
                {text}
            </Text>
        </View>
    )
}
