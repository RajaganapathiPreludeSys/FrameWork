import React from 'react'
import {View, Text, Image} from 'react-native'

import {styles} from './ImageCard.style'

interface ImageCardProps {
    title: string
    content: string
    imageUrl: string
    theme?: {
        cardBackgroundColor?: string
        titleColor?: string
        contentColor?: string
    }
}

export const ImageCard: React.FC<ImageCardProps> = ({title, content, imageUrl, theme}) => {
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
            <Image source={{uri: imageUrl}} style={styles.image}/>
            <Text style={titleTextStyle}>{title}</Text>
            <Text style={contentTextStyle}>{content}</Text>
        </View>
    )
}
