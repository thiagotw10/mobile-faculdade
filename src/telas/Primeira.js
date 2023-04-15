import React from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import Menu from "./Menu";
export default function Primeira(){

    function alerta(){
        Alert.alert('Olá')
    }

    return <>
                <Menu></Menu>
                <View style={styles.containerCesta}>
                    <TouchableOpacity style={styles.botao} onPress={()=>alerta()}>
                        <Text>ALERTA</Text>
                    </TouchableOpacity>
                </View>
            </>
    

}

const styles = StyleSheet.create({
    containerCesta: {
      flex: 4,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },

    botao: {
        backgroundColor: 'green',
        width: 100,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})