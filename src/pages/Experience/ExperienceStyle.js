import { container, title } from "../../components/material-kit-react"
import './style.min.css';

const ExperienceStyle = {
    container,
    title: {
        ...title,
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    marginAuto: {
        marginLeft: "auto !important",
        marginRight: "auto !important",
        marginBottom: "3em"
    }
};

export default ExperienceStyle;
