import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searched } from "../rtk-query/features/project/filter/filterSlice";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  outline: none;
  border: none;
  margin-right: 8px;
`;

const Searchbox = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </Form>
  );
};

export default Searchbox;
