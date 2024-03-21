import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAddProjectMutation } from "../rtk-query/apiSlice";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/react";
const Container = styled.div`
  margin: 4rem auto;
  padding: 3rem;
  max-width: 600px;
  border:
  border-radius: 8px;
  background-color:white;
  color:black;
`;
;

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



const Heading = styled.h1`
  text-align: center;
`;

const StyledForm = styled(Form)`
  margin-top: 2rem;
`;

const AddProject = () => {
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [demo, setDemo] = useState("");

  const [addProject] = useAddProjectMutation();

  const navigate = useNavigate();

  const clearData = () => {
    setImage(null);
    setArtist("");
    setAlbum("");
    setAudio(null);
    setTitle("");
    setCategory("");
    setDescription("");
    setDemo("");
  };

  const projectSubmitHandler = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("image", image);
    formData.append("artist", artist);
    formData.append("album", album);
    formData.append("audio", audio);
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("demo", demo);

    addProject(formData);

    clearData();

    navigate("/");
  };

  return (
    <>
      <GlobalStyles />
       <Container>
        <Heading>Add Song</Heading>
        <hr />
        <StyledForm onSubmit={projectSubmitHandler}>
          <Form.Group controlId="title">
            <Form.Control
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="artist">
            <Form.Control
              type="text"
              placeholder="Enter Artist Name"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="album">
            <Form.Control
              type="text"
              placeholder="Enter Album Title"
              value={album}
              onChange={(e) => setAlbum(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Select
            aria-label="Default select example"
            value={category}
            required
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Select Category</option>
            <option value="Romance">Romance</option>
            <option value="Country Music">Country Music</option>
            <option value="Amharic">Amharic</option>
            <option value="English/Vevo/">English/vevo/</option>
          </Form.Select>

          <Form.Group controlId="description">
            <Form.Control
              as="textarea"
              value={description}
              placeholder="Enter Detail Description"
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </Form.Group>

          <Form.Group controlId="demo">
            <Form.Control
              type="text"
              value={demo}
              onChange={(e) => setDemo(e.target.value)}
              placeholder="Enter Demo Link"
            />
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control
              type="file"
              required
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Form.Group>

          <Form.Group controlId="audio">
            <Form.Label>Upload Audio</Form.Label>
            <Form.Control
              type="file"
              required
              onChange={(e) => setAudio(e.target.files[0])}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Add Song
          </Button>
        </StyledForm>
      </Container>
    </>
  );
};

export default AddProject;
