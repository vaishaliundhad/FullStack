import React from 'react'
import * as Yup from "Yup";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { formDataSaveFromLocalStorage } from './Auth/Auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('username is required'),
    email: Yup.string().email('invalid email').required('email is required'),
    password: Yup.string().min(8, 'password must be atleast 8 character').required('password is required'),
  })

  const handleSubmit = (values) => {
    formDataSaveFromLocalStorage(values)
    navigate('/login')
  }

  return (
    <div>
      {/* <h1 className='heading text-xl'>This is a SignUp page</h1> */}
      <Formik initialValues={{ name: '', email: '', password: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {
          () => (
            <Form className='bg-slate-200 mx-[420px] my-4 p-8'>
              <div>
                <label htmlFor="username" className='me-4 text-lg'>Username:-</label>
                <Field name="name" type="text" className="p-2 mt-8"></Field>
                <ErrorMessage name="name" component="div" className='text-red-500'></ErrorMessage>
              </div>
              <div>
                <label htmlFor="email" className='me-4 text-lg'>Email:-</label>
                <Field name="email" type="email " className="p-2 mt-8 mr-[-30px]"></Field>
                <ErrorMessage name="email" component="div" className='text-red-500'></ErrorMessage>
              </div>
              <div>
                <label htmlFor="password" className='me-4 text-lg'>password:-</label>
                <Field name="password" type="password" className="p-2 mt-8"></Field>
                <ErrorMessage name="password" component="div" className='text-red-500'></ErrorMessage>
              </div>
              <button type="submit" className='btn mt-8 mr-[-40px] p-3 px-6 rounded  '>SignUp</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default Signup
  