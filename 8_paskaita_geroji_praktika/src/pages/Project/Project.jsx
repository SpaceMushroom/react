import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { getProject } from "../../api/projects";
import "./Project.scss";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProject(id)
      .then((response) => {
        setProject(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  console.log(project);

  if (isLoading) {
    return <Loader />;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-container">
      <h1>{project.title}</h1>
      <p>Project description: {project.description}</p>
      <img src={project.imageUrl} alt={project.title} />
      <p>
        <span>Client: </span>
        {project.client}
      </p>
      <p>
        <span>Starting date: </span>
        {project.startingDate}
      </p>
      <p>
        <span>Ending date: </span>
        {project.endingDate}
      </p>
      {project.people.length > 0 && (
        <div className="people">
          <p>
            <span>People: </span>
          </p>
          <div>
            {project.people.map((person, index) => (
              <div key={index}>
                <p>
                  <span>Name: </span> {person.name}
                </p>
                <p>
                  <span>Surname: </span> {person.surname}
                </p>
                <p>
                  <span>Position: </span>
                  {person.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      {project.people.length === 0 && <div>No info about people... :(</div>}
    </div>
  );
};

export default Project;
