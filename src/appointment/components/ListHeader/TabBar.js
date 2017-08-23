import * as React from 'react';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';

import {View, Text, Touchable} from '../../../common';
import {getVisibilityFilter} from '../../redux/selectors';
import {setVisibilityFilter as setVisibilityFilterAction} from '../../redux/actions';

/* =============================================================================
<TabBar />
============================================================================= */
const TabBar = ({visibilityFilter, setVisibilityFilter}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Touchable
          disabled={visibilityFilter === 'next'}
          onPress={() => setVisibilityFilter('next')}
          style={[
            styles.item,
            visibilityFilter === 'next'
              ? styles.itemActive
              : styles.itemInactive,
          ]}>
          <Text
            style={[
              styles.text,
              visibilityFilter === 'next'
                ? styles.textActive
                : styles.textInactive,
            ]}>
            next appointment
          </Text>
        </Touchable>

        <Touchable
          disabled={visibilityFilter === 'last'}
          onPress={() => setVisibilityFilter('last')}
          style={[
            styles.item,
            visibilityFilter === 'last'
              ? styles.itemActive
              : styles.itemInactive,
          ]}>
          <Text
            style={[
              styles.text,
              visibilityFilter === 'last'
                ? styles.textActive
                : styles.textInactive,
            ]}>
            last appointment
          </Text>
        </Touchable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 26,
    paddingHorizontal: 30,
  },
  content: {
    width: '100%',
    height: 31,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#CFCFCF',
    overflow: 'hidden',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemActive: {
    backgroundColor: '#EEEEEE',
  },
  itemInactive: {
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    fontFamily: 'Noah-Bold',
    textTransform: 'uppercase',
  },
  textActive: {
    color: '#000000',
  },
  textInactive: {
    color: '#595959',
  },
});

const mapStateToProps = state => ({
  visibilityFilter: getVisibilityFilter(state),
});

const mapDispatchToProps = {
  setVisibilityFilter: setVisibilityFilterAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabBar);
