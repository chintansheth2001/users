import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { sortUser } from "./redux";

const UsersTable = (props) => {
  return (
    <div>
      {props.users.length ? (
        <table width="100%" border="1">
          <thead>
            <tr>
              <th
                onClick={() => {
                  props.sortUser("firstName");
                }}
              >
                First Name
                <span className="red">
                  {props.sortBy === "firstName" && props.asc && " Asc "}
                  {props.sortBy === "firstName" && !props.asc && " Desc "}
                </span>
              </th>
              <th
                onClick={() => {
                  props.sortUser("lastName");
                }}
              >
                Last Name
                <span className="red">
                  {props.sortBy === "lastName" && props.asc && " Asc "}
                  {props.sortBy === "lastName" && !props.asc && " Desc "}
                </span>
              </th>
              <th
                onClick={() => {
                  props.sortUser("email");
                }}
              >
                Email
                <span className="red">
                  {props.sortBy === "email" && props.asc && " Asc "}
                  {props.sortBy === "email" && !props.asc && " Desc "}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.users.map((user, i) => {
              return (
                <tr key={"user_" + i}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h2>There is no user enter one from above form</h2>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    sortBy: state.sortBy,
    asc: state.asc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortUser: (field) => dispatch(sortUser(field)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
