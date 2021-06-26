import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Please enter your name!"),
  email: yup.string().email().required("Please enter your email!"),
  password: yup
    .string()
    .required("Please enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain at least 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmpwd: yup
    .string()
    .required("Please confirm your password")
    .test("confirm-pwd", "Passwords must match", function (value) {
      return this.parent.password === value;
    })
});

const Form = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
    setFormSubmitted(true);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {formSubmitted && <h3>Form Submitted Successfully </h3>}
      <div>
        {" "}
        {errors.name && <p> {errors.name.message} </p>}
        <input
          className={errors.name && "errors"}
          {...register("name")}
          type='text'
          name='name'
          placeholder='name'
        />{" "}
      </div>
      <div>
        {" "}
        {errors.email && <p> {errors.email.message} </p>}
        <input
          className={errors.email && "errors"}
          {...register("email")}
          type='text'
          name='email'
          placeholder='email'
        />{" "}
      </div>
      <div>
        {" "}
        {errors.password && <p> {errors.password.message} </p>}
        <input
          className={errors.password && "errors"}
          {...register("password")}
          type='password'
          name='password'
          placeholder='password'
        />
      </div>
      <div>
        {" "}
        {errors.confirmpwd && <p> {errors.confirmpwd.message} </p>}
        <input
          className={errors.confirmpwd && "errors"}
          {...register("confirmpwd")}
          type='password'
          name='confirmpwd'
          placeholder='confirm password'
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Form;
