import React, { useState } from 'react';
import TechImage from './TechImage';
import images1 from './tech-images1.json';
import images2 from './tech-images2.json';


function Techs() {

    const [techs1, setTechs1] = useState(images1);
    const [techs2, setTechs2] = useState(images2);

    return(

    <div>
        {/* <div className='container-fluid px-0'> */}

            <div className='section-title row d-flex justify-content-center text-center gotu m-5'>
                <h4>Languages and Tools</h4>
            </div>

            <div className='row mb-5'>
                    
                <div className='col-md-6 d-flex justify-content-around ml-1 mr-n3'>
                    {techs1.map(image => (
                        <TechImage src={image.link}/>
                    ))}
                </div>
                <div className='col-md-6 d-flex justify-content-around'>
                    {techs2.map(image => (
                        <TechImage src={image.link}/>
                    ))}
                </div>

            </div>
        {/* </div>      */}
    </div>


    )

}

export default Techs;