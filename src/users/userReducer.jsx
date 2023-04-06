import { produce } from "immer";
import { ADD_USER, SORT_USER } from "./userType";

const initialState = {
  users: [],
  sortBy: "firstName",
  asc: true,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return produce(state, (draft) => {
        draft.users.push(action.payload);
        draft.users = sortUser(draft);
      });
    case SORT_USER:
      if (state.sortBy === action.payload) {
        return produce(state, (draft) => {
          draft.asc = !draft.asc;
          draft.users = sortUser(draft);
        });
      } else {
        return produce(state, (draft) => {
          draft.asc = true;
          draft.sortBy = action.payload;
          draft.users = sortUser(draft);
        });
      }

    default:
      return state;
  }
};

const sortUser = (draftObject) => {
  return draftObject.users.slice().sort((a, b) => {
    let fa = a[draftObject.sortBy].toLowerCase(),
      fb = b[draftObject.sortBy].toLowerCase();
    if (draftObject.asc) {
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    } else {
      if (fa > fb) {
        return -1;
      }
      if (fa < fb) {
        return 1;
      }
      return 0;
    }
  });
};

export default userReducer;
