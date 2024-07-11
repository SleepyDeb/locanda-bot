import {Bot} from "grammy";
import {BotHandler} from "./";

export default (bot: Bot) => {
    bot.command("ping", (ctx) => {
        void ctx.reply("Pong!", {
            reply_parameters: {
                message_id: ctx.msg.message_id,
            }
        })
    })
}
