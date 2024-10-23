import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const FormYup = () => {
  const initialValues = {
    Firstname: '',
    Lastname: '',
    email: '',
    Password: ''
  };

  const onSubmit = (values) => {
    console.log('formvalue', values);
  };

  const validationSchema = Yup.object({
    Firstname: Yup.string().max(15, 'no more than 15 char').required('Required'),
    Lastname: Yup.string().max(15, 'no more than 15 char').required('Required'),
    email: Yup.string().email('invalid Email Address').required('Required'),
    Password: Yup.string().required('Required')
  });

  return (
    <div>
      <h1 className="py-4 bg-violet-700 text-white text-3xl text-center">Form with Formup in ReactApp</h1>
      <div className="flex h-lvh justify-center items-center">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          <Form className="bg-gray-500 flex flex-col p-12">
            <label htmlFor="Firstname">Firstname</label>
            <Field type="text" name="Firstname" id="Firstname" className="p-2 px-14" onchage={Formik.handlechange} onBlur={Formik.handleBlur}/>
            <ErrorMessage name="Firstname" component="div" className="text-red-600 text-end" />

            <label htmlFor="Lastname">Lastname</label>
            <Field type="text" name="Lastname" id="Lastname" className="p-2" />
            <ErrorMessage name="Lastname" component="div" className="text-red-600  text-end" />

            <label htmlFor="email">Email</label>
            <Field type="text" name="email" id="email" className="p-2" />
            <ErrorMessage name="email" component="div" className="text-red-600  text-end" />

            <label htmlFor="Password">Password</label>
            <Field type="password" name="Password" id="Password" className="p-2" />
            <ErrorMessage name="Password" component="div" className="text-red-600  text-end" />

            <button type="submit" className="bg-purple-600 text-white p-2 mt-4">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormYup;

