import React from 'react'
import Drawernav from './drawer'
import {NavigationContainer} from '@react-navigation/native'
export default class DashBoard extends React.Component{
render(){
return(
 <NavigationContainer>
 <Drawernav/>
 </NavigationContainer>
)
}
}