import React from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
export default function Menu({userData}){


    return <>
                <View style={styles.containerCesta}>
                        <Text>Projeto 1 - Mobile</Text>
                </View>
            </>
    

}

const styles = StyleSheet.create({
    containerCesta: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
})