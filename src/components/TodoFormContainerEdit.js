import React from 'react';
import TodoForm from './TodoForm'
import api from '../api';
import PageLoading from './PageLoading';
import './styles/TodoForm.css'
import { Link } from 'react-router-dom';

class TodoFormContainerEdit extends React.Component{
    state = {
        loading: true,
        error: null,
        form: {
            description:'',
            dateCreate:'',
            favorite:'',
        },
      };

      componentDidMount(){
        this.fetchData();
        
    }

    fetchData = async e =>{
        this.setState({loading: true, error: null})

        try{
            const data = await api.badges.read(this.props.match.params.badgeId);
            console.log (this.props.match.params.badgeId);
          this.setState({loading: false, form:data})

        }catch(error){
          this.setState({loading:false, error:error})
        }
    }

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
      //console.log ("Form was submit");
      //console.log (this.state);
      this.setState({loading:true, error:null})
      try{
          await api.badges.update(this.props.match.params.badgeId, this.state.form);
          this.setState({loading:false});
          this.props.history.push("/");
  
      }catch(error){
          this.setState({loading: false, error:error})
      }
  
  };

  handleDeleteBadge = async e => {
    this.setState({loading:true, error:null});

    try{
        await api.badges.remove(this.props.match.params.badgeId);
        this.setState({ loading: false });

        this.props.history.push('/');
        

    }catch(error){
        this.setState({loading:false, error:error});

    }
  };

render(){
    if (this.state.loading){
        return <PageLoading />;

     }


    return(

        <React.Fragment >
        <div className="TodoFormBackgound mt-5">
        <Link className="Cancel-button list-unstyled" to="/">X</Link>
            <div className="TodoFormContainer mt-3">
            <h1>Edit Activity</h1>
            
            </div>
            <div className="mt-5">
                <TodoForm  todoForm = {this.state.form} 
                             onChange={this.handleChange} 
                             onSubmit={this.handleSubmit}
                             onDeleteBadge={this.handleDeleteBadge}
                             error={this.state.error}>
   
            </TodoForm>
            
            </div>
        </div>
        </React.Fragment>
        )
    }
}

export default TodoFormContainerEdit;