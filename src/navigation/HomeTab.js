import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BottomTab} from '../common';
import ProfileScreen from '../profile/screens/ProfileScreen';
import DashboardScreen from '../dashboard/screens/DashboardScreen';
import TreatmentScreen from '../treatment/screens/TreatmentScreen';
import AppointmentScreen from '../appointment/screens/AppointmentScreen';

const Tab = createBottomTabNavigator();

const EmptyScreen = () => null;

/* =============================================================================
<HomeTab />
============================================================================= */
const HomeTab = () => (
  <Tab.Navigator tabBar={props => <BottomTab {...props} />}>
    <Tab.Screen name="dashboard" component={DashboardScreen} />
    <Tab.Screen name="appointment" component={AppointmentScreen} />
    <Tab.Screen name="newTreatmentTabEntry" component={EmptyScreen} />
    <Tab.Screen name="treatment" component={TreatmentScreen} />
    <Tab.Screen name="profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default HomeTab;
