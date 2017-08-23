import * as React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, StyleSheet, TouchableOpacity, View,ActivityIndicator} from 'react-native';

/* =============================================================================
<Button />
============================================================================= */
const Button = ({label, onPress,loading}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <LinearGradient colors={['#000000', '#595959']} style={styles.content}>
         {!loading? <Text style={styles.title}>{label}</Text>:<ActivityIndicator />}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  content: {
    width: '100%',
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    backgroundColor: '#000',
  },
  title: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Noah-Bold',
    textTransform: 'uppercase',
  },
});

export default Button;
