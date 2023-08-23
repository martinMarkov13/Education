import ListGroup from "react-bootstrap/ListGroup";
import { ToDoItem } from "./ToDoItem";

export function ToDoList({
    todos,
}) {
  return (
    <div style={{ width: "40%", margin: "10px auto" }}>
        <h1>To Do List</h1>
    <ListGroup >
    {todos.map(t => <ToDoItem key={t._id} {...t}/>)}
    </ListGroup>
    </div>
  );
}
