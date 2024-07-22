import {StyleSheet} from 'react-native'

import {Theme} from '../themes/themes'

export const styles = (theme: Theme) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: theme.screens.paddingHorizontal,
        paddingVertical: theme.screens.paddingVertical,
        backgroundColor: theme.screens.backgroundColor,
    },
    topSection: {
        alignItems: 'center',
    },
    welcomeText: {
        marginTop: 5,
        marginBottom: 40,
    },
    bottomSection: {
        alignItems: 'center',
    },
    socialButtons: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
    },
    registerText: {
        color: theme.button.backgroundColor,
    },
    registerContainer: {
        marginTop: 30,
    },
    socialButton: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginHorizontal: 10,
    },
    /// /
    loginButton: {
        backgroundColor: '#007bff',
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 5,
        marginBottom: 10,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
   
})
