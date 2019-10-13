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

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Home from './Home';
import Electronics from './Electronics';
import Books from './Books';
import CartScreen from './CartScreen';


const AppNavigator = createStackNavigator({
    Home: Home,
    Electronics: Electronics,
    Books:Books,
    CartScreen:CartScreen
  });




export default createAppContainer(AppNavigator);


