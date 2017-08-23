import React, { useState } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { connect, useDispatch } from 'react-redux';

import Header from '../components/Header';
import CodeInput from '../components/CodeInput';
import { Container, Touchable, Text, SafeAreaView } from '../../common';
import { login as loginAction, setTreatments } from '../redux/actions';
import ApiManager from '../ApiManager/ApiManager';
import { getUser } from '../redux/selectors';
import { setAllServices } from '../../newAppointment/redux/actions'
import { setNextAppointment, setLastAppointment } from '../../appointment/redux/actions'
/* =============================================================================
<PatientCodeInputScreen />
============================================================================= */
const PatientCodeInputScreen = ({ login, route, setTreatments }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const _handleSubmit = () => {
    setLoading(true)
    var user = {}
    var id = ''
    new ApiManager().getUser({ phone: route.params.phone, code: code }).then(responceUser => {
      if (!responceUser) {
        setLoading(false)
        setError('Phone number or code is invalid');
        user = null
      } else {
        setError('');
        user = responceUser
        id = responceUser.code
      }
    }).then(() => {
      if (user) {
        var LastAppointment = user?.appointments?.length != 0 ? user.appointments.filter(appt => new Date(appt.apptDateTime) < new Date()) : null
        var NextAppointment = user?.appointments?.length != 0 ? user.appointments.filter(appt => new Date(appt.apptDateTime) >= new Date()) : null
        dispatch(setTreatments(user?.treatments?.length != 0 ? user.treatments : null))
        dispatch(setLastAppointment(LastAppointment && LastAppointment.length != 0 ? LastAppointment.sort((a, b) => new Date(b.apptDateTime) - new Date(a.apptDateTime)) : null))
        dispatch(setNextAppointment(NextAppointment && NextAppointment.length != 0 ? NextAppointment.sort((a, b) => new Date(b.apptDateTime) - new Date(a.apptDateTime)) : null))
        new ApiManager().getServices().then(services => {
          dispatch(setAllServices(services ? services : null))
          setLoading(false)
          login(user)
        }).catch(e => console.log(e))
      }
    }).catch(e => console.log(e))
  };

  return (
    <SafeAreaView>
      <Container backgroundColor="#fff">
        <Header
          label="What's your SYNA Patient Code?"
          placeholder="insert your patient code"
        />

        <CodeInput
          value={code}
          error={error}
          onChange={setCode}
          onSubmit={_handleSubmit}
        />
        <Touchable style={styles.container} onPress={_handleSubmit}>
      <Text style={styles.text}>Log in</Text>
    </Touchable>
        {loading ? <ActivityIndicator style={styles.activityIndicator} size={30} /> : null}
        <Touchable paddingHorizontal={30}>
          <Text style={styles.text}>Change my phone number</Text>
        </Touchable>
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Noah-Bold',
  },
  activityIndicator: {
    padding: 30
  },
  container: {
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#999',
    backgroundColor: '#000',
    margin: 30,
    marginTop:0,

  },
  text: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Noah-Bold',
  },
});
const mapStateToProps = state => ({
  user: getUser(state)
});

const mapDispatchToProps = {
  login: loginAction,
  setTreatments: setTreatments
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PatientCodeInputScreen);
