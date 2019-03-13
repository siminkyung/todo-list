import React, { Component } from 'react';
import PageTemplate from './components/PageTemplate';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    input : '', //input 값

    //일정 데이터 초기값
    todos : [
      {id : 0, text : '리액트 공부하기', done : true},
      {id : 1, text : '컴포넌트 스타일링 해보기', done : false}
    ]
  }

  handleRemove = (id) =>{
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    this.setState({
      todos : [
        ...todos.slice(0, index),
        ...todos.slice(index+1, todos.length)
      ]
    })
  }

  handleToggle = (id) =>{
    console.log(id);
    const {todos} = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    const toggled = {
      ...todos[index],
      done : !todos[index].done
    }

    this.setState({
      todos : [
        ...todos.slice(0,index),
        toggled,
        ...todos.slice(index+1,todos.length)
      ]
    })

    console.log(this.state.todos);
  }


  //일정 데이터 안에 들어가는 id값
  id = 1;
  getId = () => {
    return ++this.id;
  }

  handleInsert = () => {
    const {todos, input} = this.state;

    if(input === '') {alert('내용을 입력해주세요.'); return false;}
    
    const newTodo = {
      id : this.getId(),
      text : input,
      done : false
    }

    this.setState({
      input : '', //input 초기화
      todos : [...todos, newTodo]
    })
  }

  handleChange = (e) => {
    const {value} = e.target;
    this.setState({
      input : value
    })
  }

  render() {
    const {input,todos} = this.state;
    const {handleChange, handleInsert, handleToggle, handleRemove} = this;

    return (
      <PageTemplate>
        <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
        <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </PageTemplate>
    );
  }
}

export default App;
