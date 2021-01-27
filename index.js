const app = require('express')()
const TelegramBot = require("node-telegram-bot-api")
require("dotenv").config()

app.listen(3000);
app.get("/", (req, res) => res.send("Hello World"))

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, {polling: true})

bot.on('message', (msg) => {
    bot.sendMessage(msg.from.id, `Echoin: ${msg.text}`)
})