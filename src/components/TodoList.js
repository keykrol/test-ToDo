import React from 'react';
import { Link } from 'react-router-dom';
import './styles/TodoList.css';

function useSearchBadges(badges){
    const [query, setQuery] = React.useState('');
const [filteredBadges, setfilteredBadges] = React.useState(badges);

React.useMemo(() =>{
    const result= badges.filter(badge =>{
    return `${badge.description} ${badge.dateCreate}`.toLowerCase().includes(query.toLowerCase());
    });

    setfilteredBadges(result)
}, [badges, query]);

return {query, setQuery, filteredBadges}
}

function TodoList (props){
const badges = props.badges;

const {query, setQuery, filteredBadges} = useSearchBadges(badges);

        if (filteredBadges.length === 0){
            return (
                
                <div>
                    <div className="form-group">
                    <label>Filter Badges</label>
                    <input type="text" className="form-control"
                    value={query}
                    onChange= {(e) =>{
                        setQuery(e.target.value);
                    }} />
                </div>
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="/badges/create">
                        Create New Badge
                    </Link>
                </div>
            )
        }
        return(

            <div >
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input type="text" className="form-control"
                    value={query}
                    onChange= {(e) =>{
                        setQuery(e.target.value);
                    }} />
                </div>
                <ul className="list-unstyled">
                    {filteredBadges.map(badge=>{
                        return (
                            <li key={badge.id} className=" mb-2">
                                
                                
                                <div className="TodoListItem">
                                <div className="row">
                                    <div className="col-1">
                                    <input name="favorite" type="checkbox" checked={badge.done} id={badge.id} onChange={props.onChangeDone} />
                                    </div>
                                    <div className='col-5'>
                                    <div>
                                        <label><strong>Create Data:</strong></label>
                                        <p>{badge.dateCreate}</p> 
                                        <label><strong>Activity:</strong></label>
                                        <p>{badge.description}</p>
                                        
                                    </div>
                                    </div>
                                    <div className="col-2 TodoListCenter">
                                    <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`} >Edit</Link>
                                    </div>
                                    <div className="col-2 TodoListCenter">
                                    <Link className="btn btn-danger mb-4" to={`/badges/${badge.id}/delete`} >Delete</Link>
                                    </div>
                                    <div className="col-2 TodoListCenter">
                                    <label>Favorite</label>
                                    <br />
                                    <input name="favorite" type="checkbox" checked={badge.favorite} id={badge.id} onChange={props.onChange} />
                                    
                                    </div>
                                </div>
                                </div>
                            </li>
                            )
                    })}
                </ul>
            </div>
            
            )
    
}

export default TodoList;