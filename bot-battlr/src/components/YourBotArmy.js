import React from 'react';
import BotCard from './BotCard';

// Component to display the user's enlisted bots
function YourBotArmy({ army, removeBotFromArmy, dischargeBot }) {
    return (
      <div className="your-bot-army">
        <h2>Your Bot Army</h2>
        {army.map(bot => (
          <BotCard 
            key={bot.id} 
            bot={bot} 
            handleClick={() => removeBotFromArmy(bot)} 
            handleDischarge={() => dischargeBot(bot.id)} 
          />
        ))}
      </div>
    );
  }
  
  export default YourBotArmy;