import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
    render() {
        const {todos} = this.props;
        const todoList = todos.map(todo => <TodoItem done={todo.done} key={todo.id}>{todo.text}</TodoItem>);
        
        return (
            <>
            {todoList}
            </>
        );
    }
}

export default TodoList;