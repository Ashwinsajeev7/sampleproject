import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';

export default function Todoitem({item, pressHandler}) {
    
    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    item:{
        padding: 8,
        
        fontSize:25,
        textAlign: 'center',
        color:'black',
        
        marginTop:12,
        
        
        borderRadius: 15,
        backgroundColor: '#DEE4E7'
        
    }

})