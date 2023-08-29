// import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { useForm } from "../hooks/useForm";

export const AddTodoModal = ({
    show,
    onTodoAdd,
    onTodoAddClose
}) => {
    const {formValues, onChangeHandler, onSubmit} = useForm({text: ""}, onTodoAdd)

  return (
    <Modal show={show} >
      <Modal.Header closeButton onClick={onTodoAddClose}>
        <Modal.Title>Add ToDo</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>ToDo</Form.Label>
            <Form.Control
              type="text"
              name="text"
              placeholder="Do the dishes"
              value={formValues.name}
              onChange={onChangeHandler}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{ marginRight: "10px" }}
          >
            Submit
          </Button>
          <Button variant="secondary" onClick={onTodoAddClose}>Close</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer />
    </Modal>
  );
};
