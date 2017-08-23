import React, {useState} from 'react';
import {connect} from 'react-redux'
import Header from '../components/Header';
import PhoneInput from '../components/PhoneInput';
import {Container, SafeAreaView, Text, Touchable} from '../../common';
import {StyleSheet} from 'react-native';
/* =============================================================================
<PhoneInputScreen />
============================================================================= */
const PhoneInputScreen = ({navigation}) => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const _handleSubmit = () => {
    if (phone === '') {
      setError('Please enter number');
      
    } else {
      navigation.navigate('PatientCodeInput',{phone:phone});
      setError('');
    }
  };

  return (
    <SafeAreaView>
      <Container backgroundColor="#fff">
        <Header
          label="What's your number?"
          placeholder="insert your mobile number"
        />

        <PhoneInput
          value={phone}
          error={error}
          onChange={setPhone}
          onSubmit={_handleSubmit}
        />
            <Touchable style={styles.container} onPress={_handleSubmit}>
      <Text style={styles.text}>Next</Text>
    </Touchable>
      </Container>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#999',
    backgroundColor: '#000',
    margin: 30,

  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Noah-Bold',
  },
});

export default PhoneInputScreen 
