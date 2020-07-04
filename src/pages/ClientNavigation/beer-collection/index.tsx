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
import TopNavigation from '../../../components/top-navigation';
import BottomNavigation from '../../components/bottom-navigation';

const BeerCollection = () => {
    const navigation = useNavigation();
    const [filter, setFilter] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    
    function handleNavigateToBars() {
        navigation.navigate('Bars');
    }

    return (
        <>
            <TopNavigation/>
            <View style={styles.container}>
                <View style={styles.beerCard}>
                    <Image 
                    source={require('../../assets/colorado-eugenia.png')} 
                    />
                    <View style={styles.beerTextCard}>
                        <Text>Eugênia</Text>
                        <Text>Session IPA</Text>
                    </View>
                </View>

            </View>
            <BottomNavigation/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",

    },

    beerCard: {
        flexDirection: 'row',
        borderWidth: 2,
    },

    beerTextCard: {
        paddingLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }

  });

export default BeerCollection;