import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Layout from './Layout';
import TodoFormContainerEdit from './TodoFormContainerEdit';
import TodoListFavoriteContainer from './TodoListFavoriteContainer';
import DeleteTodoModalContainer from './DeleteToDoModalContainer'
import TodoFormContainer from './TodoFormContainer';


function App(){
    return (
        <div>
            <BrowserRouter>
            <Layout>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/badges/create" component={TodoFormContainer}/>
            <Route exact path="/badges/:badgeId/edit" component={TodoFormContainerEdit}/>
            <Route exact path="/badges/:badgeId/delete" component={DeleteTodoModalContainer}/>
            <Route exact path="/favorite" component={TodoListFavoriteContainer}/>



            <Route component={NotFound}/>
            
            </Switch>
            </Layout>
            </BrowserRouter>
        </div>
    );

}

export default App;