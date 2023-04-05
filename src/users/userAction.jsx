import { ADD_USER, SORT_USER } from "./userType";

export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

export const sortUser = (field) => {
  return {
    type: SORT_USER,
    payload: field,
  };
};
