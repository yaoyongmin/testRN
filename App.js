/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StatusBar,
} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';

import {
    NavigationActions,
    createAppContainer,
    StackActions,
} from 'react-navigation';

import MainTabPage from './src/MainTabPage';
import HomeConfigs from './src/Home/HomeConfigs';
import NewsConfigs from './src/News/NewsConfigs';
import MyConfigs from './src/My/MyConfigs';
import LoginConfigs from './src/Login/LoginConfigs';

const mainTabPageConfigs = {
    MainTabPage: {
        screen: MainTabPage,
        navigationOptions: {
            header: null,
        },
    },
};

const AppNavigatorConfigs = {

    ...mainTabPageConfigs,
    ...HomeConfigs,
    ...NewsConfigs,
    ...MyConfigs,
    ...LoginConfigs,
};

const NavigatorStack = createStackNavigator(AppNavigatorConfigs,); //stackConfig 可自定义一些属性 如 转场动画
const AppContainer = createAppContainer(NavigatorStack);

// const App: () => React$Node = () => {
//
//     const dataSource = [
//         '首页',
//         '新闻',
//         '我的',
//     ];
//
//     return (
//         <TabNavigator>
//             {
//                 dataSource.map((item,index) => {
//                     return (
//                         <TabNavigatorItem
//                             title={item}
//                             titleStyle={{color:'black'}}
//                             selectedTitleStyle={{color:'#7A16BD'}}
//                             tableStyle={{alignSelf:'center'}}
//                             onPress={()=>{
//                                 alert(item);
//                             }}
//                             key={index}
//                         >
//                         </TabNavigatorItem>
//                     );
//                 })
//             }
//         </TabNavigator>
//     );
// };

export default class App extends Component {

    constructor(props) {
        super(props);

    }

    render(): React.ReactNode {
        return (
            <View style={{flex: 1}}>
                <AppContainer/>
            </View>
        );
    }
};


// export default App;
