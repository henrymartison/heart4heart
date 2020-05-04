import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {
  MaterialCommunityIcons,
  Feather,
  Ionicons,
  FontAwesome,
  SimpleLineIcons,
} from '@expo/vector-icons';

import Button from './src/components/button';
import colors from './utils/colors';

import Home from './src/main-tab-screens/home';
import Edit from './src/main-tab-screens/edit';
import Add from './src/main-tab-screens/add';
import Archives from './src/main-tab-screens/archive';
import Profile from './src/main-tab-screens/profile';
import Register from './src/auth-screens/register';
import Login from './src/auth-screens/login';
import Intro from './src/auth-screens/intro';
import Welcome from './src/tab-screens/welcome';
import EditModal from './src/components/modals/editModal';
import ThankU from './src/tab-screens/thankU';

const rootModal = createStackNavigator({
  postModal: EditModal,
});

const HomeStack = createStackNavigator({
  Home: Home,
});

const PostStack = createStackNavigator(
  {
    Post: {
      screen: Add,
      navigationOptions: { headerShown: false },
    },
    ThankU: {
      screen: ThankU,
      navigationOptions: { headerShown: false },
    },
    postModal: {
      screen: rootModal,
      navigationOptions: ({ navigation }) => ({
        title: null,
        gestureEnabled: false,
        headerLeft: () => (
          <Button transparent onPress={() => navigation.goBack()}>
            <Text
              style={{ color: colors.primary, marginLeft: 14, fontSize: 18 }}
            >
              Cancel
            </Text>
          </Button>
        ),
      }),
    },
  },
  {
    mode: 'modal',
  }
);

const ProfileStack = createStackNavigator({
  Profile: Profile,
});

const tabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }
        return {
          tabBarVisible,
          tabBarLabel: 'Home',
          tabBarIcon: ({ tintColor }) => (
            <SimpleLineIcons name="home" size={22} color={tintColor} />
          ),
        };
      },
    },
    Edit: {
      screen: Edit,
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }
        return {
          tabBarVisible,
          tabBarLabel: 'Menu',
          tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons
              name="square-edit-outline"
              size={25}
              color={tintColor}
            />
          ),
        };
      },
    },
    Post: {
      screen: PostStack,
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }
        return {
          tabBarVisible,
          tabBarLabel: 'Book Table',
          tabBarIcon: ({ tintColor, focused }) => (
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={30}
              color={tintColor}
            />
          ),
        };
      },
    },
    Archives: {
      screen: Archives,
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }
        return {
          tabBarVisible,
          tabBarIcon: ({ tintColor, focused }) => (
            <Feather name="archive" size={25} color={tintColor} />
          ),
        };
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: ({ navigation }) => {
        let tabBarVisible = true;
        if (navigation.state.index > 0) {
          tabBarVisible = false;
        }
        return {
          tabBarVisible,
          tabBarIcon: ({ tintColor }) => (
            <Feather name="user" size={25} color={tintColor} />
          ),
        };
      },
    },
  },
  {
    // defaultNavigationOptions: {
    //   tabBarOnPress: ({ navigation }) => {
    //     if (navigation.state.key === 'Post') {
    //       navigation.navigate('postModal');
    //     }
    //   },
    // },
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'black',
    },
  }
);

const AuthStack = createStackNavigator(
  {
    Register: Register,
    Login: Login,
    Intro: Intro,
  },
  {
    initialRouteName: 'Intro',
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Main: tabNavigator,
      Auth: AuthStack,
      Welcome: Welcome,
    },
    {
      initialRouteName: 'Auth',
    }
  )
);

export default class App extends React.PureComponent {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <AppContainer />
      </View>
    );
  }
}
