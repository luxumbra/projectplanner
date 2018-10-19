import React from 'react'

const ProjectDetails = (props) => {
    console.log(props);

    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project title {id}</span>
                    <p>Dreaming we bore surely repeating by hope it. Made more whom but whom laden but, desolate with gloating aptly till.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Dave</div>
                    <div>Oct 19, 17:14</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
