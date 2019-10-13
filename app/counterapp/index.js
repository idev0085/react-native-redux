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

import {connect} from 'react-redux';

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
  
  }

  _doIncrease()
  {
      Alert.alert('_doIncrease')

  }

  _doDecrease()
  {
    Alert.alert('_doDecrease')
  }


  render() {
    return (
        <View style={{flex:1,justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
            <TouchableOpacity onPress={()=>this.props.increaseCounter()} style={{backgroundColor:'green',padding:10}}>
                <Text style={{color:'#FFF',fontWeight:'700',fontSize:20}}>+</Text>
            </TouchableOpacity>
            <Text style={{fontWeight:'700',fontSize:30}}>{this.props.counter}</Text>
            <TouchableOpacity onPress={()=>this.props.decreaseCounter()} style={{backgroundColor:'red',padding:10}}>
                <Text style={{color:'#FFF',fontWeight:'700',fontSize:20}}>-</Text>
            </TouchableOpacity>
        </View>
    )
}

}

function mapStateToProps(state)
{
    return {
        counter:state.counter
    }
}

function mapDispatchToProps(dispatch)
{
    return {
        increaseCounter:()=>dispatch({type:'INCREASE_COUNTER'}),
        decreaseCounter:()=>dispatch({type:'DECREASE_COUNTER'})
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CounterApp);
