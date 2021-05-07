import React from 'react';
import '../components/styles/TodoForm.css';

 function TodoForm (props){
    const todoForm = props.todoForm;
    
    return(
        <div>

            <form onSubmit = {props.onSubmit}>
                <div className="form-group">
                    <label >To Do Content</label>
                    <textarea onChange={props.onChange} className="form-control" type="text" placeholder="Write here your activity" 
                              name="description" value= {todoForm.description} required />
                </div>
                <div className="form-group">
                    <label >Creation Date</label>                  
                    <input  onChange={props.onChange} className="form-control" type="text" placeholder="MM/DD/AAAA"
                                name="dateCreate" value= {todoForm.dateCreate} 
                                pattern="(0[1-9]|1[012])[/.](0[1-9]|[12][0-9]|3[01])[/.](19|20)\d\d" 
                                required />
                </div>
                                
                <button type="submit" className="btn btn-primary mr-4">Save</button>
           {props.error && (<p className="text-danger">{props.error.message}</p> )}
           
            </form>
        </div>

    )

} 

export default TodoForm;