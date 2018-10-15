import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import { NavigationActions, StackActions } from "react-navigation";
export default class Main extends Component {
    constructor(props) {
        super(props);
        console.log(props.navigation.state.params.title);
    }

    componentDidMount() {

    };

    componentWillUnmount() {

    };

    funcOnback=()=>{
        //this.props.navigation.dispatch(resetAction);
         this.props.navigation.goBack();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text onPress={()=>this.funcOnback()}>第二个Tab页</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})