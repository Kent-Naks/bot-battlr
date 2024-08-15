import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import './App.css';


function App() {
  // State to store all bots
  const [bots, setBots] = useState([]);
  // State to store bots enlisted in the user's army
  const [army, setArmy] = useState([]);

  // Fetch bots data from the server when the component mounts
  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  // Function to add a bot to the user's army
  const addBotToArmy = (bot) => {
    // Add bot to the army only if it's not already in the army
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Function to remove a bot from the user's army
  const removeBotFromArmy = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id));
  };

  // Function to permanently delete a bot from the server and remove it from the army
  const dischargeBot = (id) => {
    fetch(`http://localhost:8001/bots/${id}`, {
      method: 'DELETE',
    }).then(() => {
      // Remove bot from the army and from the bots collection
      setArmy(army.filter(bot => bot.id !== id));
      setBots(bots.filter(bot => bot.id !== id));
    });
  };

  return (
    <div className="App">
      {/* Your Bot Army component - displays the user's enlisted bots */}
      <YourBotArmy 
        army={army} 
        removeBotFromArmy={removeBotFromArmy} 
        dischargeBot={dischargeBot} 
      />
      
      {/* Bot Collection component - displays all available bots */}
      <BotCollection 
        bots={bots} 
        addBotToArmy={addBotToArmy} 
      />
    </div>
  );
}

export default App;