import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Image } from 'expo-image';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';

function ExerciseList({ data }) {
    const router = useRouter();
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                numColumns={2}
                keyExtractor={exercise => exercise.name}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item, index }) => <WorkoutDetail router={router} index={index} item={item} />}
            />
        </View>
    );
}

const WorkoutDetail = ({ item, router, index }) => {
    return (
        <Animated.View entering={FadeInDown.duration(400).delay(index * 200).springify()}>
            <TouchableOpacity
                onPress={() => router.push({ pathname: '/exerciseDetails', params: item })}
                style={{ padding: 12, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                <View style={{ backgroundColor: 'white', elevation: 4, borderRadius: 25, width: wp(44), height: wp(52) }}>
                    <Image
                        source={{ uri: item.gifUrl }}
                        style={{ width: '100%', height: '100%', borderRadius: 25 }}
                        contentFit="cover"
                    />
                </View>

                <Text
                    style={{ fontSize: hp(1.7), color: '#4A5568', fontWeight: 'bold', marginTop: 8 }}
                >
                    {item?.name.length > 20 ? `${item.name.substring(0, 20)}...` : item.name}
                </Text>
            </TouchableOpacity>
        </Animated.View>
    );
}

export default ExerciseList;
