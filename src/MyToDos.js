import React, {useEffect, useState} from "react";
import Todo from "./Todo";
function MyToDos() {

  const [MyToDos, setMyToDos] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);
  
  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://6469d36d03bb12ac2093611c.mockapi.io/api/v1/todos");
        const data = await response.json();

        setMyToDos(data);
      }
      catch {
        setError("Something went wrong");
      }
      finally {
        setLoading(false);
      }
    }
  },[]);

  if (Loading) {
    return <p>Loading...</p>
  } 

  if (Error) {
    return <p>kesalahan ... {Error}</p>
  }
  return (
    <div>
      <ul>
        {
          MyToDos && MyToDos.map(todo => {
            <li key={todo.id}>
              todo Id : {todo.id}
              <Todo id={todo.id}/>
            </li>
          })
        }
      </ul>
    </div>
  );
};


export default MyToDos;
