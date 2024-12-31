import React, { useState } from 'react'
import { AnimalList } from './Data'
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";


const State = () => {
    const [index, setIndex] = useState(0)
    const [animationDirection, setAnimationDirection] = useState('slideleft');
    const [toggle, settoggle] = useState(false);
    // const [animationKey, setAnimationKey] = useState(0); // Key to reset animation

    const handleClick = () => {
        if (index < AnimalList.length - 1) {
            setAnimationDirection('slideright');
            setIndex(index + 1);
        } else {
            setIndex(0);  
        }
        // resetAnimation(); 
    }
    //   const Next = () => {
    //     if (index == 9) {
    //         setIndex(0);
    //         setadd(!true)
    //         setAnimationDirection('slideright');
    //         setTimeout(() => {
    //             setadd(true)
    //         },100)
    //     } 
    //     else {
    //         setIndex((NextState) => NextState + 1);
    //     }
    // };

    const handlePrevious = () => {
        if (index > 0) {
            setAnimationDirection('slideleft');
            setIndex(index - 1);
        } else {
            setIndex(AnimalList.length - 1); 
        }
        // resetAnimation(); 
    };

    // const resetAnimation = () => {
    //     setAnimationKey(prevKey => prevKey + 1); 
    // }

    const List = [AnimalList[index]];

    return (
        <div>
            <h1 className='heading'>This is State Memory Components</h1>
            <div className='flex justify-around'>
              
                    <button
                        className="bg-blue-500 rounded-full px-2 py-2 flex text-center mt-6 text-white text-lg"
                        onClick={handlePrevious} 
                    >
                        <GrPrevious className="mt-[6px] mr-2" />
                    </button>
             
                <button
                    className="bg-blue-500 px-2 py-2 flex rounded-full text-center mt-6 text-white text-lg"
                    onClick={handleClick} >
                <GrNext className="mt-[6px] ml-2" />
                </button>
            </div>

            <div className='flex flex-wrap justify-around gap-y-4'>
                {List.map((item) => {
                    return (
                        <div
                            key={item.id} // Use the animationKey as the key to trigger reflow
                            className={`scale-75 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-blue-900 object-cover w-[320px] h-auto ${animationDirection == 'slideright' ? 'animate-slideright' : 'animate-slideleft'}`}
                        >
                            <a href="#">
                                <img
                                    className="rounded-t-lg h-52 w-full object-cover object-top"
                                    src={item.image}
                                    alt=""
                                />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                                        {item.name}
                                    </h5>
                                </a>
                                {toggle && <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {item.description}
                                </p>}
                                <div className="flex justify-center">
                                    <button
                                        className="inline-flex px-2 py-2 text-sm font-medium text-white bg-blue-500 mt-[20px] rounded-lg hover:bg-blue-400 focus:ring-4 line-clamp-2"
                                        onClick={() => { settoggle((toggle) => !toggle) }}
                                    >
                                        {toggle ? 'hide' : 'show more'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default State;
