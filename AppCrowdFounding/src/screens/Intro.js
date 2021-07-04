import React from 'react'
import { View, Text, Image, StatusBar, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'

//import module  react native app intro slider
import AppIntroSlider from 'react-native-app-intro-slider'

// data yang akan kita tampilkan sebagai onboarding aplikasi
const data = [
    {
        id: 1,
        image: require('../assets/images/Undraw1.png'),
        description: 'Easy to join'
    },
    {
        id: 2,
        image: require('../assets/images/Undraw2.png'),
        description: 'Build your profile'
    },
    {
        id: 3,
        image: require('../assets/images/Undraw3.png'),
        description: 'More connection'
    }
]

const Intro = ({ navigation }) => {

    //tampilan onboarding yang ditampilkan dalam renderItem
    const renderItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <View style={{flex:3}}>
                    <Image source={item.image} style={{height:250, width:380}}  />
                </View>
                <Text style={{flex:1, textAlign:'center', color:'#34b4eb'}}>{item.description}</Text>
            </View>
        )
    }

    return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'white'} barStyle="light-content" />
                <View style={{flex:1}}>
                    <Text style={styles.textLogo}>Crowd Funding App.</Text>
                </View>
                <View style={{flex:3}}>
                    {/* contoh menggunakan component react native app intro slider */}
                    <AppIntroSlider
                        data={data} //masukan data yang akan ditampilkan menjadi onBoarding, dia bernilai array
                        renderItem={renderItem} // untuk menampilkan onBoarding dar data array
                        renderNextButton={() => null}
                        renderDoneButton={() => null}
                        activeDotStyle={{backgroundColor:'#34b4eb'}}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
                <View style={{flex:1}}>
                    <TouchableOpacity style={styles.btnMasuk} >
                        <Text style={{textAlign:'center', marginTop:12, color:'white', fontWeight:'bold'}}>MASUK</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnDaftar} onPress={() => navigation.navigate('Register')}>
                        <Text style={{textAlign:'center', marginTop:10, color:'#34b4eb', fontWeight:'bold'}}>DAFTAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    btnMasuk:{
        height:45, 
        borderRadius:0, 
        backgroundColor:'#34b4eb', 
        marginBottom:10, 
        marginHorizontal:40
    },
    btnDaftar:{
        height:45, 
        borderRadius:0, 
        borderWidth:3, 
        borderColor:'#34b4eb', 
        marginBottom:20, 
        marginHorizontal:40
    },
    textLogo: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign:"center",
        marginTop:40,
        color: '#34b4eb'
    }
})

export default Intro
