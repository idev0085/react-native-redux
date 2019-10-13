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

import Products from '../components/Products'

class CartScreen extends React.Component {

  static navigationOptions = {
    headerTitle:'Electronics',
    headerRight: <ShoppingCartIcon/>,
};


  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  
    //console.log("CCC"+JSON.stringify(this.props.cartitems))
  }


  
  render() {
    return (
    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <Products products={this.props.cartitems}/>
    </View>
    )
}

}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
   return {} 
}



export default connect(mapStateToProps,mapDispatchToProps)(CartScreen)

