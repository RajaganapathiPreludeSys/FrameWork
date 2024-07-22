import React from 'react'
import {View, Text} from 'react-native'

import {styles} from './Card.style'

interface CardProps {
    title: string
    content: string
    theme?: {
        cardBackgroundColor?: string
        titleColor?: string
        contentColor?: string
    }
}

export const Card: React.FC<CardProps> = ({title, content, theme}) => {
    const cardStyle = [
        styles.card,
        {backgroundColor: theme?.cardBackgroundColor || '#ffffff'},
    ]
    const titleTextStyle = [
        styles.title,
        {color: theme?.titleColor || '#000000'},
    ]
    const contentTextStyle = [
        styles.content,
        {color: theme?.contentColor || '#000000'},
    ]

    return (
        <View style={cardStyle}>
            <Text style={titleTextStyle}>{title}</Text>
            <Text style={contentTextStyle}>{content}</Text>
        </View>
    )
}
