import Rwact from 'react'
import {DrawerContentScrollView,DrawerItemList} from '@react-navigation/drawer'
import {View,Image, Text ,ImageBackground} from 'react-native'
 import {Ionicons,FontAwesome5} from '@expo/vector-icons/Ionicons';

  const  CustomDrawer = (props)=>{
return(
  <View style={{flex:1}}>
  <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:"white"}}>
  <ImageBackground source={{uri:'https://st2.depositphotos.com/6504442/9281/i/450/depositphotos_92819326-stock-photo-raster-abstract-dark-blue-blurred.jpg'}} style={{padding:19,marginBottom:5}}>
  
<Image source={require("../assets/AMS_Logo_2.png")} style={{height:110,width:120,marginBottom:10}}/>

  
  <Text style={{color:'white',fontSize:20,fontWeight:'bolder',marginLeft:20}}>Anil Arora</Text>
  <View style={{display:'flex',flexDirection:'row'}}>
    <Text style={{color:'white',fontSize:15,marginLeft:20}}>Credit :- 500</Text>

    </View>
  </ImageBackground>
  
<DrawerItemList {...props}/>
  </DrawerContentScrollView>
  </View>
)
}
export default CustomDrawer;