import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Button,
    Text,
    ScrollView,
} from 'react-native';

import Colors from '../colors';
import theme from '../theme';

class NavigationHeader extends React.Component {

    static defaultProps = {

        touchBack: null,
    };

    static propTypes = {
        touchBack: PropTypes.func,
        rightText: PropTypes.string,
        rightStyle: PropTypes.object,
    };

    render(): React.ReactNode {
        return (
            <View style={{
                backgroundColor: Colors.reduceColor,
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: theme.statusHeight,
                height: theme.headerHeight,
            }}>
                <Button onPress={() => {
                    if (this.props.touchBack) {
                        this.props.touchBack();
                    }
                }} title={this.props.rightText || '返回'} color={Colors.white}>
                </Button>
            </View>
        );
    }
}


export default class MyScreen extends React.Component {

    dataSource = [
        'Pop',
        'PopToPop',
        'Replace',
        'Reset',
        'Dismiss',
        '6',
        '7',
        '8',
    ];

    constructor(props) {
        super(props);
        this.navigation = this.props.navigation;

        this.text = this.navigation.getParam('alter', '备用结果');  //如果取不到值 则会使用备用结果
    }

    render(): React.ReactNode {
        return (
            <View style={{flex: 1}}>
                <ScrollView style={{backgroundColor: Colors.white}}>
                    {this.dataSource.map((item, index) => this.renderCell(item, index))}
                </ScrollView>
                {/*{alert(this.text)}*/}
            </View>
        );
    }

    renderCell = (item, index) => {

        let action = () => {
        };

        switch (index) {
            case 0:
                //带你到堆栈中的上一个页面。 如果你提供一个编号n，它将指定要在堆栈中带回的页面数量。
                action = this.navigation.pop;
                break;
            case 1:
                //调用该方法将直接跳转到堆栈最顶层的路由，销毁其它所有页面。
                action = this.navigation.popToTop;
                break;
            case 2:
                //调用该方法将使用指定的路由覆盖当前的页面，可以附带参数（params和 sub-action）
                action = this.navigation.replace;
                break;
            case 3:
                //操作会擦除整个导航状态，并将其替换为多个操作的结果。https://www.jianshu.com/p/5376e396b5aa
                // action = this.navigation.reset();
                break;
            case 4:
                //如果你想关闭整个 stack 回到父级 stack 中，调用这个方法
                action = this.navigation.dismiss;
                break;
        }

        return (

            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: Colors.lightGray,
                marginLeft: 16,
                marginRight: 16,
                marginTop: 5,
                height: 44,
            }}>
                <Button onPress={() => {
                    if (index === 2) {
                        action('Home', {color: Colors.green, text: '已替换当前页面'});
                    } else {
                        action();
                    }
                }} title={item} key={index}>
                </Button>
            </View>

        );
    };
}
