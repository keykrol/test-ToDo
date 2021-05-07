import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles/DeleteToDo.css'


function DeleteTodo (props){

    return(
            <div className="TodoDeleteBackgound mt-5">
                <div className="TodoDeleteCenter mt-3">
                <h1> Are you Sure?</h1>
                </div>
                <div className="mt-3">
                <p> You are about to delete this badge</p>
                </div>
                <div className="mt-4">
                    <button  className="btn btn-danger mr-4" onClick={props.DeleteBadge}>Delete</button>
                    <Link className="btn btn-primary" to="/">Cancel</Link>
                </div>

            </div>
)

    
}

export default DeleteTodo;