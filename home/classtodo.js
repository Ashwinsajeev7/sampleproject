import React, { Component } from 'react';
import {StyleSheet,Text ,View ,TouchableOpacity ,FlatList ,TextInput} from "react-native";
import Header from '../components/header';


export default class Todo extends Component {
    constructor(props) {
      super(props);
      this.state={
        data:['500','1000','1500','2000'],
        text:''
      }
    }
  
    addTodoItem= () => {
      let tempData=this.state.data;
      tempData.push(this.state.text);
      this.setState({data:tempData});
    }
  
    deleteTodoItem(_index){
      let tempArr = this.state.data;
      tempArr.splice(_index, 1);
      this.setState({data:tempArr});
  }
  
    render() {
      this.addTodoItem
      return (
        <View style={styles.container}>
      
        {
          <Header/>
        }      
                  <FlatList
                      data={this.state.data}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={({item, index}) => {
                          return (
                              <TouchableOpacity
                                  style={{paddingVertical: 8}}
                                    onPress={() => {
                                      this.deleteTodoItem(index);
                                  }}>
                                  <Text style={styles.item}>{item}</Text>
                              </TouchableOpacity>
                          )
                      }}
                  />
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TextInput
                    style={{ flex: 1, borderColor: '#212121', borderWidth: 1, borderRadius: 8 }}
                    placeholder="New amount"
                    maxLength={20}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    />
                    
                    <TouchableOpacity
                    style={{marginLeft: 8, padding: 8, backgroundColor: '#2D58AF', justifyContent: 'center', alignItems: 'center', borderRadius: 8}}
                    onPress={this.addTodoItem}
                    >
                    <Text style={{color: '#fafafa'}}>LAUNCH</Text>
                </TouchableOpacity>
                
                </View>
                <Text>{this.state.value}</Text>
        </View>
        
      );
    }
  };
  
  const styles= StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
    },
    item:{
        padding: 8,
        
        fontSize:25,
        textAlign: 'center',
        color:'black',
        
        marginTop:12,
        
        
        borderRadius: 35,
        backgroundColor: '#DEE4E7'
        
    },
    input:{
      marginBottom: 20,
      paddingHorizontal:8,
      paddingVertical:6,
      borderBottomWidth:1,
      color:'black'
  },
}
)