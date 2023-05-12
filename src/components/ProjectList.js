import { Link } from "react-router-dom/cjs/react-router-dom.min"
import Avatar from "./Avatar"

//styles
import "./ProjectList.css"

import React from 'react'


export default function ProjectList({projects}) {
  return (
    <div className="project-list">
        {/* //check if there is no projects */}
        {projects.length === 0 && <p>No projects yet!</p> }
        {projects.map(project => (
            <Link to={`/projects/${project.id}`} key={project.id}>
                <h4>{project.name}</h4>
                <p>Dou by {project.dueDate.toDate().toDateString()}</p>
                <div className="assigned-to">
                    <ul>
                    {project.assignedUsersList.map(user => (
                        <li key={user.photoURL}>
                            <Avatar src={user.photoURL} />
                        </li>
                    ))}
                    </ul>
                   
                </div>
            </Link>
        ))}
    </div>
  )
}
