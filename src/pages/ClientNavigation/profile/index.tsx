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
import TopNavigation from '../../../components/TopNavigation';

const Profile = () => {

  return (
    <>
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
          <View style={styles.scrollViewContainer}>
              <View style={styles.scrollViewHeader}>
                <Text style={styles.bigTitle}>João da Silva</Text>
                <Text style={styles.italicSubtitle}>#4568</Text>
                <Text style={styles.subtitle}>Utilize esse código para ganhar descontos</Text>
              </View>
          </View>

          <View style={styles.profileImageContainer}>
            <Image source={require('../../../assets/profile-image.png')}/>
            <View style={styles.rowContainer}>
                <Text style={styles.edit}>Editar perfil</Text>
                <Icon name="edit-2" size={16} color="black" />
            </View>
            
            <View style={styles.columnContainer}>
                <Text style={styles.mediumTitleBold}>Aprendiz Cervejeiro</Text>
                <Text style={styles.mediumTitleRegular}>Pontos: 101</Text>
            </View>

            <View style={styles.insigniasContainer}>
                <View style={styles.insignia}>
                    <Image  source={require('../../../assets/brasil.png')}/>
                </View>
                <View style={styles.insignia}>
                    <Image  source={require('../../../assets/lgbt.png')}/>
                </View>
                <View style={styles.insignia}>
                    <Image  source={require('../../../assets/beer.png')}/>
                </View>
                <View style={styles.insignia}>
                    <Image  source={require('../../../assets/arctic-monkeys.png')}/>
                </View>
                <View style={styles.insignia}>
                    <Image  source={require('../../../assets/black-circle.png')}/>
                </View>
                <View style={styles.insignia}>
                    <Image  source={require('../../../assets/black-circle.png')}/>
                </View>
                <View style={styles.insignia}>
                    <Image  source={require('../../../assets/black-circle.png')}/>
                </View>
                <View style={styles.insignia}>
                    <Image  source={require('../../../assets/black-circle.png')}/>
                </View>
                <View style={styles.insignia}>
                    <Image  source={require('../../../assets/black-circle.png')}/>
                </View>
                <View style={styles.insignia}>
                    <Image  source={require('../../../assets/black-circle.png')}/>
                </View>
            </View>
            <Text style={styles.smallSubtitleBold}>Ver mais</Text>

            <View style={styles.rowContainerStatistics}>
                <View style={styles.columnContainer}>
                    <Text style={styles.mediumTitleBold}>9</Text>
                    <Text style={styles.smallSubtitleBoldBlack}>Cervejas na coleção</Text>
                </View>
                
                <View style={styles.columnContainer}>
                    <Text style={styles.mediumTitleBold}>28</Text>
                    <Text style={styles.smallSubtitleBoldBlack}>Cervejas bebidas</Text>
                </View>

                <View style={styles.columnContainer}>
                    <Text style={styles.mediumTitleBold}>3</Text>
                    <Text style={styles.smallSubtitleBoldBlack}>Bares seguindo</Text>
                </View>
            </View>
          </View>

          <View style={styles.rowContainer}>
              <Text style={styles.mediumTitleBoldBlack}>Minhas cervejas favoritas</Text>
              <Icon name="edit-2" size={16} color="black" />
          </View>

          <View style={styles.rowContainerBeers}>
              <View style={styles.favoriteBeerCard}>
                <View>
                    <Image source={require('../../../assets/eugenia.png')}/>
                </View>
                <Text style={styles.smallSubtitleRegular}>Colorado Eugênia</Text>
              </View>

              <View style={styles.favoriteBeerCard}>
                <View>
                    <Image  source={require('../../../assets/brahmaextra-redlager.png')}/>
                </View>
                <Text style={styles.smallSubtitleRegular}>Brahma Extra Lager</Text>
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

  scrollView: {
    width: '100%',
  },

  scrollViewContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },
  //HEADER
  scrollViewHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15
  },

  bigTitle: {
    fontSize: 32,
    fontFamily: 'Lato_700Bold',
    color: '#E23A3A',
  },

  italicSubtitle: {
    fontSize: 20,
    fontFamily: 'Lato_400Regular',
    color: '#7B7B7B',
    fontStyle: 'italic',
  },

  subtitle: {
    fontSize: 16,
    fontFamily: 'Lato_400Regular',
    color: '#7B7B7B'
  },

  //PROFILE IMAGE
  profileImageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#FFF6F6'
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  rowContainerBeers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },

  rowContainerStatistics: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop: 10
  },

  edit: {
    fontFamily: 'Lato_700Bold',
    color: '#625E5E',
    marginRight: 5
  },

  mediumTitleBold: {
    fontSize: 24,
    fontFamily: 'Lato_700Bold',
    color: '#E23A3A',
  },

  mediumTitleRegular: {
    fontSize: 20,
    fontFamily: 'Lato_400Regular',
    color: '#E23A3A',
  },

  columnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  insigniasContainer: {
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: 20,
      paddingTop: 20,
      paddingBottom: 10,
  },

  insignia: {
      paddingHorizontal: 5,
      paddingVertical: 3
  },

  smallSubtitleRegular: {
    fontSize: 16,
    fontFamily: 'Lato_400Regular',
    color: '#E23A3A',
  },

  smallSubtitleBold: {
    fontSize: 16,
    fontFamily: 'Lato_700Bold',
    color: '#E23A3A',
  },

  smallSubtitleBoldBlack: {
    fontSize: 12,
    fontFamily: 'Lato_700Bold',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  mediumTitleBoldBlack: {
    padding: 20,
    fontSize: 20,
    fontFamily: 'Lato_700Bold',
  },

  favoriteBeerCard: {
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 150,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderRadius: 10,
    elevation: 4,
  },


});

export default Profile;
