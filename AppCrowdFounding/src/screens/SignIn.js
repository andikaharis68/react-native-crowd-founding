import React from 'react'
import {View, TextInput, Text, StyleSheet, StatusBar, Image, TouchableOpacity} from 'react-native'

export default function SignIn({ navigation: { goBack } }) {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#34b4eb'} barStyle="light-content" />
            <View style={styles.containerMasuk}>
                <Text style={styles.textMasuk}>Masuk</Text>
            </View>
            <View style={styles.containerLogin}>
                <Text style={styles.textLogin}>Silahkan login untuk mengakses semua fitur yang ada dalam Aplikasi Crowd Founding</Text>
                <View style={styles.containerInput}>
                    <TextInput style={styles.textInput} placeholder='Username'></TextInput>
                    <TextInput style={styles.textInput} placeholder='Password'></TextInput>
                </View>
                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.textBtnLogin}>LOGIN</Text>
                </TouchableOpacity>
                <View style={styles.containerDaftar}>
                    <Text style={{fontSize:16}}>Belum punya akun?</Text>
                    <TouchableOpacity>
                        <Text style={styles.textDaftar}>Daftar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerFinger}>
                    <Text style={styles.textCepat}>Atau lebih cepat dengan</Text>
                    <View style={styles.viewBtn}>
                        <TouchableOpacity style={styles.btnCepat}>
                            <Image style={styles.imageCepat} source={require('../../assets/images/fingerprint.png')}/>
                            <Text style={{fontWeight:'bold'}}>Fingerprint</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnCepat}>
                            <Image style={styles.imageCepat} source={require('../../assets/images/search.png')}/>
                            <Text style={{fontWeight:'bold'}}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
    },
    containerMasuk : {
        backgroundColor:'#34b4eb', 
        height:65
    },
    textMasuk : {
        fontSize:25, 
        color:'white', 
        fontWeight:'bold', 
        marginTop:13, 
        marginLeft:20
    }, 
    containerLogin:{
        marginHorizontal:25, 
        marginVertical: 20
    },
    textLogin: {
        fontWeight:'bold', 
        fontSize:18
    },
    containerInput: { 
        height:140, 
        marginVertical:20, 
        justifyContent:'space-between'
    },
    textInput: {
        height:60, 
        borderBottomWidth:2, 
        borderColor:'gray'
    },
    btnLogin : {
        elevation:10, 
        borderRadius:5, 
        height:45, 
        backgroundColor:'#34b4eb', 
        alignItems:'center', 
        justifyContent:'center'
    },
    textBtnLogin: {
        fontSize:18, 
        color:'white', 
        fontWeight:'bold'
    },
    containerDaftar: {
        height:50, 
        marginVertical:10, 
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center'
    },
    textDaftar:{
        fontSize:16, 
        color:'#34b4eb', 
        marginLeft:5, 
        fontWeight:'bold'
    },
    containerFinger: {
        height:100,
        marginTop:90, 
        justifyContent:'center', 
        alignItems:'center'
    },
    textCepat: {
        flex:1, 
        fontSize:18, 
        fontWeight:'bold'
    },
    viewBtn : {
        flex:1, 
        flexDirection:'row', 
        paddingHorizontal:20
    },
    btnCepat : {
        flex:1, 
        flexDirection:'row', 
        justifyContent:'space-around', 
        alignItems:'center', 
        marginHorizontal:10, 
        height:45, 
        elevation:2
    },
    imageCepat : {
        height:25, 
        width:25
    },
        
})

