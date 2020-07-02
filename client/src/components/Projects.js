import React from 'react';

function Projects() {

    return(

        <div className='projects'>
        <div className='container-fluid px-0'>

            <div className='section-title row d-flex justify-content-center text-center gotu m-5'>
                <h4>Project Portfolio</h4>
            </div>
            
            <div className='row'>

                <div className='col-md-6 d-flex justify-content-center mb-4'>
                    <figure className='imghvr-shutter-in-out-diag-2 project-img rounded-lg border border-white gotu'>
                        <img className='img-sizing' src='assets/images/desktop-screenshot.png' alt='Cocktail app'/>
                        <figcaption>
                            <h5>Shaken or Stirred</h5>
                            <p>Express app for creating a list of cocktails you want to try and ones you've already tried.</p>
                            <span className='links'><a href='https://shaken-or-stirred.herokuapp.com/' target='_blank' rel='noopener noreferrer'>View Project</a></span>
                            <span>•••</span>
                            <span className='links'><a href='https://github.com/jeffreymcfarland/cocktail_app' target='_blank' rel='noopener noreferrer'>View Code</a></span>
                        </figcaption>
                    </figure>
                </div>
                <div className='col-md-6 d-flex justify-content-center mb-4'>
                    <figure className='imghvr-shutter-in-out-diag-2 project-img rounded-lg border border-white gotu'>
                        <img className='img-sizing' src='assets/images/hows-it-growing.png' alt='Plant app'/>
                        <figcaption>
                            <h5>How's It Growing?</h5>
                            <p>Express app for keeping a watering schedule for the plants in your house.</p>
                            <span className='links'><a href='https://hows-it-growing.herokuapp.com/' target='_blank' rel='noopener noreferrer'>View Project</a></span>
                            <span>•••</span>
                            <span className='links'><a href='https://github.com/jeffreymcfarland/Hows_It_Growing' target='_blank' rel='noopener noreferrer'>View Code</a></span>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div className='row'>
                
                <div className='col-md-6 d-flex justify-content-center mb-4'>
                    <figure className='imghvr-shutter-in-out-diag-2 project-img rounded-lg border border-white gotu'>
                        <img className='img-sizing' src='assets/images/todo-app.png' alt='Note app'/>
                        <figcaption>
                            <h5>Note Taker</h5>
                            <p>A note taking application built with Express and Node.</p>
                            <span className='links'><a href='https://jm-notetaker.herokuapp.com/' target='_blank' rel='noopener noreferrer'>View Project</a></span>
                            <span>•••</span>
                            <span className='links'><a href='https://github.com/jeffreymcfarland/note_taker' target='_blank' rel='noopener noreferrer'>View Code</a></span>
                        </figcaption>
                    </figure>
                </div>
                <div className='col-md-6 d-flex justify-content-center mb-4'>
                    <figure className='imghvr-shutter-in-out-diag-2 project-img rounded-lg border border-white gotu'>
                        <img className='img-sizing' src='assets/images/weather-app.png' alt='Weather app'/>
                        <figcaption>
                            <h5>How's the Weather?</h5>
                            <p>Weather searching app that uses an API search to find current and future forecasts of searched cities.</p>                            
                            <span className='links'><a href='https://jeffreymcfarland.github.io/weather_app/' target='_blank' rel='noopener noreferrer'>View Project</a></span>
                            <span>•••</span>
                            <span className='links'><a href='https://github.com/jeffreymcfarland/weather_app' target='_blank' rel='noopener noreferrer'>View Code</a></span>                         
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div className='row'>
                
                <div className='col-md-6 d-flex justify-content-center mb-4'>
                    <figure className='imghvr-shutter-in-out-diag-2 project-img rounded-lg border border-white gotu'>
                        <img className='img-sizing' src='assets/images/planner-app.png' alt='Planner app'/>
                        <figcaption>
                            <h5>Work Day Planner</h5>
                            <p>Simple planner application using moment.js to dynamically add features based off the time of day.</p>
                            <span className='links'><a href='https://jeffreymcfarland.github.io/daily_planner/' target='_blank' rel='noopener noreferrer'>View Project</a></span>
                            <span>•••</span>
                            <span className='links'><a href='https://github.com/jeffreymcfarland/daily_planner' target='_blank' rel='noopener noreferrer'>View Code</a></span>
                        </figcaption>
                    </figure>
                </div>
                <div className='col-md-6 d-flex justify-content-center mb-4'>
                    <figure className='imghvr-shutter-in-out-diag-2 project-img rounded-lg border border-white gotu'>
                        <img className='img-sizing' src='assets/images/recipe-app.png' alt='recipe app'/>
                        <figcaption>
                            <h5>J's Cookbook</h5>
                            <p>Application for finding recipes based off ingredients you already have in your house.</p>                            
                            <span className='links'><a href='https://jeffreymcfarland.github.io/js-cookbook/index.html' target='_blank' rel='noopener noreferrer'>View Project</a></span>
                            <span>•••</span>
                            <span className='links'><a href='https://github.com/jeffreymcfarland/js-cookbook' target='_blank' rel='noopener noreferrer'>View Code</a></span>                         
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>


    )

}

export default Projects;