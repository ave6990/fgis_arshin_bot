import * as help from './help.js'
import * as arshin from './arshin.js'
import * as greeting from './greeting.js'
import { calc } from './calc.js'

const query_regex = /(зав(од(ской)?)?\.?)/

const hello_re = /(hi|hello|привет|здравствуй(те)?)!*/i
const calc_re = /^[\d-+*/\.\,\s\(\)]+=$/
const arshin_re = /(#|рег(истр(ацион(ный)?)?)?\.?)/i

const parse = (ctx) => {
    if (hello_re.test(ctx.message.text)) {
        greeting.hello(ctx)
    } else if (calc_re.test(ctx.message.text)) {
        calc(ctx)
    } else if () {
    } else {
        ctx.reply('Простите, не понял что вы от меня хотите. :-(')
    }
}

export { parse }
