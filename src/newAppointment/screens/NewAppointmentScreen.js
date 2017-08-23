import React, { useState, useCallback, useEffect } from 'react';
import Modal from 'react-native-modal';
import { connect, useDispatch } from 'react-redux';
import { StyleSheet, ScrollView } from 'react-native';
import { TabView as RNTabView, SceneMap } from 'react-native-tab-view';

import Header from '../components/Header';
import TabBar from '../components/TabBar';
import Service from '../components/Service';
import Overview from '../components/Overview';
import DateAndTime from '../components/DateAndTime';
import { View, Text, Touchable } from '../../common';
import { getVisibility } from '../redux/selectors';
import {
  setDateTime as setDateTimeAction,
  setServices as setServicesAction,
  toggleVisibility as toggleVisibilityAction,
} from '../redux/actions';
import { setNextAppointment } from '../../appointment/redux/actions';
import ApiManager from '../ApiManager/ApiManager';
import { getNextAppointments } from '../../appointment/redux/selectors';
const renderTabBar = props => <TabBar {...props} />;

/* =============================================================================
<NewAppointmentScreen />
============================================================================= */
const NewAppointmentScreen = ({
  isVisible,
  setServices,
  setDateTime,
  toggleVisibility,
}) => {
  const [index, setIndex] = useState(0);
  const [popup, setPopup] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const dispatch = useDispatch();
  const [routes] = useState([
    { key: 'dateAndTime', title: 'Date & Time' },
    { key: 'service', title: 'Service' },
    { key: 'overview', title: 'Overview' },
  ]);
  const renderScene = useCallback(
    SceneMap({
      service: () => <Service onSubmit={handleSubmit} />,
      overview: () => <Overview onSubmit={handleFinish} />,
      dateAndTime: () => <DateAndTime onSubmit={handleSubmit} />,
    }),
    [],
  );
  const handleModalClose = () => {
    setIndex(0);
    setDateTime({});
    setServices([]);
    setPopup(false);
    toggleVisibility();
  };

  const handlePopupClose = () => {
    setPopup(false);
  };
   // Select the current month at start
   useEffect(() => {
    setVisibleModal(isVisible);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const handleSubmit = () => {
    setIndex(prevState => prevState + 1);
  };
  const handleFinish = async (user, services, dateTime) => {
    if (services.length == 0) {
      return { err: 'Please select services', loading: false };
    } else if (!dateTime.date) {
      return { err: 'Please select date', loading: false };
    } else if (!dateTime.time) {
      return { err: 'Please select time', loading: false };
    } else {
      setVisibleModal(false);
      await new ApiManager()
        .createNewAppointment({
          services: services,
          patient: user,
          appointment_at: dateTime.date,
          time: dateTime.time,
        })
        .then(responce => {
          handleModalClose();
          setTimeout(() => {
            setPopup(true);
          }, 100);
          return { err: '', loading: false };
        });
    }
  };

  return (
    <>
      <Modal
        useNativeDriver
        style={styles.modal}
        isVisible={visibleModal}
        swipeDirection={['down']}
        onRequestClose={() => { setVisibleModal(false); } }
        onSwipeComplete={handleModalClose}
        onBackdropPress={handleModalClose}
        onBackButtonPress={handleModalClose}>
        <View style={styles.content}>
          <ScrollView>
            <Header />

            <RNTabView
              lazy={false}
              swipeEnabled={false}
              onIndexChange={setIndex}
              renderScene={renderScene}
              renderTabBar={renderTabBar}
              navigationState={{ index, routes }}
            />
          </ScrollView>
        </View>
      </Modal>

      <Modal
        useNativeDriver
        isVisible={popup}
        onSwipeComplete={handlePopupClose}
        onBackdropPress={handlePopupClose}
        onBackButtonPress={handlePopupClose}>
        <View style={styles.popupContent}>
          <View flex={1}>
            <Text style={styles.wellDone}>Well done!</Text>

            <Text style={styles.appointmentConfirmed}>
              Your appointment is confirmed.
            </Text>

            <Text style={styles.instructions}>
              We are looking forward to your visit. Please be sure to arrive 10
              minutes before the appointment.
            </Text>
          </View>

          <Touchable style={styles.popupBtn} onPress={handlePopupClose}>
            <Text style={styles.popupBtnText}>close</Text>
          </Touchable>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    width: '100%',
    height: 715,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  popupContent: {
    width: '100%',
    height: 292,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  popupBtn: {
    width: '100%',
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 31,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  popupBtnText: {
    fontSize: 12,
    color: '#595959',
    fontFamily: 'Noah-Bold',
    textTransform: 'uppercase',
  },
  wellDone: {
    marginTop: 36,
    fontSize: 30,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Noah-Bold',
  },
  appointmentConfirmed: {
    marginTop: 16,
    fontSize: 16,
    color: '#595959',
    textAlign: 'center',
    fontFamily: 'Noah-Bold',
  },
  instructions: {
    marginTop: 20,
    marginHorizontal: 12,
    fontSize: 14,
    color: '#c2c2c2',
    textAlign: 'center',
    fontFamily: 'Noah-Bold',
  },
  modalConfirmation:{
    justifyContent: 'center',
    margin: 0,
  },
});

const mapStateToProps = state => ({
  isVisible: getVisibility(state),
});

const mapDispatchToProps = {
  setServices: setServicesAction,
  setDateTime: setDateTimeAction,
  toggleVisibility: toggleVisibilityAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewAppointmentScreen);
