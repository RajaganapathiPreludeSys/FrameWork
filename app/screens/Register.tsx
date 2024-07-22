import React from 'react'
import {View, Text, TextInput, TouchableOpacity, StyleSheet, CheckBox} from 'react-native'

import {Checkboxes} from '../components/Checkboxes'

const RegisterScreen: React.FC = () => {
    const [isSelected, setSelection] = React.useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <Text style={styles.greetingText}>Hi</Text>
                <Text style={styles.welcomeText}>Welcome</Text>
                <TextInput
                    style={styles.input}
                    placeholder="First Name"
                    autoCapitalize="words"
                    autoCompleteType="name"
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Last Name"
                    autoCapitalize="words"
                    autoCompleteType="name"
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCompleteType="email"
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    autoCompleteType="password"
                    autoCapitalize="none"
                />
                <View style={styles.checkboxContainer}>

                    <Checkboxes
                        options={[
                            {label: 'Option 1', value: 'option1'},

                        ]}
                        selectedValue={'option1'}
                        onValueChange={setSelection}
                        mode="single"
                        style={styles.checkbox}
                    />
                    <Text style={styles.checkboxText}>Remember me</Text>
                </View>
            </View>
            <View style={styles.bottomSection}>
                <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.orText}>or</Text>
                <View style={styles.socialButtons}>
                    <TouchableOpacity style={styles.socialButton}>
                        <Text style={styles.socialButtonText}>G</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Text style={styles.socialButtonText}>F</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.registerText}>Don't have an account? Register here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: '#f0f0f0',
    },
    topSection: {
        alignItems: 'center',
        marginTop: 50,
    },
    greetingText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        width: '100%',
        height: 40,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginLeft: 'auto',
        marginBottom: 10,
    },
    checkbox: {
        alignSelf: 'center',
    },
    checkboxText: {
        marginLeft: 10,
    },
    bottomSection: {
        alignItems: 'center',
    },
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
    orText: {
        marginVertical: 10,
    },
    socialButtons: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    socialButton: {
        backgroundColor: '#ccc',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginHorizontal: 10,
    },
    socialButtonText: {
        fontSize: 20,
    },
    registerText: {
        marginTop: 10,
        color: '#007bff',
    },
})

export default RegisterScreen
