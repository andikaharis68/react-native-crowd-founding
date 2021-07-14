import React, {useEffect} from 'react'
import { View, Text, StatusBar, Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Account({ navigation }) {     

    useEffect(() => {
        async function getToken(){
            try {
                const token = await AsyncStorage.getItem("token")
                console.log("token", token)
            } catch(e) {    
                console.log("error", e)
            }
        }
        getToken()
    }, [])

    const onPressLogout = async () => {
        try {
            await AsyncStorage.removeItem("token")
            navigation.navigate("SignIn")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#34b4eb'} barStyle="light-content" />
            <View style={styles.containerAccount}>
                <Text style={styles.textAccount}>Account</Text>
            </View>
            <View style={styles.containerProfile}>
                <View style={styles.imageProfile}></View>
                <Text style={styles.textProfile}>Moch. Andika Haris</Text>
            </View>
            <View style={styles.containerMenu}>
                <Image style={styles.imageMenu} source={require('../../assets/images/wallet.png')}/>
                <Text style={{fontSize:18, flex:1}}>Saldo</Text>
                <Text style={{fontSize:18, marginHorizontal:20}}>Rp. 2.000.000</Text>
            </View>
            <View style={styles.containerMenu}>
                <Image style={styles.imageMenu} source={require('../../assets/images/settings.png')}/>
                <Text style={styles.textMenu}>Pengaturan</Text>
            </View>
            <View style={styles.containerMenu}>
                <Image style={styles.imageMenu} source={require('../../assets/images/help.png')}/>
                <Text style={styles.textMenu}>Bantuan</Text>
            </View>
            <View style={styles.containerMenu}>
                <Image style={styles.imageMenu} source={require('../../assets/images/terms.png')}/>
                <Text style={styles.textMenu}>Syarat & Ketentuan</Text>
            </View>
            <TouchableOpacity style={styles.containerMenu} onPress={onPressLogout}>
                <Image style={styles.imageMenu} source={require('../../assets/images/exit.png')}/>
                <Text style={styles.textMenu}>Keluar</Text>
            </TouchableOpacity>
        </View>
    )    
}

const styles = StyleSheet.create({
    container : {
        flex:1, 
        backgroundColor:'#e9ebf0'
    },
    containerAccount : {
        backgroundColor:'#34b4eb', 
        height:65
    },
    textAccount : {
        fontSize:25, 
        color:'white', 
        fontWeight:'bold', 
        marginTop:13, 
        marginLeft:20
    },
    containerProfile : {
        backgroundColor:'white',
        height:80, 
        flexDirection:'row',
        alignItems:'center'
    },
    imageProfile : {
        height:50, 
        width:50, 
        backgroundColor:'gray', 
        borderRadius:50, 
        marginHorizontal:20
    },
    textProfile : {
        fontSize:20, 
        fontWeight:'bold'
    }, 
    containerMenu : {
        backgroundColor:'white', 
        height:65, 
        flexDirection:'row', 
        alignItems:'center',
        marginTop: 2
    },
    imageMenu : {
        height:30, 
        width:30, 
        marginHorizontal:20
    },
    textMenu : {
        fontSize : 18
    }
})
