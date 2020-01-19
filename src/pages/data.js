import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    FlatList,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
var { height, width } = Dimensions.get('window')
import Swiper from 'react-native-swiper'
//import api from '../service/api'

export default function Data() {
    const [dataBanner, setDataBanner] = useState([])
    const [dataCategories, setDataCategories] = useState([])
    const [dataFood, setDataFood] = useState([])
    const [selectCatg, setSelectCatg] = useState(0)

    const url = "http://www.json-generator.com/api/json/get/bTNpsCmzyq?indent=2"
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                setDataBanner(responseJson.banner)
                setDataCategories(responseJson.categories)
                setDataFood(responseJson.food)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    function _renderItemFood(item) {
        let catg = selectCatg
        if (catg == 0 || catg == item.categorie) {
            return (
                <TouchableOpacity style={styles.divFood}>
                    <Image
                        style={styles.imageFood}
                        resizeMode="contain"
                        source={{ uri: item.image }} />
                    <View style={{ height: ((width / 2) - 20) - 90, backgroundColor: 'transparent', width: ((width / 2) - 20) - 10 }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 22, textAlign: 'center' }}>
                        {item.name}
                    </Text>
                    <Text style={{ flex: 0.9 }}>Detalhes da comida</Text>
                    <Text style={{ fontSize: 20, color: "green", flex: 0.1 }}>R${item.price}.00</Text>
                </TouchableOpacity>
            )
        }
    }
    function _renderItem(item) {
        return (
            <TouchableOpacity style={[styles.divCategorie, { backgroundColor: item.color }]}
                onPress={() => setSelectCatg(item.id)}>
                <Image
                    style={{ width: 100, height: 80 }}
                    resizeMode="contain"
                    source={{ uri: item.image }} />
                <Text style={{ fontWeight: 'bold', fontSize: 22 }}>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <>
            <View style={{ width: width, alignItems: 'center' }} >
                {/* <Image style={{ height: 50, width: width / 2, marginTop: 10, marginBottom: 10 }} resizeMode="contain" source={require("../../assets/icon.png")} /> */}
                <Swiper style={{ height: width / 2, marginTop: 10 }} showsButtons={false} autoplay={true} autoplayTimeout={2}>
                    {
                        dataBanner.map((itembann, i) => {
                            return (
                                <Image style={styles.imageBanner} resizeMode="contain" source={{ uri: itembann }} key={itembann.toString()} />
                            )
                        })
                    }
                </Swiper>
                <View style={{ height: 20 }} />
            </View>
            <View style={{ width: width, borderTopRightRadius: 20, borderTopLeftRadius: 20, paddingVertical: 10, backgroundColor: 'white' }}>
                <Text style={styles.titleCatg}>Categorias</Text>
                <FlatList
                    horizontal={true}
                    data={dataCategories}
                    renderItem={({ item }) => _renderItem(item)}
                    keyExtractor={(item, index) => index.toString()}
                />
                <FlatList
                    //horizontal={true}
                    data={dataFood}
                    numColumns={2}
                    renderItem={({ item }) => _renderItemFood(item)}
                    keyExtractor={(item, index) => index.toString()}
                />
                <View style={{ height: 20 }} />
            </View>

        </>
    )
}
const styles = StyleSheet.create({
    imageBanner: {
        height: width / 2,
        width: width - 40,
        borderRadius: 10,
        marginHorizontal: 20
    },
    divCategorie: {
        backgroundColor: 'red',
        margin: 5, alignItems: 'center',
        borderRadius: 10,
        padding: 10
    },
    titleCatg: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    imageFood: {
        width: ((width / 2) - 20) - 10,
        height: ((width / 2) - 20) - 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45
    },
    divFood: {
        width: (width / 2) - 20,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        shadowOpacity: 0.3,
        shadowRadius: 50,
        backgroundColor: 'white',
    }
});