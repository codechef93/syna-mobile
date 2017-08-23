import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/* =============================================================================
<ListItem />
============================================================================= */
const ListItem = ({description, tooth, status}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.description]}>{description}</Text>

      <Text style={[styles.text, styles.tooth]}>{tooth}</Text>

      <View style={styles.status}>
        <View
          style={[
            styles.btn,
            status === 'Pending' ? styles.pending : styles.done,
          ]}>
          <Text style={styles.btnTxt}>{status}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingVertical: 5.5,
  },
  description: {
    flex: 1.7,
  },
  tooth: {
    flex: 0.5,
  },
  status: {
    flex: 0.8,
  },
  text: {
    fontSize: 12,
    color: '#595959',
    fontFamily: 'Noah-Bold',
    textTransform: 'uppercase',
  },
  btn: {
    width: 54,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 20,
  },
  done: {
    borderColor: '#AFEFF4',
    backgroundColor: '#AFEFF4',
  },
  pending: {
    borderColor: '#EFF4AF',
    backgroundColor: '#EFF4AF',
  },
  btnTxt: {
    fontSize: 9,
    color: '#000000',
    fontFamily: 'Noah-Bold',
    textTransform: 'uppercase',
  },
});

export default ListItem;
