require('dotenv').config();

var restify = require('restify');
var builder = require('botbuilder');

const botmeter = require('@botfuel/botmeter-logger')(process.env.BOTMETER_URL).botbuilder;

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat bot
var connector = new builder.ChatConnector({
    appId: process.env.APP_ID,
    appPassword: process.env.APP_PASSWORD
});

var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());

bot.use(botmeter);

bot.dialog('/', function (session) {
    session.send("Hello World");
});

