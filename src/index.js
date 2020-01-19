import React from 'react';
import {
    View,
    Dimensions,
    ScrollView,
    SafeAreaView,
    YellowBox
} from 'react-native';
var { height, width } = Dimensions.get('window')

import Data from './pages/data'
import Map from './pages/map'
YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
])
export default function Index() {

    return (
        <SafeAreaView>
            <ScrollView alwaysBounceVertical>
                <View style={{ flex: 1, backgroundColor: "#f5c55f" }}>
                    <Data/>
                    <View style={{ width: width, paddingBottom: 5, backgroundColor: 'white' }}>
                      <Map/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

