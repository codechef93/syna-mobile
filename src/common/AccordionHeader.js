import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

/* =============================================================================
<AccordionHeader />
============================================================================= */
const AccordionHeader = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={onPress}>
        <Text style={styles.showAll}>Show all</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 45,
    paddingBottom: 27,
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontFamily: 'Noah-Bold',
  },
  showAll: {
    fontSize: 10,
    color: '#595959',
    fontFamily: 'Noah-Bold',
    textTransform: 'uppercase',
  },
});

export default AccordionHeader;
