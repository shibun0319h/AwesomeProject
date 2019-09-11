/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    flexDirection
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

//noinspection BadExpressionStatementJS
type
Props = {};
//noinspection JSAnnotator
export default class App extends Component<Props> {
    render() {
        return (



        /*简单页面*/
        <View style={styles.container}>
              <View style={styles.header}>
                  <Text style={{color: 'white',marginLeft: 15}}>返回</Text>
                  <Text style={{flexGrow: 1,fontSize: 20,color: 'white',textAlign: 'center'}}>这是一个标题</Text>
                  <Text style={{marginRight: 20,fontSize: 20,color: 'white'}}>×</Text>
              </View>
            <View style={styles.body}></View>
            <View style={styles.footer}>
                  <Text style={{flexGrow: 1,textAlign: 'center',color: 'white'}}>添加</Text>
                  <Text style={{flexGrow: 1,textAlign: 'center',borderColor: 'white',borderLeftWidth: 1,color: 'white'}}>删除</Text>
                  <Text style={{flexGrow: 1,textAlign: 'center',borderColor: 'white',borderLeftWidth: 1,color: 'white'}}>修改</Text>
            </View>
        </View>


        );
    }
}

const styles = StyleSheet.create({
 container: {
 flex: 1
 },
header: {
height: 60,
backgroundColor: 'orange',
flexDirection: 'row',
alignItems: 'center'
},
 body: {
 flexGrow: 1,
 backgroundColor: 'lightblue',
 },
footer: {
height: 60,
backgroundColor: 'green',
flexDirection: 'row',
alignItems: 'center'
}

});

