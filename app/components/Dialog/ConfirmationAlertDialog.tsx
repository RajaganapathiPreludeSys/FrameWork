import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import {styles} from './ConfirmationAlertDialog.style'

interface ConfirmationAlertDialogProps {
    title: string
    message: string
    onConfirm: () => void
    onCancel: () => void
    theme: {
        containerBackgroundColor: string
        titleTextColor: string
        messageTextColor: string
        confirmButtonBackgroundColor: string
        confirmButtonTextColor: string
        cancelButtonBackgroundColor: string
        cancelButtonTextColor: string
    }
}

export const ConfirmationAlertDialog: React.FC<ConfirmationAlertDialogProps> = ({
    title,
    message,
    onConfirm,
    onCancel,
    theme,
}) => {
    const {
        containerBackgroundColor,
        titleTextColor,
        messageTextColor,
        confirmButtonBackgroundColor,
        confirmButtonTextColor,
        cancelButtonBackgroundColor,
        cancelButtonTextColor,
    } = theme

    return (
        <View style={[styles.container, {backgroundColor: containerBackgroundColor}]}>
            <Text style={[styles.title, {color: titleTextColor}]}>{title}</Text>
            <Text style={[styles.message, {color: messageTextColor}]}>{message}</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: cancelButtonBackgroundColor}]}
                    onPress={onCancel}
                >
                    <Text style={[styles.buttonText, {color: cancelButtonTextColor}]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, {backgroundColor: confirmButtonBackgroundColor}]}
                    onPress={onConfirm}
                >
                    <Text style={[styles.buttonText, {color: confirmButtonTextColor}]}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
