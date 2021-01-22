import React from "react";
import {Row,Button} from "react-bootstrap";
const TodoItem = () => {
  return (
    <div>
      <Row className="mx-2 align-items-center">
          <div>#1</div>
         <div className="col">
             <h3>Todo Title</h3>
         </div>
          <Button className="btn btn-primary m-2">Edit</Button>
          <Button className="btn btn-danger m-2">Delete</Button>
      </Row>
    </div>
  );
};

export default TodoItem;
