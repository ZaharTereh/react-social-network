import React from 'react';
import loadingPage from '../../../assets/images/loading.gif';


const Preloader = (props) =>{
    return(
        <div>
            <img src={loadingPage}/>
        </div>
    );
}

export default Preloader;