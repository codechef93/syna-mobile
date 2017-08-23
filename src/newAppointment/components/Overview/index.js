import React, {useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';

import Button from '../Button';
import Services from './Services';
import {View, Text} from '../../../common';
import DateAndTime from './DateAndTime';
import {getDateTime,getServices,getUser} from '../../redux/selectors';
/* =============================================================================
<Overview />
============================================================================= */
const Overview = ({onSubmit,dateTime,services,user}) => {
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect((()=>setError('')),[dateTime,services])

  return (
    <>
      <View flex={1}>
        <DateAndTime />
        <Services  />
      </View>
      <View style={styles.bottom}>
      {error? <Text style = {styles.error}>{error}</Text>:null}
        <Button loading ={loading} label="make an appointment"  onPress={async()=>{
          try {
          setLoading(true)
          var responce = await onSubmit(user,services,dateTime)
            setError(responce.err)
            setLoading(responce.loading)
          } catch (e) {
            console.log('Overview error onPress')
            console.log(e)
          }
          }} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bottom: {
    width: '100%',
    paddingVertical: 18,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    backgroundColor: '#fafafa',
  },
  error: {
    marginTop: 6,
    color: 'red',
    textAlign: 'center',
    fontFamily: 'Noah-Bold',
    textTransform: 'capitalize',
  },
});


const mapStateToProps = state => ({
  dateTime: getDateTime(state),
  services: getServices(state),
  user: getUser(state),
});

export default connect(
  mapStateToProps,
  null,
)(Overview);
