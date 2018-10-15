import React, {Component} from 'react';
import {
    AppRegistry,
    View
} from 'react-native';
import  Root from './src/Root';
import {name as appName} from './app.json';
import SplashScreen from 'react-native-splash-screen'
export default class App extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        SplashScreen.hide();
    };
    render() {
        return (
            <View style={{flex:1}}>
                <Root/>
            </View>
        )
    }
}
AppRegistry.registerComponent(appName, () => App);
