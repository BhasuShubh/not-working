import * as React from 'react'
import { View, Text } from 'react-native'

import {createAppContainer} from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import SearchScreen from './Screens/SearchScreen'
import BookTransactionScreen from './Screens/BookTransaction'

export default class App extends React.Component{
    render(){

        return(
            <Container/>
        )
    }
}
const Navy = createBottomTabNavigator({
    search :{screen  : SearchScreen},
    trans : {screen : BookTransactionScreen},
})
const Container = createAppContainer(Navy)