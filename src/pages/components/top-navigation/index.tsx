import React from 'react';
import {RectButton} from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';
import { Feather as Icon, Ionicons,MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import {
    StyleSheet,
    TextInput,
    ImageBackground,
    Text,
    View,
    Image,
    Picker,
    ScrollView } from 'react-native';

const TopNavigation = () => {

    return (
        <View style={styles.header}> 
            <Icon name="menu" size={24} color="white" />   
            <Icon name="search" size={24} color="white" />         
        </View>
    )
}

const styles = StyleSheet.create({

    //HEADDER STYLES
    header: {
        paddingTop: 32,
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
        padding: 10
    },

  });

export default TopNavigation;