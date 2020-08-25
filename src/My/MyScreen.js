import React from 'react';

import {
    View,
    Button,
} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import Dialog, {SlideAnimation, DialogContent, FadeAnimation, ScaleAnimation} from 'react-native-popup-dialog';

import Colors from '../colors';

export default class MyScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = ({
            visible: false,
        });
    }

    render(): React.ReactNode {

        return (
            <View style={{flex: 1, backgroundColor: Colors.yellow, alignItems: 'center', justifyContent: 'center'}}>
                <Dialog
                    visible={this.state.visible}
                    onTouchOutside={() => {
                        this.setState({
                            visible: false,
                        });
                    }}
                    dialogAnimation={new SlideAnimation({
                        slideFrom: 'bottom',
                    })}
                >
                    <DialogContent
                        style={{backgroundColor: Colors.white, width: 300, height: 200}}
                    >

                    </DialogContent>
                </Dialog>
                <Button onPress={() => {

                    // this.setState({
                    //     visible: true,
                    // });

                    const navigateAction = StackActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({routeName: 'Login'}),
                        ],
                    });
                    this.props.navigation.dispatch(navigateAction);
                }} title={'退出登录'}>

                </Button>
            </View>
        );
    }
}
