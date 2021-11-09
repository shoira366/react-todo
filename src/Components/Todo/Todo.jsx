import { Row, Col, Button, FormControl } from 'react-bootstrap'
function Todo({todo, deleteElem, id, checkedElem, isCompleted}){
    
    return(
        <>
        <ul className="list">
        <li className="title">{todo}</li>
        <input className="checkbox" defaultChecked={isCompleted} type="checkbox" data-id={id} onChange={checkedElem} />
        <Button data-id={id} onClick={deleteElem}>Удалить</Button>
        </ul>
        </>
        ) 
        
    }
    
    export default Todo