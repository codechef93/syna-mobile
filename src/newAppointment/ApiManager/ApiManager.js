const BASE_URL = "https://www.synaclinic.org/"
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import Api_Manager from '../../auth/ApiManager/ApiManager'

import React from 'react'
export default class Apimanager{
 async createNewAppointment(obj){
   console.log('obj')
   console.log(obj)
    try {
      var token =  await AsyncStorage.getItem('token')
      const response = await axios.post(`${BASE_URL}patients/appointments`,obj, { headers: { "Authorization": `Bearer ${token}` } });
      // console.log(response.data);
      return response
    } catch (error) {
     return console.log(error)
    }
}
async getAppointment(id){
  const response = await new Api_Manager().getNextAppointments(id)
  return response
}
}