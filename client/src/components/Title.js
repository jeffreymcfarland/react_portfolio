import React from 'react';

function Title() {
    return(
        
        <div>
            <div className="container-fluid px-0 body1">
            
            <div className="row mx-0 title-page">
                
                <div className="col-sm-12 px-0">

                    <div className="icon-links">
                        <a href="https://github.com/jeffreymcfarland" target="_blank" rel="noopener noreferrer"><img className="icons icons-github" src="assets/images/iconfinder_github_2308116.png" alt="github icon link"/></a>
                        <a href="https://www.linkedin.com/in/jlmmcfarlandj/" target="_blank" rel="noopener noreferrer"><img className="icons" src="assets/images/linkedin.png" alt="linkedin icon link"/></a>
                        <form action="assets/docs/resume.pdf" target="_blank"><button className="port-btn"><img className="icons" src="assets/images/portfolio.png" alt="gmail icon link"/></button></form>
                        <a href="mailto:jlmcfarlandj@gmail.com?Subject=Web%20Developer%20Request" target="_blank" rel="noopener noreferrer"><img className="icons" src="assets/images/gmail.png" alt="gmail icon link"/></a>
                        <a href="https://www.instagram.com/jeffinaround/" target="_blank" rel="noopener noreferrer"><img className="icons" src="assets/images/instagram.png" alt="instagram icon link"/></a>
                    </div>

                    <img className="ocean-img" src="assets/images/green-fern-leaf.jpg" alt="ocean"/>

                    <div>
                        <a href="#aboutMe"><h4 className="draw gotu centered d-flex justify-content-center text-center">jeffrey mcfarland</h4></a>
                    </div>
                </div>
            </div>

        </div>
        </div>

    
    )

}

export default Title;