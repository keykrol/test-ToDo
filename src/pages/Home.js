import React from 'react';
import './styles/Home.css';
import TodoListContainer from '../components/TodoListContainer';
import { Link } from 'react-router-dom';

class Home extends React.Component{
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false,
      };


handleOpenModal = e => {
    this.setState({modalIsOpen:true})
  };

handleCloseModal = e => {
    this.setState({modalIsOpen:false});
  };



render(){

    return(
        
        <React.Fragment >
            <div className="Badge__container">
                <div className="Badges__buttons mt-4 mr-4">
                 
                    <Link className="btn btn-primary" to="/badges/create">New To do</Link>   
                                    
                                
                </div>

                <div className="Badges__list">
                    <div className= "Badges__container">
                        <TodoListContainer />

                    </div>
                </div>
            </div>

        </React.Fragment>
        
        )
    }
}

export default Home;