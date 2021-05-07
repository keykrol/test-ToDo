import React from 'react';
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


function TodoListFavorite (props){
const badges = props.badges;

const {query, setQuery, filteredBadges} = useSearchBadges(badges);


        if (filteredBadges.length === 0){
            return (
                
                <div className="TodoListFavoriteContainer mt-5">
                    <div className="form-group">
                    <label>Filter Badges</label>
                    <input type="text" className="form-control"
                    value={query}
                    onChange= {(e) =>{
                        setQuery(e.target.value);
                    }} />
                </div>
                    <h3>No favorites were found</h3>
                </div>
            )
        }
        return(

            <div  className=" TodoListFavoriteContainer mt-5">
                <div className="form-group">
                    <label>Filter Badges</label>
                    <input type="text" className="form-control"
                    value={query}
                    onChange= {(e) =>{
                        setQuery(e.target.value);
                    }} />
                </div>
                <ul className="list-unstyled">
                    {filteredBadges.map(badge => {
                        if(badge.favorite === true){
                        return (
                            <li key={badge.id} className=" mb-2">
                                <div className="TodoListItem">
                                    <div>
                                        <strong>
                                        {badge.description}
                                        </strong>
                                        <br />{badge.dateCreate}
                                    </div>
                                </div>
                            </li>
                            )}
                    })}
                </ul>
            </div>
            
            )
    
}

export default TodoListFavorite;