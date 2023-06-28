import { useState, useCallback, useEffect } from "react";

const UseAsync = (asyncFunction, immediate = true) => {
    const [status, setStatus] = useState("idle");
    const [value, setValue] = useState(null);
    const [error, setError] = useState(null);
    
    const execute = useCallback(() => {
      setStatus("pending");
      setValue(null);
      setError(null);
      return asyncFunction()
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setValue(data);
            setStatus("success");
        })
        .catch((error) => {
          setError(error);
          setStatus("error");
        });
    }, [asyncFunction]);
    
    useEffect(() => {
      if (immediate) {
        execute();
      }
    }, [execute, immediate]);
    return { execute, status, value, error };
  };


export default UseAsync;