import { useEffect, useState } from "react";

const Blogs = () => {

  const [data, setData] = useState([]);

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/3')
        .then(response => response.json())
        .then(json => setData(json))
  }

  useEffect(()=> {
    getData()
  }, [])

  return (
    <div>
      <h1>Blog Articles s testing</h1>
      <div>{data.title}</div>
    </div>
  );
};

export default Blogs;
