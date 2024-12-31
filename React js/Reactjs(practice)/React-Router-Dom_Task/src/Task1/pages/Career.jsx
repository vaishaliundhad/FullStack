import React from "react";
import { useLoaderData , Link } from "react-router-dom";

const Career = () => {
    
  const data = useLoaderData();

  console.log(data);

  return (
    <div>
      <h1 className="heading text-xl">This is Career Page</h1>
      <ul>
        {data.map((item) => {
          return (
            <>
              <li className="bg-yellow-400">
                {/* <Link className="underline" to={item.id.toString()}>{item.title}</Link> */}
                <Link className="underline" to={`${item.id}`}>{item.title}</Link>
                <Link className="underline" to={`${item.id}`}>{item.img}</Link>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export const CareerLoader = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};

export default Career;
