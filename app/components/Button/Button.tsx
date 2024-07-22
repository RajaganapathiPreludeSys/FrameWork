import PropTypes from 'prop-types'
import React from 'react'
import {TouchableOpacity, Text, View, StyleProp, ViewStyle} from 'react-native'

import {styles} from './Button.style'

interface ButtonProps {
    title: string
    onPress: () => void
    style?: StyleProp<ViewStyle>
    theme?: {
        colors: {
            primary: string
            buttonText: string
        }
    }
    icon?: React.ReactNode
    type?: 'regular' | 'icon' | 'outline' | 'rounded'
}

export const Button: React.FC<ButtonProps> = ({title, onPress, style, theme, icon, type = 'regular'}) => {
    const buttonStyles = [styles.button]
    const textStyles = [styles.text]

    if (type === 'outline' && theme) {
        buttonStyles.push({borderColor: theme.colors.primary, borderWidth: 1, backgroundColor: 'transparent'})
        textStyles.push({color: theme.colors.primary})
    } else if (type === 'rounded') {
        buttonStyles.push({borderRadius: 25})
    }

    return (
        <TouchableOpacity style={[buttonStyles, style]} onPress={onPress}>
            <View style={styles.buttonContent}>
                {icon && <View style={styles.icon}>{icon}</View>}
                <Text style={[textStyles]}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    style: PropTypes.object,
    theme: PropTypes.object,
    icon: PropTypes.element,
    type: PropTypes.oneOf(['regular', 'icon', 'outline', 'rounded']),
}

Button.defaultProps = {
    theme: {
        colors: {
            primary: '#007bff',
            buttonText: '#fff',
        },
    },
    type: 'regular',
}
