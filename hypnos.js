const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + "  Token Sese Sokma | Hostlandı");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();

const data = new Map();



client.login("ODUzMzU5Njc5ODAzMjI4MjEw.YMUPeg.DYVqsBDNoVeskijR_ry15Ui5yM8")

client.on('ready', ()=>{
client.channels.get('853363281624301588').join()
})

client2.login("ODUzMzQzNDY2ODA1NTI2NjA4.YMUAdg._KUkmRxivO4mYDn09nIyc2GpI1w")

client2.on('ready', ()=>{
client2.channels.get('853363281624301588').join()
})





client3.login("ODM5NTAxMzUxMzA1MDg0OTcx.YMUTvA.wmaq2dI1-XSh3R2RU7RHyojXh5Y")

client3.on('ready', ()=>{
client3.channels.get('853363281624301588').join()
})
