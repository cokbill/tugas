import React from "react";
import UseAsync from "./useAsync";

const Todo = (id) => {
    const myFunction = () => {
        return Promise.resolve(fetch(`https://6469d36d03bb12ac2093611c.mockapi.io/api/v1/todos/${id}`));
    }

    const {execute, status, values, error} = UseAsync(myFunction, false);
    return (
        <div>
            {
            status === "success" && 
            (
                <div>
                    <p>Tittle : {values.title}</p>
                    <p>date : {values.date}</p>
                </div>
            )
            }

            {
                status === "error" &&
                (
                    <div>error : .... {error}</div>
                )
            }
            <button onClick={execute} disabled={status === "pending"}>
                {status !== "pending" ? "Get Detail " : "Loading..."}
            </button>
        </div>
    );
        }

export default Todo;