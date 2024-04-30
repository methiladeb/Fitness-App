import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

export default function Index() {
    const router = useRouter(); // Hook for navigation routing

    return (
        <View style={styles.container}>
            <StatusBar style="light" />

            {/* Background image */}
            <Image source={require('../assets/images/welcome.png')} style={styles.backgroundImage} />
            
            {/* Gradient overlay */}
            <LinearGradient
                colors={['transparent', '#18181b']}
                style={styles.gradient}
                start={{x: 0.5, y: 0}}
                end= {{x: 0.5, y: 0.8}}
            >
                {/* Animated text view */}
                <Animated.View entering={FadeInDown.delay(100).springify()} style={styles.centeredView}>
                    <Text style={styles.headerText}>
                        Best <Text style={styles.highlightText}>Workouts</Text>
                    </Text>
                    <Text style={styles.headerText}>
                        For You
                    </Text>
                </Animated.View>

                {/* Sign In Button */}
                <Animated.View entering={FadeInDown.delay(200).springify()} style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => router.push('SignIn')}
                        style={styles.signInButton}
                    >
                        <Text style={styles.buttonText}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </Animated.View>

                {/* Sign Up Button */}
                <Animated.View entering={FadeInDown.delay(300).springify()} style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={() => router.push('SignUp')}
                        style={styles.signUpButton}
                    >
                        <Text style={styles.buttonText}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'end'
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        position: 'absolute'
    },
    gradient: {
        width: wp(100),
        height: hp(70),
        justifyContent: 'flex-end'
    },
    centeredView: {
        alignItems: 'center',
        marginBottom: 30, // Space between text and buttons
    },
    headerText: {
        fontSize: hp(5),
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    highlightText: {
        color: '#f43f5e',
    },
    buttonContainer: {
        width: wp(80),
        alignSelf: 'center',
        marginBottom: 10,
    },
    signInButton: {
        height: hp(7),
        backgroundColor: '#f43f5e',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#e5e7eb'
    },
    signUpButton: {
        height: hp(7),
        backgroundColor: '#22c55e',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#e5e7eb',
        marginTop: 10,
    },
    buttonText: {
        fontSize: hp(3),
        color: 'white',
        fontWeight: 'bold',
        letterSpacing: 3,
    }
});
