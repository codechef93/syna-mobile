import React , {useState, useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import {StyleSheet} from 'react-native';

import {View, Text} from '../../../common';
import {getServices} from '../../redux/selectors';

/* =============================================================================
<Services />
============================================================================= */
const Services = ({services}) => {
  const allServices = useSelector(state => state.NewAppointment.allServices)
  const [selectedServices,setSelectedServices] =useState([])
  useEffect(() => {
      var service = []
    for (let i = 0; i < services.length; i++) {
      const element = allServices.filter(item => item.title ==services[i])
     service =  service.concat(element)
      setSelectedServices(service)
    }
  },[services]);
  
  return (
    <>
      <Text style={styles.label} marginHorizontal={30} marginVertical={5}>
        services
      </Text>

      {selectedServices.map(item => (
        <View key={item.code} paddingHorizontal={30}>
        {/* {console.log(item.title+'item')} */}
          <View style={styles.item}>
            <Text style={styles.value}>{item.title}</Text>
          </View>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 188,
    height: 43,
    justifyContent: 'center',
    marginVertical: 5,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderRadius: 31,
    borderColor: '#EEEEEE',
    backgroundColor: '#fafafa',
  },
  value: {
    fontSize: 12,
    color: '#595959',
    fontFamily: 'Noah-Bold',
    textTransform: 'capitalize',
  },
});

const mapStateToProps = state => ({
  services: getServices(state),
});

export default connect(mapStateToProps)(Services);
