import React from "react";
import { Card, Button } from "react-bootstrap";

function ProjectCard (props) {
    return (
        <div>
            <Card style= {{ width: '400px'}}>
                <Card.Img variant="top" src="{props.img}"/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button variant="primary" href={props.github}>Github</Button>
                    <Button variant="primary"href={props.link}>See Live</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectCard;