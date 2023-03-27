import React,{useEffect,useState} from 'react';
import { View, Image, StyleSheet, Text, ImageBackground, TouchableOpacity,Button } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
 
 WebBrowser.maybeCompleteAuthSession();

export default function Login({navigation}){
 
 const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);
 
 
 const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
   webClientId:'',
   expoClientId:'',
   iosClientId:'970775640707-dn1u6nt6h5l1dum1649580ob650g9et9.apps.googleusercontent.com',
   androidClientId:'970775640707-2i4ui5hjs33tmipppve34mslbd8h4f5k.apps.googleusercontent.com',
   

  });
  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
       getUserInfo()
    }
  }, [request, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      // Add your own error handler here
      console.log(error)
    }
  };
 
    return (
      <ImageBackground
        source={{ uri: 'https://st2.depositphotos.com/6504442/9281/i/450/depositphotos_92819326-stock-photo-raster-abstract-dark-blue-blurred.jpg' }}
        style={styles.main}
      >
        <View>
          <View style={styles.flex}>
            <Text style={styles.text3}>Login,</Text>
            <Image source={require('../assets/AMS_Logo_2.png')} style={styles.img} />
          </View>
          <Text style={styles.text}>Anil Multi Service</Text>
          <Text style={styles.text2}>Employee App</Text>
        </View>

        <View>
          <Image source={require('../assets/man.png')} style={styles.man} />
        </View>
        <View>
        <TouchableOpacity style={styles.login} onPress={() => {
          // navigation.navigate('DashBoard');
         
      promptAsync()
        }}>
          <Image source={require('../assets/google.png')} style={styles.google} />
          <Text style={styles.logintext}>Sign in with google</Text>
        </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  
}

const styles = StyleSheet.create({
main:{
  flex:1,
},
  text: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif',
    fontWeight: 'bolder',
    marginTop: 0,
    marginLeft: 20,
    textShadow: '10px 6px 5px rgba(0,0,0,0.6)',
  },
  text2: {
    fontSize: 30,
    color: 'white',
    fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif',
    fontWeight: 'bolder',
    marginLeft: 20,
    textShadow: '10px 6px 5px rgba(0,0,0,0.6)',
  },
  text3: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif',



   fontWeight:'bolder',
   marginTop:25,
 
  marginLeft:10,
  textShadow: '10px 6px 5px rgba(0,0,0,0.6)',
  },
  logintext:{
     fontSize:22,
   color: 'black',
   fontFamily:'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif',
   fontWeight:'bolder',
   marginTop:15,
  marginLeft:10,
  textShadow: '10px 6px 5px rgba(0,0,0,0.6)',
  },
  img:{
     marginLeft:120,
    width:80,
    height:70,
    marginTop: 20,
    
  },
  flex:{
  display: 'flex',
  flexDirection:'row'

  },
  login:{
   display:'flex',
   flexDirection:'row',
    backgroundColor:'white',
 marginTop:20,
    width:300, 
    height:60,
    borderRadius:50,
    alignSelf:'center',
    boxShadow: '22px 18px 29px 10px rgba(0,0,0,0.75)'
  },
  man:{
   alignSelf:'center',
    marginTop: 80,
    width:170,
    height:170
  },
  google: {
  width:40, 
  height: 40,
  marginTop:10,
  marginLeft:30,
    
  }

 
})

