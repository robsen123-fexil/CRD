import React from "react";
import { Col, Card, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useGetAllProjectsQuery } from "../rtk-query/features/project/api/apiSlice";
import { filtered } from "../rtk-query/features/project/filter/filterSlice";
import NavBar from "./NavBar";
import { FaInfoCircle } from "react-icons/fa";
import styled from "@emotion/styled";
import { space, layout, color, borders } from "styled-system";
import "@fortawesome/fontawesome-free/css/all.css";

const pageStyles = {
  backgroundColor: "black",
  color: "white",
  border: "none",
};
const CustomLink = styled(Link)`
  text-decoration: none; /* Remove underline */
  color: white; /* Set text color to white */
`;

const StyledCard = styled(Card)`
  border: 1px solid black; /* Set border to black */
  border-radius: 5px; /* Optional: Add border-radius for a rounded look */
  width: 18rem;
  background: black;
  color:white;

`;
const footerStyles = {
  backgroundColor: "darkgray",
  color: "black",
  padding: "10px",
  textAlign: "center",
};

const iconStyles = {
  marginRight: "10px",
  color: "black",
};

const StyledContainer = styled(Container)`
  ${pageStyles}
`;

const StyledRow = styled(Row)`
  ${pageStyles}
`;
const StyledCardImage = styled(Card.Img)`
  height: 150px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1); /* Increase the scale factor as needed */
  }
`;

const StyledFooter = styled.div`
  background-color: darkgray;
  color: black;
  padding: 10px;
  text-align: center;
`;

const StyledFooterContainer = styled.div`
  ${footerStyles}
`;

const StyledIconLink = styled.a`
  ${iconStyles}
`;

