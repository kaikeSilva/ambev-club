import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image } from 'react-native';
import TopNavigation from '../../../components/TopNavigation';
import BottomNavigation from '../../../components/BottomNavigation';

const BeerCollection = () => {
  const navigation = useNavigation();
  const [filter, setFilter] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  function handleNavigateToBars() {
    navigation.navigate('Bars');
  }

  return (
    <>
      <TopNavigation />
      <View style={styles.container}>
        <View style={styles.beerCard}>
          <Image source={require('../../assets/colorado-eugenia.png')} />
          <View style={styles.beerTextCard}>
            <Text>Eugênia</Text>
            <Text>Session IPA</Text>
          </View>
        </View>
      </View>
      <BottomNavigation />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  beerCard: {
    flexDirection: 'row',
    borderWidth: 2,
  },

  beerTextCard: {
    paddingLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});

export default BeerCollection;
