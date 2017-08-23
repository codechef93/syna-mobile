import React, {useState} from 'react';
import {connect, useSelector} from 'react-redux';
import Checkbox from './Checkbox';
import Button from '../Button';
import {View, Text} from '../../../common';
import {setServices as setServicesAction} from '../../redux/actions';
import {StyleSheet} from 'react-native';

/* =============================================================================
<Service />
============================================================================= */
const Service = ({setServices, onSubmit}) => {
  const [values, setValues] = useState([]);
  const allServices = useSelector(state => state.NewAppointment.allServices)
  const _handleChange = value => {
    setValues(prevState => {
      if (prevState.includes(value)) {
        return prevState.filter(item => item !== value);
      } else {
        return [...prevState, value];
      }
    });
  };

  const _handleSubmit = () => {
    setServices(values);

    onSubmit();
  };

  return (
    <>
      <View flex={1}>
        <Text style={styles.title}>List of provided services</Text>
          {/* {console.log(values)} */}
        {allServices.map(item =>{return(
          <Checkbox
            key={item.title}
            label={item.title}
            value={item.title}
            onChange={_handleChange}
            selected={values.includes(item.title)}
          />
        )})}
      </View>

      <Button label="continue" onPress={_handleSubmit} />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 30,
    marginVertical: 12,
    fontSize: 10,
    color: '#c2c2c2',
    fontFamily: 'Noah-Bold',
    textTransform: 'uppercase',
  },
});

const mapDispatchToProps = {
  setServices: setServicesAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(Service);
