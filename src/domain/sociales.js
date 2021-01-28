const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

function social() {
  const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

  //reply_markup: JSON.stringify({force_reply:true}) EL BOT ESPERA QUE LE RESPONDAS
  //reply_to_message_id:msg.message_id RESPONDE AL USUARIO QUE ESCRIBIO AL BOT

  bot.on("text", (msg) => {
    let text = msg.text.toLocaleLowerCase();
    console.log(text)
    const options = {
      reply_to_message_id: msg.message_id,
      parse_mode : "HTML"
    };

    function control(text) {
      let txt = ["/invitar", "/slack", "/linkedin", "/discord", "/whatsapp"];
      let boolean = false
      txt.forEach( i => {
        if(i === text) {
          boolean = true
        }
      })
      return boolean
    }

    if (control) {
      switch (text) {
        case "/social":
          bot.sendMessage(
            msg.chat.id,
            `Hola ${msg.from.first_name}, Estás son todas las comunidades a las que pertenecemos: Slack: https://latamdev.slack.com/ LinkedIn: https://www.linkedin.com/groups/12245320/ Discord: https://www.linkedin.com/groups/12245320/ WhatSapp: https://chat.whatsapp.com/Bih8z3VP2qML3XOhi8NtFH`,
            options
          );
          break;
        case "/invitar":
          try {
            bot.sendMessage(
              msg.chat.id,
              `Hola ${msg.from.first_name}, aquí está el link para que puedas invitar: https://t.me/joinchat/UzonQGUkz56QIkj5`,
              options
            );
          } catch (error) {
            console.log(error)
          }
          break;
        case "/slack":
          bot.sendMessage(
            msg.chat.id,
            `Hola ${msg.from.first_name}, aquí está el link de nuestro Slack: https://latamdev.slack.com/`,
            options
          );
          break;
        case "/whatsapp":
          bot.sendMessage(
            msg.chat.id,
            `Hola ${msg.from.first_name}, tenemos un grupo en WhatSapp, únete a nosotros en el siguiente enlace: https://chat.whatsapp.com/Bih8z3VP2qML3XOhi8NtFH`,
            options
          );
          break;
        case "/linkedin":
          bot.sendMessage(
            msg.chat.id,
            `Hola ${msg.from.first_name}, tenemos un grupo en LinkedIn, únete a nosotros en el siguiente enlace: https://www.linkedin.com/groups/12245320/`,
            options
          );
          break;
        case "/discord":
          bot.sendMessage(
            msg.chat.id,
            `Hola ${msg.from.first_name}, puedes encontrarnos en Discord aquí: https://www.linkedin.com/groups/12245320/`,
            options
          );
          break;
      }
    }
  });
}

module.exports = { social };
