let handler = async(m, { text }) => {
    let user = global.db.data.users[m.sender]
    user.afk = +new Date
    user.afkReason = text
    m.reply(`╭──[ *𝐀𝐅𝐊 !* ]──✧
┆ *𝙽𝚘𝚖𝚋𝚛𝚎* : ${conn.getName(m.sender)}
┆ *𝙼𝚘𝚝𝚒𝚟𝚘* : ${text ? '' + text : ''}
╰┅────★
`)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler
