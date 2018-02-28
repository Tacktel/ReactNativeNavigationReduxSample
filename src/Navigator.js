import { StackNavigator, TabNavigator } from 'react-navigation';
import TestPage from './components/TestPage'
import MainView from './components/MainView';

export const Navigator = StackNavigator({
    MainView: {
        screen: MainView,
        navigationOptions: {
            //header: null
        },
    },
    TestPage: {
        screen: TestPage,
        navigationOptions: {
            //header: null
        },
    },
});