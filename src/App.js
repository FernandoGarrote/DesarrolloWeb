//librerias ó components
import "./App.css";
import "./index.css";
import React, { useState, useEffect } from "react";

function App() {
  
  const [users, setUsers] = useState([{ id: 0, name: "Ansu Fati" }]);

  const onClick = () => {
    setUsers([...users, {id: users.length, name:"Pedri Gonzalez"}])
  };

  var dataComponent = {
    type:"button",
    value:"Update"
  };

  const [seconds, setSeconds] = useState(0)
  const [date, setDate] = useState(new Date());


  useEffect (() => {
    var timer = setInterval(() => tick(), 1000);

    return function cleanup(params) {
      clearInterval(timer)
    }
  });

  useEffect (() => {
    let interval = null;
    interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);}, 1000);

      return function cleanup(params) {
        clearInterval(seconds)
      }
  })

  function tick() {
    setDate(new Date())
  }

  return (
    <div>
      {}
      <h1>{seconds}</h1>
      <h1>{date.toLocaleTimeString()}</h1>
      {}
      <input onClick={onClick} {...dataComponent} />
      <div>
        {users.map((e) => (
          <div>
            {e.id} - {e.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;