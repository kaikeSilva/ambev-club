import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import TopNavigation from '../../../components/TopNavigation';
import BottomNavigation from '../../../components/BottomNavigation';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon, Ionicons,MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

interface Beer {
  id: number;
  name: string;
  image: string;
  type: string;
  status: number;
}

const BeerDetails = () => {
  const navigation = useNavigation();

  let beers: Beer[] = [
    { id: 4,
      name: 'Antartica',
      image: require('../../../assets/colorado-eugenia.png'),
      type: 'Session IPA',
      status: 1
    },
    { id: 1,
      name: 'HopCorn IPA',
      image: require('../../../assets/wals-hopcornipa.png'),
      type: 'English India Pale Ale',
      status: 0
    },
    { id: 2,
      name: 'Goose Island IPA',
      image: require('../../../assets/goose-ipa.png'),
      type: 'English India Pale Ale',
      status: 0
    },
  ] 

    function handleNavigateToEmporioDaCerveja() {

    }

    function handleNavigateToSempreEmCasa() {
      
    }

    function handleNavigateToZeDelivery() {
        
    }

  return (
    <>
    <ScrollView>
        <View style={styles.headerContainer}>
            <Image source={require('../../../assets/goose-ipa-lg.png')}></Image>
            
            <View>
                <View style={styles.headerTextContainer}>
                    <Text  style={styles.title}>Goose Island IPA</Text>
                    <Text style={styles.subtitle}>English India Pale Ale</Text>
                </View>

                <View style={styles.headerTextInfoContainer}>
                    <View style={styles.family}>
                        <Text  style={styles.familyTitle}>FAMÍLIA</Text>
                        <Text style={styles.familySubtitle}>Ale</Text>
                    </View>
                    <View style={styles.color}>
                        <Text  style={styles.familyTitle}>COR</Text>
                        <Text style={styles.familySubtitle}>Amarelo Dourado</Text>
                    </View>
                </View>
                <View style={styles.headerStatusContainer}>
                    <Text style={styles.statusText}>Status: na sua coleção</Text>
                </View>
            </View>

        </View>

        <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>
            Um dos carros chefes da marca, a Goose Island IPA é uma clássica India Pale Ale. Uma cerveja com um aroma incrível, que passa pelo processo de dry-hopping e por isso o lúpulo se destaca. No sabor, também bastante lupulada, ela mantém o equilíbrio com o dulçor do malte. Já foi vencedora de diversos prêmios e com certeza é capaz de impressionar qualquer lupulomaníaco
            </Text>
        </View>

        <View style={styles.rowContainer}>
            
            <View style={styles.rowContainer}>
                <FontAwesome5 name="temperature-low" size={32} color="black" />
                <View style={styles.detailContainer}>
                    <Text style={styles.detailLabelText}>TEMPERATURA</Text>
                    <Text style={styles.detailText}>8º - 12º</Text>
                </View>
            </View>

            <View style={styles.rowContainer}>
                <FontAwesome5 name="percentage" size={32} color="black" />
                <View style={styles.detailContainer}>
                    <Text style={styles.detailLabelText}>ABV</Text>
                    <Text style={styles.detailText}>5,9%</Text>
                </View>
            </View>
        
        </View>
        <View style={styles.detailContainer}>
            <Text style={styles.externalLabel}>Onde comprar</Text>
            <View style={styles.rowContainer}>
                <RectButton style={styles.button} onPress={handleNavigateToEmporioDaCerveja}>
                    <Image source={require('../../../assets/image-emporio-cerveja.png')}></Image>
                </RectButton>
                <RectButton style={styles.button} onPress={handleNavigateToEmporioDaCerveja}>
                    <Image source={require('../../../assets/ze-delivery.png')}></Image>
                </RectButton>
                <RectButton style={styles.button} onPress={handleNavigateToEmporioDaCerveja}>
                    <Image source={require('../../../assets/sempre-em-casa.png')}></Image>
                </RectButton>
            </View>
        </View>
    </ScrollView>
    <BottomNavigation/>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },

  headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingHorizontal: 10,
      paddingVertical: 20
  },

  headerTextContainer: {
    alignItems: 'center'
  },

  title: {
      color: '#E23A3A',
      fontSize: 32,
      fontFamily: 'Lato_700Bold',
    },

  subtitle: {
      color: '#E23A3A',
      fontFamily: 'Lato_400Regular',
      fontSize: 16,
      fontStyle: 'italic',
  },

  headerTextInfoContainer: {
      justifyContent: 'center',
      flexDirection: 'row',
      paddingTop: 20,
  },

  family: {
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRightWidth: 2,
    borderRightColor: '#E23A3A'
  },
  
  familyTitle: {
    color: '#E23A3A',
    fontSize: 20,
    fontFamily: 'Lato_700Bold',
  },

  familySubtitle: {
    maxWidth: 100,
    color: '#E23A3A',
    fontSize: 20,
    fontFamily: 'Lato_700Bold',
  },

  color: {
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRightColor: '#E23A3A'
  },

  headerStatusContainer: {
      justifyContent: 'center',
  },

  statusText: {
      paddingTop: 20,
    fontFamily: 'Lato_400Regular',
    fontSize: 24,
    fontStyle: 'italic',
  },

  descriptionContainer: {
    margin: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FFBEA1'
  }, 

  descriptionText: {
    color: '#E23A3A',
    fontFamily: 'Lato_400Regular',
    fontSize: 20
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },

  detailLabelText: {
    fontFamily: 'Lato_400Regular',
    fontSize: 16,
    color: '#E23A3A'
  },

  detailText: {
      fontFamily: 'Lato_400Regular',
      fontSize: 16,
  },

  detailContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10
  },

  externalLabel: {
    fontFamily: 'Lato_400Regular',
    fontSize: 24,
    color: '#E23A3A'
  },

  button: {
      padding:10,
  }

});

export default BeerDetails;
