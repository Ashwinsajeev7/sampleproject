import React, {useState} from 'react';
import { StyleSheet,TouchableOpacity, Text,TextInput, Button, View} from 'react-native';


export default function Addmodel({submitHandler}){
    const [text, setText]= useState('');

    const changeHandler = (val) => {
        setText(val);
    }
    const title= <Text>Launch</Text>

    return(
        <View>
            <TextInput
            style={styles.input}
            placeholder='New amount'
            onChangeText={changeHandler}/>
            <Button onPress={()=> submitHandler(text)} title='LAUNCH' color='#2D58AF'/>   
           
        </View>
    )
}

const styles=StyleSheet.create({
    input:{
        marginBottom: 20,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        color:'black'
    },
    
})