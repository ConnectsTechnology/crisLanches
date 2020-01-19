import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
var { height, width } = Dimensions.get('window')
import MapView, { Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'

export default function Map() {
    const [currentRegion, setCurrentRegion] = useState(null)
    const [latitudes, setLatitude] = useState(0.0)
    const [longitudes, setLongitude] = useState(0.0)
    function handleRegionChange(region) {
        setCurrentRegion(region)
    }

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync()
            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                })

                const { latitude, longitude } = coords
                setLatitude(latitude)
                setLongitude(longitude)
                console.log("lat: ", latitude);
                console.log("lng: ", longitude);
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.18,
                    longitudeDelta: 0.1,
                })
            }
        }
        loadInitialPosition()
    }, [])
    return (
        <MapView onRegionChange={handleRegionChange} style={{ flex: 1, width: width, height: 300 }} initialRegion={currentRegion} >
            <Marker coordinate={{ latitude: -12.9413671, longitude: -38.4438961 }}>
                <Image style={styles.avatar} source={require("../image/cris-lanches.png")} />
                <Callout style={styles.callouts}>
                    <View style={styles.callout}>
                        <Text style={styles.crisName}>Cris Lanches</Text>
                        <Text style={styles.crisPhone}>(71) 4111-1051</Text>
                        <Text style={styles.crisAddress}>R. São Paulo, 08 - Tancredo Neves, Salvador - BA, 41207-220</Text>
                    </View>
                </Callout>
            </Marker>
            <Marker coordinate={{ latitude: latitudes, longitude: longitudes }}>
                <Image style={styles.avatar} source={{ uri: 'https://avatars3.githubusercontent.com/u/28121155?s=460&v=4' }} />
                <Callout style={styles.callouts}>
                    <View style={styles.callout}>
                        <Text style={styles.crisName}>Nailson Mello</Text>
                        <Text style={styles.crisPhone}>(71) 98160-7760</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>
    )
}

const styles = StyleSheet.create({
    avatar:{
        width: 54,
        height: 54,
        borderRadius: 20,
        borderWidth: 4,
        borderColor: '#FFF'
    },
    callouts:{
        width: 260,
        borderRadius: 4,
    },
    callout:{
        width: 260,
    },
    crisName:{
        fontWeight: 'bold',
        fontSize: 16,

    },
    crisPhone: {
        marginTop: 5,
    },
    crisAddress:{
        color: '#666',
        marginTop: 5,
    }
});