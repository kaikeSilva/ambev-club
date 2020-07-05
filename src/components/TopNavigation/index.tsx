import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RectButton } from 'react-native-gesture-handler';
import { MaterialIcons as Icon } from '@expo/vector-icons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import {  DrawerView } from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';

import { TGlobalState } from '../../types';

const TopNavigation = (): JSX.Element | null => {
  const page = useSelector((state: TGlobalState) => state.navigation.page);

  const navigation = useNavigation();


  function handleOpenDrawer() {
    navigation.dispatch(DrawerActions.openDrawer());
  }

  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      marginRight: 14,
    },
    icon: {
      marginVertical: 10,
      marginHorizontal: 12,
      color: 'white',
    },
  });

  switch (page) {
    case 'events':
      return (
        <View style={styles.wrapper}>
          <RectButton onPress={handleOpenDrawer}>
            <Icon name="menu" size={24} style={styles.icon} />
          </RectButton>
          <RectButton onPress={() => console.log('Search')}>
            <Icon name="search" size={24} style={styles.icon} />
          </RectButton>
        </View>
      );

    case 'beerCollection':
      return (
        <View style={styles.wrapper}>
          <RectButton onPress={() => console.log('Menu')}>
            <Icon name="menu" size={24} style={styles.icon} />
          </RectButton>
          <RectButton onPress={() => console.log('Search')}>
            <Icon name="account-circle" size={24} style={styles.icon} />
          </RectButton>
        </View>
      );
    default:
      return null;
  }
};

export default TopNavigation;
