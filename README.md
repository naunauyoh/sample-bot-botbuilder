# Test-Bot for Microsoft Botbuilder

This is an example of a Microsoft Botbuilder bot in node.js, that will answer any message with "Hello World !". Its primary use is to test message logging with the Botmeter analytics tool.

# Setup

How to create botbuilder MS example :

https://docs.botframework.com/en-us/node/builder/overview/#navtitle.

Use bot framework emulator to run on local.

Deployment on Azure using GitHub : https://blogs.msdn.microsoft.com/sarahsays/2015/08/31/building-your-first-node-js-app-and-publishing-to-azure/ and go to Github section.

Registering Bot : https://docs.botframework.com/en-us/csharp/builder/sdkreference/gettingstarted.html#registering and go to Registering your Bot with the Microsoft Bot Framework section.

Update app.js in code with AppId and password and re-push to GitHub (automatic publication to Azure).

# Logging

Logging is done using the botmeter-logger middleware. First, require the botmeter-logger package with a suitable Botmeter URL :

const botmeter = require('@botfuel/botmeter-logger')(process.env.BOTMETER_URL).botbuilder;

To log the message in Botmeter, use the middleware with the Botbuilder bot :

bot.use(botmeter);
