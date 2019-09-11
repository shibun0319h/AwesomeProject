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

export default class ToDoListmain extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };

        this.onEdit = this.onEdit.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    renderFooter(toggleCheckAll, isAllChecked) {
        if (!this.state.isEditing) {
            return null;
        }
        const count = this.props.todoList.filter(item => item.isChecked).length;
        return (
            <View style={styles.footer}>
                <CheckBox onValueChange={toggleCheckAll} value={isAllChecked} />
                <Text style={styles.menu}>{`已选择:${count}项`}</Text>
            </View>
        );
    }

    onEdit() {
        this.setState((prevState) => {
            return {
                isEditing: !prevState.isEditing
            }
        });
    }

    renderItem(item) {
        return (<ToDoListItem {...item}
            toggleItemCheck={this.props.toggleItemCheck}
            isEditing={this.state.isEditing} />);
    }

    render() {
        const { toggleCheckAll, isAllChecked, onAddItem, todoList } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.add} onPress={onAddItem}>添加</Text>
                    <Text style={styles.title}>待办列表</Text>
                    <Text style={styles.multi}
                        onPress={this.onEdit}>{this.state.isEditing ? '取消' : '多选'}
                    </Text>
                </View>

                <FlatList style={styles.body} isEditing={this.state.isEditing}
                    data={todoList} renderItem={this.renderItem} />

                {this.renderFooter(toggleCheckAll, isAllChecked)}
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