import React from 'react';
import '../components/styles/PageError.css'


function PageError(props){
    return (
    <React.Fragment>
        <div className="PageError">
         {props.error.message}
        </div>
    </React.Fragment>
    ); 
}

export default PageError;