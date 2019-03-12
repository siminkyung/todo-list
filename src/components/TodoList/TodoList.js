import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
    render() {
        return (
            <>
            <TodoItem done>리액트 공부하기</TodoItem>
            <TodoItem>컴포넌트 스타일링 해보기</TodoItem>
            </>
        );
    }
}

export default TodoList;