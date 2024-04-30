// Importing React and React Native components/modules
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
// Import Firebase configuration
import firebase from '../firebaseConfig';

// SignUp component definition using functional component syntax
const SignUp = ({ navigation }) => {
    // State hooks for user email, password, and any sign-up errors
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Asynchronous function to handle user sign-up
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
                onChangeText={setEmail} // Update email in state on change
                style={styles.input}
            />

            {/* Text input for user password */}
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword} // Update password in state on change
                secureTextEntry // Hide password input
                style={styles.input}
            />

            {/* Button to trigger the sign-up process */}
            <Button title="Sign Up" onPress={handleSignUp} />

            {/* Display error message if any during sign-up */}
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
};

// StyleSheet for styling the component
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

// Export the SignUp component
export default SignUp;



