// Typography.tsx

import React from 'react'
import {Text, TextProps, TextStyle} from 'react-native'

import {typographyStyles, TypographyStyles} from './fonts'

interface TypographyProps extends TextProps {
    variant: keyof TypographyStyles
    style?: TextStyle
}

export const Typography: React.FC<TypographyProps> = ({
    variant,
    style,
    ...rest
}) => {
    const textStyles = typographyStyles[variant]

    return (
        <Text style={[textStyles, style]} {...rest}>
            {rest.children}
        </Text>
    )
}
