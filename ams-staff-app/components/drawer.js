import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Qutation from './Qutation'
import Profile from './profile'
import Allqutation from './Allqutation'
import Logout from './Logout' 
import AddMeet from './AddMeeting'
import Upcoming from './Upcoming'
import Ionicons from '@expo/vector-icons/Ionicons';
 import {View} from 'react-native'
 import Home from './Home'
 import Work from './Work'
 import CustomDrawer from './CustomDrawer'
 

const Drawer = createDrawerNavigator()

export default class Drawernav extends React.Component {
  constructor(props){
    super(props)
  } 
  render(){
return(
  
 
<Drawer.Navigator  drawerContent={props => <CustomDrawer {...props}/> } >
<Drawer.Screen name="Home" component={Home} options={{
           title: 'Home',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="home"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              /> 
           ),
        }}
              />
<Drawer.Screen name="Qutation" component={Qutation} options={{
           title: 'Qutation',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="reader-sharp"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              /> 
           ),
        }}
              />
<Drawer.Screen name="Profile" component={Profile} options={{
           title: 'Profile',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="person"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              /> 
           ),
        }}/>
<Drawer.Screen name="AddMeeting" component={AddMeet} options={{
           title: 'Add Meeting',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="add"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              /> 
           ),
        }}/>
<Drawer.Screen name="UpcomingMeetings" component={Upcoming} options={{
           title: 'Upcoming Meetings',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="arrow-up"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              /> 
           ),
        }}/>
<Drawer.Screen name="Your Qutations" component={Allqutation} options={{
           title: 'Your Qutations',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="newspaper"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              /> 
           ),
        }}/>
        <Drawer.Screen name="Inqueries" component={Work} options={{
           title: 'Inqueries',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="book-sharp"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              /> 
           ),
        }}
              />
<Drawer.Screen name="Logout" component={Logout}  options={{
           title: 'Logout',
           drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="log-out"
                 size={size}
                 color={focused ? '#7cc' : '#ccc'}
              /> 
           ),
        }}/>
</Drawer.Navigator>
 
 
)
  }
}
 