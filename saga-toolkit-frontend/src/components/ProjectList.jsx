import React from 'react'
import { Col, Card, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useGetAllProjectsQuery } from '../rtk-query/features/project/api/apiSlice'
import { filtered } from '../rtk-query/features/project/filter/filterSlice'
import NavBar from './NavBar'
import "@fortawesome/fontawesome-free/css/all.css";
const ProjectList = () => {


const {data: projectList} = useGetAllProjectsQuery();
const { search, filterByType } = useSelector(state => state.filter);


const dispatch = useDispatch();
 const pageStyles = {
   backgroundColor: "black",
   color: "white",
   border: "none" 
 };
 const footerStyles = {
   backgroundColor: "darkgray", // Change this color as needed
   color: "black",
   padding: "10px",
   textAlign: "center",
 };
   const iconStyles = {
     marginRight: "10px",
     color:"black"
   };

  return (
    <div style={pageStyles}>
      <h1>Song's</h1>
      <hr />
      <Container style={pageStyles}>
        <Row style={pageStyles}>
          {projectList
            ? filterByType
              ? projectList
                  .filter((f) => f.category === filterByType)
                  .map((project) => (
                    <Col xs={12} md={6} lg={4} key={project.id}>
                      <Card
                        style={{ width: "18rem", background: "black" }}
                        className="m-3 pd-2"
                      >
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
                          <Link
                            style={{
                              textDecoration: "none",
                              marginLeft: "2px",
                              marginRight: "2px",
                            }}
                            className="m-2 pd-2 btn btn-success"
                            to={"/project-detail/" + project.id}
                          >
                            View
                          </Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
              : search
              ? projectList
                  .filter((f) =>
                    f.title.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((project) => (
                    <Col xs={12} md={6} lg={4} key={project.id}>
                      <Card style={{ width: "18rem" }} className="m-3 pd-2">
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
                          <Link
                            style={{
                              textDecoration: "none",
                              marginLeft: "2px",
                              marginRight: "2px",
                            }}
                            className="m-2 pd-2 btn btn-success"
                            to={"/project-detail/" + project.id}
                          >
                            View
                          </Link>
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
                      <Card style={{ width: "18rem" }} className="m-3 pd-2">
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
                          <Link
                            style={{
                              textDecoration: "none",
                              marginLeft: "2px",
                              marginRight: "2px",
                            }}
                            className="m-2 pd-2 btn btn-success"
                            to={"/project-detail/" + project.id}
                          >
                            View
                          </Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
              : projectList.map((project) => (
                  <Col xs={12} md={6} lg={4} key={project.id}>
                    <Card
                      style={{ width: "18rem", border: "none" }}
                      className="m-3 pd-2"
                    >
                      <Card.Img
                        variant="top"
                        height="150px"
                        src={project.image}
                      />

                      <Card.Body style={pageStyles}>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Title>{project.artist}</Card.Title>
                        <Card.Text
                          onClick={() => dispatch(filtered(project.category))}
                        >
                          <b>({project.category})</b>
                        </Card.Text>
                        <hr />
                        <a
                          className="btn btn-info m-2 pd-2"
                          style={pageStyles}
                          href={project.demo}
                          target="_blank"
                        >
                          Link
                        </a>
                        <Link
                          style={{
                            textDecoration: "none",
                            marginLeft: "2px",
                            marginRight: "2px",
                            pageStyles,
                          }}
                          className="m-2 pd-2 btn btn-success"
                          to={"/project-detail/" + project.id}
                        >
                          Detail
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
            : "No Data"}
        </Row>
      </Container>
      <div style={footerStyles}>
        <p>&copy; 2024 Addis Software . Setting The Standard.</p>
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

export default ProjectList

