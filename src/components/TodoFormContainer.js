import React from 'react';
import TodoForm from './TodoForm'
import api from '../api';
import PageLoading from './PageLoading';
import { Link } from 'react-router-dom';
import './styles/TodoForm.css'


class TodoFormContainer extends React.Component{
    state = {
        loading: false,
        error: null,
        form: {
            description:'',
            dateCreate:'',
            favorite:'',
        },
      };

      handleChange = e =>{
        this.setState({
            form: {
              ...this.state.form,
              [e.target.name]: e.target.value,
            },
          });
    };
    
    handleClick = e =>{
        
        console.log ("button was click");
    };
    
    handleSubmit = async e =>{
      
        e.preventDefault();
        this.setState({loading:true, error:null})
        try{
            await api.badges.create(this.state.form);
            this.setState({loading:false});
            this.props.history.push("/");
    
        }catch(error){
            this.setState({loading: false, error:error})
        }
    
    };


render(){
    if(this.state.loading)
    {
        return <PageLoading/>
    }

    return(

        <div className="TodoFormBackgound mt-5">
        <Link className="Cancel-button list-unstyled" to="/">X</Link>
            <div className="TodoFormContainer mt-3">
            <h1>New Activity</h1>
            
            </div>
            <div className="mt-5">
                <TodoForm  todoForm = {this.state.form} 
                            onChange={this.handleChange} 
                            onSubmit={this.handleSubmit}
                            error={this.state.error}/>
            </div>
        </div>
        )
    }
}

export default TodoFormContainer;