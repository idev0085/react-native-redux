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
import {toggleTodo} from '../actions/index'
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:'',

    }
  }

 
  render() {
    return (
        <View style={{justifyContent:'center',alignItems:'center'}}>
        {
            this.props.todos.map(todo=>
            <TouchableOpacity key={todo.id} onPress={()=>this.props.toggleTodo(todo.id)}>
                <Text style={{fontSize:20, textDecorationLine:todo.completed ? 'line-through':'none'}}>{todo.text}</Text>
            </TouchableOpacity>
        )}
</View>
         
         
        
    )
}

}

function mapStateToProps(state){
   return {todos:state.todos} 
}

function mapDispatchToProps(dispatch){
    return {
        toggleTodo:id=>dispatch(toggleTodo(id))
    } 
 }


export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
