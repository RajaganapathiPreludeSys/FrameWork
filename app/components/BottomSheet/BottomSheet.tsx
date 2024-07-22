import React from 'react'
import {Modal, View, TouchableOpacity} from 'react-native'

import {styles} from './BottomSheet.style'

interface Theme {
    overlayColor: string
    sheetBackgroundColor: string
}

interface BottomSheetProps {
    isVisible: boolean
    onClose: () => void
    content: React.ReactNode
    theme?: Theme
}

export const BottomSheet: React.FC<BottomSheetProps> = ({
    isVisible,
    onClose,
    content,
    theme,
}) => {
    const overlayColor = theme?.overlayColor || 'rgba(0, 0, 0, 0.5)'
    const sheetBackgroundColor = theme?.sheetBackgroundColor || '#fff'

    return (
        <Modal
            animationType="slide"
            transparent
            visible={isVisible}
            onRequestClose={onClose}
        >
            <TouchableOpacity
                style={[styles.overlay, {backgroundColor: overlayColor}]}
                activeOpacity={1}
                onPress={onClose}
            >
                <View style={[styles.sheet, {backgroundColor: sheetBackgroundColor}]}>
                    {content}
                </View>
            </TouchableOpacity>
        </Modal>
    )
}
