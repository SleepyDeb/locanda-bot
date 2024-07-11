import {readdirSync} from 'fs';
import {logger} from "../../config";
import {Bot} from "grammy";

export type BotHandler = (bot: Bot)=>void;
const commands: {
    [name: string]: BotHandler
} = {
}

logger.info("Loading commands...")

const readFile = readdirSync("./src/handler/commands")
    .filter(file => !file.endsWith("index.ts"))

readFile.forEach(file => commands[file] = require(`./${file}`).default) as BotHandler;

logger.info("Commands loaded!")
logger.debug(commands, "Commands loaded: ")

export {
    commands
}
