import React from 'react';

function TechImage(props) {

    return(

        <div>
            <img className='skills m-1 tooltipped' data-position='top' data-tooltip='HTML' src={props.src} alt='html'/>
        </div>

    )

}

export default TechImage;