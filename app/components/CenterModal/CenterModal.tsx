import React from 'react'
import {Modal, View, TouchableOpacity} from 'react-native'

import {styles} from './CenterModal.style'

interface Theme {
    modalBackgroundColor: string
}

interface CenterModalProps {
    isVisible: boolean
    onClose: () => void
    content: React.ReactNode
    theme?: Theme
}

export const CenterModal: React.FC<CenterModalProps> = ({isVisible, onClose, content, theme}) => {
    const modalBackgroundColor = theme?.modalBackgroundColor || '#fff'

    return (
        <Modal
            animationType="slide"
            transparent
            visible={isVisible}
            onRequestClose={onClose}
        >
            <TouchableOpacity
                style={[styles.container, {backgroundColor: 'rgba(0, 0, 0, 0.5)'}]}
                activeOpacity={1}
                onPress={onClose}
            >
                <View style={[styles.modal, {backgroundColor: modalBackgroundColor}]}>
                    {content}
                </View>
            </TouchableOpacity>
        </Modal>
    )
}
