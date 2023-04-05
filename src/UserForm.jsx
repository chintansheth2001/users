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
      <h2>User Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
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
            <div role="alert">{errors.firstName?.message}</div>
          )}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
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
            <div role="alert">{errors.lastName?.message}</div>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
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
          {errors.email && <div role="alert">{errors.email?.message}</div>}
        </div>

        <input type="submit" value={"Add User"} />
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
