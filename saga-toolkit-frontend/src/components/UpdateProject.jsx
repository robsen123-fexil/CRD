import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetSingleProjectQuery } from '../rtk-query/features/project/api/apiSlice';
import FormUpdate from './FormUpdate';

const pageStyles = {
  backgroundColor: "black",
  color: "white",
  border: "none",
};

const UpdateProject = () => {

const {id} = useParams();
const { data:singleProject } = useGetSingleProjectQuery(id);

  return (
    <div className="container mt-4 mb-4 pd-3" style={pageStyles} backgroundColor="black">
      <h1 style={pageStyles}>Update Project id:{id}</h1>
      <hr />
      <div style={pageStyles}>
        <FormUpdate singleProject={singleProject} />
      </div>
    </div>
  );
}

export default UpdateProject