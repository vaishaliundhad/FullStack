import React from 'react'
import { useState } from 'react';
import { AnimalList } from './Data';

const Task = () => {

  const [index, setIndex] = useState(0);

  const [toggle, setToggle] = useState(false)

  console.log(index);

  console.log(AnimalList);


  const handleNext = () => {
    if (index == 9) {
      setIndex(0);
      console.log('Next Btn')
    } else {
      setIndex((prevState) => (prevState + 1));
    }
  };
  const handlePrev = () => {
    if (index > 0) {
      console.log("Prev Btn");

      setIndex((prevState) => prevState - 1);
    }
  };

  const List = [AnimalList[index]];

  return (
    <div className="">
      <h1 className="bg-green-500 text-2xl text-center">
        This is UseState.
      </h1>
      <div className="flex justify-center">
        <div>
          <button className="bg-green-300 p-2 rounded-sm" onClick={handlePrev}>Previous</button>
        </div>
        {List.map((item) => {
          return (
            <>
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-96">
                <a href="#">
                  <img
                    className="rounded-t-lg h-52 w-full object-cover object-top"
                    src={item.image}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.name}
                    </h5>
                  </a>
                  {
                    toggle && (
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {item.description}
                      </p>
                    )
                  }
                  <button onClick={() => { setToggle((toggle) => !toggle) }} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    {
                      toggle ? 'hide' : 'Show More'
                    }
                  </button>
                </div>
              </div>
            </>
          );
        })}
        <div>
          <button className="bg-green-300 p-2 rounded-sm" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default Task