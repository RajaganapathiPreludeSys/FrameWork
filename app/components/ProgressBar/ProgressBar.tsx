import React from 'react'
import {View} from 'react-native'

import {styles} from './ProgressBar.style'

interface Theme {
    primaryColor: string
}

interface ProgressBarProps {
    progress: number
    theme?: Theme
}

export const ProgressBar: React.FC<ProgressBarProps> = ({progress, theme}) => {
    const primaryColor = theme?.primaryColor || '#007bff'

    return (
        <View style={styles.container}>
            <View style={[styles.progressBar, {width: `${progress * 100}%`, backgroundColor: primaryColor}]}/>
        </View>
    )
}
