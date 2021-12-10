//import data from './data'

function dateConverter(date) {
    date = new Date(date)
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    day = day < 10 ? '0' + day : day
    month = month < 10 ? '0' + month : month
    return `${day}.${month}.${year}`
}

async function getValutePage(url) {
    try {
        const response = await fetch(url)
        if (response.status == 200) {
            const data = await response.json()
            return [data.Valute, data.PreviousURL, data.Date]
        }
    } catch (e) {
        console.log(e)
        throw new Error(e)
    }
    return null
}

async function buildValutesResponse() {
    let [valute, url, date] = await getValutePage(
        'https://www.cbr-xml-daily.ru/daily_json.js'
    )
    let mainValute = {}
    for (let code in valute) {
        mainValute[code] = {
            name: valute[code].Name,
            charCode: code,
            values: [
                {
                    date: dateConverter(date),
                    value: valute[code].Value
                }
            ]
        }
    }

    try {
        for (let i = 0; i < 14; i++) {
            url = url.substring(2, url.length)
            let _url = 'https://' + url
                .split('/')
                .join('//')

            let response = await getValutePage(_url) || await getValutePage(
                'https://' + url
            )

            valute = response[0]
            url = response[1]
            date = response[2]

            for (let code in valute) {
                mainValute[code]
                    .values
                    .push({date: dateConverter(date), value: valute[code].Value})
            }
        }
    } finally {

        let valutes = []
        for (let code in mainValute) {
            valutes.push(mainValute[code])
        }

        return valutes
    }
}

//buildValutesResponse().then(JSON.stringify).then(console.log)

class Api {
    async getValutes() {
        const data = await buildValutesResponse() 
        console.log(data)
        /* data.forEach(valute => {
            valute.values.forEach(item => item.date = dateConverter(item.date))
        }) */
        return data
    }
}

export default new Api