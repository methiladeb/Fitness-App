import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { fetchExercisesByBodypart } from '../api/exerciseDB';
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExerciseList from '../components/ExerciseList';

export default function Exercises() {
    const router = useRouter();
    const [exercises, setExercises] = useState([]);
    const item = useLocalSearchParams(); // Retrieves search parameters from router

    useEffect(() => {
        if (item) getExercises(item.name);
    }, [item]);

    const getExercises = async (bodypart) => {
        let data = await fetchExercisesByBodypart(bodypart);
        setExercises(data);
    }

    return (
        <ScrollView style={styles.container}>
            <StatusBar style="light" />
            <Image 
                source={item.image}
                style={styles.image}
            />

            {/* Navigation back button */}
            <TouchableOpacity
                onPress={() => router.back()}
                style={styles.backButton}
            >
                <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
            </TouchableOpacity>

            {/* List of exercises */}
            <View style={styles.exercisesContainer}>
                <Text style={styles.headerText}>
                    {item.name} exercises
                </Text>
                <View style={styles.exerciseListContainer}>
                    <ExerciseList data={exercises} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: wp(100),
        height: hp(45),
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    backButton: {
        backgroundColor: '#f43f5e',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
        borderRadius: 100,
        height: hp(5.5),
        width: hp(5.5),
        marginTop: hp(7),
        marginLeft: wp(4),
    },
    exercisesContainer: {
        marginHorizontal: wp(4),
        marginTop: hp(4),
        marginBottom: hp(1),
    },
    headerText: {
        fontSize: hp(3),
        fontWeight: 'bold',
        color: '#707070',
        marginBottom: hp(3),
    },
    exerciseListContainer: {
        marginBottom: hp(10),
    }
});
