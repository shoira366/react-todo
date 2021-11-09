import { useState } from 'react';
import './App.scss';
import Todo from './Components/Todo/Todo'
import Header from './Components/Header/Header';
import { Container, Row, Col, Button, FormControl } from 'react-bootstrap'

function App() {
  
  let [todo, setTodo] = useState(JSON.parse(window.localStorage.getItem('todos')) || [])
  
  
  function deleteElem(e){
    const id = e.target.dataset.id
    
    const filteredElem = todo.filter(t => t.id !== Number(id))
    
    setTodo(filteredElem)
    
    window.localStorage.setItem('todos', JSON.stringify(todo))
  }
  
  function checkedElem(e){
    const id = e.target.dataset.id
    
    const findElem = todo.find(t => t.id === Number(id))
    
    findElem.isCompleted = !findElem.isCompleted
    // todo.classList.add('checked')
  

    window.localStorage.setItem('todos', JSON.stringify(todo))

  }
  
  function handle(event){
    if(event.code === 'Enter'){
      
      let newTodo = {
        id: new Date().getTime(),
        content: event.target.value.trim(),
        isCompleted: false
      }
      
      setTodo([newTodo, ...todo])
      
      window.localStorage.setItem('todos', JSON.stringify(todo))
      event.target.value = null;
    }
  }
  
  window.localStorage.setItem('todos', JSON.stringify(todo))
  
  
  return (
    <Container>
    <Header/>
    <FormControl type="text" onKeyPress={handle}/>
    
    {todo.map(t => <Todo
      key={t.id}
      id={t.id}
      todo={t.content}
      deleteElem={deleteElem}
      checkedElem={checkedElem}
      isCompleted={t.isCompleted}
      />)}
      </Container>
      );
    }
    
    export default App;
    