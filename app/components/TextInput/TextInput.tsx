import React, {useState} from 'react'
import {
    TextInput as RNTextInput,
    TextInputProps,
    Text,
    View,
    TouchableOpacity,
} from 'react-native'

import {HidePasswordIcon} from '../../assets/icons/svg/HidePasswordIcon'
import {useTheme} from '../../contexts/ThemeContext'

import {styles} from './TextInput.style'

interface CustomTextInputProps extends TextInputProps {
    multiline?: boolean
    secureTextEntry?: boolean
    error?: string
    icon?: JSX.Element
    rightIcon?: JSX.Element
}

export const TextInput: React.FC<CustomTextInputProps> = ({
    multiline,
    secureTextEntry,
    error,
    icon,
    rightIcon,
    ...rest
}) => {
    const {theme} = useTheme()

    const themedStyles = styles(theme)

    const borderColor = error
        ? theme?.input.errorColor
        : theme?.input.borderColor

    const [isPasswordVisible, setPasswordVisible] = useState(false)
    const togglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible)
    }
    return (
        <View style={themedStyles.container}>
            {icon && <View style={themedStyles.iconContainer}>{icon}</View>}
            <RNTextInput
                style={[
                    themedStyles.input,
                    multiline && themedStyles.textArea,
                    {borderColor},
                ]}
                secureTextEntry={!isPasswordVisible ? secureTextEntry : false}
                placeholderTextColor={theme.input.placeholderTextColor}
                {...rest}
            />
            {secureTextEntry && (
                <TouchableOpacity
                    style={themedStyles.rightIconContainer}
                    onPress={togglePasswordVisibility}
                >
                    <HidePasswordIcon visible={isPasswordVisible}/>
                </TouchableOpacity>
            )}
            {rightIcon && (
                <View style={themedStyles.rightIconContainer}>{rightIcon}</View>
            )}
            {error && <Text style={themedStyles.errorText}>{error}</Text>}
        </View>
    )
}
