import React, { useState} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Header from '../components/header';
import Todoitem from '../components/todoitem';
import Addmodel from '../components/addmodel';



export default function tesla() {
  const [todos, setTodos] = useState([
    { text: '500', key:'1'},
    { text: '1000', key:'2'},
    { text: '1500', key:'3'},
    { text: '2000', key:'4'}
  ]);

  const pressHandler =(key) => {
    setTodos((pervTodos) =>{
      return pervTodos.filter(todo => todo.key !=key);
    });

  }

  const submitHandler =(text) => {
    setTodos((pervTodos)=>{
      return [{ text: text, key:Math.random().toString()},
        ...pervTodos
        
      
      
      
      ]
      
    });
  }

return (
    <View style={styles.container}>
      
        {
          <Header/>
        }
        <View style={styles.content}>
            
              
            
            <View style={styles.list}>       
                <FlatList
                    data={todos}
                    renderItem={({ item}) => (
                        <Todoitem item={item} pressHandler={pressHandler}/>
                    )}
                 />     
            </View>
            <Addmodel submitHandler={submitHandler}/>
        </View>  
             
      </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
    },
    content:{
        padding:30,
    },
    list: {
        marginTop: 20,
        padding:5,
    },
    

})