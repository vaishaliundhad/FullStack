import React from 'react';
import { useFormik } from 'formik';

const Form1 = () => {

    // Define initial values for the form fields
    const initialValues = {
        fullName: '',
        email: '',
        password: ''
    };

    // Function to handle form submission
    const onSubmit = values => {
        console.log('formValue', values);
    };

    // Validation function to check if inputs are valid
    const validate = values => {
        const errors = {};
        if (!values.fullName) {
            errors.fullName = 'Required';
        }
        if (!values.email) {
            errors.email = 'Required';
        } 
        else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Required';
        }
        return errors;
    };

    // Initialize Formik with initial values, onSubmit function, and validation
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    return (
        <div>
            <h1 className="heading">Form with Formik in ReactApp</h1>
            <div className="flex h-lvh justify-center items-center">
                <form className="bg-gray-500 flex flex-col p-12" onSubmit={formik.handleSubmit}>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        className="mb-6 p-2"
                        type="text"
                        name="fullName"
                        id="fullName"
                        onChange={formik.handleChange}
                        value={formik.values.fullName} // Bind formik value
                    />
                    {formik.errors.fullName ? <div>{formik.errors.fullName}</div> : null}

                    <label htmlFor="email">Email</label>
                    <input
                        className="mb-6 p-2"
                        type="email"
                        name="email"
                        id="email"
                        onChange={formik.handleChange}
                        value={formik.values.email} // Bind formik value
                    />
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}

                    <label htmlFor="password">Password</label>
                    <input
                        className="mb-6 p-2"
                        type="password"
                        name="password"
                        id="password"
                        onChange={formik.handleChange}
                        value={formik.values.password} // Bind formik value
                    />
                    {formik.errors.password ? <div>{formik.errors.password}</div> : null}

                    <button type="submit" className="bg-purple-600 text-white p-2">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Form1;
