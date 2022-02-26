import React from 'react';
import  { useEffect, useState } from 'react';
import axios from "axios";

function Page() {
    const [add , setAdd ] = useState();
    useEffect(() => {
        axios
        .get("https://api.tvmaze.com/search/shows?q=all")
        .then((response) => {
            console.log(response.data);
            setAdd(response.data)
        })
        .catch((error) => {
            console.log(error);
          });
      }, []);
    
  return (
    <div>
       <h1> Home Page </h1>
       {add &&
        add.map((res) => (
          <div key={res.id}>
            <h5>{res.id}</h5>
             <h4>{res.language}</h4>
            <span>{res.summery}</span> 
          </div>
        ))}
    </div>
  )
}

export default Page

