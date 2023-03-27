import React from 'react'
import {View,Image,StyleSheet} from 'react-native'
 


export default class Loading extends React.Component{
  constructor(){
    super()
  }
  componentDidMount(){
    this.props.navigation.navigate('Login')
  }
 
render(){
  
return(
 <View style={styles.container}>
 <Image source={{uri:'https://media.tenor.com/guhB4PpjrmUAAAAM/loading-loading-gif.gif'}} style={styles.img}/>
 </View>
)
}
}
const styles = StyleSheet.create({
  img:{width:150, height: 150 ,alignSelf:'center'},
  container:{justifyContent:'center', flex: 1}

})