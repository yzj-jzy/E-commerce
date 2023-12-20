import React from 'react';
import './footer.styles.scss';

const footer = ()=>{
    const year = new Date().getFullYear();
    return(
        <div className='foot-container'>    
            {year} © NOMAD Store
        </div>
    )
}

export default footer;