import React from "react";
import * as Yup from "Yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { getFormDataFromLocalStorage } from "./Auth/Auth";

const Login = () => {

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 character")
      .required("Password is Required"),
  });

  const handleSubmit = (values,{isError,isSubmitting}) => {
    const user = getFormDataFromLocalStorage(values.email)
    if(user && user.password === values.password){
      localStorage.setItem('authenticate',true)
      navigate('/')                         
    }
    else{
      isError({password:"invalid email and password"})
    }
    isSubmitting(false)
  }

  return (
    <div>
      {/* <h1 className="heading">This is Login page</h1> */}
      <Formik
        validationSchema={validationSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {
          ({isSubmitting})=>(
            <Form className='bg-slate-200 mx-[420px] my-4 p-8'>
            <div>
              <label htmlFor="" className='me-4 text-lg'>Email:-</label>
              <Field name="email" type="email" className="p-2 mt-8 mr-[-20px]"></Field>
              <ErrorMessage name="email" component="div " className="text-red-500"></ErrorMessage>
            </div>
            <div>
              <label className='me-2 text-lg'>Password:-</label>
              <Field name="password" type="password" className="p-2 mt-8"></Field>
              <ErrorMessage name="password " component="div" className="text-red-500"></ErrorMessage>
            </div>
            <button className='btn mt-8 mr-[-40px] p-3 px-6 rounded' disabled={isSubmitting}  type="submit">
            Login
            </button>
          </Form>

          )
        }
      
      </Formik>
    </div>
  );
};

export default Login;
  