const ProjectList = () => {
  const { data: projectList } = useGetAllProjectsQuery();
  const { search, filterByType } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div style={pageStyles}>
      <h1>Latest Song</h1>
      <hr />
      <Container as={StyledContainer}>
        <Row as={StyledRow}>
          {projectList
            ? filterByType
              ? projectList
                  .filter((f) => f.category === filterByType)
                  .map((project) => (
                    <Col xs={12} md={6} lg={4} key={project.id}>
                      <StyledCard className="m-3 pd-2">
                        <Link to={`/project-detail/${project.id}`}>
                          {" "}
                          <StyledCard>
                            <StyledCardImage
                              as="img"
                              to={`/project-detail/${project.id}`}
                              variant="top"
                              src={project.image}
                            />
                          </StyledCard>
                        </Link>
                        <Link to={`/project-detail/${project.id}`}>
                          {" "}
                          <StyledCard>
                            <StyledCardImage
                              to={`/project-detail/${project.id}`}
                              as="img"
                              variant="top"
                              src={project.image}
                            />
                          </StyledCard>
                        </Link>
                        <Link to={`/project-detail/${project.id}`}>
                          {" "}
                          <StyledCard>
                            <StyledCardImage
                              as="img"
                              to={`/project-detail/${project.id}`}
                              variant="top"
                              src={project.image}
                            />
                          </StyledCard>
                        </Link>
                        <audio controls style={pageStyles}>
                          <source
                            src={project.audio}
                            type="audio/mp3"
                            style={pageStyles}
                          />
                        </audio>
                        <Card.Body>
                          <StyledCard>
                            <CustomLink to={`/project-detail/${project.id}`}>
                              <Card.Title style={{ color: "white" }}>
                                {project.title}
                              </Card.Title>
                              <Card.Title>{project.artist}</Card.Title>
                            </CustomLink>
                          </StyledCard>

                          <Card.Text
                            onClick={() => dispatch(filtered(project.category))}
                          ></Card.Text>
                          <hr />
                          <a
                            className="btn btn-info m-2 pd-2"
                            href={project.demo}
                            target="_blank"
                          >
                            Link
                          </a>
                        </Card.Body>
                      </StyledCard>
                    </Col>
                  ))
              : search
              ? projectList
                  .filter((f) =>
                    f.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((project) => (
                    <Col xs={12} md={6} lg={4} key={project.id}>
                      <Card className="m-3 pd-2">
                        <Link to={`/project-detail/${project.id}`}>
                          {" "}
                          <StyledCard>
                            <StyledCardImage
                              as="img"
                              to={`/project-detail/${project.id}`}
                              variant="top"
                              src={project.image}
                            />
                          </StyledCard>
                        </Link>

                        <audio controls>
                          <source src={project.audio} type="audio/mp3" />
                        </audio>
                        <Card.Body>
                          <StyledCard>
                            <CustomLink to={`/project-detail/${project.id}`}>
                              <Card.Title style={{ color: "white" }}>
                                {project.title}
                              </Card.Title>
                              <Card.Title>{project.artist}</Card.Title>
                            </CustomLink>
                          </StyledCard>

                          <Card.Text
                            onClick={() => dispatch(filtered(project.category))}
                          >
                            <b>({project.category})</b>
                          </Card.Text>
                          <hr />
                          <a
                            className="btn btn-info m-2 pd-2"
                            href={project.demo}
                            target="_blank"
                          >
                            Link
                          </a>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
              : search && filterByType
              ? projectList
                  .filter((f) =>
                    f.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .filter((f) => f.category === filterByType)
                  .map((project) => (
                    <Col xs={12} md={6} lg={4} key={project.id}>
                      <Card className="m-3 pd-2">
                        <Link to={`/project-detail/${project.id}`}>
                          {" "}
                          <StyledCard>
                            <StyledCardImage
                              to={`/project-detail/${project.id}`}
                              as="img"
                              variant="top"
                              src={project.image}
                            />
                          </StyledCard>
                        </Link>
                        <audio controls>
                          <source src={project.audio} type="audio/mp3" />
                        </audio>
                        <Card.Body>
                          <audio controls>
                            <source src={project.audio} type="audio/mp3" />
                          </audio>
                          <StyledCard>
                            <CustomLink to={`/project-detail/${project.id}`}>
                              <Card.Title style={{ color: "white" }}>
                                {project.title}
                              </Card.Title>
                              <Card.Title>{project.artist}</Card.Title>
                            </CustomLink>
                          </StyledCard>
                          <Card.Text
                            onClick={() => dispatch(filtered(project.category))}
                          >
                            <b>({project.category})</b>
                          </Card.Text>
                          <hr />
                          <a
                            className="btn btn-info m-2 pd-2"
                            href={project.demo}
                            target="_blank"
                          >
                            Link
                          </a>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
              : projectList.map((project) => (
                  <Col xs={12} md={6} lg={4} key={project.id}>
                    <StyledCard className="m-3 pd-2">
                      <Link to={`/project-detail/${project.id}`}>
                        {" "}
                        <StyledCard>
                          <StyledCardImage
                            to={`/project-detail/${project.id}`}
                            as="img"
                            variant="top"
                            src={project.image}
                          />
                        </StyledCard>
                      </Link>

                      <Card.Body>
                        <StyledCard>
                          <CustomLink to={`/project-detail/${project.id}`}>
                            <Card.Title style={{ color: "white" }}>
                              {project.title}
                            </Card.Title>
                            <Card.Title>{project.artist}</Card.Title>
                          </CustomLink>
                        </StyledCard>
                        <Card.Text
                          onClick={() => dispatch(filtered(project.category))}
                        >
                          <p></p>
                        </Card.Text>
                        <hr />
                      </Card.Body>
                    </StyledCard>
                  </Col>
                ))
            : "No Data"}
        </Row>
      </Container>
      <StyledFooter>
        <StyledFooterContainer>
          <p>&copy; 2024 Addis Software (Setting The Standard).</p>
          <p> All rights reserved.</p>
          <StyledIconLink
            href="mailto:info@addissoftware.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i>
          </StyledIconLink>
          {/* Other social icons... */}
        </StyledFooterContainer>
      </StyledFooter>
    </div>
  );
};

export default ProjectList;
