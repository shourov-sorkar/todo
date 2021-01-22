import React from "react";
import {Row,Button} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletetodo } from "../redux/action";
const TodoItem = ({todo}) => {
  let dispatch = useDispatch();
  return (
    <div>
      <Row className="mx-2 align-items-center">
          <div>#{todo.id}</div>
         <div className="col">
             <h3>{todo.name}</h3>
         </div>
          <Button  className="btn btn-primary m-2">Edit</Button>
          <Button onClick={()=>dispatch(deletetodo(todo.id))} className="btn btn-danger m-2">Delete</Button>
      </Row>
    </div>
  );
};

export default TodoItem;
