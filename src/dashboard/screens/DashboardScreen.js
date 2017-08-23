import * as React from 'react';
import { RefreshControl, ScrollView } from 'react-native'
import {
  Container,
  Treatment,
  Background,
  Appointment,
  SafeAreaView,
  AccordionHeader,
  Text
} from '../../common';
import Header from '../components/Header';
import { useSelector, useDispatch } from 'react-redux'
import ApiManager from '../../auth/ApiManager/ApiManager';
import { setAllServices } from '../../newAppointment/redux/actions'

/* =============================================================================
<DashboardScreen />
============================================================================= */
const DashboardScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false)
  const dispatch = useDispatch()
  const allAppointment = useSelector(state => state.Appointment.nextAppointments)
  const user = useSelector(state => state.Auth.user)
  const allTreatment = useSelector(state => state.Auth.treatments)


  allTreatment?.sort((a,b)=> new Date(b.creationDate)-new Date(a.creationDate))
  allAppointment?.sort((a,b)=> new Date(b.apptDateTime)-new Date(a.apptDateTime))
  const appointment = allAppointment ? allAppointment[0] : null
  const treatment = allTreatment ? allTreatment[0] : null


  const _handleAppointment = () => {
    navigation.navigate('appointment');
  };

  const _handleTreatment = () => {
    navigation.navigate('treatment');
  };

  const _onRefresh = (id) => {
    setRefreshing(true)
    fetchData(id).then(() => {
      setRefreshing(false)
    });
  }

  const fetchData = async (id) => {
    new ApiManager().getServices().then(services => {
      dispatch(setAllServices(services))
    }).catch(e => console.log(e))
  }

  return (
    <SafeAreaView>
      <Container backgroundColor="#fff">
        {/* <Content backgroundColor="transparent"> */}
        <Background />

        <Header />

        <ScrollView
          nestedScrollEnabled={true}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => _onRefresh(user.code)}
            />
          }
          paddingHorizontal={30}>
          <AccordionHeader
            title="Latest appointments"
            onPress={_handleAppointment}
          />

          {appointment ? <Appointment data={appointment} /> : <Text>No appointmet to show</Text>}

          <AccordionHeader
            title="Treatment plan"
            onPress={_handleTreatment}
          />

          {treatment ? <Treatment data={treatment} /> : <Text>No Treatment to show</Text>}
        </ScrollView>
        {/* </Content> */}
      </Container>
    </SafeAreaView>
  );
};

export default DashboardScreen;
