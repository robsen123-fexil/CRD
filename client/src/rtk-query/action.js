
import { createAction } from "@reduxjs/toolkit";

export const getAllProjects = createAction("api/getAllProjects");
export const getSingleProject = createAction("api/getSingleProject");
export const addProject = createAction("api/addProject");
export const editProject = createAction("api/editProject");
export const deleteProject = createAction("api/deleteProject");
