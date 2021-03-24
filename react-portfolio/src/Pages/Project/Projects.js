import React from "react";
import Container from "react-bootstrap/Container";
import ProjectCard from "../../Components/Projects/ProjectCard";
import ProjectInfo from "../../Utils/ProjectInfo";

function Work() {

  return (
        <Container>
            {ProjectInfo.map((project) => (
                <ProjectCard>
                    project={project}
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
