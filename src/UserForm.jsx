import React from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";

import { addUser } from "./redux";

function UserForm(props) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    props.addUser(data);
    reset();
  };

  return (
    <div className="user-form">
      <h2 className="font-bold text-xl mb-4">User Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className={`block  text-sm font-bold mb-2 ${
              errors.firstName ? "text-red-700" : "text-gray-700"
            }`}
            htmlFor="firstName"
          >
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-1  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            {...register("firstName", {
              required: "First Name is required",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Enter valid First Name",
              },
            })}
          />

          {errors.firstName && (
            <p className="text-red-500 text-xs italic" role="alert">
              {errors.firstName?.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className={`block  text-sm font-bold mb-2 ${
              errors.lastName ? "text-red-700" : "text-gray-700"
            }`}
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-1  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            {...register("lastName", {
              required: "Last Name is required",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Enter valid Last Name",
              },
            })}
          />

          {errors.lastName && (
            <p className="text-red-500 text-xs italic" role="alert">
              {errors.lastName?.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className={`block  text-sm font-bold mb-2 ${
              errors.email ? "text-red-700" : "text-gray-700"
            }`}
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-1  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                message: "Enter valid email",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic" role="alert">
              {errors.email?.message}
            </p>
          )}
        </div>

        <input
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          value={"Add User"}
        />
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user)),
  };
};
export default connect(null, mapDispatchToProps)(UserForm);
