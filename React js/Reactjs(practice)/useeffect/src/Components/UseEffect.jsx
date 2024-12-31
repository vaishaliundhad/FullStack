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

// import React from 'react';
// import { useState, useEffect } from 'react';

// const UseEffect = () => {
//     const [data, setData] = useState(0);
//     const [toggle , settoggle]=useState(false);
//     console.log('data', data);



//         const Next = () => {
//             if (data == 9) {
//                 setData(0);
//             } else {
//                 setData((NextState) => NextState + 1);
//             }
//         };
//         const Prev = () => {
//             if (data > 0) {
//                 setData((PrevState) => PrevState - 1);
//             } else {
//                 setData((PrevState) => PrevState = 0)
//             }
//         }

//         useEffect(() => {
//             fetch('https://fakestoreapi.com/products')
//                 .then(res => res.json())
//                 .then(res => setData(res));
//         }, []);

//     return (
//         <div className='flex flex-wrap gap-5'>
//             <div>
//                 <button className="bg-blue-500 px-4 py-2 rounded-md flex align-bottom text-white text-lg" onClick={Prev}>Prev</button>
//             </div>
//             {
//                 data.map((item) => {
//                     return (
//                         <div className="w-[320px]  h-auto  max-w-sm bg-white border border-gray-200 rounded-md shadow  mt-6 text-center ">

//                             <div className="flex flex-col items-center pb-10 mt-4 ">
//                                 <img
//                                     className="w-24 h-24 content-center mb-3 rounded-md shadow-lg scale-125"
//                                     src={item.image}
//                                     alt="Bonnie image"
//                                 />
//                                 <h5 className="mb-1  font-sm text-center line-clamp-1 text-gray-900 dark:text-black">
//                                     {item.title}
//                                 </h5>
//                                 {
//                                     toggle && (
//                                         <span className="text-sm text-gray-500 dark:text-gray-400 text-center line-clamp-2">
//                                             {item.description}
//                                         </span>
//                                     )
//                                 }

//                                 <div className="flex mt-4 md:mt-6">

//                                     <button
//                                         className="py-2 px-4 ms-2 text-sm font-medium   bg-red-600 text-white rounded-lg border border-gray-200 hover:bg-red-300 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100  "
//                                         onClick={() => { settoggle((toggle) => !toggle) }}>
//                                         {
//                                             toggle ? 'hide' : 'show more'
//                                         }
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>

//                     )
//                 })
//             }
//             <div>
//                 <button className="bg-blue-500 px-4 py-2 rounded-md flex align-bottom text-white text-lg " onClick={Next} >Next</button>
//             </div>
//         </div>

//     )
// }

// export default UseEffect

