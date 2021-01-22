import React, { useState } from 'react'
import {Row,Button} from 'react-bootstrap';
import { addtodo } from '../redux/action';
import { useDispatch } from "react-redux";
import {v1 as uuid } from "uuid";
const TodoInput = () =>{
    let [name, setName] = useState();
    let dispatch = useDispatch();
    return(
        <div>
            <Row className="m-2">
                    <input onChange={(e)=>setName(e.target.value)} value={name} type="text" className="col form-control "/>
                    <Button onClick={() =>{dispatch(
                        addtodo(
                            {
                                id:uuid,
                                name: name
                            })
                    )
                        setName('');
                        }} className="btn btn-primary mx-2">Add</Button>
            </Row>

        </div>
    );
}

export default TodoInput;