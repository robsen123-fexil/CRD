import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleProjectQuery } from "../rtk-query/features/project/api/apiSlice";
import styled from "@emotion/styled";
import { space, layout, color } from "styled-system";
import FormUpdate from "./FormUpdate";

const Container = styled("div")`
  ${space}
  ${layout}
  margin-top: 4rem;
  margin-bottom: 4rem;
  padding: 3rem;
`;

const Heading = styled.h1`
  ${color}
`;

const Hr = styled.hr`
  ${space}
  border-top: 1px solid white;
`;

const UpdateProject = () => {
  const { id } = useParams();
  const { data: singleProject } = useGetSingleProjectQuery(id);

  return (
    <Container className="container">
      <Heading color="white">Update Song</Heading>
      <Hr my={4} />
      <div>
        <FormUpdate singleProject={singleProject} />
      </div>
    </Container>
  );
};

export default UpdateProject;
