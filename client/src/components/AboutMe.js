import React from 'react';

function AboutMe() {

    return(

        <div>
        <div className="container-fluid px-0 mt-5">

            <div className="row">

                <div id="aboutMe" className="col-md-6 d-flex justify-content-center">
                    <div className="div-img d-flex align-items-center">
                        <img className="animated fadeOutLeft jeff-img" src="assets/images/IMG_6690.JPG" alt="jeffrey"/>
                    </div>
                </div>
                <div className="attachContent gotu text-center col-md-5 d-flex justify-content-center align-items-center">
                    <div className="aboutMe-div animated">
                        <a><h4 className="aboutMe animated fadeOut slower">about me</h4></a>
                    </div>
                </div>
                <div className="col-md-1">

                </div>
            </div>
        </div>
    </div>

    )

};

export default AboutMe;