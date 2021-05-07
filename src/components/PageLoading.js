import React from 'react';
import Loader from './Loader';
import '../components/styles/PageLoading.css'


function PageLoading(){
    return (
     <React.Fragment>
         <div className="PageLoading">
             <Loader />
         </div>
     </React.Fragment>
     
    );
}

export default PageLoading;