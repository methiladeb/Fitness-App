import axios from 'axios';
import { rapidApiKey } from '../constants'; // Importing the API key from constants

const baseUrl = 'https://exercisedb.p.rapidapi.com';

// Function to perform API calls with axios
const apiCall = async (url, params)=>{
    try{
        const options = {
            method: 'GET', 
            url,
            params,
            headers: {
                    'X-RapidAPI-Key': rapidApiKey,
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
            
        };
        const response = await axios.request(options);
        return response.data;
    }catch(err){
        console.log('error: ', err.message);
    }
}

// Fetches exercises by body part using the API call function
export const fetchExercisesByBodypart = async (bodyPart)=>{
    let data = await apiCall(baseUrl+`/exercises/bodyPart/${bodyPart}`);
    return data;
}