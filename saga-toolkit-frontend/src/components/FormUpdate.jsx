import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEditProjectMutation } from "../rtk-query/features/project/api/apiSlice";

const FormUpdate = ({ singleProject }) => {
  const navigate = useNavigate();

  const pageStyles = {
    backgroundColor: "black",
    color: "white",
    border: "none",
  };

  const {
    id,
    title: initialTitle,
    image: initialImage,
    audio: initialAudio,
    artist: initialArtist,
    album: initialAlbum,
    category: initialCategory,
    description: initialDescription,
    demo: initialDemo,
  } = singleProject;

  const [image, setImage] = useState(initialImage);
  const [artist, setArtist] = useState(initialArtist);
  const [album, setAlbum] = useState(initialAlbum);
  const [audio, setAudio] = useState(initialAudio);
  const [title, setTitle] = useState(initialTitle);
  const [category, setCategory] = useState(initialCategory);
  const [description, setDescription] = useState(initialDescription);
  const [demo, setDemo] = useState(initialDemo);

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

    editProject({ id: id, data: formData });

    navigate("/");
  };

  return (
    <div>
      <Form onSubmit={projectUpdateSubmitHandler} style={pageStyles}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            style={pageStyles}
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={pageStyles}>
          <Form.Control
            type="text"
            placeholder="Enter Artist Name"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            placeholder="Enter Album name"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Select
          style={pageStyles}
          boundr
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

        <Form.Group
          className="mb-3 mt-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Control
            as="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="text"
            value={demo}
            onChange={(e) => setDemo(e.target.value)}
            placeholder="Enter Demo Link"
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Update Image</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <img
            className="mt-2 mb-2 pd-4"
            src={image}
            height="100px"
            width="150px"
          />
        </Form.Group>

        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Update audio</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => setAudio(e.target.files[0])}
          />
          <img
            className="mt-2 mb-2 pd-4"
            src={audio}
            height="100px"
            width="150px"
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Update Project
        </Button>
      </Form>
    </div>
  );
};

export default FormUpdate;
