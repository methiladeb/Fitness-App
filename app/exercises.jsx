import { View, Text, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { bodyParts } from '../constants/Index';
import { fetchExercisesByBodyPart } from '../api/exerciseDB';
import {demoExercises} from '../constants/Index';
import {StatusBar} from 'expo-status-bar';
import {Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExerciseList from '../components/ExerciseList';
import {ScrollView} from 'react-native-virtualized-view';



export default function Exercises() {
    const router = useRouter();
    const [exercises, setExercises] = useState([]);
    const item = useLocalSearchParams();
    //console.log('got item: ', item);

    useEffect(()=> {
      if(item) getExercises(item.name);
    },[item]);
  
  const getExercises = async(bodypart)=> {
    let data = await fetchExercisesByBodyPart(bodypart);
    //console.log('got data: ', item);
    setExercises(data);
  }
  return (
    <ScrollView>
      <StatusBar style = "light" />
      <Image
          source = {item.image}
          style = {{width: wp(100), height: hp(45)}} 
          className = "rounded-b-[40px]"
      />
      <TouchableOpacity
          onPress={()=> router.back()}
          className = "bg-rose-500 mx-4 absoulute flex justify-center items-center pr-1 rounded-full"
          style = {{height: hp(5.5), width: hp(5.5), marginTop: hp(7)}}
      >
            
            <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>

      {/*exercies */}
      <View className = "mx-4 space-y-3 mt-4">
          <Text styles = {{fontsize: hp(3)}} className = "font-semibold text-neutral-700">
                {item.name} excerises
          </Text> 
          <View className="mb-10">
            <ExerciseList data={exercises} />
          </View>
      </View>

    </ScrollView>
  )
}