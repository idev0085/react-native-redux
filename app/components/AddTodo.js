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

import {connect} from 'react-redux'
import {addTodo} from '../actions/index'
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:'',

    }
  }

  componentDidMount() {
  
  }
  addTodo=()=>
  {
  
    this.props.dispatch(addTodo(this.state.text))
    this.setState({
      text:''
    })
  }


  render() {
    return (
       <View style={{flexDirection:'row',marginHorizontal:50,justifyContent:'space-around',paddingTop:40}}>
           <TextInput
           placeholder='Text here'
           style={{flex:1, height:40,padding:10,backgroundColor:'#eee'}}
           value={this.state.text}
           onChangeText={text=>this.setState({text})}
           />

           <TouchableOpacity onPress={()=>this.addTodo()} style={{marginLeft:10,justifyContent:'center',alignItems:'center', backgroundColor:'green',height:40,width:40}}>
           <Text style={{color:'#FFF',fontWeight:'700',fontSize:20}}>+</Text>
           </TouchableOpacity>
       </View>
         

        
    )
}

}



export default connect()(AddTodo);
