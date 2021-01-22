import React from 'react'
import {Row,Button} from 'react-bootstrap';
const TodoInput = () =>{
    return(
        <div>
            <Row className="m-2">
                    <input type="text" className="col form-control "/>
                    <Button className="btn btn-primary mx-2">Add</Button>
               
            </Row>

        </div>
    );
}

export default TodoInput;