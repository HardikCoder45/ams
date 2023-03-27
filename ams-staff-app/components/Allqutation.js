import React from 'react'
import {View,Text,StyleSheet,ImageBackground} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default class Allqutation extends React.Component{
render(){
return(
      <ImageBackground
        source={{ uri: 'https://st2.depositphotos.com/6504442/9281/i/450/depositphotos_92819326-stock-photo-raster-abstract-dark-blue-blurred.jpg' }}
         style={{flex:1}}
      >
 <View style={styles.header}>
 <Ionicons name="menu" color="white" size={35} style={{marginTop:40,marginLeft:20,marginBottom:10}} onPress={()=>{this.props.navigation.openDrawer()}}/>
 
 <Text style={styles.t1}>Your Qutations</Text>

 </View>
  <View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
 </ImageBackground>
 
)
}
}

const styles = StyleSheet.create({
  t1:{
  fontSize:27,
  fontWeight:'bold',
  alignSelf:'center',
color:'white',
marginLeft:65,
marginTop:40,
justifyContent:'center',
marginBottom:10
  },
header:{
  top:0,
 display:"flex",
 flexDirection: 'row',
 
 
  }
})