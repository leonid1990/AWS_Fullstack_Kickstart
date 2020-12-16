const { service } = require('./adapters/http')
const { DB } = require('./adapters/db')


async function readItems(payload) {
    const db = new DB(payload.table_name) // 'kirr9hea'

    return await db.read()
}

exports.handler = service
    ({

        read: readItems        //  R

    })