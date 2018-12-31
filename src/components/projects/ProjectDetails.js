import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;

    return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - {id}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere repudiandae culpa dolore, placeat temporibus explicabo nulla eligendi vel incidunt maiores, cum suscipit consequuntur adipisci! Nam dolore laudantium voluptatum suscipit! Omnis.</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by The Net Ninja</div>
                <div>30th December, 10px</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails
