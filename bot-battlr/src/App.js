import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const addToArmy = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const removeFromArmy = (bot) => {
    setArmy(army.filter((b) => b.id !== bot.id));
  };

  const dischargeBot = (id) => {
    fetch(`http://localhost:8001/bots/${id}`, { method: "DELETE" })
      .then(() => {
        setArmy(army.filter((bot) => bot.id !== id));
        setBots(bots.filter((bot) => bot.id !== id));
      });
  };

  return (
    <div className="App">
      <YourBotArmy army={army} removeFromArmy={removeFromArmy} dischargeBot={dischargeBot} />
      <BotCollection bots={bots} addToArmy={addToArmy} />
    </div>
  );
}

export default App;