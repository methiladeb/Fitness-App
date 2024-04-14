import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import firebase from '../firebaseConfig';

const SignUp = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async () => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            navigation.navigate('Home'); // Navigate to the Home screen after successful sign-up
        } catch (error) {
            setError(error.message); // Display error message from Firebase if sign-up fails
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <Button title="Sign Up" onPress={handleSignUp} />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    input: {
        width: '100%',
        marginVertical: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
    },
    errorText: {
        color: 'red',
        marginTop: 10,
    },
});

export default SignUp;
