import React from 'react';
import api from '../api';
import TodoList from './TodoList';
import PageLoading from './PageLoading';
import PageError from './PageError';

class TodoListContainer extends React.Component{
    
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false,
      };


componentDidMount(){
    this.fetchData();
    this.handleInputChange = this.handleInputChange.bind(this);
    
}

handleOpenModal = e => {
    this.setState({modalIsOpen:true})
  };

handleCloseModal = e => {
    this.setState({modalIsOpen:false});
  };

fetchData = async () =>{
    this.setState({loading:true, error:null});

    try{
        const data = await api.badges.list();
        this.setState({loading:false, data: data});

    } catch(error){
        this.setState({loading:false, error:error});

    }
};



handleInputChange = async e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const data = await api.badges.read(target.id);
    data.favorite = value
    await api.badges.update(target.id, data);
    await this.fetchData();


  }

  handleInputChangeDone = async e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    const data = await api.badges.read(target.id);
    data.done = value
    await api.badges.update(target.id, data);
    await this.fetchData();


  }

render(){
    if (this.state.loading === true && !this.state.data) {
        return <PageLoading />;
      }
    
    if (this.state.error){
        return <PageError error={this.state.error} />;
    }

    return (
    
    <TodoList badges={this.state.data} 
               onCloseModal={this.handleCloseModal}
               onOpenModal={this.handleOpenModal}
               modalIsOpen={this.state.modalIsOpen}
               onChange ={this.handleInputChange}
               onChangeDone ={this.handleInputChangeDone}
               />
    )

}
}

export default TodoListContainer;