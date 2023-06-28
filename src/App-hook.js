import React, {useEffect, useState} from "react";
function App() {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      {
      data.map((item) => {
        return <p key={item.id}>{item.title}</p>
      }
      )
    }
    </div>
  );
};

const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);
}

export default App;
