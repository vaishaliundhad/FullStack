import React from 'react'
import { useState, useEffect } from 'react'
import { CardList } from './Data';

const UseEffect = () => {

    const [data, setData] = useState([0]);
    const [toggle , settoggle]=useState(false);


    console.log('data', data);
    const [index, setindex] = useState(0);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setData(res))
    }, [index]);




    const List = [CardList[index]];


    // const handleclick = () => {
    //     setindex(index + 1)
    // }

    // const prevclick = () => {
    //     setindex(index-1)
    // }
    const data1 = [CardList[data]];
   

    const Next = () => {
        if (index == 9) {
            setindex(0);
        } else {
            setindex((NextState) => NextState + 1);
        }
    };

    const Prev = () => {
        if (index > 0) {
            setindex((PrevState) => PrevState - 1);
        } else {
            setindex((PrevState) => PrevState = 0)
        }
    }



    return (
        <>
            <h1 className='heading'> This is UseEffect</h1>
            <div className='flex flex-wrap gap-5 justify-around'>
                <div>
                    <button className="bg-blue-500 px-4 py-2 rounded-md flex align-bottom text-white text-lg" onClick={Prev}>Prev</button>
                </div>

                {
                    List.map((item) => {
                        return (
                            <div className="w-[320px]  h-auto  max-w-sm bg-white border border-gray-200 rounded-md shadow  mt-6 text-center ">
                                
                                <div className="flex flex-col items-center pb-10 mt-4 ">
                                    <img
                                        className="w-24 h-24 content-center mb-3 rounded-md shadow-lg scale-125"
                                        src={item.image}
                                        alt="Bonnie image"
                                    />
                                    <h5 className="mb-1  font-sm text-center line-clamp-1 text-gray-900 dark:text-black">
                                        {item.title}
                                    </h5>
                                   {
                                    toggle &&(
                                        <span className="text-sm text-gray-500 dark:text-gray-400 text-center line-clamp-2">
                                        {item.description}
                                    </span>
                                    )
                                   }
                                    
                                    <div className="flex mt-4 md:mt-6">
                                       
                                        <button
                                            className="py-2 px-4 ms-2 text-sm font-medium   bg-red-600 text-white rounded-lg border border-gray-200 hover:bg-red-300 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100  "
                                        onClick={()=>{settoggle((toggle)=> ! toggle)}}>
                                        {
                                            toggle ? 'hide':'show more'
                                        }
                                        </button>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
                <div>
                    <button className="bg-blue-500 px-4 py-2 rounded-md flex align-bottom text-white text-lg " onClick={Next} >Next</button>
                </div>
            </div>
        </>
    )
}

export default UseEffect

// import React from 'react'
// import { useState, useEffect } from 'react'

// const UseEffect = () => {

//     const [data, setData] = useState([])
//     console.log('data', data)

//     useEffect(() => {
//         fetch('https://fakestoreapi.com/products')
//             .then(res => res.json())
//             .then(res => setData(res))
//     }, [])

    
    

//     return (
//         <div className='flex flex-wrap gap-5'>
//             {
//                 data.map((item) => {
//                     return (
//                         <div key={item.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                             <div className="flex justify-end px-4 pt-4">
//                                 <button
//                                     id="dropdownButton"
//                                     data-dropdown-toggle="dropdown"
//                                     className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
//                                     type="button"
//                                 >
//                                     <span className="sr-only">Open dropdown</span>
//                                     <svg
//                                         className="w-5 h-5"
//                                         aria-hidden="true"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="currentColor"
//                                         viewBox="0 0 16 3"
//                                     >
//                                         <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
//                                     </svg>
//                                 </button>
//                                 <div
//                                     id="dropdown"
//                                     className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
//                                 >
//                                     <ul className="py-2" aria-labelledby="dropdownButton">
//                                         <li>
//                                             <a
//                                                 href="#"
//                                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                                             >
//                                                 Edit
//                                             </a>
//                                         </li>
//                                         <li>
//                                             <a
//                                                 href="#"
//                                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                                             >
//                                                 Export Data
//                                             </a>
//                                         </li>
//                                         <li>
//                                             <a
//                                                 href="#"
//                                                 className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
//                                             >
//                                                 Delete
//                                             </a>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="flex flex-col items-center pb-10">
//                                 <img
//                                     className="w-24 h-24 mb-3 rounded-full shadow-lg"
//                                     src={item.image}
//                                     alt="Bonnie image"
//                                 />
//                                 <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
//                                     {item.title}
//                                 </h5>
//                                 <span className="text-sm text-gray-500 dark:text-gray-400">
//                                     {item.price}
//                                 </span>
//                                 <div className="flex mt-4 md:mt-6">
//                                     <a
//                                         href="#"
//                                         className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                                     >
//                                         Add to Cart
//                                     </a>
//                                     <a
//                                         href="#"
//                                         className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
//                                     >
//                                         Read More
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default useEffect
