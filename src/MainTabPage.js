import React, {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import TabNavigatorItem from 'react-native-tab-navigator/TabNavigatorItem';
import {
    Image,
} from 'react-native';

import colors from './colors';
import theme from './theme';

import HomeScreen from './Home/HomeScreen';
import MyScreen from './My/MyScreen';
import NewsScreen from './News/NewsScreen';

export class MainTabPage extends Component {

    constructor(props) {
        super(props);

        this.state = ({
            selectedTab: 'home',
        });

    };


    render(): React.ReactNode {
        return (
            <TabNavigator tabBarStyle={[theme.tabBarStyle, {borderTopWidth: 1, borderColor: colors.classroomCircle}]}>
                {this._renderTabbarItem('主页', 'home', '', '', HomeScreen)}
                {this._renderTabbarItem('新闻', 'news', '', '', NewsScreen)}
                {this._renderTabbarItem('我的', 'ny', '', '', MyScreen)}
            </TabNavigator>
        );
    }

    _renderTabbarItem = (title, selectedTab, icon, selectedIcon, Component) => {

        return (
            <TabNavigatorItem
                selected={this.state.selectedTab === selectedTab}
                title={title}
                titleStyle={{color: 'black'}}
                selectedTitleStyle={{color: '#7A16BD'}}
                tableStyle={{alignSelf: 'center'}}
                renderIcon={() => <Image source={icon} style={{width: 24, height: 21}} resizeMode={'contain'}/>}
                renderSelectedIcon={() => <Image source={selectedIcon} style={{width: 24, height: 21}}
                                                 resizeMode={'contain'}/>}
                onPress={() => {
                    this.setState({
                        selectedTab: selectedTab,
                    });
                }}
            >
                <Component {...this.props} isExistTabBar={true}/>
            </TabNavigatorItem>
        );
    };
}

export default MainTabPage;
