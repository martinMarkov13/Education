import ListGroup from "react-bootstrap/ListGroup";


export function ToDoItem({
    text,
    isCompleted
}){
     return (
      <ListGroup.Item action>{text}</ListGroup.Item>
     )
}