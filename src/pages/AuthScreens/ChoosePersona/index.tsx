import React from 'react';
import {
  StyleSheet,
  TextInput,
  ImageBackground,
  Text,
  View,
  Image,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Feather as Icon,
  Ionicons,
  AntDesign,
  MaterialIcons,
} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ChoosePersona = () => {
  const navigation = useNavigation();
  const [persona, setPersona] = React.useState<string>('');

  function handleNavigateToChoosePassword(persona: string) {
    setPersona(persona);
    navigation.navigate('ChoosePassword');
  }

  return (
    <LinearGradient colors={['#DE2B2B', '#FF922E']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Fale um pouco sobre você</Text>
      </View>

      <View style={styles.content}>
        <RectButton
          style={styles.button}
          onPress={() => handleNavigateToChoosePassword('apreciador')}
        >
          <View>
            <Text style={styles.textCenter}>
              <AntDesign name="star" size={48} color="#FFBE41" />
            </Text>
            <Text style={styles.buttonText}>
                Quero explorar o universo cervejeiro,
                conhecer diferentes cervejas e ter novas
                experiências!
            </Text>
          </View>
        </RectButton>
        <RectButton
          style={styles.button}
          onPress={() => handleNavigateToChoosePassword('festeiro')}
        >
          <View>
            <Text style={styles.textCenter}>
              <MaterialIcons name="attach-money" size={48} color="#41A51E" />
            </Text>
            <Text style={styles.buttonText}>
                Quero descobrir as
                melhores promoções e 
                os melhores eventos para curtir!
            </Text>
          </View>
        </RectButton>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  content: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 0,
    paddingLeft: 10,
    paddingRight: 10,
  },

  header: {
    alignItems: 'flex-start',
  },

  textCenter: {
    textAlign: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 32,
    fontFamily: 'Lato_700Bold',
    maxWidth: 200,
    textAlign: 'left',
  },

  button: {
    backgroundColor: '#fff',
    flex: 1,
    width: '90%',
    padding: 10,
    flexDirection: 'column',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#DE2B2B',
    fontFamily: 'Lato_700Bold',
    fontSize: 20,
  },
});

export default ChoosePersona;
