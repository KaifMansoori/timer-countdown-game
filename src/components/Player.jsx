import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  const userName = useRef();

  const [userInput, setUserInput]= useState(null);

function handleClick(){
  setUserInput(userName.current.value);
  userName.current.value='';
}

  return (
    <section id="player">
      <h2>Welcome { userInput ?? ' unknown entity'}</h2>
      <p>
        <input ref={userName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
