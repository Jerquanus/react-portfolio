import React from "react";
import Container from "react-bootstrap/Container";
import ProjectCard from "../../Components/Projects/ProjectCard";
import ProjectInfo from "../../Utils/ProjectInfo";

function Work(props) {
    const projects = props.ProjectInfo;
  return (
        <Container>
            {projects.map((work) => (
                <ProjectCard>
                    key={ProjectInfo.id}
                    title={ProjectCard.title}
                    description={ProjectCard.description}
                    image={ProjectCard.img}
                    github={ProjectCard.github}
                    link={ProjectCard.link}
                </ProjectCard>
            ))}  
        </Container > 
    );
}

export default Work;
