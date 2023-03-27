import React from 'react'
import Loading from './Loading'
import Login from './Login'
import DashBoard from './DashBoard'
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import {View} from 'react-native'

 

const AppSwitchNavigator = createSwitchNavigator({
  Loading:Loading,
  Login: Login,
  DashBoard:DashBoard
});

const AppNavigator = createAppContainer(AppSwitchNavigator);
 
export default class Nav extends React.Component{
render(){

return(
 
     <AppNavigator/>
      
     
)
}
}