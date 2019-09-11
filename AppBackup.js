import ToDoListMain from './ToDoListMain';
import ToDoListAdd from './ToDoListAdd';


import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    FlatList,
    RefreshControl,
    ActivityIndicator,
} from 'react-native';

export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            current: 'main',
            todoList: [
                {
                    level: 'info',
                    detail: '一般的任务',
                    isChecked: false,
                    key: '0'
                },
                {
                    level: 'warning',
                    detail: '较重要的任务',
                    isChecked: false,
                },
                {
                    level: 'error',
                    detail: '非常重要且紧急的任务',
                    isChecked: false,
                    key: '2'
                }
            ]
        }
        this.onAddItem = this.onAddItem.bind(this);
        this.onBack = this.onBack.bind(this);
        this.toggleCheckAll = this.toggleCheckAll.bind(this);
        this.toggleItemCheck = this.toggleItemCheck.bind(this);
    }

    onAddItem() {
        this.setState((prevState) => {
            return {
                current: 'add'
            }
        });
    }

    onBack() {
        this.setState({
            current: 'main'
        });
    }

    toggleCheckAll() {
        const flag = this.isAllChecked();
        const newTodos = this.state.todoList.map(item => {
            return {
                ...item,
                isChecked: !flag
            };
        });
        this.setState({
            todoList: newTodos
        });
    }

    toggleItemCheck(item, key) {
        const newTodos = this.state.todoList.map(todo => {
            if (todo !== item) {
                return todo;
            }
            return {
                ...todo,
                isChecked: !item.isChecked
            }
        });
        this.setState({
            todoList: newTodos
        });
    }

    isAllChecked() {
        if (!this.state.todoList) return false;
        if (this.state.todoList.length === 0) return false;
        return this.state.todoList.every(item => item.isChecked);
    }

    render() {
        if (this.state.current === 'main') {
            return (<ToDoListMain
                isAllChecked={this.isAllChecked()}
                toggleCheckAll={this.toggleCheckAll}
                toggleItemCheck={this.toggleItemCheck}
                onAddItem={this.onAddItem}
                todoList={this.state.todoList} />);
        } else {
            return (<ToDoListAdd onBack={this.onBack} />);
        }
    }
}
