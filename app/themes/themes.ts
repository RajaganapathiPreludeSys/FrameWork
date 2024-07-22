import {colors} from './colors'

export interface Theme {
    input: {
        borderRadius: number
        errorColor: string
        borderColor: string
        backgroundColor: string
        placeholderTextColor: string
        paddingHorizontal: number
        paddingVertical: number
    }
    divider: {
        color: string
    }
    screens: {
        backgroundColor: string
        paddingHorizontal: number
        paddingVertical: number
    }
    button: {
        backgroundColor: string
    }
}
export const themes: Record<string, Theme> = {
    light: {
        input: {
            borderRadius: 14,
            errorColor: 'red',
            borderColor: colors.border_color,
            backgroundColor: colors.border_color,
            placeholderTextColor: colors.gray_2,
            paddingHorizontal: 15,
            paddingVertical: 15,
        },
        screens: {
            backgroundColor: colors.white_color,
            paddingHorizontal: 30,
            paddingVertical: 30,
        },
        divider: {
            color: colors.gray_3,
        },
        button: {
            backgroundColor: colors.purple_linear,
        },
    },
}
