import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    content: {
        fontSize: 16,
    },
})
