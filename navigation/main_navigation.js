import React from 'react';
import { Container, Header, Title, Content, Body, Text, Icon } from 'native-base';
import { TabNavigator, TabBarBottom } from 'react-navigation';

class AllToDo extends React.Component {    
  render() {    
    return (
        <Container>
            <Header>                
                <Body>
                    <Title>All</Title>
                </Body>                
            </Header>
            <Content>              
              <Text>
                  All Section
              </Text>              
            </Content>                
        </Container>
    );
    }
}

class ActiveToDo extends React.Component {
  render() {
    return (
        <Container>
        <Header>          
          <Body>
            <Title>Active</Title>
          </Body>          
        </Header>
        <Content>
          <Text>
            Active Section
          </Text>
        </Content>    
      </Container>
    );
  }
}

class CompletedToDo extends React.Component {
  render() {
    return (
        <Container>
        <Header>          
          <Body>
            <Title>Completed</Title>
          </Body>          
        </Header>
        <Content>
          <Text>
            Completed Section
          </Text>
        </Content>
      </Container>
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
  swipeEnabled: false,
});