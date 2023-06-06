import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './Login';
import Home from './Home';
import Detail from './Detail';
import Edit from './Edit';

const RootStack  = createStackNavigator (
    {
        Login: {
            screen: Login,
            navigationOptions: {
                headerShown: false,
            },
        },
        Home: {
            screen: Home,
            navigationOptions: {
                title: 'Home',
                headerStyle: {
                  backgroundColor: '#4dbd74',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
            },
        },
        Detail: {
            screen: Detail,
            navigationOptions:  {
                title: 'Detail',
                headerStyle: {
                  backgroundColor: '#4dbd74',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
            },
        },
         Edit: {
            screen: Edit,
            navigationOptions:  {
                title: 'Edit',
                headerStyle: {
                  backgroundColor: '#4dbd74',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
            },
        },
    },
    {
        initialRouteName: 'Login',
    },
);

export default createAppContainer(RootStack);