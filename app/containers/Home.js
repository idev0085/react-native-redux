/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  FlatList,
  Modal,
  Alert,
  ImageBackground
} from 'react-native';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

import ShoppingCartIcon from '../components/ShoppingCartIcon'


class Home extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle:'Electronics',
      headerRight: <ShoppingCartIcon/>
  })
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  
  }


  render() {
    return (
       <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
           <TouchableOpacity style={{backgroundColor:'#eee',padding:10}} onPress={() => this.props.navigation.navigate('Electronics')}>
            <Text style={{fontSize:20}}>Electronics</Text>
           </TouchableOpacity>

           <TouchableOpacity style={{marginTop:50, backgroundColor:'#eee',padding:10}} onPress={() => this.props.navigation.navigate('Books')}>
            <Text style={{fontSize:20}}>Books</Text>
           </TouchableOpacity>

           <TouchableOpacity style={{marginTop:50, backgroundColor:'#eee',padding:10}} onPress={() => this.props.navigation.navigate('CartScreen')}>
            <Text style={{fontSize:20}}>Cart</Text>
           </TouchableOpacity>


          
       </View>
    )
}

}
export default Home;
