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
import { Feather as Icon, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ChoosePassword = () => {
  const navigation = useNavigation();
  const [password, onChangePassword] = React.useState('');
  const [passwordConfimation, onChangePasswordConfirmation] = React.useState(
    '',
  );

  function handleNavigateToSignIn() {
    navigation.navigate('SignIn');
  }

  return (
    <LinearGradient colors={['#DE2B2B', '#FF922E']} style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Só mais um passo</Text>
      </View>

      <View style={styles.inputForm}>
        <Text style={styles.inputLabel}>Escolha uma senha</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => onChangePassword(text)}
          value={password}
        />
        <Text style={styles.inputLabel}>Confirme sua senha</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => onChangePasswordConfirmation(text)}
          value={passwordConfimation}
        />
      </View>

      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleNavigateToSignIn}>
          <Text style={styles.buttonText}>Próximo</Text>
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

  textInput: {
    height: 40,
    padding: 8,
    width: '90%',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
  },

  inputForm: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
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

  inputLabel: {
    color: '#fff',
    fontSize: 24,
    fontFamily: 'Lato_400Regular',
    maxWidth: 260,
    textAlign: 'center',
    padding: 10,
  },

  footer: {
    alignItems: 'center',
    justifyContent: 'center',
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
});

export default ChoosePassword;
