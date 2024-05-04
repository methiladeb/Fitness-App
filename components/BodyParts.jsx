import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { bodyParts } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown } from 'react-native-reanimated';

function BodyPartsList() {
    const navigation = useRouter();
    return (
        <View style={{ marginHorizontal: 16 }}>
            <Text style={{ fontSize: hp(3), fontWeight: '600', color: '#4B5563' }}>
                Exercises
            </Text>

            <FlatList
                data={bodyParts}
                numColumns={2}
                keyExtractor={bodyPart => bodyPart.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item, index }) => <ExerciseCard navigation={navigation} index={index} bodyPart={item} />}
            />
        </View>
    )
}

const ExerciseCard = ({ bodyPart, navigation, index }) => {
    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index * 200).springify()}>
            <TouchableOpacity
                onPress={() => navigation.push({ pathname: '/exercises', params: bodyPart })}
                style={{ width: wp(44), height: wp(52), marginBottom: 16 }}
                className="items-end px-4">
                <Image
                    source={bodyPart.image}
                    resizeMode='cover'
                    style={{ width: wp(44), height: wp(52), borderRadius: 35, position: 'absolute' }}
                />
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.9)']}
                    style={{ width: wp(44), height: hp(15), borderRadius: 35 }}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    className="absolute bottom-0"
                />

                <Text
                    style={{ fontSize: hp(2.3), color: '#FFFFFF', fontWeight: '600', textAlign: 'center', letterSpacing: 1 }}
                    className="w-full"
                >
                    {bodyPart?.name}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    );
}

export default BodyPartsList;
