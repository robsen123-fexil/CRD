import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  useDeleteProjectMutation,
  useGetSingleProjectQuery,
} from "../rtk-query/features/project/api/apiSlice";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components"; // Import styled-components
import { Global, css } from "@emotion/react";
// Define emotion components using styled-components


const PageContainer = styled.div`
  background-color: black;
  color: white;
  size:lg;
  margin:0;
  padding:0;
  
`;
const FooterContainer = styled.div`
  background-color:darkgray;
  color: black;
  padding: 10px;
  text-align: center;
`;
const IconLink = styled.a`
  margin-right: 10px;
  color: black; /* Change this color as needed for the links */
  text-decoration: none; /* Remove default underline for links */
`;
const CardContainer = styled(Card)`
  width: 42rem;
  background-color: transparent;
  color : white;
  border:none;
`;

const ButtonContainer = styled(Button)`
  background-color: white;
  color: black;
  border: none;
`;

const LinkContainer = styled(Link)`
  color: white;
  text-decoration: none;
  display: inline-block;
  padding: 6px 12px;
`;
const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        background-color: black;
        color: white;
        margin: 0;
        padding: 0;
      }
    `}
  />
);
const ProjectDetail = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const { data: singleProject } = useGetSingleProjectQuery(projectId);
  const [deleteProject] = useDeleteProjectMutation();

  // Delete Single Project
  const deleteSingleProject = (id) => {
    deleteProject(id);
    navigate("/");
  };

  return (
  <>
   <GlobalStyles/>
    <PageContainer >
      <Container >
        <h1 className="text-center mt-3 mb-3 pd-2">Song Description</h1>
        <Row className="justify-content-center">
          <Col xs={5} lg={6}>
            {singleProject ? (
              <CardContainer>
                <Card.Img variant="top" src={singleProject.image} />
                <p></p>
                <audio
                  controls
                  style={{
                    color: "yourDesiredColor",
                    backgroundColor: "anotherColor",
                  }}
                >
                  <source src={singleProject.audio} type="audio/mp3" />
                </audio>
                <Card.Body>
                  <br />
                  <hr />
                  <LinkContainer
                    to={"/update-project/" + singleProject.id}
                  ></LinkContainer>
                </Card.Body>
              </CardContainer>
            ) : (
              "no data"
            )}
          </Col>
          
          <Col xs={12} lg={6}>
            {singleProject ? (
              <CardContainer>
                <Card.Body style={{ fontSize: "18px", padding: "20px" }}>
                  <Card.Title>Title: {singleProject.title}</Card.Title>
                  <Card.Title>Artist name : {singleProject.artist}</Card.Title>
                  <Card.Title>Album Title :{singleProject.album}</Card.Title>

                  <Card.Text>
                    Category:
                    <b>({singleProject.category})</b>{" "}
                  </Card.Text>
                     <Card.Text><h1>Biography</h1>
                      {singleProject.description}</Card.Text>

                  <a
                    className="btn btn-warning m-2 pd-2"
                    href={singleProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faYoutube} className="mr-2" />
                    Youtube Link
                  </a>
                  <br />
                  <hr />
                  <LinkContainer to={"/update-project/" + singleProject.id}>
                    <ButtonContainer className="mt-2 mb-2 pd-2">
                      <FontAwesomeIcon icon={faEdit} className="mr-2" />
                      Edit
                    </ButtonContainer>
                  </LinkContainer>

                  <ButtonContainer
                    variant="danger"
                    className="mt-2 mb-2 pd-2"
                    onClick={() => deleteSingleProject(singleProject.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} className="mr-2" />
                    delete
                  </ButtonContainer>
                </Card.Body>
              </CardContainer>
            ) : (
              "no data"
            )}
          </Col>
        </Row>
      </Container>
      <FooterContainer>
        <p>&copy; 2024 Addis Software (Setting The Standard).</p>
        <p>All rights reserved.</p>
        <IconLink
          href="mailto:info@addissoftware.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
        </IconLink>
        <IconLink
          href="https://github.com/robsen123-fexil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </IconLink>
        <IconLink
          href="https://et.linkedin.com/company/addis-software"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </IconLink>
      </FooterContainer>
    </PageContainer>
  </>  
  );
};

export default ProjectDetail;
