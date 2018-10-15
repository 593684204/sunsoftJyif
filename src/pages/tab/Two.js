import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    };

    componentWillUnmount() {

    };

    render() {
        return (
            <View style={styles.container}>
                <Text onPress={()=>this.props.navigation.navigate('Detail',{title:'234'})}>第二个Tab页</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})