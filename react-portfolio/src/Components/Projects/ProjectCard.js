import React from "react";
import { Card, Button } from "react-bootstrap";
import "./style.css";



function ProjectCard (props) {
    return (
        <div className="projectCard">
            <Card border="secondary" style= {{ width: '775px'}} >
                <Card.Img variant="top" src={props.img} alt={props.title}/>
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                            <Card.Text>
                                {props.description}
                            </Card.Text>
                        <Button variant="primary" size="lg" block href={props.github} target="_blank" rel="noopener noreferrer">Github</Button>
                        <Button variant="primary" size="lg" block href={props.link} target="_blank" rel="noopener noreferrer">See Live</Button>
                    </Card.Body>
                </Card>
        </div>
)};

export default ProjectCard;