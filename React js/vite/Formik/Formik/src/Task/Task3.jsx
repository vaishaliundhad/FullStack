import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const Task3 = () => {
    const initialValues = {

       
        name: '',
        email: '',
        password: '',
        cpassword:''


    };

    const validationSchema = Yup.object({
        name: Yup.string().max(15, 'No more than 15 characters').required('username must be between 3 and 25 characters.'),
        email: Yup.string().email('Invalid Email Address').required('Required. Must be a valid email.'),
        password: Yup.string().max(12, 'No more than 12 characters').required('Required and must be of length 7 to 12.'),
        cpassword: Yup.string().max(12, 'No more than 12 characters').required('Please enter the password again.'),

    });

    const onSubmit = (values) => {
        console.log('form values', values);
    };

    return (
        <div className="flex items-center justify-center bg-gray-100 min-h-screen">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md h-1/2">
                <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form className="space-y-4">

                    {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">UserName</label>
                            <Field type="text" id="name" name="name" className="block w-full px-4 py-2 border rounded-sm"/>
                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                        </div>

                     {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email   </label>
                            <Field  type="email" id="email" name="email" className="block w-full px-4 py-2 border rounded-sm"/>
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">    Password</label>
                            <Field  type="password"  id="password"  name="password"  className="block w-full px-4 py-2 border rounded-sm"/>
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                        </div>

                        {/* confirm Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Confirm Password  </label>
                            <Field type="password" id="cpassword" name="cpassword" className="block w-full px-4 py-2 border rounded-sm"/>
                            <ErrorMessage name="cpassword" component="div" className="text-red-500 text-sm" />
                        </div>

                        {/* Submit */}
                        <div>
                            <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-indigo-600  hover:bg-indigo-700">SIGN UP </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default Task3;
