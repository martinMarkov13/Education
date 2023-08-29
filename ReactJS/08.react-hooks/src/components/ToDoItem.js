import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

export function ToDoItem({ _id, text, isCompleted, onTodoDeleteClick }) {
  return (
    <ListGroup.Item
      action
      style={{ display: "flex", justifyContent: "space-between" }}
      >
      {text}
      <Button variant="dark" onClick={() => onTodoDeleteClick(_id)}>
        X
      </Button>
    </ListGroup.Item>
  );
}
