import React from 'react'
import {Modal, View, Image, TouchableOpacity} from 'react-native'

import {styles} from './ImageModal.style'

interface Theme {
    modalBackgroundColor: string
    modalHeight?: number
}

interface ImageModalProps {
    imageUrl: string
    isVisible: boolean
    onClose: () => void
    theme?: Theme
}

export const ImageModal: React.FC<ImageModalProps> = ({
    imageUrl,
    isVisible,
    onClose,
    theme,
}) => {
    const modalBackgroundColor =
    theme?.modalBackgroundColor || 'rgba(0, 0, 0, 0.5)'
    const modalHeight = theme?.modalHeight || 300

    return (
        <Modal
            animationType="slide"
            transparent
            visible={isVisible}
            onRequestClose={onClose}
        >
            <TouchableOpacity
                style={[styles.container, {backgroundColor: modalBackgroundColor}]}
                activeOpacity={1}
                onPress={onClose}
            >
                <View style={[styles.modal, {height: modalHeight}]}>
                    <Image
                        source={{uri: imageUrl}}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>
            </TouchableOpacity>
        </Modal>
    )
}
