import React from 'react';
import { View, Image, StyleSheet, Text, ImageBackground, TouchableOpacity,Button,ScrollView } from 'react-native';
 import Ionicons from '@expo/vector-icons/Ionicons';
 
 

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
    time:'',
    };
  }

  componentDidMount(){
  this.time()
  }
  time = ()=>{
  var time = new Date()
  var hours = time.getHours()
  console.log(hours)
  if(hours>12 && hours<18){
   console.log("afternoon")
   this.setState({time:'Afternoon'})
  }
    if(hours<12 && hours<24){
   console.log("Morning")
   this.setState({time:'Morning'})
  }
    if(hours>18 && hours<24){
   console.log("Evening")
   this.setState({time:'Evening'})
  }
  }
  render() {
    return (
      <ImageBackground
        source={{ uri: 'https://st2.depositphotos.com/6504442/9281/i/450/depositphotos_92819326-stock-photo-raster-abstract-dark-blue-blurred.jpg' }}
        style={styles.main}
      >
      <ScrollView>
        <View>
        <View style={{display:'flex',flexDirection:'row'}}>
 <Ionicons name="menu" color="white" size={35} style={{marginTop:40,marginLeft:20,marginBottom:10}} onPress={()=>{this.props.navigation.openDrawer()}}/>
 <Text style={{
  fontSize:27,
  fontWeight:'bold',
  alignSelf:'center',
color:'white',
marginLeft:65,
marginTop:40,
justifyContent:'center',
marginBottom:10
  }}>Home</Text>
 </View>
 <View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
          
            <Text style={styles.text3}>Good {this.state.time},</Text>
           
          <Text style={styles.text}>Anil Arora</Text>
         
        </View>

        <View>
          <Image source={require('../assets/AMS_Logo_2.png')} style={styles.man} />
        </View>
        <View style={{marginTop:20}}>
        <Text style={styles.t1}>Features</Text>
         <Text style={styles.t2}>Qutation Maker :-</Text>
        <Text style={styles.t3}>This app provides you instant Qutation maker which consume your time. You just have to fill details in it. all Qutations you make will save in Your Qutations screen.</Text>
         <Text style={styles.t2}>Meetings :-</Text>
        <Text style={styles.t3}>This app provides a Efficent Meeting system in which you set meeting the it will added in database and the person get notfiy for meeting.</Text>
          <Text style={styles.t2}>Inquery :-</Text>
        <Text style={styles.t3}>Here you all get a screen in which you can see inqueries send my customer through ams website.</Text>
                          <Text style={styles.t2}>Payment :-</Text>
        <Text style={styles.t3}>This is simply a paid app. Here you get credit on purchasing which help you to work you in this app. per quatation 1 credit will charge and per meeting set 1 credit charge. rs100 for 20 Credits but Inquery system is free . you get 5 credits for free trial. </Text>
        </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
main:{
   
},
  text: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif',
    fontWeight: 'bolder',
    marginTop: 10,
    marginLeft: 20,
    textShadow: '10px 6px 5px rgba(0,0,0,0.6)',
  },
  
  text3: {
    fontSize: 35,
    color: 'white',
    fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif',
 


   fontWeight:'bolder',
   marginTop:20,
 
  marginLeft:10,
  textShadow: '10px 6px 5px rgba(0,0,0,0.6)',
  },
 
 
  
 
  man:{
   alignSelf:'center',
    marginTop: 40,
    width:170,
    height:150
  },
 t1:{
   fontSize:30,
   fontWeight:'bolder',
   color:'white',
   alignSelf:'center',
      fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif',
 },
 t2:{
     fontSize:20,
   color:'white',
   marginLeft:20,
   marginRight:20,
   marginTop:10,
      fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif',
 },
  t3:{
     fontSize:15,
   color:'white',
   marginLeft:20,
   marginRight:20,
   marginTop:10,
      fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif',
 }

 
})

