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
import BottomNavigation from '../components/bottom-navigation';

const Feed = () => {
    const navigation = useNavigation();
    const [filter, setFilter] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    
    function handleNavigateToBars() {
        navigation.navigate('Bars');
    }

    return (
        <>
            <View style={styles.container}> 
                <View style={styles.header}> 
                    <Icon name="menu" size={24} color="white" />   
                    <Icon name="search" size={24} color="white" />         
                </View>
                <View style={styles.filter}>
                    <Text style={styles.regularText}>Classificar por:</Text>
                    <Picker
                    selectedValue={filter}
                    onValueChange={hand => setFilter(hand)}
                    style={{ width: 200 }}
                    mode="dropdown">
                        <Picker.Item label="bares que eu sigo" value="bares que eu sigo"/>
                        <Picker.Item label="bares próximos" value="bares próximos"/>
                    </Picker>
                </View>

                <ScrollView style={styles.scrollView}>
                    <View style={styles.scrollViewContainer}>
                        <View style={styles.feedCard}>
                            <Image 
                            style={styles.image}
                            source={require('../../../assets/party-beer.jpg')}
                            />
                            <Text style={styles.feedCardRegularText}>Bar do Seu Jõao</Text>
                            <Text style={styles.feedCardBoldText}>Cervejada 3 por 2</Text>
                            <Text style={styles.feedCardRegularText}>Hoje às 21h</Text>
                        </View>

                        <View style={styles.feedCard}>
                            <Image 
                            style={styles.image}
                            source={require('../../../assets/rock-bar.jpg')}
                            />
                            <Text style={styles.feedCardRegularText}>Bar Thunderstruck</Text>
                            <Text style={styles.feedCardBoldText}>Noite do Rock, open bar</Text>
                            <Text style={styles.feedCardRegularText}>Amanhã às 23h</Text>
                        </View>

                        <View style={styles.feedCard}>
                            <Image 
                            style={styles.image}
                            source={require('../../../assets/party-beer.jpg')}
                            />
                            <Text style={styles.feedCardRegularText}>Bar do Seu Jõao</Text>
                            <Text style={styles.feedCardBoldText}>Cervejada 3 por 2</Text>
                            <Text style={styles.feedCardRegularText}>Hoje às 21h</Text>
                        </View>
                    </View>


                </ScrollView>
                
            </View>
            <BottomNavigation/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 32,
      backgroundColor: "white",
      alignItems: "center",
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
        padding: 10
    },


    //SCROLL VIEW STYLES
    scrollView: {
        width: "100%",
        padding: 10
    },

    scrollViewContainer: {
        justifyContent: "center",
    },

    image: {
        width: "100%",
        height: 200,
    },

    feedCard: {
        marginTop: 20,
        width: "95%",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        
        elevation: 6,
    },

    feedCardRegularText: {
        color: '#000',
        fontSize: 16,
        fontFamily: 'Lato_400Regular',
        maxWidth: 260,
        textAlign: 'left',
        marginTop: 10
    },

    feedCardBoldText: {
        color: '#000',
        fontSize: 20,
        fontFamily: 'Lato_700Bold',
        maxWidth: 260,
        textAlign: 'left'
    },


    //BOTTOM NAVIGATION STYLES
    bottomNavigation: {
        padding: 15,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#DE2B2B',
        justifyContent: 'space-around',
    },

    navigationBottonItem: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    bottomNavigationText: {
        color: '#fff',
        fontFamily: 'Lato_400Regular',
    },

    bottomNavigationTextSelected: {
        color: '#FFED46',
        fontFamily: 'Lato_400Regular',
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

export default Feed;