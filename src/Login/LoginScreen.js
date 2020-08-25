import React from 'react';

import {
    View,
    TouchableHighlight,
} from 'react-native';

import Colors from '../colors';
import {NavigationActions, StackActions} from 'react-navigation';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

    }

    render(): React.ReactNode {

        return (
            <TouchableHighlight style={{flex: 1}} onPress={()=>{
                const navigateAction = StackActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({routeName: 'MainTabPage'}),
                    ],
                });
                this.props.navigation.dispatch(navigateAction);
            }}>
                <View style={{flex: 1, backgroundColor: Colors.darkGreen}}>

                </View>
            </TouchableHighlight>

        );
    }
}
