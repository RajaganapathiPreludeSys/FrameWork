import {StyleSheet} from 'react-native'

import {fonts} from '../Typography/fonts'
import {Theme} from '../../themes/themes'

export const styles = (theme: Theme) => StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.input.borderColor,
        borderRadius: theme.input.borderRadius,
        paddingHorizontal: theme.input.paddingHorizontal,
        paddingVertical: theme.input.paddingVertical,
        backgroundColor: theme.input.backgroundColor,
        marginBottom: 16,
        overflow: 'hidden',
    },
    input: {
        flex: 1,
        backgroundColor: theme.input.backgroundColor,
        ...fonts.Text_Small_regular,
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    errorText: {
        color: 'red',
        marginTop: 5,
    },
    iconContainer: {
        marginRight: 10,
    },
    rightIconContainer: {
        position: 'absolute',
        right: 12,
        padding: 8,
    },

})
