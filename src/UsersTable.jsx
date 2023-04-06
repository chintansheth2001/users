import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { FaSortAlphaDownAlt, FaSortAlphaDown, FaSort } from "react-icons/fa";

import { sortUser } from "./redux";

const UsersTable = (props) => {
  return (
    <div>
      {props.users.length ? (
        <table
          width="100%"
          className="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead className="text-xs  uppercase bg-gray-50 dark:bg-gray-700 text-white">
            <tr>
              <th
                className="px-6 py-3 cursor-pointer  "
                onClick={() => {
                  props.sortUser("firstName");
                }}
              >
                <span className="flex gap-1">
                  First Name
                  <span className="text-lg">
                    {props.sortBy === "firstName" && props.asc && (
                      <FaSortAlphaDown />
                    )}
                    {props.sortBy === "firstName" && !props.asc && (
                      <FaSortAlphaDownAlt />
                    )}
                    {props.sortBy !== "firstName" && <FaSort />}
                  </span>
                </span>
              </th>
              <th
                className="px-6 py-3 cursor-pointer   "
                onClick={() => {
                  props.sortUser("lastName");
                }}
              >
                <span className="flex  gap-1">
                  Last Name
                  <span className="text-lg">
                    {props.sortBy === "lastName" && props.asc && (
                      <FaSortAlphaDown />
                    )}
                    {props.sortBy === "lastName" && !props.asc && (
                      <FaSortAlphaDownAlt />
                    )}
                    {props.sortBy !== "lastName" && <FaSort />}
                  </span>
                </span>
              </th>
              <th
                className="px-6 py-3 cursor-pointer   "
                onClick={() => {
                  props.sortUser("email");
                }}
              >
                <span className="flex  gap-1">
                  Email
                  <span className="text-lg">
                    {props.sortBy === "email" && props.asc && (
                      <FaSortAlphaDown />
                    )}
                    {props.sortBy === "email" && !props.asc && (
                      <FaSortAlphaDownAlt />
                    )}
                    {props.sortBy !== "email" && <FaSort />}
                  </span>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.users.map((user, i) => {
              return (
                <tr
                  key={"user_" + i}
                  className="bg-white border-b dark:bg-gray-100 dark:border-gray-200 text-black"
                >
                  <td className="px-6 py-4">{user.firstName}</td>
                  <td className="px-6 py-4">{user.lastName}</td>
                  <td className="px-6 py-4">{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div
          className="bg-red-100 border border-red-200 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">No user to display! </strong>
          <span className="block sm:inline">
            Please enter user from above form.
          </span>
        </div>
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
