
import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'

const Loader = () => {

    const data = useLoaderData();
    console.log(data);

    return (
        <div >
            <h1 className='heading'>This is a Loader page</h1>
            <ul>
                {data.map((item) => {
                    return (
                        <>
                            <li>
                                <Link className="underline" to={`${item.id}`}>{item.title}</Link>
                                <Link className="underline" to={`${item.id}`}>{item.img}</Link>
                                <Link className="underline" to={`${item.id}`}>{item.description}</Link>
                            </li>
                        </>
                    )
                })}
            </ul>
        </div>
    );
};
export const LoadingLoader= async()=>{
 const res = await fetch("https://fakestoreapi.com/products")
 return res.json();
};

export default Loader



