

import { Todo } from '../models/Todo.model'
import './TodoList.css'

export interface TodoListProp {
  items: Array<Todo>
  todoDelFoo: (id: string) => void;
}

const TodoList: React.FC<TodoListProp> = ({ items, todoDelFoo }) =>
(
  <div className='box'>
    <ol>
      {items.map(({ id, title }) => <li key={id}>
        <span>

          {title}
        </span>
        <button onClick={() => todoDelFoo(id)}>DELETE</button>
      </li>)}
    </ol>

  </div>

)


export default TodoList;
