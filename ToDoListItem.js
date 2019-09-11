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

export default class ToDoListItem extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        const { toggleItemCheck, item } = this.props;
        const { isChecked, detail, level } = item;
        const basicLevelStyle = styles.level;
        let specificLevelStyle;
        if (level === 'info') {
            specificLevelStyle = styles.info;
        } else if (level === 'warning') {
            specificLevelStyle = styles.warning;
        } else {
            specificLevelStyle = styles.error;
        }

        return (
            <View style={styles.container}>
                {this.props.isEditing && <CheckBox onValueChange={(value) => toggleItemCheck(item, value)} style={styles.checkbox} value={isChecked} />}
                <Text style={styles.detail}>{detail}</Text>
                <View style={[basicLevelStyle, specificLevelStyle]}></View>
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