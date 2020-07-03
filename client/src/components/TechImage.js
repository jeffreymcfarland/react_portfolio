import React from 'react';

function TechImage(props) {

    return(

        <div>
            <img className='skills m-1 tooltipped' data-position='top' data-tooltip={props.tooltip} src={props.src} alt='html'/>
        </div>

    )

}

export default TechImage;