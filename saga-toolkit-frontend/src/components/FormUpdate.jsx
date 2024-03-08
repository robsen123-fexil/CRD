import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEditProjectMutation } from "../rtk-query/features/project/api/apiSlice";
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


const StyledForm = styled(Form)`
  margin-top: 2rem;
`;

const ImgPreview = styled.img`
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 4px;
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
const FormUpdate = ({ singleProject }) => {
  const navigate = useNavigate();

  const [image, setImage] = useState(singleProject.image);
  const [artist, setArtist] = useState(singleProject.artist);
  const [album, setAlbum] = useState(singleProject.album);
  const [audio, setAudio] = useState(singleProject.audio);
  const [title, setTitle] = useState(singleProject.title);
  const [category, setCategory] = useState(singleProject.category);
  const [description, setDescription] = useState(singleProject.description);
  const [demo, setDemo] = useState(singleProject.demo);

  const [editProject] = useEditProjectMutation();

  const projectUpdateSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("audio", audio);
    formData.append("artist", artist);
    formData.append("album", album);
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("demo", demo);

    editProject({ id: singleProject.id, data: formData });

    navigate("/");
  };
 
  return (
    <>
      <GlobalStyles />
      <Container>
        
        <StyledForm onSubmit={projectUpdateSubmitHandler}>
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
              placeholder="Enter Album name"
              value={album}
              onChange={(e) => setAlbum(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Select
            aria-label="Default select example"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option defaultValue value={category}>
              {category}
            </option>
            <option>--- choose Other categories ----</option>
            <option value="Romance">Romance</option>
            <option value="Amharic">Amharic</option>
            <option value="English/vevo/">English/vevo/</option>
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
            <Form.Label>Update Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <ImgPreview src={image} height="100px" width="150px" />
          </Form.Group>

          <Form.Group controlId="audio">
            <Form.Label>Update audio</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setAudio(e.target.files[0])}
            />
            <ImgPreview src={audio} height="100px" width="150px" />
          </Form.Group>

          <Button variant="success" type="submit">
            Update Song
          </Button>
        </StyledForm>
      </Container>
    </>
  );
};

export default FormUpdate;
