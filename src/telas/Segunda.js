import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import Menu from "./Menu";

export default function Segunda(){
    return <>
        <Menu></Menu>
        <View style={styles.containerCesta}>
            <View style={{flex: 1}}>
                <Image source={{uri: 'https://oppitz.com.br/media/djcatalog2/images/item/0/terminal-de-autoatendimento-05_f.jpg'}}
                style={{ width: 200, height: 200 }}   
                />
            </View>
          
            <View style={{flex: 1}}>
                <Text>Thiago Oliveira</Text>
                <Text>Adriana Pecorolli</Text>
                <Text>Wesley Ruben</Text>
                <Text>Alexandre Hideki</Text>
                <Text>José Roberto</Text>
                <Text>Alex Silva</Text>
                <Text>João Victor Nascimento</Text>
                <Text>Matheus Henrique</Text>
            </View>
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