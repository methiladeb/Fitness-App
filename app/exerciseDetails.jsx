import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Anticons from 'react-native-vector-icons/AntDesign';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function ExerciseDetails() {
    const item = useLocalSearchParams();
    const router = useRouter();

    return (
        <View style={styles.flexContainer}>
            <View style={styles.imageContainer}>
                <Image  
                    source={{uri: item.gifUrl}}
                    style={styles.image}
                />
            </View>

            <TouchableOpacity 
                onPress={() => router.back()}
                style={styles.closeButton}
            >
                <Anticons name="closecircle" size={hp(4.5)} color="#f43f5e" />
            </TouchableOpacity>

            {/* Details */}
            <ScrollView 
                style={styles.detailsContainer}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContainer}
            >
                <Animated.Text
                    entering={FadeInDown.duration(300).springify()}
                    style={styles.mainText}
                >
                    {item.name}
                </Animated.Text>
                <DetailsText
                    label="Equipment"
                    content={item?.equipment}
                />
                <DetailsText
                    label="Secondary Muscles"
                    content={item?.secondaryMuscles}
                />
                <DetailsText
                    label="Target"
                    content={item?.target}
                />
                <Instructions instructions={item.instructions} />
            </ScrollView>
        </View>
    );
}

const DetailsText = ({ label, content }) => (
    <Animated.Text
        entering={FadeInDown.delay(100).duration(300).springify()}
        style={styles.subText}
    >
        {label} <Text style={styles.boldText}>{content}</Text>
    </Animated.Text>
);

const Instructions = ({ instructions }) => (
    instructions?.split(',').map((instruction, index) => (
        <Animated.Text
            entering={FadeInDown.delay((index + 5) * 100).duration(300).springify()}
            key={index}
            style={styles.instructionText}
        >
            {instruction}
        </Animated.Text>
    ))
);

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1
    },
    imageContainer: {
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: { height: 0, width: 0 },
        backgroundColor: 'white',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    image: {
        width: wp(100),
        height: wp(100),
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    closeButton: {
        position: 'absolute',
        right: wp(2),
        marginTop: hp(2),
        borderRadius: 100,
        backgroundColor: 'transparent'
    },
    detailsContainer: {
        marginHorizontal: wp(4),
        marginTop: hp(3),
    },
    contentContainer: {
        paddingBottom: 60,
    },
    mainText: {
        fontSize: hp(3.5),
        fontWeight: 'bold',
        color: '#404040',
        marginBottom: hp(2),
    },
    subText: {
        fontSize: hp(2),
        color: '#606060',
        marginBottom: hp(1),
    },
    boldText: {
        fontWeight: 'bold',
        color: '#404040',
    },
    instructionText: {
        fontSize: hp(1.7),
        color: '#404040',
    }
});
