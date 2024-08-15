import React from "react";

// Component to display an individual bot's details
function BotCard({ bot, handleClick, handleDischarge }) {
    return (
      <div className="bot-card" onClick={handleClick}>
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <p>Class: {bot.bot_class}</p>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p>Catchphrase: "{bot.catchphrase}"</p>
        {/* Discharge button, only appears if handleDischarge is passed as a prop */}
        {handleDischarge && (
          <button onClick={(e) => {
            e.stopPropagation();  // Prevents the card's onClick from firing
            handleDischarge(bot.id);
          }}>
            x
          </button>
        )}
      </div>
    );
  }
  
  export default BotCard;