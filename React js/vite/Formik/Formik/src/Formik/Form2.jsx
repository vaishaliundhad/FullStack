import React from 'react'
import { useFormik } from 'formik'

const initialValues ={
    name:"",
    email:"",
    password:"",
};

const Form2 = () => {
    const {values ,handleblur,handlechange,handlesubmit}=useFormik({
        initialValues:initialValues,
        onSubmit:(values)=>{
            console.log(values);
            
        },
        
    })
  return (
    <div className='app'>
        <form onSubmit={handlesubmit}>
         <label htmlFor="name">name</label>
         <br/>
         <input type="text" name="name" value={values.name} onBlur={handleblur} onchange={handlechange}/>

         <label htmlFor="email">email</label>
         <br/>
         <input type="email" name="email" value={values.email} onBlur={handleblur} onchange={handlechange}/>

         <label htmlFor="password">password</label>
         <br/> 
         <input type="pasword" name="password" value={values.password} onBlur={handleblur} onchange={handlechange}/>
        

        </form>
      
    </div>
  )
}

export default Form2
