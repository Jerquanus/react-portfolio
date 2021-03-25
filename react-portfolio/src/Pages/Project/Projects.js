import React from "react";
import Container from "react-bootstrap/Container";
import ProjectCard from "../../Components/Projects/ProjectCard";
import ProjectInfo from "../../Utils/ProjectInfo";

function Work() {
    const projects = ProjectInfo;

    const createcard = projects.map((work, index)=> (
        <ProjectCard key={index}
             img={work.img}
             title={work.title}
             description={work.description}
             github={work.github}
             link={work.link}
        />
    ));
 
  return (
    <Container>
        {createcard}
    </Container>
    );
}

export default Work;
