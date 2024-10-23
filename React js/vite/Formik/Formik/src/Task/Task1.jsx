import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const Task1 = () => {
    const initialValues = {
        name: '',
        email: '',
        school: '',
        phone: '',
        gender: '',
        course: '',
        location: '',
    };

    // const {values ,handleblur,handlechange,handlesubmit}=Formik({
    //     initialValues:initialValues,
    //     onSubmit:(values)=>{
    //         console.log(values);
            
    //     },
        
    // })
    const onSubmit = (values) => {
        console.log('formValue', values);
    };

    const validationSchema = Yup.object({
        name: Yup.string().max(15, 'No more than 15 characters').required('Required'),
        email: Yup.string().email('Invalid Email Address').required('Required'),
        school: Yup.string().required('Required'),
        phone: Yup.string().max(10, 'Phone should contain at least 10 numbers').required('Required'),
        gender: Yup.string().required('Required'),
        course: Yup.array().min(1, 'Select at least one course'),
        location: Yup.string().required('Required')
    });

    return (
        <div className="flex justify-center items-center mt-4 h-50 bg-gradient-to-r from-pink-500 to-purple-500">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>

                <Form className="bg-white py-8 px-20 m-20 rounded-lg shadow-md">
                    <h2 className="text-4xl font-bold text-center text-pink-600 mb-6">
                        Student Details Form
                    </h2>

                    <div className="mb-4 flex">
                        <div className="mb-4">
                            <label className="block font-bold text-gray-700">Name</label>
                            <Field type="text" name="name" className="border-2 border-green-500 py-2 px-6 rounded-md w-full"/>
                            <ErrorMessage name="name" component="div" className="text-red-600 text-end" />
                        </div>

                        <div className="mb-4 ml-4">
                            <label className="block font-bold text-gray-700">Email</label>
                            <Field type="email" name="email" className="border-2 border-red-500 py-2 px-6 rounded-md w-full" />
                            <ErrorMessage name="email" component="div" className="text-red-600 text-end" />
                        </div>
                    </div>

                    <div className="mb-4 flex">
                        <div className="mb-4">
                            <label className="block font-bold text-gray-700">School</label>
                            <Field type="text" name="school" className="border-2 border-green-500 py-2 px-6 rounded-md w-full" />
                            <ErrorMessage name="school" component="div" className="text-red-600 text-end" />
                        </div>

                        <div className="mb-4 ml-4">
                            <label className="block font-bold text-gray-700">Phone</label>
                            <Field type="number" name="phone" className="border-2 border-red-500 py-2 px-6 rounded-md w-full" />
                            <ErrorMessage name="phone" component="div" className="text-red-600 text-end" />
                        </div>
                    </div>

                    <div className="flex">
                        <div className="mb-4">
                            <label className="block font-bold text-gray-700">Gender</label>
                            <div className="flex items-center">
                                <label className="mr-4">
                                    <Field type="radio" name="gender" value="Male" className="mr-2" /> Male
                                </label>
                                <label>
                                    <Field type="radio" name="gender" value="Female" className="mr-2" /> Female
                                </label>
                            </div>
                            <ErrorMessage name="gender" component="div" className="text-red-600 text-end" />
                        </div>

                        <div className="mb-4 ml-10">
                            <label className="font-bold text-gray-700 w-full">Course</label>
                            <div className="items-center ">
                                <label className="mr-4 block"><Field type="checkbox" name="course" value="IT" className="mr-2"/>IT</label>
                                <label className="mr-4 block"><Field type="checkbox" name="course" value="HRM" className="mr-2"/> HRM</label>
                                <label className="mr-4 block"><Field   type="checkbox"  name="course" value="english" className="mr-2"/> Engish</label>
                            </div>
                            <ErrorMessage name="course" component="div" className="text-red-600 text-end" />
                        </div>

                        <div className="mb-4 ml-10">
                            <label className="block font-bold text-gray-700">Institute Location</label>
                            <Field  as="select" name="location" className="border-2 border-black p-2 rounded-md w-full" >
                                <option value="">Select location</option>
                                <option value="London">London</option>
                                <option value="Paris">Paris</option>
                                <option value="Pune">Pune</option>
                            </Field>
                            <ErrorMessage name="location" component="div" className="text-red-600 text-end" />
                        </div>
                    </div>

                    <button type="submit" className="bg-pink-600 text-white font-bold py-2 px-4 rounded hover:bg-pink-700"> Submit</button>
                </Form>

            </Formik>
        </div>
    );
};

export default Task1;
