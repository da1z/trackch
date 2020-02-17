import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';
const TrackDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam('_id');
  const { state } = useContext(TrackContext);

  const track = state.find(t => t._id == _id);
  const initialCords = track.locations[0].coords;
  return (
    <View>
      <Text>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCords
        }}
      >
        <Polyline
          coordinates={track.locations.map(loc => loc.coords)}
        ></Polyline>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});
export default TrackDetailScreen;
