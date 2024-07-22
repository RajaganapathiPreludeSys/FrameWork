import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#333',
        borderRadius: 4,
        marginRight: 8,
    },
    checked: {
        backgroundColor: 'blue',
    },
    label: {
        fontSize: 16,
    },
})
