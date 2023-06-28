import React, {useCallback, useEffect, useState} from "react";
function App() {
  const [isListShow, setIsListShow] = useCokbill(false);
  return (
    <div>
      <button onClick={() => setIsListShow()}>{isListShow ?"Hide":"Show"}</button>
      {
      isListShow && (
        <ul>
          <li>items 1</li>
          <li>items 2</li>
          <li>items 3</li>
          <li>items 4</li>
          <li>items 5</li>
        </ul>
      )
      }


    </div>
  );
};

const useCokbill = (initial = false) => {
  const [state, setState] = useState(initial);
  const toggle = useCallback(() => {
    setState((prev) => !prev)
  }, [])
  return [state, toggle];
}

export default App;
