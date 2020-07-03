import React from 'react';
import {StyleSheet, TextInput, ImageBackground, Text, View, Image, } from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';
import { Feather as Icon, Ionicons  } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'


const CreateAccount = () => {
    const navigation = useNavigation();
    const [value, onChangeText] = React.useState('Useless Placeholder');
    
    function handleNavigateToCreatePersona() {
        navigation.navigate('Points');
    }

    return (
        <LinearGradient 
            colors={['#DE2B2B', '#FF922E']}
            style={styles.container}
            >
            <View style={styles.header}> 
                <Text style={styles.title}>Olá!</Text>
            </View>

            <View style={styles.inputForm}> 
                <Text style={styles.inputLabel}>Qual o seu nome?</Text>
                <TextInput
                style={styles.textInput}
                onChangeText={text => onChangeText(text)}
                value={value}
                />
                <Text style={styles.inputLabel}>Qual o seu email?</Text>
                <TextInput
                style={styles.textInput}
                onChangeText={text => onChangeText(text)}
                value={value}
                />
            </View>

            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleNavigateToCreatePersona}>
                    <Text style={styles.buttonText}>Próximo</Text>
                </RectButton>
            </View>
        </LinearGradient>
    )
}

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
        marginBottom: 10
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
        maxWidth: 260,
        textAlign: 'center',
    },

    inputLabel: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'Lato_400Regular',
        maxWidth: 260,
        textAlign: 'center',
        padding: 10
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

export default CreateAccount;