
import { FormEvent, useRef } from 'react'
import './NewTodo.css'


export interface NewTodoProps {
  todoAddFoo: (text: string) => void;

}

const NewTodo: React.FC<NewTodoProps> = ({ todoAddFoo }) => {
  const refForInput = useRef<HTMLInputElement>(null)
  const submitHandler = (event: FormEvent) => {
    event.preventDefault()
    const enteredText: string = refForInput.current!.value;
    todoAddFoo(enteredText);
    refForInput.current!.value = ''
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label htmlFor='todo'>Enter Title For Todo</label>
        <input id='todo' type='text' ref={refForInput} />
      </div>
      <button type='submit'>ADD TODO</button>
    </form>
  );
}

export default NewTodo;

