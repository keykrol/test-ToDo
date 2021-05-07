import React from 'react';
import api from '../api';
import PageLoading from './PageLoading';
import DeleteTodo from './DeleteToDo';


class DeleteTodoModalContainer extends React.Component{
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

        <div className="container">
            <DeleteTodo DeleteBadge={this.handleDeleteBadge}/>   

        </div>
        )
    }
}

export default DeleteTodoModalContainer;