import React from 'react';
import api from '../api';
import PageLoading from './PageLoading';
import PageError from './PageError';
import TodoListFavorite from './TodoListFavorite';

class TodoListFavoriteContainer extends React.Component{
    
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


fetchData = async () =>{
    this.setState({loading:true, error:null});

    try{
      
        const data = await api.badges.list();
        this.setState({loading:false, data: data});

    } catch(error){
        this.setState({loading:false, error:error});

    }
};


render(){
    if (this.state.loading === true && !this.state.data) {
        return <PageLoading />;
      }
    
    if (this.state.error){
        return <PageError error={this.state.error} />;
    }

    return (
    
    <TodoListFavorite badges={this.state.data} 
               />
    )

}
}

export default TodoListFavoriteContainer;