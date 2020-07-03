import React from 'react';

function ProjectCard(props) {

    return(

        <div className='col-md-6 d-flex justify-content-center mb-4'>
            <figure className='imghvr-shutter-in-out-diag-2 project-img rounded-lg border border-white gotu'>
                <img className='img-sizing' src={props.src} alt={props.alt}/>
                <figcaption>
                    <h5>{props.title}</h5>
                    <p>{props.desc}</p>                            
                    <span className='links'><a href={props.proj} target='_blank' rel='noopener noreferrer'>View Project</a></span>
                    <span>•••</span>
                    <span className='links'><a href={props.code} target='_blank' rel='noopener noreferrer'>View Code</a></span>                         
                </figcaption>
            </figure>
        </div>

    )

}

export default ProjectCard;