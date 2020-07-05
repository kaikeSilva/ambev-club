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

const Learning = () => {
  const [filter, setFilter] = React.useState('');

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
          <Picker.Item label="bate papo" value="bate papo" />
          <Picker.Item label="Treinamento" value="Treinamento" />
        </Picker>
      </View>

      <ScrollView style={styles.scrollView}>
        <View style={styles.scrollViewContainer}>
          
            <View style={styles.feedCard}>
                <Image
                source={require('../../../assets/mulheres-que-inspiram.png')}
                />
                <View style={styles.textContainer}>
                    <View style={styles.typeContainer}>
                        <Text style={styles.typeTextBatePapo}>Bate papo</Text>
                    </View>
                    <Text style={styles.feedCardRegularText}>Mulheres Que Inspiram</Text>
                    <Text style={styles.feedCardBoldText}>Vamos conhecer um pouco mais das trajetórias de mulheres que fazem a diferença na Ambev!</Text>
                </View>
                <Text style={styles.timeText}>há 3 dias</Text>
            </View>

            <View style={styles.feedCard}>
                <Image
                source={require('../../../assets/power-bi.png')}
                />
                <View style={styles.textContainer}>
                    <View style={styles.typeContainer}>
                        <Text style={styles.typeTextTreinamento}>Treinamento</Text>
                    </View>
                    <Text style={styles.feedCardRegularText}>Power BI Parte II</Text>
                    <Text style={styles.feedCardBoldText}>Veja a segunda parte do treinamento na ferramenta Power BI.</Text>
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

  typeTextBatePapo: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#2051FE',
    fontSize: 12,
    fontFamily: 'Lato_700Bold',
    color: 'white',
  },

  typeTextTreinamento: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#F9A602',
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

export default Learning;
