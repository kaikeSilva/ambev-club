import React from 'react';
import Constants from 'expo-constants';
import { Feather as Icon, FontAwesome5 } from '@expo/vector-icons';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { SvgUri } from 'react-native-svg';
import BottomNavigation from '../../../components/BottomNavigation';
import TopNavigation from '../../../components/TopNavigation';

const Points = () => {
  const navigation = useNavigation();
  const [showBar, setShowBar] = React.useState<boolean>(false);

  function handleNavigationBack() {
    navigation.goBack();
  }

  function showBarDetails(): JSX.Element {
    return (
      <View style={styles.mapMarkerContainer}>
        <Image
          style={styles.mapMarkerImage}
          source={{
            uri:
              'https://images.unsplash.com/photo-1519581706005-e1b7e2de264c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
          }}
        />
        <Text style={styles.mapMarkerTitle}>Mercado</Text>
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: -16.6500617,
              longitude: -49.4616647,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }}
          >
            <Marker
              style={styles.mapMarker}
              onPress={() => setShowBar(true)}
              coordinate={{
                latitude: -16.6500617,
                longitude: -49.4616,
              }}
            >
              <View>{showBar ? showBarDetails() : null}</View>
              <FontAwesome5 name="map-marker-alt" size={24} color="black" />
            </Marker>
          </MapView>
        </View>
      </View>
      <BottomNavigation />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 4,
    fontFamily: 'Roboto_400Regular',
  },

  mapContainer: {
    flex: 1,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 16,
  },

  map: {
    width: '100%',
    height: '100%',
  },

  mapMarker: {
    width: 90,
    height: 80,
  },

  mapMarkerContainer: {
    width: 90,
    height: 70,
    backgroundColor: '#34CB79',
    flexDirection: 'column',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
  },

  mapMarkerImage: {
    width: 90,
    height: 45,
    resizeMode: 'cover',
  },

  mapMarkerTitle: {
    flex: 1,
    fontFamily: 'Roboto_400Regular',
    color: '#FFF',
    fontSize: 13,
    lineHeight: 23,
  },

  bottomNavigation: {
    width: '100%',
  },
});

export default Points;
