import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { bodyParts } from '../constants/Index';
import { fetchExercisesByBodyPart } from '../api/exerciseDB';

export default function Exercises() {
    const router = useRouter();
    //const [exercises, setExercises] = useState([]);
    const item = useLocalSearchParams();
    console.log('got item: ', item);

    useEffect(()=> {
      if(item) getExercises(item.name);
    },[item]);
  
  const getExercises = async(bodypart)=> {
    let data = await fetchExercisesByBodyPart(bodypart);
    console.log('got data: ', item);
    //setExercises(data);
  }
  return (
    <View className="mt-20">
      <Text>Exercises</Text>
      <TouchableOpacity onPress={()=> router.back()}>
        <Text>go back</Text>
      </TouchableOpacity>
    </View>
  )
}