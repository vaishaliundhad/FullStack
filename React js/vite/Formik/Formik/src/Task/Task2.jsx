import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const Task2 = () => {
  const initialValues = {
    user: '',
    password: '',
    name: '',
    address: '',
    country: '',
    zip: '',
    email: '',
    sex: '',
    language: [],
    about: ''
  };

const validationSchema = Yup.object({
    name: Yup.string().max(15, 'No more than 15 characters').required('Required and alphabets only.'),
    user: Yup.string().max(12, 'No more than 12 characters').required('Required and must be of length 5 to 12.'),
    password: Yup.string().max(12, 'No more than 12 characters').required('Required and must be of length 7 to 12.'),
    address: Yup.string(),
    country: Yup.string().required('Required. You must select a country.'),
    zip: Yup.string().required('Required. Must be numeric only.'),
    email: Yup.string().email('Invalid Email Address').required('Required. Must be a valid email.'),
    sex: Yup.string().required('Required'),
    language: Yup.array().min(1, 'Select at least one language'),
    about: Yup.string()
});

  const onSubmit = (values) => {
    console.log('form values', values);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md h-1/2">
        <h2 className="text-2xl font-bold text-center">Registration Form</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
          <Form className="space-y-4">
            {/* User ID */}
            <div>
              <label htmlFor="user" className="block text-sm font-medium text-gray-700">User ID</label>
              <Field type="text" id="user" name="user" className="block w-full px-4 py-2 border rounded-md" />
              <ErrorMessage name="user" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Password</label>
              <Field type="password" id="password"  name="password" className="block w-full px-4 py-2 border rounded-md"/>
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Name</label>
              <Field  type="text"  id="name"  name="name"  className="block w-full px-4 py-2 border rounded-md"/>
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700"> Address (Optional)</label>
              <Field  type="text" id="address" name="address" className="block w-full px-4 py-2 border rounded-md"/>
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">  Country</label>
              <Field as="select" id="country" name="country" className="block w-full px-4 py-2 border rounded-md"  >
                <option value="" disabled>Please select a country</option>
                <option value="US">London</option>
                <option value="CA">Canada</option>
                <option value="UK">Austrelia</option>
              </Field>
              <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
            </div>

            {/* ZIP Code */}
            <div>
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                ZIP Code
              </label>
              <Field
                type="number"
                id="zip"
                name="zip"
                className="block w-full px-4 py-2 border rounded-md"
              
              />
              <ErrorMessage name="zip" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="block w-full px-4 py-2 border rounded-md"
              
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Sex */}
            <div>
              <span className="block text-sm font-medium text-gray-700">Sex</span>
              <div className="space-x-4">
                <label>
                  <Field type="radio" name="sex" value="Male" />
                  Male
                </label>
                <label>
                  <Field type="radio" name="sex" value="Female" />
                  Female
                </label>
              </div>
              <ErrorMessage name="sex" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Language */}
            <div>
              <span className="block text-sm font-medium text-gray-700">Language</span>
              <div className="space-x-4">
                <label>
                  <Field type="checkbox" name="language" value="English" />
                  English
                </label>
                <label>
                  <Field type="checkbox" name="language" value="Non English" />
                  Non-English
                </label>
              </div>
              <ErrorMessage name="language" component="div" className="text-red-500 text-sm" />
            </div>

            {/* About */}
            <div>
              <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                About (Optional)
              </label>
              <Field
                as="textarea"
                id="about"
                name="about"
                rows="3"
                className="block w-full px-4 py-2 border rounded-md"
                
              />
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Task2;
