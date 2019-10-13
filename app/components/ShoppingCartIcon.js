import React, { PureComponent } from 'react';
import {  View, Text } from 'react-native';
import {connect} from 'react-redux'
const ShoppingCartIcon = (props)=> {

  console.log("props===="+JSON.stringify(props))
  return (    
    <View style={{marginRight:20}}>
        <Text style={{fontSize:20}}> {props.cartitems.length} </Text>
      </View>
  )
   
}

const mapStateToProps = (state) =>{
  return state
}






export default connect(mapStateToProps)(ShoppingCartIcon)
