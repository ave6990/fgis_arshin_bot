import dotenv from 'dotenv'
import { Markup } from 'telegraf'

dotenv.config()
const ver = process.env.VERSION

const msg_main = `Могу помочь с поиском информации на ресурсе ФГИС "АРШИН" \
и не только.`

const msg_version = `@fgis_arshin_bot version: ${ver}.`

const msg_calc = `Введите математическое выражение завершив ввод символом \
"=" и получите ответ.
Пример ввода: (3 + 0.14) * 2 ** 2 =`

const msg_arshin = `Введите запрос в формате`

const help = (ctx) => {
    const query = ctx.update.callback_query.data

    if (/calc/.test(query)) {
        calc(ctx)
    } else if (/about/.test(query)) {
        about(ctx)
    } else if (/version/.test(query)) {
        version(ctx)
    }
}

const about = (ctx) => {
    ctx.reply(msg_main,
        Markup.inlineKeyboard([
        Markup.button.callback('Версия', '/help_version'),
            Markup.button.callback('Калькулятор', '/help_calc'),
       ])
    )
}

const calc = (ctx, next) => {
    ctx.reply(msg_calc)
}

const version = (ctx) => {
    ctx.reply(msg_version)
}

const arshin = (ctx) => {
    ctx.reply(msg_arshin)
}

export { help }
