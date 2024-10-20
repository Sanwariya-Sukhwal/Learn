// import React from 'react'
import Cards from "./Cards";
// import list from "../../public/list.json";
import {Link} from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";



function Course() {
    const [book, setBook] = useState([])
  
    useEffect(() => {
      const getBook = async () => {
        try {
          const res = await axios.get("http://localhost:4001/book");
          console.log(res.data);
          setBook(res.data);
        } catch (error) {
          console.log(error);
        }
      };
  
      getBook(); // Call the getBook function
    }, []);
  
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="pt-28 items-center justify-center text-center">
            <h1 className="text-2xl md:text-4x1">
                We`re delighted to have you {" "}
                <span className="text-pink-500">Here! </span>
            </h1>
            <p className="mt-12">
            EasyLearn and similar sites like Programiz offer free coding courses for both beginners and advanced learners. They cover popular programming languages such as Python, JavaScript, HTML, CSS, Java, and C++. The courses include interactive tutorials and projects, helping learners practice and develop real coding skills in a hands-on way. These platforms make learning straightforward and engaging, focusing on practical exercises to build a strong coding foundation.
            </p>
            <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
            </Link> 
        </div>
           <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
              {
                 book.map((item)=>(
                    <Cards key={item.id} item={item}/>
                 ))
              }
           </div>
      </div>    
    </>
    
  );
}

export default Course;
