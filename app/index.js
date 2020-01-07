import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { LayoutScreen } from './examples/layout';
import React, { Component } from 'react';
import { View, Button } from "react-native";

class HomeScreen extends Component {

      render() {
        const {navigate} = this.props.navigation;
        return <View>
          <Button
            title="go to layout demo"
            onPress={() => navigate('Layout')}
          />
        </View>;
      }
}

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen },
  Layout: {screen: LayoutScreen},
}, 
{
    initialRouteName: 'Home'
  });

const App = createAppContainer(MainNavigator);

export default App;