import React, { useState } from "react";


const App = () => {

    const[name, setName]=useState("");
    const[fullName,setFullName]=useState();

const inputEvent = (event) =>{
     setName(event.target.value);
};

const onSubmit = () =>{
    setFullName(name);
}

return (
    <>
<div>
    <h1>Hello {fullName}</h1>
    <input type="text" placeholder="enter your name"
     onChange={inputEvent}
     value={name}/>
    <button onClick={onSubmit}>submit Now 👍</button>
</div>
</>
);

};

export default App;