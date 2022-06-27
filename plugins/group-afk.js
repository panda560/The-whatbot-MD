let handler = (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  let str = `╭──[ *𝐀𝐅𝐊 !* ]──✧
┆ *𝙽𝚘𝚖𝚋𝚛𝚎* : ${conn.getName(m.sender)}
┆ *𝙼𝚘𝚝𝚒𝚟𝚘* : ${text ? '' + text : ''}
╰┅────★
`.trim()
conn.sendButton(m.chat, str, wm, 'Jangan Ganggu Ya !', 'iyaaaaa',m)
conn.reply(str)
}
handler.help = ['afk <alasan>']
handler.tags = ['group']
handler.command = /^afk$/i

module.exports = handler

let wm = global.botwm
