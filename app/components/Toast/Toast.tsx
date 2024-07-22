import React, {useEffect, useState} from 'react'
import {Text, Animated} from 'react-native'

import {styles} from './Toast.style'

interface ToastProps {
    message: string
    duration?: number
    theme?: {
        background: string
        text: string
    }
}

export const Toast: React.FC<ToastProps> = ({message, duration = 3000, theme = {background: '#333', text: '#fff'}}) => {
    const [fadeAnim] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start()

        const timer = setTimeout(() => {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }).start()
        }, duration)

        return (): void => clearTimeout(timer)
    }, [])

    return (
        <Animated.View style={[styles.container, {backgroundColor: theme.background, opacity: fadeAnim}]}>
            <Text style={[styles.message, {color: theme.text}]}>{message}</Text>
        </Animated.View>
    )
}
