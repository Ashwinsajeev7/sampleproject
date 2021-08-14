import * as React from 'react';
import { View, Text,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tesla from './home/tesla';
import {WebView} from 'react-native-webview';
import Classtodo from './home/classtodo';
import News from './components/new';




const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', paddingTop: 20}}>
      <Text style={{fontSize: 36, fontWeight: 'bold', paddingBottom: 50}}>BANK</Text>
        <View style={{  
        margin: 50,  
        flexDirection: 'column',  
        justifyContent: 'space-between'  
    }}>  
          <Button 
            title= "Fednet"
            onPress={() => navigation.navigate('fednet')}
          />
          <Text>           </Text>
          <Button
            title= "website"
            onPress={() => navigation.navigate('website')}
          /><Text>           </Text>
          
          
          <Button
            title= "Federal bank"
            onPress={() => navigation.navigate('Federal bank')}
          />
          <Text>             </Text>
          <Button
            title= "News"
            onPress={() => navigation.navigate('News')}
          />
          <Text>             </Text>

          
        </View>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Federal bank" component={Tesla} />
        <Stack.Screen name="website" component={Website} />
        <Stack.Screen name="fednet" component={Classtodo} />
        <Stack.Screen name="News" component={News} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Website = () => {
  return (
    <WebView
    style={{flex:1}}
    source={{uri: 'https://www.federalbank.co.in/'}}
    />
  );
}

export default App;
  