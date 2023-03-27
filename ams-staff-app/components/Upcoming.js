import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import db from '../config';
import Ionicons from '@expo/vector-icons/Ionicons';

export default class Upcoming_Meetings extends React.Component {
  constructor() {
    super();

    this.state = {
      final_data: [],
    };
  }

  componentDidMount() {
    this.db1();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.final_data) {
      this.db1();
    }
  }

  db1 = async () => {
    //console.log('check db');
    var all_data = [];

    var bkresponse;
    const bookRef = await db.collection('Customer').get();

    bookRef.docs.map((doc) => {
      bkresponse = doc.data();
      all_data.push(bkresponse);
    });
    this.setState({ final_data: all_data });
    console.log(all_data);
  };
   

  render() {
    const { allTransactions } = this.state;
    if (this.state.final_data === []) {
      return <Text>Loading..</Text>;
    } else {
      const Data = this.state.final_data;
      console.log(Data);

      return (
          <ImageBackground
        source={{ uri: 'https://st2.depositphotos.com/6504442/9281/i/450/depositphotos_92819326-stock-photo-raster-abstract-dark-blue-blurred.jpg' }}
         style={{flex:1}}
      >
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
  }}>Upcoming Meetings</Text>
 </View>
 <View
  style={{
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>
          <FlatList
            data={Data}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    margin: 10,
                    backgroundColor: 'white',
                       padding: 10,
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                    // height: ,
                    // flex: 1,
                    //   alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        fontSize: 15,
                        fontWeight: 'bold',
                      }}>
                      Meeting By {item.Name}
                    </Text>
                    <Text>name:{item.name}</Text>
                    <Text>address:{item.address}</Text>
                    <Text>Work:{item.Work}</Text>
                    <Text>phone:{item.phone}</Text>
                    <Text>Time and Date:{item.Time}</Text>
                    <Text
                      style={{
                        color: 'green',
                        fontSize: 20,
                        fontWeight: 'bold',
                      }}>
                      {item.Completed}
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={{
                      color: 'red',
                      fontSize: 20,
                    //  padding: 10,
                      marginTop: 20,
                      marginRight: -90,
                    }}
                    onPress={async () => {
                      alert('meeting Cancelled');
                      var snapshot = await db
                        .collection('Customer')
                        .limit(3)
                        .where('name', '==', item.name)
                        .get();
                      const doc = snapshot.docs[0];
                      doc.ref.delete();
                    }}>
                    <Text style={{ color: 'red', fontSize: 20 ,padding:2}}>Cancel</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      color: 'green',
                      fontSize: 20,
                      padding: 10,
                      marginTop: 90,
                    }}
                    onPress={async () => {
                      alert('meeting completed sucessfully');
                      var snapshot = await db
                        .collection('Customer')
                        .limit(3)
                        .where('name', '==', item.name)
                        .get();
                      const doc = snapshot.docs[0];
                      doc.ref.update({
                        Completed: 'COMPLETED',
                      });
                    }}>
                    <Text style={{ color: 'green', fontSize: 20 }}>
                      Complete
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
    
          />
        </View>
        </ImageBackground>
      );
    }
  }
}
 
