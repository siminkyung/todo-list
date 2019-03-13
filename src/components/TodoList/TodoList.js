import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
    
    shouldComponentUpdate(nextProps, nextState){
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const {todos, onToggle, onRemove} = this.props;
        const todoList = 
              todos.map(todo => <TodoItem done={todo.done} key={todo.id}
                                          onToggle={()=>onToggle(todo.id)}
                                          onRemove={()=>onRemove(todo.id)}>{todo.text}</TodoItem>);
        
        return (
            <>
            {todoList}
            </>
        );
    }
}

export default TodoList;