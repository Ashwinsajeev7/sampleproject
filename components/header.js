import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return(
        <View style={styles.header} >
            <Text style={styles.title}> FEDERAL BANK </Text>
        </View>
    )
}

const styles =StyleSheet.create({
    header:{
        height:60,
        
        paddingTop:40,
        backgroundColor:'#2D58AF'
    },
    title: {
        fontStyle:'italic',
        marginTop:-28,
        textAlign: 'center',
        color: '#fff',
        fontSize:30,
        fontWeight:'bold',
    }
});