import React from 'react'
import { View, Text, Image, StatusBar, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'

//import module  react native app intro slider
import AppIntroSlider from 'react-native-app-intro-slider'

// data yang akan kita tampilkan sebagai onboarding aplikasi
const data = [
    {
        id: 1,
        image: require('../assets/images/Undraw1.png'),
        description: 'Description Text 1'
    },
    {
        id: 2,
        image: require('../assets/images/Undraw2.png'),
        description: 'Description Text 2'
    },
    {
        id: 3,
        image: require('../assets/images/Undraw3.png'),
        description: 'Description Text 3'
    }
]

const Intro = ({ navigation }) => {

    //tampilan onboarding yang ditampilkan dalam renderItem
    const renderItem = ({ item }) => {
        return (
            <View style={{flex: 1}}>
                <View style={{flex:3}}>
                    <Image source={item.image} style={{height:250, width:380}}  />
                </View>
                <Text style={{flex:1, textAlign:'center', color:'skyblue'}}>{item.description}</Text>
            </View>
        )
    }

    return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'white'} barStyle="light-content" />
                <View style={{flex:1}}>
                    <Text style={styles.textLogo}>Crowd Funding</Text>
                </View>
                <View style={{flex:3}}>
                    {/* contoh menggunakan component react native app intro slider */}
                    <AppIntroSlider
                        data={data} //masukan data yang akan ditampilkan menjadi onBoarding, dia bernilai array
                        renderItem={renderItem} // untuk menampilkan onBoarding dar data array
                        renderNextButton={() => null}
                        renderDoneButton={() => null}
                        activeDotStyle={{backgroundColor:'skyblue'}}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity style={{height:45, borderRadius:0, backgroundColor:'skyblue', marginBottom:10, marginHorizontal:40}} >
                        <Text style={{textAlign:'center', marginTop:12, color:'white', fontWeight:'bold'}}>MASUK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:45, borderRadius:0, borderWidth:3, borderColor:'skyblue', marginBottom:20, marginHorizontal:40}} onPress={() => navigation.navigate('Register')}>
                        <Text style={{textAlign:'center', marginTop:10, color:'skyblue', fontWeight:'bold'}}>DAFTAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    quotesContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    quotes: {
        fontSize: 14,
        color: 'white'
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    textLogo: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:"center",
        marginTop:50,
        color: 'skyblue'
    }
})

export default Intro
