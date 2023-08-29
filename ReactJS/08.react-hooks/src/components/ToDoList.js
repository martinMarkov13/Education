import ListGroup from "react-bootstrap/ListGroup";
import { ToDoItem } from "./ToDoItem";
import { Button } from "react-bootstrap";

export function ToDoList({
    todos,
    onTodoAddClick,
    onTodoDeleteClick
}) {
  return (
    <div style={{ width: "40%", margin: "10px auto" }}>
        <h1>To Do List</h1>

    <ListGroup style={{marginBottom: '10px'}}>
    {todos.map(t => <ToDoItem onTodoDeleteClick={onTodoDeleteClick} key={t._id} {...t}/>)}
    </ListGroup>
    <Button variant="primary" onClick={onTodoAddClick}>Add</Button>

    </div>
  );
}
