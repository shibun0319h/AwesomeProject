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
    Button,
    TextInput,
    flexDirection
} from 'react-native';


export default class ToDoListAdd extends Component<Props> {
    constructor(props) {
        super(props);
    }
    onPress() { } // 暂且为空

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={{color: 'white',marginLeft: 15}} onPress={this.props.onBack}>返回</Text>
                </View>
                <View style={styles.body}>
                    <TextInput />
                </View>
                <View >
                    <Button title="添加" onPress={this.onPress}   />
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
height: 40,
backgroundColor: 'orange',
flexDirection: 'row',
alignItems: 'center'
},
 body: {
 flexGrow: 1,
 backgroundColor: 'lightblue',
 },


});