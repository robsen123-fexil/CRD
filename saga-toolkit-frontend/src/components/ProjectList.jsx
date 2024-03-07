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

const StyledCard = styled(Card)`
  width: 18rem;
  background: black;
  color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 2px;
  margin-right: 2px;
  ${pageStyles}
  color: white;
  background-color: black;
  border-block: none;
`;

const StyledViewButton = styled(StyledLink)`
  ${borders}
`;

const StyledContainer = styled(Container)`
  ${pageStyles}
`;

const StyledRow = styled(Row)`
  ${pageStyles}
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
      <h1>Latest</h1>
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
                        <Card.Img
                          variant="top"
                          height="150px"
                          src={project.image}
                        />
                        <audio controls style={pageStyles}>
                          <source
                            src={project.audio}
                            type="audio/mp3"
                            style={pageStyles}
                          />
                        </audio>
                        <Card.Body>
                          <Card.Title>{project.title}</Card.Title>
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
                          <StyledViewButton
                            to={`/project-detail/${project.id}`}
                            className="m-2 pd-2 btn btn-success"
                          >
                            View <FaInfoCircle />
                          </StyledViewButton>
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
                        <Card.Img
                          variant="top"
                          height="150px"
                          src={project.image}
                        />
                        <audio controls>
                          <source src={project.audio} type="audio/mp3" />
                        </audio>
                        <Card.Body>
                          <Card.Title>{project.title}</Card.Title>
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
                          <StyledViewButton
                            to={`/project-detail/${project.id}`}
                            className="m-2 pd-2 btn btn-success"
                          >
                            View <FaInfoCircle />
                          </StyledViewButton>
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
                        <Card.Img
                          variant="top"
                          height="150px"
                          src={project.image}
                        />
                        <audio controls>
                          <source src={project.audio} type="audio/mp3" />
                        </audio>
                        <Card.Body>
                          <audio controls>
                            <source src={project.audio} type="audio/mp3" />
                          </audio>
                          <Card.Title>{project.title}</Card.Title>
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
                          <StyledViewButton
                            to={`/project-detail/${project.id}`}
                            className="m-2 pd-2 btn btn-success"
                          >
                            View <FaInfoCircle />
                          </StyledViewButton>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
              : projectList.map((project) => (
                  <Col xs={12} md={6} lg={4} key={project.id}>
                    <StyledCard className="m-3 pd-2">
                      <Card.Img
                        variant="top"
                        height="150px"
                        src={project.image}
                      />
                      <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Title>{project.artist}</Card.Title>
                        <Card.Text
                          onClick={() => dispatch(filtered(project.category))}
                        >
                          <p></p>
                        </Card.Text>
                        <hr />
                        <StyledViewButton
                          to={`/project-detail/${project.id}`}
                          className="m-2 pd-2 btn btn-success"
                        >
                          <FaInfoCircle /> View
                        </StyledViewButton>
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
