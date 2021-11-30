import { Telegraf } from 'telegraf'
import { help } from './controllers/help.js'
import * as greeting from './controllers/greeting.js'
import * as arshin from './controllers/arshin.js'
import { parse } from './controllers/controller.js'
import dotenv from 'dotenv'

dotenv.config()

const bot = new Telegraf(process.env.BOT_TOKEN)

const version = process.env.VERSION

bot.start(greeting.hello)
bot.on('sticker', (ctx) => ctx.reply('И что мне с этим делать? :-)'))
bot.on('text', parse)

bot.action(/\/help.*/, (ctx) => {
    help(ctx)
})

bot.action(/\/arshin.*/, (ctx) => {
    arshin.command(ctx)
})

bot.launch()
