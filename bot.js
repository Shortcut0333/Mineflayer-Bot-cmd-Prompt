const mineflayer = require('mineflayer');

const args = process.argv.slice(2);
const serverAddress = args[0];  
const port = args[1] || 25565;  
const numBots = parseInt(args[2], 10) || 1;  

console.log(`🚀 Launching ${numBots} bots to ${serverAddress}:${port}...`);

const bots = [];  


function createBotInstance(botIndex) {
  const username = `Shortcut0333 Troop ${botIndex + 1}`;  

  const bot = mineflayer.createBot({
    host: serverAddress,
    port: port,
    username: username,
    auth: 'offline',  
    version: '1.21'
  });

  bots.push(bot);

  
  bot.on('login', () => {
    console.log(`${bot.username} has logged in!`);
  });

  
  bot.on('spawn', () => {
    console.log(`${bot.username} has spawned in the world!`);
    
  });

  
  bot.on('error', err => {
    console.log(`${bot.username} ERROR: ${err}`);
  });

  
  bot.on('end', () => {
    console.log(`${bot.username} has disconnected. Reconnecting...`);
    setTimeout(() => createBotInstance(botIndex), 5000); 
  });
}


for (let i = 0; i < numBots; i++) {
  createBotInstance(i);
}
