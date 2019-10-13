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
import {connect} from 'react-redux'
import ShoppingCartIcon from '../components/ShoppingCartIcon'

import {books} from '../../Data';
import Products from '../components/Products'


class Books extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle:'Books',
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
      <Products products={books} onPress={this.props.addItemToCart}/>
    </View>
    )
}

}


function mapStateToProps(state){
  return {}
}

function mapDispatchToProps(dispatch){
   return {
       addItemToCart:(product)=>dispatch({type:'ADD_TO_CART',payload:product})
   } 
}


export default connect(mapStateToProps,mapDispatchToProps)(Books)

