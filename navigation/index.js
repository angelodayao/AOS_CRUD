import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen'
import AddTaskScreen from '../screens/AddTaskScreen'
import ReadTask from '../screens/ReadTask'

const StackNav = createStackNavigator(
	{

		Home: {
			screen: HomeScreen
		},
		AddTask: {
			screen: AddTaskScreen
		},
		ReadTask: {
			screen: ReadTask
		}
	},

	{
		mode: 'modal',
		headerMode: 'none',
		navigationOptions: {
			headerVisible: false,
		}
	}
)

const RootNavigator = createAppContainer(StackNav)

export default RootNavigator
