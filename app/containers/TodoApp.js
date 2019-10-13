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

import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
// import VisibleTodo from './containers/VisibleTodo'




class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  
  }


  render() {
    return (
       <View>
             <AddTodo/>
             <View>
             <TodoList/>
             </View>
            
       </View>
    )
}

}
export default TodoApp;
