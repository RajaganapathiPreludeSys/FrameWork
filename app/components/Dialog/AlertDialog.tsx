import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import {styles} from './AlertDialog.style'

interface AlertDialogProps {
    type: 'basic' | 'error' | 'success'
    title: string
    message: string
    onConfirm?: () => void
    onDismiss?: () => void
    theme: {
        basic: {
            containerBackgroundColor: string
            titleTextColor: string
            messageTextColor: string
            buttonBackgroundColor: string
            buttonTextColor: string
        }
        error: {
            containerBackgroundColor: string
            titleTextColor: string
            messageTextColor: string
            buttonBackgroundColor: string
            buttonTextColor: string
        }
        success: {
            containerBackgroundColor: string
            titleTextColor: string
            messageTextColor: string
            buttonBackgroundColor: string
            buttonTextColor: string
        }
    }
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
    type,
    title,
    message,
    onConfirm,
    onDismiss,
    theme,
}) => {
    const {
        containerBackgroundColor,
        titleTextColor,
        messageTextColor,
        buttonBackgroundColor,
        buttonTextColor,
    } = theme[type]

    const onPress = onConfirm || onDismiss
    const buttonText = type === 'error' || type === 'success' ? 'Dismiss' : 'OK'

    return (
        <View style={[styles.container, {backgroundColor: containerBackgroundColor}]}>
            <Text style={[styles.title, {color: titleTextColor}]}>{title}</Text>
            <Text style={[styles.message, {color: messageTextColor}]}>{message}</Text>
            {onPress && (
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: buttonBackgroundColor}]}
                    onPress={onPress}
                >
                    <Text style={[styles.buttonText, {color: buttonTextColor}]}>{buttonText}</Text>
                </TouchableOpacity>
            )}
        </View>
    )
}
