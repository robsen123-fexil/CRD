import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useDeleteProjectMutation, useGetSingleProjectQuery } from '../rtk-query/features/project/api/apiSlice';
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
const ProjectDetail = () => {
    const footerStyles = {
      backgroundColor: "darkgray", // Change this color as needed
      color: "black",
      padding: "10px",
      textAlign: "center",
    };
    const iconStyles = {
      marginRight: "10px",
      color: "black",
    };
    const navigate = useNavigate()
    const {projectId} = useParams();
    const pageStyles = {
      backgroundColor: "black",
      color: "white",
      boundry : "none"
    };
    const linkStyles = {
      
      color: "white",
      textDecoration: "none", // Remove default underline
      display: "inline-block", // Ensures proper inline positioning
      padding: "6px 12px", // Adjust padding as needed
    };
    const buttonStyles = {
    backgroundColor: "white",
    color: "black",
    border : "none"
  };

    const { data:singleProject } = useGetSingleProjectQuery(projectId);
    const [deleteProject] = useDeleteProjectMutation();

    console.log(singleProject);
    
    // Delete Single Project
    const deleteSingleProject = (id) => {
        deleteProject(id);
        navigate('/');
    }

    
  return (
    <div style={pageStyles} backgroundColor="black">
      <Container style={pageStyles} backgroundColor="black">
        <h1 className="text-center mt-3 mb-3 pd-2">Song Description</h1>
        <Row className="justify-content-center" style={pageStyles}>
          <Col xs={12} lg={6}>
            {singleProject ? (
              <Card style={{ width: "42rem", backgroundColor: "gray-white" }}>
                <Card.Img variant="top" src={singleProject.image} />
                <audio controls>
                  <source
                    src={singleProject.audio}
                    type="audio/mp3"
                    style={pageStyles}
                  />
                </audio>

                <Card.Body style={pageStyles}>
                  <br />
                  <hr />
                  <Link
                    to={"/update-project/" + singleProject.id}
                    style={linkStyles}
                  ></Link>
                </Card.Body>
              </Card>
            ) : (
              "no data"
            )}
          </Col>
          <Col xs={20} lg={6}>
            {singleProject ? (
              <Card style={{ width: "22rem" }}>
                <audio controls>
                  <source src={singleProject.audio} type="audio/mp3" />
                </audio>
                <Card.Body style={{ fontSize: "18px", padding: "20px" }}>
                  <Card.Title>Title: {singleProject.title}</Card.Title>
                  <Card.Title>Artist name : {singleProject.artist}</Card.Title>
                  <Card.Title>Album Title :{singleProject.album}</Card.Title>

                  <Card.Text>
                    Category:
                    <b>({singleProject.category})</b>{" "}
                  </Card.Text>
                  <Card.Text>{singleProject.description}</Card.Text>

                  <a
                    className="btn btn-warning m-2 pd-2"
                    href={singleProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={pageStyles}
                  >
                    <FontAwesomeIcon icon={faYoutube} className="mr-2" />
                    Youtube Link
                  </a>
                  <br />
                  <hr />
                  <Link
                    to={"/update-project/" + singleProject.id}
                    style={linkStyles}
                  >
                    <Button
                      variant="primary"
                      className="mt-2 mb-2 pd-2"
                      style={buttonStyles}
                    >
                      <FontAwesomeIcon icon={faEdit} className="mr-2" />
                      Edit
                    </Button>
                  </Link>

                  <Button
                    variant="danger"
                    className="mt-2 mb-2 pd-2"
                    style={buttonStyles}
                    onClick={() => deleteSingleProject(singleProject.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} className="mr-2" />
                    delete
                  </Button>
                </Card.Body>
              </Card>
            ) : (
              "no data"
            )}
          </Col>
        </Row>
      </Container>
      <div style={footerStyles}>
        <p>&copy; 2024 Addis Software(Setting The Standard).</p>
        <p> All rights reserved.</p>
        <a
          href="mailto:info@addissoftware.com"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyles}
        >
          <i className="fas fa-envelope"></i>
        </a>
        <a
          href="https://github.com/robsen123-fexil"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyles}
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://et.linkedin.com/company/addis-software"
          target="_blank"
          rel="noopener noreferrer"
          style={iconStyles}
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default ProjectDetail