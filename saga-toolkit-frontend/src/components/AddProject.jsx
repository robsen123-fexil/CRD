import React from 'react'
import { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAddProjectMutation } from '../rtk-query/features/project/api/apiSlice';




const AddProject = () => {

 const [image, setImage] = useState(null);
 const [audio, setAudio]=useState(null);
 const [title, setTitle] = useState('');
 const [artist , setArtist]= useState('');
 const [album , setAlbum]=useState('');
 const [category, setCategory] = useState('');
 const [description, setDescription] = useState('');
 const [demo, setDemo] = useState('');

 const [addProject] = useAddProjectMutation();

 const navigate = useNavigate();
 

// to clear all data
 const clearData = () => {
    setImage(null);
    setArtist("");
    setAlbum("");
    setAudio(null);
    setTitle("");
    setCategory("");
    setDescription("");
    setDemo("");
 }

 const projectSubmitHandler = (e) => {
    
    e.preventDefault();
  
    let formData = new FormData();
    formData.append('image', image)
    formData.append('artist', artist)
    formData.append('album', album)
    formData.append('audio', audio)
    formData.append('title', title)
    formData.append('category', category)
    formData.append('description', description)
    formData.append('demo', demo)

    addProject(formData);

    clearData();

    navigate('/');

 }


  return (
    <div className="container mt-4 mb-4 pd-3">
      <h1>Add Song</h1>
      <hr />
      <div>
        <Form onSubmit={projectSubmitHandler}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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

          <Form.Group
            className="mb-3 mt-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Control
              as="textarea"
              value={description}
              placeholder="Enter Detail Description"
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
            <Form.Label>Upload Image</Form.Label>
            <Form.Control
              type="file"
              required
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
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
        </Form>
      </div>
    </div>
  );
}

export default AddProject
   