import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
import BottomNavigation from '../../../components/BottomNavigation';

import { setNavigation } from '../../../store/navigationSlice';

const breweryEnvironment = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [filter, setFilter] = React.useState('');

  useEffect(() => {
    dispatch(setNavigation({ group: 1, page: 'events' }));
  });

  return (
    <>
    <View style={styles.container}>
      <View style={styles.filter}>
        <Text style={styles.regularText}>Classificar por:</Text>
        <Picker
          selectedValue={filter}
          onValueChange={hand => setFilter(hand)}
          style={{ width: 200 }}
          mode="dropdown"
        >
          <Picker.Item label="Todos" value="Todos" />
          <Picker.Item label="Culinária" value="Culinária" />
          <Picker.Item label="Curiosidades" value="Curiosidades" />
        </Picker>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.scrollViewContainer}>
          
            <View style={styles.feedCard}>
                <Image
                source={require('../../../assets/refeicao.png')}
                />
                <View style={styles.textContainer}>
                    <View style={styles.typeContainer}>
                        <Text style={styles.typeTextCulinaria}>Culinária</Text>
                    </View>
                    <Text style={styles.feedCardRegularText}>Cervejas e harmonização</Text>
                    <Text style={styles.feedCardBoldText}>Veja as cervejas que melhor combinam com os principais pratos!</Text>
                </View>
                <Text style={styles.timeText}>há 3 dias</Text>
            </View>

            <View style={styles.feedCard}>
                <Image
                source={require('../../../assets/copo-de-cerveja.png')}
                />
                <View style={styles.textContainer}>
                    <View style={styles.typeContainer}>
                        <Text style={styles.typeTextCuriosidades}>Curiosidades</Text>
                    </View>
                    <Text style={styles.feedCardRegularText}>Você sabe o que é  ABV e IBU?</Text>
                    <Text style={styles.feedCardBoldText}>Provavelmente você já viu essas siglas nos rótulos de cerveja. Entenda o que elas significam!</Text>
                </View>
                <Text style={styles.timeText}>há 4 dias</Text>
            </View>
        </View>
      </ScrollView>
    </View>
    <BottomNavigation/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },

  //HEADDER STYLES
  header: {
    backgroundColor: '#DE2B2B',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'flex-start',
  },

  filter: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  regularText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Lato_400Regular',
    maxWidth: 260,
    textAlign: 'left',
    padding: 10,
  },

  //SCROLL VIEW STYLES
  scrollView: {
    width: '100%',
    padding: 10,
  },

  scrollViewContainer: {
    justifyContent: 'center',
    padding: 10
  },

  textContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    padding: 10
  },

  feedCard: {
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: "#f00",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },

  typeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  typeTextCulinaria: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#FD0303',
    fontSize: 12,
    fontFamily: 'Lato_700Bold',
    color: 'white',
  },

  typeTextCuriosidades: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#1C1818',
    fontSize: 12,
    fontFamily: 'Lato_700Bold',
    color: 'white',
  },

  timeText: {
    fontFamily: 'Lato_700Bold',
      padding: 10,
      color: '#D7CECE'
  },

  feedCardRegularText: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Lato_700Bold',
    maxWidth: 260,
    textAlign: 'center',
    marginTop: 10,
  },

  textLeft: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
  },

  feedCardBoldText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Lato_400Regular',
    maxWidth: 260,
    textAlign: 'center',
  },

  
});

export default breweryEnvironment;
