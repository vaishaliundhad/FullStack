import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("UserName is Requited"),
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 character")
      .required("Password is Required"),
  });

  const handleSubmit = (values) => {
    
    navigate("/login")
  };

  return (
    <div>
      <h1 className="heading">This is SignUp Page</h1>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label>UserName</label>
            <Field name="name" type="text"></Field>
            <ErrorMessage name="name" component="div"></ErrorMessage>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <Field name="email" type="email"></Field>
            <ErrorMessage name="email" component="div"></ErrorMessage>
          </div>
          <div>
            <label>Password</label>
            <Field name="password" type="password"></Field>
            <ErrorMessage name="password"></ErrorMessage>
          </div>
          <button className="btn" type="submit">
            SignUp
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
