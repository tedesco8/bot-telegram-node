const app = require("express")();
const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

app.listen(3000);
app.get("/", (req, res) => res.send("Hello World"));

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

//reply_markup: JSON.stringify({force_reply:true}) EL BOT ESPERA QUE LE RESPONDAS
//reply_to_message_id:msg.message_id RESPONDE AL USUARIO QUE ESCRIBIO AL BOT

bot.on("text", (msg) => {
  let text = msg.text.toLocaleLowerCase();
  const options = {
    reply_to_message_id: msg.message_id,
  };
  switch (text) {
    case "invitar":
      bot.sendMessage(
        msg.from.id,
        `Hola ${msg.from.first_name}, aquí está el link para que puedas invitar: https://t.me/joinchat/UzonQGUkz56QIkj5`,
        options
      );
      break;
    case "slack":
      bot.sendMessage(
        msg.from.id,
        `Hola ${msg.from.first_name}, aquí está el link de nuestro Slack: https://latamdev.slack.com/`,
        options
      );
      break;
    case "linkedin":
      bot.sendMessage(
        msg.from.id,
        `Hola ${msg.from.first_name}, tenemos un grupo en LinkedIn, únete a nosotros en el siguiente enlace: https://www.linkedin.com/groups/12245320/`,
        options
      );
      break;
    case "discord":
      bot.sendMessage(
        msg.from.id,
        `Hola ${msg.from.first_name}, puedes encontrarnos en Discord aquí: https://www.linkedin.com/groups/12245320/`,
        options
      );
      break;
    default:
      bot.sendMessage(
        msg.from.id,
        `Hola ${msg.from.first_name}, no tengo registros de esta comunidad, puedes hablar con algún administrador o agregarla a mi código fuente ubicado en https://github.com/tedesco8/bot-telegram-node.git`,
        options
      );
      break;
  }
});
