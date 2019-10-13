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


class Products extends React.Component {



  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  
  }


  render() {

    const listItems = this.props.products.map((item, index) =>
      <TouchableOpacity style={{marginTop:20}} key={item.id} onPress={() => this.props.onPress(item)}>
       <Text style={{fontSize:20}}>{item.name}</Text>
      </TouchableOpacity>
    );




    return (
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        {listItems}
      </View>
    )
}

}
export default Products;
