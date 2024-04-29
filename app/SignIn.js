// Import necessary modules from React and React Native
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
// Import the Firebase configuration
import firebase from '../firebaseConfig';

// SignIn component definition
const SignIn = ({ navigation }) => {
  // State variables for email, password, and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle sign-in using Firebase authentication
  const handleSignIn = async () => {
    try {
      // Attempt to sign in with email and password
      await firebase.auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Home');  // Navigate to the Home screen on successful sign-in
    } catch (error) {
      setError(error.message);  // Display error message from Firebase if sign-in fails
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail} // Update state on change
        style={styles.input}
      />

      {/* Text input for user password */}
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry  // Hides password input
        style={styles.input}
      />
      <Button title="Sign In" onPress={handleSignIn} />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

// StyleSheet for component styling
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

// Export the SignIn component
export default SignIn;
