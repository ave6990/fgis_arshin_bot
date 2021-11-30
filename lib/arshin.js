import * as urlLib from './url.js'
import * as date from './date.js'

const _verificationResults = async (filter_obj) => {
    try {
        const url = urlLib.getUrl('https://fgis.gost.ru/fundmetrology/cm/xcdb/vri/select', filter_obj)
        console.log(url)

        const response = await fetch(url)
        const data = response.json()

        return data
    } catch (err) {
        console.error('fgis_api error!!!', err)
    }
}

/** args query - { verification_year, org_title, mi.number, 
*        mi.mitnumber, mi.modification, verification_date }
*   return data.response - { numFound, docs } */
const getRecords = async (query, rows_count = 10, page_num = 1) => {
     const filter_obj = {
        q: '*',
        fl: 'vri_id,mi.mitnumber,mi.mitype,mi.modification,mi.number,verification_date,valid_date,result_docnum',
        sort: 'verification_date+desc,org_title+asc',
        fq: query,
        rows: rows_count,
        start: page_num * rows_count,
    }

    const data = await _verificationResults(filter_obj)

    data.response.docs.forEach((doc) => {
        doc.vri_id = `<a href="https://fgis.gost.ru/fundmetrology/cm/results/${doc.vri_id}">${doc.vri_id}</a>`
        doc.verification_date = date.toString(new Date(doc.verification_date))
        doc.valid_date = date.toString(new Date(doc.valid_date))
    })

    return data.response
}

export { getRecords }
