// Collect information on the projects 
import Notetaker from "../Assets/images/notetaker.png"
import Jams from "../Assets/images/jams.png"
import Message from "../Assets/images/message.png"

export const ProjectInfo = [
    {
        id: 1,
        title: "Notetaker",
        img: Notetaker,
        description: "Allows uses to create, saved, and delete notes",
        github: "https://github.com/Jerquanus/notetaker",
        link: "https://jerquanus-notetaker.herokuapp.com/"
    },
    {
        id: 2,
        title: "JAMS EDUCATIONAL TOOL",
        img: Jams,
        description: "React Project, with password authentication",
        github: "https://github.com/Jerquanus/",
        link: "https://jams-app.herokuapp.com/"
    },
    {
        id: 3,
        title: "Message Transcript",
        img: Message,
        description: "Using React hooks to pull information from an API to create a message transcript",
        github: "https://github.com/Jerquanus/notetaker",
        link: "https://jerquanus.github.io/Message-Transcript/"
    }
]

export default ProjectInfo;