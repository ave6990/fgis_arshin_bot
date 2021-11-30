const calc = (ctx) => {
    const text = ctx.update.message.text.replace(/,/g, '.')
    try {
        ctx.reply(eval(text.slice(0, -1)))
    } catch (e) {
        console.error(e)
        ctx.reply('Ошибка!\nЧто-то пошло не так...')
    }
}

export { calc }
