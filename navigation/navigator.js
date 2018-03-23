import React from 'react';
import TabNavigator from './main_navigation';
import { Container } from 'native-base';
import { Font, AppLoading } from "expo"; // requirement for using native-base in expo

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: true, // to load font in expo      
    };
  }  
      
  // expo required
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });   
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
        return (
            <Container>
                <AppLoading />
            </Container>
        );
      }else{
        return (
           <TabNavigator />
        );
      }
  }
}