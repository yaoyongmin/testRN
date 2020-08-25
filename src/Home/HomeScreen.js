import React from 'react';
import {
    View,
    Button,
    Text,
} from 'react-native';

import Colors from '../colors';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);

        this.color = this.props.navigation.getParam("color",Colors.reduceColor);
        this.text = this.props.navigation.getParam("text","初始页面");
    }

    render(): React.ReactNode {

        return (
            <View
                style={{flex: 1, backgroundColor: this.color, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color:Colors.white}}>{this.text}</Text>

                {/*跳转到同样路由的界面 不会生成新界面*/}
                <Button onPress={() => {
                    this.props.navigation.navigate('HomeDetails', {
                        alter: '消息1',
                    });
                }} title={'navigate跳转'} color={Colors.white}>

                </Button>

                {/*跳转到同样路由的界面 会生成新界面*/}
                <Button onPress={() => {
                    this.props.navigation.push('HomeDetails', {
                        alter: '消息1',
                    });
                }} title={'push跳转'} color={Colors.white}>

                </Button>

            </View>
        );
    }
}
