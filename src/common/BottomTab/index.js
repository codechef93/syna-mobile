import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {useSafeArea} from 'react-native-safe-area-context';
import {View, Keyboard, Platform, StyleSheet} from 'react-native';

import Item from './Item';
import SpecialItem from './SpecialItem';
import ProfileIcon from '../../assets/icons/profile.svg';
import DashboardIcon from '../../assets/icons/dashboard.svg';
import TreatmentIcon from '../../assets/icons/treatment.svg';
import AppointmentIcon from '../../assets/icons/appointment.svg';
import ProfileIconActive from '../../assets/icons/profile-active.svg';
import DashboardIconActive from '../../assets/icons/dashboard-active.svg';
import TreatmentIconActive from '../../assets/icons/treatment-active.svg';
import AppointmentIconActive from '../../assets/icons/appointment-active.svg';
import {toggleVisibility as toggleVisibilityAction} from '../../newAppointment/redux/actions';

const TAB_BAR_HEIGHT = 54;

const ICONS = [
  {
    active: <DashboardIconActive />,
    inactive: <DashboardIcon />,
  },
  {
    active: <AppointmentIconActive />,
    inactive: <AppointmentIcon />,
  },
  {
    active: null,
    inactive: null,
  },
  {
    active: <TreatmentIconActive />,
    inactive: <TreatmentIcon />,
  },
  {
    active: <ProfileIconActive />,
    inactive: <ProfileIcon />,
  },
];

/* =============================================================================
<BottomTab />
============================================================================= */
const BottomTab = ({state, navigation, toggleVisibility}) => {
  const [keyboardShown, setKeyboardShown] = useState(false);

  const insets = useSafeArea();

  useEffect(() => {
    const handleKeyboardHide = () => {
      setKeyboardShown(false);
    };

    const handleKeyboardShow = () => setKeyboardShown(true);

    if (Platform.OS === 'ios') {
      Keyboard.addListener('keyboardWillShow', handleKeyboardShow);
      Keyboard.addListener('keyboardWillHide', handleKeyboardHide);
    } else {
      Keyboard.addListener('keyboardDidShow', handleKeyboardShow);
      Keyboard.addListener('keyboardDidHide', handleKeyboardHide);
    }

    return () => {
      if (Platform.OS === 'ios') {
        Keyboard.removeListener('keyboardWillShow', handleKeyboardShow);
        Keyboard.removeListener('keyboardWillHide', handleKeyboardHide);
      } else {
        Keyboard.removeListener('keyboardDidShow', handleKeyboardShow);
        Keyboard.removeListener('keyboardDidHide', handleKeyboardHide);
      }
    };
  }, []);

  const _handleNewTreatment = () => {
    toggleVisibility();
  };

  const _safeAreaStyle = {
    paddingBottom: insets.bottom,
    height: TAB_BAR_HEIGHT + insets.bottom,
  };

  if (keyboardShown) {
    return null;
  }

  return (
    <View style={[styles.container, _safeAreaStyle]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const icon = isFocused ? ICONS[index].active : ICONS[index].inactive;

        if (route.name === 'newTreatmentTabEntry') {
          return <SpecialItem key={route.key} onPress={_handleNewTreatment} />;
        } else {
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Item
              icon={icon}
              key={route.key}
              label={route.name}
              active={state.index === index}
              onPress={onPress}
            />
          );
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 58,
    flexDirection: 'row',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

const mapDispatchToProps = {
  toggleVisibility: toggleVisibilityAction,
};

export default connect(
  null,
  mapDispatchToProps,
)(BottomTab);
