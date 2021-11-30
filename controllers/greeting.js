import { Markup } from 'telegraf'

const getUserName = (ctx) => {
    let username = ''
    const user = ctx.message.from

    if (user.username) {
        username = user.username
    } else if (user.last_name) {
        username = user.last_name
    } else {
        username = user.first_name
    }

    return username
}

const hello = (ctx) => {
    ctx.reply(`Здравствуйте, ${getUserName(ctx)}!`,
        Markup.inlineKeyboard([
            Markup.button.callback('Обо мне', '/help_about'),
        ])
    )
}

export { getUserName, hello }
