/**
 * Created by qiaozm on 2018/5/8.
 * 声明所有界面，配置相关属性
 */
import React from 'react';
import {
    Image,
    View,
    Text,
    TouchableHighlight,
    StyleSheet,
    Platform
} from 'react-native';
import { createStackNavigator,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import StackViewStyleInterpolator from "react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator";

import Util from 'ygzycomponent/tools/Util';

/************************业务页面****************************************/

import MainPage from '../pages/tab/MainPage';
import Two from '../pages/tab/Two';
import Three from '../pages/tab/Three';
import Four from '../pages/tab/Four';
import LoginPage from '../pages/login/LoginPage';
//import ServiceSchoolList from '../pages/serviceSchool/ServiceSchoolList';//服务中学校列表
const indexNormalIcon = require('../resources/images/common/index_normal.png');
const indexPressedIcon=require('../resources/images/common/index_pressed.png');
const statisNormalIcon=require('../resources/images/common/statis_normal.png');
const statisPressedIcon=require('../resources/images/common/statis_pressed.png');
const MessageNormalIcon = require('../resources/images/common/message_normal.png');
const MessagePressedIcon=require('../resources/images/common/message_pressed.png');
const AboutNormalIcon=require('../resources/images/common/about_normal.png');
const AboutPressedIcon=require('../resources/images/common/about_pressed.png');

const styles = StyleSheet.create({
    tabIcon: {
         height:Util.getSize(80,1334,'h'),
        resizeMode: 'cover'
    }
});

const MainStack =createStackNavigator({
    MainPage: {
        screen: MainPage,
        navigationOptions: ({navigation})=>({
            title: '',
            headerTitle:(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:18,color:'#333'}}>首页</Text>
                </View>
            )
        }),
    }
});
const TwoStack =createStackNavigator({
    Two: {
        screen: Two,
        navigationOptions: ({navigation})=>({
            title: '',
            headerTitle:(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:18,color:'#333'}}>Two</Text>
                </View>
            )
        }),
    }
});
const ThreeStack =createStackNavigator({
    Three: {
        screen: Three,
        navigationOptions: ({navigation})=>({
            title: '',
            headerTitle:(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:18,color:'#333'}}>Three</Text>
                </View>
            )
        }),
    }
});
const FourStack =createStackNavigator({
    Four: {
        screen: Four,
        navigationOptions: ({navigation})=>({
            title: '',
            headerTitle:(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:18,color:'#333'}}>Four</Text>
                </View>
            )
        }),
    }
});

const TabRouteConfigs = {
    MainPage: {
        screen: MainStack,
        navigationOptions: ({navigation})=>({
            title:'',
            tabBarIcon: ({focused, tintColor})=>(
                <Image source={focused ? indexPressedIcon : indexNormalIcon} style={styles.tabIcon} resizeMode='contain'/>
            ),
        }),
    },
    Two:{
        screen:TwoStack,
        navigationOptions:({navigation})=>({
           title:'',
           tabBarIcon: ({focused, tintColor})=>(
               <Image source={focused ? statisPressedIcon : statisNormalIcon} style={styles.tabIcon} resizeMode='contain'/>
           ),
        }),
    },
    Three:{
        screen:ThreeStack,
        navigationOptions:({navigation})=>({
            title:'',
            tabBarIcon: ({focused, tintColor})=>(
                <Image source={focused ? MessagePressedIcon : MessageNormalIcon} style={styles.tabIcon} resizeMode='contain'/>
            ),
        }),
    },
    Four:{
        screen:FourStack,
        navigationOptions:({navigation})=>({
            title:'',
            tabBarIcon: ({focused, tintColor})=>(
                <Image source={focused ? AboutPressedIcon : AboutNormalIcon} style={styles.tabIcon} resizeMode='contain'/>
            ),
        }),
    },
};

const TabBarComponent = (props) => (<BottomTabBar {...props} />);
const TabNavigatorConfigs ={
    initialRouteName: 'MainPage',
    tabBarComponent: props =>
        <TabBarComponent
            {...props}
            style={{ backgroundColor:'#000' }}
        />,
    tabBarPosition: 'bottom',
    lazy: true,
    swipeEnabled:false,
    tabBarOptions:{
        activeTintColor: '#2562b4', // 文字和图片选中颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {
            height: 0
        }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
        tabStyle: {
            backgroundColor: 'blue', // TabBar 背景色
            height:Platform.OS==='ios'?Util.getSize(120,1334,'h'):Util.getSize(110,1334,'h'),
            width:Util.size.width
        },
        labelStyle: {
            fontSize: 11, // 文字大小
        }
    }
};
const TabBarNavigator = createBottomTabNavigator(TabRouteConfigs, TabNavigatorConfigs);
TabBarNavigator.navigationOptions = {
    // Hide the header from AppNavigator stack
    header: null,
};
const StackRouteConfigs ={
    /*Splash: {
        screen: Splash,
        navigationOptions: {
            header: null
        }
    },----闪屏页*/
    LoginPage: {
        screen: LoginPage,
        navigationOptions:({navigation})=>({
            title:''
        })
    },
    Index: {
        screen: TabBarNavigator,
    }
};
const StackNavigatorConfigs = {
    initialRouteName: 'LoginPage', // 初始化哪个界面为根界面
    mode:'card', // 跳转方式：默认的card，在iOS上是从右到左跳转，在Android上是从下到上，都是使用原生系统的默认跳转方式。
    headerMode:'screen', // 导航条动画效果：float表示会渐变，类似于iOS的原生效果，screen表示没有渐变。none表示隐藏导航条
    transitionConfig:()=>({
        screenInterpolator:StackViewStyleInterpolator.forHorizontal,// forHorizontal 从右向左, forVertical 从下向上, forFadeFromBottomAndroid 安卓那种的从下向上  forInitial 无动画
    }),
};
const AppNavigator = createStackNavigator(StackRouteConfigs, StackNavigatorConfigs);
export {
    AppNavigator
};
const defaultGetStateForAction = AppNavigator.router.getStateForAction;
AppNavigator.router.getStateForAction = (action, state) => {
    //可以在此判断处理快速点击时跳转多次的问题
   /* if (state &&action.type === NavigationActions.BACK) {
        // Returning null from getStateForAction means that the action
        // has been handled/blocked, but there is not a new state
        return null;
    }*/
    return defaultGetStateForAction(action, state);
};