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

import store from './store/index'

import {Provider} from 'react-redux';

// const initialState = {
//     counter:0
// }
// const reducer=(state=initialState,action)=>{
//     switch(action.type)
//     {
//         case 'INCREASE_COUNTER':
//             return {counter:state.counter+1}
//         case 'DECREASE_COUNTER':
//         return {counter:state.counter-1}
//     }
//     return state
// }
// const store = createStore(reducer)



// import CounterApp from './counterapp'

//import TodoApp from './containers/TodoApp'

import ShoppingCart from './containers/ShoppingCart'

class LandingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  
  }


  render() {
    return (
       <Provider store={store}>
             {/* <CounterApp/> */}
             <ShoppingCart/>
       </Provider>
         
        
    )
}

}
export default LandingScreen;
