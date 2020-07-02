import React from 'react';

function Techs() {

    return(

    <div>
        {/* <div className='container-fluid px-0'> */}

            <div className='section-title row d-flex justify-content-center text-center gotu m-5'>
                <h4>Languages and Tools</h4>
            </div>

            <div className='row mb-5'>
                    
                <div className='col-md-6 d-flex justify-content-around ml-1 mr-n3'>
                    <img className='skills m-1 tooltipped' data-position='top' data-tooltip='HTML' src='assets/images/HTML-img.png' alt='html'/>
                    <img className='skills m-1 tooltipped' data-position='top' data-tooltip='CSS' src='assets/images/CSS-img.png' alt='css'/>
                    <img className='skills m-1 tooltipped' data-position='top' data-tooltip='JavaScript' src='assets/images/JS-img.png' alt='javascript'/>
                    <img className='skills m-1 tooltipped' data-position='top' data-tooltip='jQuery' src='assets/images/jquery-img.png' alt='jquery'/>
                    <img className='skills m-1 tooltipped' data-position='top' data-tooltip='Bootstrap' src='assets/images/BS-img.png' alt='bootstrap'/>
                    <img className='skills m-1 tooltipped' data-position='top' data-tooltip='Materialize' src='assets/images/material-img.png' alt='material'/>
                </div>
                <div className='col-md-6 d-flex justify-content-around'>
                    <img className='skills m-1 tooltipped' data-position='top' data-tooltip='NodeJS' src='assets/images/node-img.png' alt='node'/>
                    <img className='skills m-1 tooltipped' data-position='top' data-tooltip='SQL' src='assets/images/sql.png' alt='sql'/>
                    <img className='skills m-1 tooltipped' data-position='top' data-tooltip='MongoDB' src='assets/images/mongodb.png' alt='mongodb'/>
                    <img className='skills m-1 tooltipped' data-position='top' data-tooltip='Postman' src='assets/images/postman.png' alt='postman'/>
                    <img className='skills m-1 tooltipped' data-position='top' data-tooltip='Github' src='assets/images/github-img.png' alt='github'/>
                    <img className='skills m-1 tooltipped' data-position='top' data-tooltip='Terminal' src='assets/images/terminal-img.png' alt='terminal'/>
                </div>

            </div>
        {/* </div>      */}
    </div>


    )

}

export default Techs;