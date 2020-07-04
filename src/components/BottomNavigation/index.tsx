import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Feather as Icon,
  Ionicons,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  TextInput,
  ImageBackground,
  Text,
  View,
  Image,
  Picker,
  ScrollView,
} from 'react-native';

const BottomNavigation = () => {
  const navigation = useNavigation();
  const [filter, setFilter] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  function handleNavigateToBars() {
    navigation.navigate('Bars');
  }

  function handleNavigateToEvents() {
    navigation.navigate('Events');
  }

  function handleNavigateToBeerCollection() {
    navigation.navigate('BeerCollection');
  }

  return (
    <View style={styles.bottomNavigation}>
      <RectButton
        style={styles.navigationBottonItem}
        onPress={handleNavigateToEvents}
      >
        <Icon
          style={styles.bottomNavigationTextSelected}
          name="calendar"
          size={32}
          color="white"
        />
        <Text style={styles.bottomNavigationTextSelected}>Eventos</Text>
      </RectButton>

      <RectButton
        style={styles.navigationBottonItem}
        onPress={handleNavigateToBars}
      >
        <MaterialIcons name="local-bar" size={32} color="white" />
        <Text style={styles.bottomNavigationText}>Bares</Text>
      </RectButton>

      <RectButton
        style={styles.navigationBottonItem}
        onPress={handleNavigateToBeerCollection}
      >
        <FontAwesome5 name="beer" size={32} color="white" />
        <Text style={styles.bottomNavigationText}>Cervejas</Text>
      </RectButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  //BOTTOM NAVIGATION STYLES
  bottomNavigation: {
    padding: 15,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#DE2B2B',
    justifyContent: 'space-around',
  },

  navigationBottonItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomNavigationText: {
    color: '#fff',
    fontFamily: 'Lato_400Regular',
  },

  bottomNavigationTextSelected: {
    color: '#FFED46',
    fontFamily: 'Lato_400Regular',
  },
});

export default BottomNavigation;
