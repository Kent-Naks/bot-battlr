import React from 'react';
import BotCard from './BotCard';

// Component to display a collection of all available bots
function BotCollection({ bots, addBotToArmy }) {
    return (
      <div className="bot-collection">
        {/* Map over the bots array and render a BotCard for each bot */}
        {bots.map(bot => (
          <BotCard 
            key={bot.id} 
            bot={bot} 
            handleClick={() => addBotToArmy(bot)} 
          />
        ))}
      </div>
    );
  }
  
  export default BotCollection;