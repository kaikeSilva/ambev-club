import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather as Icon, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ClientLogin1 = () => {
  const navigation = useNavigation();

  function handleNavigateToCreateAccount() {
    navigation.navigate('CreateAccount');
  }

  function handleNavigateToSignIn() {
    navigation.navigate('SignIn');
  }
  return (
    <LinearGradient colors={['#DE2B2B', '#FF922E']} style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.subTitleTop}>cervejaria</Text>
        <Text style={styles.title}>ambev</Text>
        <Text style={styles.subTitle}>club</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.textCenter}>
          <Ionicons name="md-beer" size={32} color="white" />
        </Text>
        <Text style={styles.description}>que tal uma gelada?</Text>
      </View>

      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleNavigateToSignIn}>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>
        <RectButton
          style={styles.button}
          onPress={handleNavigateToCreateAccount}
        >
          <Text style={styles.buttonTextGreen}>Criar uma conta</Text>
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

  textCenter: {
    textAlign: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 64,
    fontFamily: 'Lato_700Bold',
    maxWidth: 260,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  subTitle: {
    color: '#fff',
    fontSize: 32,
    fontFamily: 'Lato_700Bold',
    maxWidth: 260,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  subTitleTop: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Lato_700Bold',
    maxWidth: 260,
    textAlign: 'center',
  },

  welcome: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'Lato_700Bold',
    marginTop: 20,
    padding: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  description: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Lato_700Bold',
    marginTop: 0,
    paddingBottom: 24,
    textAlign: 'center',
  },

  footer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonDrink: {
    backgroundColor: '#fff',
    height: 60,
    width: '90%',
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 16,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },

  button: {
    backgroundColor: '#fff',
    height: 60,
    width: '90%',
    flexDirection: 'row',
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

  buttonTextGreen: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#08AA05',
    fontFamily: 'Lato_700Bold',
    fontSize: 20,
  },
});

export default ClientLogin1;
