import React from 'react';
import { Container, Header, Title, Content, Body, Text, Icon } from 'native-base';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import ToDoAll from '../containers/todo_all';

class AllToDo extends React.Component {   
  render() {    
    return (
      <ToDoAll show_new_todo = { true } screen = "All" />
    );
  }
}

class ActiveToDo extends React.Component {
  render() {
    return (
      <ToDoAll show_new_todo = { false } screen = "Active" />
    );
  }
}

class CompletedToDo extends React.Component {
  render() {
    return (
      <ToDoAll show_new_todo = { false } screen = "Completed" />
    );
  }
}

export default TabNavigator({
  All: { screen: AllToDo },
  Active: { screen: ActiveToDo },
  Completed: { screen: CompletedToDo },
},{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'All') {
        iconName = `list`;
      } else if (routeName === 'Active') {
        iconName = `unlock`;
      } else{
        iconName = `checkmark`;
      }
  
      return <Icon name= { iconName } color = { 'red' } active = { true } />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
});