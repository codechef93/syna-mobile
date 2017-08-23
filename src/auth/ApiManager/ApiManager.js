
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios'
const BASE_URL = "https://www.synaclinic.org/"
import React from 'react'
export default class Apimanager {
  async getUser(auth) {
    try {
      const response = await axios.post(`${BASE_URL}login/patient/login`, auth);
      if (response.data) {
        return response.data.user
      } else {
        return null
      }
    } catch (error) {
      console.log('ERROR Login: '+error);
      return console.log(error)
    }
  }

  async getServices() {
    //    console.log(config.url+"url")
    try {
      var token = await AsyncStorage.getItem('token')
      const response = await axios.get(`${BASE_URL}patients/services`, { headers: { "Authorization": `Bearer ${token}` } });
      // console.log(response,"response");
      return response.data
    } catch (error) {
      return console.log(error)
    }
  }
  async getNextAppointments(id) {
    // console.log(id+"url")
    try {
      var token = await AsyncStorage.getItem('token')
      const response = await axios.get(`${BASE_URL}patients/appointments/${id}/nextappointment`, { headers: { "Authorization": `Bearer ${token}` } });
      // console.log(response,"response");
      return response.data
    } catch (error) {
      return console.log(error)
    }
  }
  async getLastAppointments(id) {
    // console.log(BASE_URL+"url")
    try {
      var token = await AsyncStorage.getItem('token')
      const response = await axios.get(`${BASE_URL}patients/appointments/${id}/lastappointment`, { headers: { "Authorization": `Bearer ${token}` } });
      // console.log(response,"response");
      return response.data
    } catch (error) {
      return console.log(error)
    }
  }
  async getTreatments(id) {
    //    console.log(config.url+"url")
    try {
      var token = await AsyncStorage.getItem('token')
      const response = await axios.get(`${BASE_URL}patients/treatments/${id}`, { headers: { "Authorization": `Bearer ${token}` } });
      // console.log(response,"response");
      return response.data
    } catch (error) {
      return console.log(error)
    }
  }
}