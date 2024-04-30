import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from '../components/ImageSlider';
import BodyParts from '../components/BodyParts';

export default function Home() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <StatusBar style="dark" />

      {/* Headline and avatar */}
      <View style={styles.headlineContainer}>
        <View style={styles.headlineTextContainer}>
            <Text style={styles.headlineText}>
                READY TO
            </Text>
            <Text style={[styles.headlineText, styles.headlineTextAccent]}>
                WORKOUT
            </Text>
        </View>

        <View style={styles.avatarContainer}>
            <Image 
                source={require('../assets/images/avatar.png')}
                style={styles.avatar}
            />
            <View style={styles.notificationIcon}>
                <Ionicons name="notifications" size={hp(3)} color="gray" />
            </View>
        </View>
      </View>

      {/* Image slider */}
      <View style={styles.sliderContainer}>
        <ImageSlider />
      </View>

      {/* Body parts list */}
      <View style={styles.bodyPartsContainer}>
        <BodyParts />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 30,
  },
  headlineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  headlineTextContainer: {
    flexDirection: 'column',
    spacing: 2,
  },
  headlineText: {
    fontSize: hp(4.5),
    fontWeight: 'bold',
    color: '#707070', // Adjusted to a generic neutral shade
  },
  headlineTextAccent: {
    color: '#ff3b30', // Adjusted to a rose accent color
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    spacing: 2,
  },
  avatar: {
    height: hp(6),
    width: hp(6),
    borderRadius: hp(3), // Makes the image rounded
  },
  notificationIcon: {
    backgroundColor: '#f0f0f0',
    borderRadius: hp(2.75),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#d3d3d3',
    height: hp(5.5),
    width: hp(5.5),
  },
  sliderContainer: {
    flex: 1,
    marginTop: 20,
  },
  bodyPartsContainer: {
    flex: 1.4,
  }
});
