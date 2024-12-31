import { useState, useEffect } from "react";

const Pagination = () => {
    const [proData, setProData] = useState([]);
    console.log("proData", proData);

    const [pageIndex, setPageIndex] = useState(1);

    const [value, setValue] = useState()

    const perProductData = 4;

    let lastindex = pageIndex * perProductData; 

    let firstindex = lastindex - perProductData;

    let productDataList = proData.slice(firstindex, lastindex);

    
    let paginationcount = Math.ceil(proData.length / perProductData);    

    console.log(productDataList);
    
    async function API() {
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        setProData(data);
    }

    useEffect(() => {
        API();
    }, []);

    return (
        <div className="container mx-auto">

            <div className="flex justify-center">
                <input type="text" placeholder="search for products" className="p-2 w-1/6 border border-solid border-black rounded-sm mt-2" onChange={(e) => { setValue(e.target.value) }} />
            </div>

            <div className=" mt-5">
                {productDataList.map((item , index) => {
                    return <div key={index}>
                        {
                           
                            item.title === value &&
                                <div className="max-w-sm m-2 p-2 bg-white border border-gray-200 rounded-lg shadow ">
                                    <a href="#">
                                        <img
                                            className="rounded-t-lg h-32 mx-auto"
                                            src={item.image}
                                            alt=""
                                        />
                                    </a>
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                                                {item.title}
                                            </h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                                            {item.description}
                                        </p>
                                        <span>{item.id}</span>
                                    </div>
                                </div>
                              
                        }
                    </div>
                })}
            </div>


            <div className="grid grid-cols-4 mt-5">
                {productDataList.map((item ,index) => {
                    return <div key={index} className="max-w-sm m-2 p-2 bg-white border border-gray-200 rounded-lg shadow">
                        <a href="#">
                            <img
                                className="rounded-t-lg h-32 mx-auto"
                                src={item.image}
                                alt=""
                            />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                                    {item.title}
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                                {item.description}
                            </p>
                        </div>
                    </div>
                })}
            </div>


            <div className="flex justify-center">
                <button
                    className="btn"
                    onClick={() => setPageIndex((prev) => prev - 1)}
                    disabled={firstindex <= 0}
                >
                    Prev
                </button>
                {
                    Array(paginationcount).fill(null).map((item , index) => <div key={index} onClick={() => setPageIndex(index+1)} className="btn cursor-pointer">{index+1}</div> )
                }
                <button
                    className="btn"
                    onClick={() => setPageIndex((next) => next + 1)}
                    disabled={lastindex >= proData.length}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;