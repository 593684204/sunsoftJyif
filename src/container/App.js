import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {AppNavigator} from './routers';
import { withNavigation } from 'react-navigation';
import {
    NativeModules,
    View,
    ActivityIndicator
} from 'react-native';

const RNBridgeModule = NativeModules.RNBridgeModule;
const navigationPersistenceKey =null;// __DEV__ ? "NavigationStateDEV" : null;
class App extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount() {
      // this.hideSplash();
    }
    componentWillUnmount() {
    }
    render() {
        return (
            <View style={{flex:1}}>
                <AppNavigator persistenceKey={navigationPersistenceKey} renderLoadingExperimental={() => <ActivityIndicator />} ref={nav => this.navigation = nav} />
            </View>
        );
    }
    hideSplash = () => {
        SplashScreen.hide();//启动页
        RNBridgeModule.dismissProgress(); //隐藏原生弹窗
    };
}

export default App;
