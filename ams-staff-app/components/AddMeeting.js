import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ImageBackground
} from 'react-native';
import db from '../config';
 import Ionicons from '@expo/vector-icons/Ionicons';
 import SweetAlert from 'react-native-sweet-alert';

export default class Add_Meeting extends React.Component {
  constructor() {
    super();
    this.state = {
      Name: '',
      Phone: '',
      Work: '',
      Other: '',
      Time: '',
      Check: '',
    };
  }
  Check_Input = () => {
    if (
      this.state.Work == '' ||
      this.state.Name == '' ||
      this.state.Phone == '' ||
      this.state.Time == '' ||
      this.state.Other == '' 
    
    ) {
      alert('please enter correct details');
    }

    if (
      this.state.Work !== '' &&
      this.state.Name !== '' &&
      this.state.Phone !== '' &&
      this.state.Time !== '' &&
      this.state.Other !== '' 
  
    ) {
      alert('Meeting added sucessfully');
      this.setState({ Check: 'checked' });
    }

    if (this.state.Check == 'checked') {
      db.collection('Customer').add({
        name: this.state.Name,
        phone: this.state.Phone,
        Work: this.state.Work,
        address: this.state.Other,
        Time: this.state.Time,
        Completed: '',
        
      });
    }
  };
  render() {
    return (
        <ImageBackground
        source={{ uri: 'https://st2.depositphotos.com/6504442/9281/i/450/depositphotos_92819326-stock-photo-raster-abstract-dark-blue-blurred.jpg' }}
         style={{flex:1}}
      >
      <KeyboardAvoidingView
        style={{
          container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#ecf0f1',
            padding: 8,
          },
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
  }}>Add Meeting</Text>
 </View>
 <View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>

        <Image
          style={styles.imageIcon}
          source={{
            uri: 'https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/5f3fe1dc44e313074ff89c5527a8bf50',
          }}
        />
        
        <TextInput
          placeholder="Name"
          placeholderTextColor="grey"
          style={styles.inputBox2}
          onChangeText={(hi) => {
            this.setState({ Name: hi });
          }}
          value={this.state.Name}
        />

        <TextInput
          placeholder="Mobile"
          placeholderTextColor="grey"
          style={styles.inputBox2}
          onChangeText={(Phone) => {
            this.setState({ Phone: Phone });
          }}
          value={this.state.Phone}
        />
        <TextInput
          placeholder="Work"
          placeholderTextColor="grey"
          style={styles.inputBox2}
          onChangeText={(Work) => {
            this.setState({ Work: Work });
          }}
          value={this.state.Work}
        />
        <TextInput
          placeholder="Date"
          placeholderTextColor="grey"
          style={styles.inputBox4}
          onChangeText={(a) => {
            this.setState({ Time: a });
          }}
          value={this.state.Time}
        />

        <TextInput
          placeholder="Address"
          placeholderTextColor="grey"
          style={styles.inputBox2}
          onChangeText={(Other) => {
            this.setState({ Other: Other });
          }}
          value={this.state.Other}
        />
        <TouchableOpacity
          style={styles.Button2}
          onPress={() => {
            this.Check_Input();
            /*db.collection('Customer').add({
              name: this.state.Name,
              phone: this.state.Phone,
              Work: this.state.Work,
              address: this.state.Other,
              Time: this.state.Time,
              Completed: '',
              Name: this.state.Name2,
            });*/
          }}>
          <Text style={styles.bttext}>Add</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
 
  Button2: {
    textAlign: 'center',
    backgroundColor: '#1B2F4B',
   height:'10%',
    marginTop: 30,
    alignSelf: 'center',
    border:0,
    borderRadius:20,
    width:'40%',

  },
 bttext:{
  fontSize:20,
  fontWeight: 'bolder',
  alignSelf:'center',
  marginTop:7,
  color:'white'

 },
  inputBox2: {
    marginTop: 5,
    width: '60%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
   backgroundColor: 'white',
    outline: 'none',
    border:0,
    borderRadius:20,
    fontWeight:'bolder'
  },
  imageIcon: {
    width: 220,
    height: 220,
    alignSelf: 'center',
    marginTop: -60,
  },

  inputBox4: {
    marginTop: 5,
    width: '60%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
 backgroundColor: 'white',
    outline: 'none',
    border:0,
    borderRadius:20,
    fontWeight:'bolder'
  },
});
