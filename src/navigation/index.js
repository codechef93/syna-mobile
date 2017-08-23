import React from 'react';
import {connect} from 'react-redux';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import HomeTab from './HomeTab';
import LoginScreen from '../auth/screens/LoginScreen';
import SplashScreen from '../auth/screens/SplashScreen';
import PhoneInputScreen from '../auth/screens/PhoneInputScreen';
import PatientCodeInputScreen from '../auth/screens/PatientCodeInputScreen';
import NewAppointmentScreen from '../newAppointment/screens/NewAppointmentScreen';
import {getUser, getAuthenticating} from '../auth/redux/selectors';

const Stack = createStackNavigator();

const EmptyScreen = () => null;

/* =============================================================================
<AppNavigation />
============================================================================= */
const AppNavigation = ({authenticated, authenticating}) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#000" />

        <NewAppointmentScreen />

        <Stack.Navigator headerMode="none">
          {authenticating ? (
            <Stack.Screen name="Splash" component={SplashScreen} />
          ) : authenticated ? (
            <Stack.Screen name="HomeTab" component={HomeTab} />
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="PhoneInput" component={PhoneInputScreen} />
              <Stack.Screen
                name="PatientCodeInput"
                component={PatientCodeInputScreen}
              />
            </>
          )}
          <Stack.Screen name="NewTreatment" component={EmptyScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const mapStateToProps = state => ({
  authenticated: !!getUser(state),
  authenticating: getAuthenticating(state),
});

export default connect(mapStateToProps)(AppNavigation);
