// Import React and necessary components from React Native and other libraries
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

// Index component that serves as the main entry point of the app
export default function Index() {
    const router = useRouter(); // Hook for navigation routing
    
    return (
        <View className="flex-1 flex justify-end">
            <StatusBar style="light" />

            {/* Background image */}
            <Image className="h-full w-full absolute" source={require('../assets/images/welcome.png')} />
            
            {/* Gradient overlay */}
            <LinearGradient
                colors={['transparent', '#18181b']}
                style={{width: wp(100), height: hp(70)}}
                start={{x: 0.5, y: 0}}
                end= {{x: 0.5, y: 0.8}}
                className="flex justify-end pb-12 space-y-8"
            >

                {/* Animated text view */}
                <Animated.View entering={FadeInDown.delay(100).springify()} className="flex items-center">
                    <Text style={{fontSize: hp(5)}} className="text-white font-bold tracking-wide">
                        Best <Text className="text-rose-500">Workouts</Text>
                    </Text>
                    <Text style={{fontSize: hp(5)}} className="text-white font-bold tracking-wide">
                        For You
                    </Text>
                </Animated.View>

                {/* Sign In Button */}
                <Animated.View entering={FadeInDown.delay(200).springify()}>
                    <TouchableOpacity
                        onPress={() => router.push('SignIn')}
                        style={{height: hp(7), width: wp(80)}}
                        className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
                    >
                        <Text style={{fontSize: hp(3)}} className="text-white font-bold tracking-widest">
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </Animated.View>

                {/* Sign Up Button */}
                <Animated.View entering={FadeInDown.delay(300).springify()}>
                    <TouchableOpacity
                        onPress={() => router.push('SignUp')}
                        style={{height: hp(7), width: wp(80)}}
                        className="bg-green-500 mt-4 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200"
                    >
                        <Text style={{fontSize: hp(3)}} className="text-white font-bold tracking-widest">
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </Animated.View>
            </LinearGradient>
        </View>
    );
}
