import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Cards from './card-info.json';

function Projects() {

    const [cardInfo, setCardInfo] = useState(Cards);

    return(

        <div className='projects'>
        <div className='container-fluid px-0'>

            <div className='section-title row d-flex justify-content-center text-center gotu m-5'>
                <h4>Project Portfolio</h4>
            </div>
            
            <div className='row'>

                <ProjectCard 
                src={cardInfo[0].src} 
                alt={cardInfo[0].alt} 
                title={cardInfo[0].title} 
                desc={cardInfo[0].desc} 
                proj={cardInfo[0].proj}
                code={cardInfo[0].code}
                />
                <ProjectCard 
                src={cardInfo[1].src} 
                alt={cardInfo[1].alt} 
                title={cardInfo[1].title} 
                desc={cardInfo[1].desc} 
                proj={cardInfo[1].proj}
                code={cardInfo[1].code}
                />           
            </div>
            <div className='row'>
                <ProjectCard 
                src={cardInfo[2].src} 
                alt={cardInfo[2].alt} 
                title={cardInfo[2].title} 
                desc={cardInfo[2].desc} 
                proj={cardInfo[2].proj}
                code={cardInfo[2].code}
                />
                <ProjectCard 
                src={cardInfo[3].src} 
                alt={cardInfo[3].alt} 
                title={cardInfo[3].title} 
                desc={cardInfo[3].desc} 
                proj={cardInfo[3].proj}
                code={cardInfo[3].code}
                />               
            </div>
            <div className='row'>
                <ProjectCard 
                src={cardInfo[4].src} 
                alt={cardInfo[4].alt} 
                title={cardInfo[4].title} 
                desc={cardInfo[4].desc} 
                proj={cardInfo[4].proj}
                code={cardInfo[4].code}
                />         
                <ProjectCard 
                src={cardInfo[5].src} 
                alt={cardInfo[5].alt} 
                title={cardInfo[5].title} 
                desc={cardInfo[5].desc} 
                proj={cardInfo[5].proj}
                code={cardInfo[5].code}
                />         
            </div>
        </div>
    </div>


    )

}

export default Projects;