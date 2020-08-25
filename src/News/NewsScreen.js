import React from 'react';

import {
    View,
} from 'react-native';

import Colors from '../colors';

export default class NewsScreen extends React.Component {

    constructor(props) {
        super(props);

    }

    render(): React.ReactNode {

        return (
            <View style={{flex: 1, backgroundColor: Colors.blue}}>

            </View>
        );
    }
}
