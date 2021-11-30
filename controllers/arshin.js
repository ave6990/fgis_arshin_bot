import { Markup } from 'telegraf'

const config = {
    records_count: 0,
    rows_count: 10,
    page_num: 0,
}

const main = (ctx) => {
    ctx.reply('Поиск результатов поверки: ',
        Markup.inlineKeyboard([
            Markup.button.callback('Как это сделать?', '/help_arshin')
        ])
    )
    console.log(ctx)
}

const getData = async () => {
   const table = ui.jsonToTable(data.response.docs, {
        'vri_id': 'Номер в Аршине',
        'mi.mitnumber': 'Рег. номер',
        'mi.mitype': 'Тип СИ',
        'mi.modification': 'Модификация СИ',
        'mi.number': 'Зав. номер СИ',
        'verification_date': 'Дата поверки',
        'valid_date': 'Годен до',
        'result_docnum': 'Номер документа',
    },
    'records_table')
}

document.getElementById('page_num').addEventListener('change', async () => {
    let num = 1

    try {
        num = parseInt(document.getElementById('page_num').value.split(' ')[0])
    }
    catch (e) {
        num = 1
        console.error(e)
    }

    let pages = parseInt(config.records_count / config.rows_count) + 1

    if (num < 1) num = 1
    if (num > pages) num = pages
    
    config.page_num = num - 1
    console.log(config.page_num)
    getRecords()
} )

const command = (ctx) => {
    
}

export { main, command } 
