
     
import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'

const Validation = () => {

    const initialValues = {
        fullName : '',
        email : '',
        password : ''
    }

    const validationSchema = Yup.object({
        fullName : Yup.string().max(15 , 'Maximum 15 Character').required('Required'),
        email : Yup .string() .email('Invalid email Address').required('Required'),
        password : Yup.string().required('Required')
    })

    const onSubmit = values => {
        console.log('formValue', values);
    }

     const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    return (
        <div>
            <h1 className='text-3xl text-white bg-violet-600 py-4 flex justify-center '>Form with Formik in ReactApp</h1>

            <div className='flex h-lvh justify-center items-center'>
            
                <form className='bg-gray-200 flex flex-col p-12 w-1/4' onSubmit={formik.handleSubmit} validationSchema={validationSchema}>
            
                    <label htmlFor="fullName" className='mt-3'>FullName</label>
                    <input className='mb-6 p-2' type="text" name="fullName" id="fullName" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.fullName && formik.errors.fullName ? <div className='text-red-600 -mt-5 text-sm'>{formik.errors.fullName}</div> : null}

                    <label htmlFor="email" className='mt-3'>Email</label>
                    <input className='mb-6 p-2' type="email" name="email" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                    {formik.touched.email && formik.errors.email ? <div className='text-red-600 -mt-5 text-sm'>{formik.errors.email}</div> : null}

                    <label htmlFor="password" className='mt-3'>Password</label>
                    <input className='mb-6 p-2' type="password" name="password" id="password" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                    {formik.touched.password && formik.errors.password ? <div className='text-red-600 -mt-5 text-sm'>{formik.errors.password}</div> : null}

                    <button type="submit" className='bg-purple-600 text-white p-2 mt-4'>Submit</button> 
            
                </form>
            
            </div>
        </div>
    )
}

export default Validation