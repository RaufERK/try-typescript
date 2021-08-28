import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import { Todo } from './models/Todo.model'
import { BrowserRouter } from 'react-router-dom'

const App: React.FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>([])

  const todoAddHandler = (title: string) => {
    console.log(title);
    setTodoList(prevTodo => [...prevTodo, { id: Math.random().toString(), title }])
  }

  const deleteTodoHandler = (id: string) => {
    setTodoList(pre => pre.filter(el => el.id !== id))
  }


  return (
    <div className="box">
      <NewTodo todoAddFoo={todoAddHandler} />
      <TodoList items={todoList} todoDelFoo={deleteTodoHandler} />
    </div>
  );
}

export default App;
