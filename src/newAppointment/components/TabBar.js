import React, {useRef, useEffect} from 'react';
import {StyleSheet, ScrollView} from 'react-native';

import {View, Text, Touchable} from '../../common';

/* =============================================================================
<TabBar />
============================================================================= */
const TabBar = ({navigationState, jumpTo}) => {
  const _scrollView = useRef();

  useEffect(() => {
    if (navigationState.index > 0) {
      _scrollView.current.scrollToEnd();
    } else {
      _scrollView.current.scrollTo({x: 0, y: 0});
    }
  }, [navigationState.index]);

  return (
    <View>
      <ScrollView
        horizontal
        ref={_scrollView}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        {navigationState.routes.map((route, index) => (
          <Touchable
            key={route.key}
            disabled={index === navigationState.index}
            onPress={() => jumpTo(route.key)}
            style={[
              styles.item,
              index === navigationState.index
                ? styles.itemActive
                : styles.itemInactive,
            ]}>
            <Text
              style={[
                styles.text,
                index === navigationState.index
                  ? styles.textActive
                  : styles.textInactive,
              ]}>
              {route.title}
            </Text>
          </Touchable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 30,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Noah-Bold',
    textTransform: 'capitalize',
  },
  textActive: {
    fontSize: 30,
  },
  textInactive: {
    fontSize: 18,
    color: '#CFCFCF',
  },
});

export default TabBar;
