const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Kamu sudah terdaftar\nMau daftar ulang? ${usedPrefix}unreg <SERIAL NUMBER>`
  if (!Reg.test(text)) throw `contoh:\n*${usedPrefix + command} nama.umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 30) throw 'Lu dah tua anjing'
  if (age < 5) throw 'Mau diban?'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  m.reply(`
━━━━ 「 *Successful Registration* 」━━━━

╭─• 〘 INFO 〙
│➥ 𝙽𝚘𝚖𝚋𝚛𝚎: ${name}
│➥ 𝙴𝚍𝚊𝚍: ${age} años
│➥ 𝙿𝚛𝚎𝚖𝚒𝚞𝚖: ${prems.includes(who.split`@`[0]) ? '✅ 𝚂𝚒 𝚎𝚜 𝚞𝚗 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚙𝚛𝚎𝚖𝚒𝚞𝚖' : '❌ 𝙽𝚘 𝚎𝚜 𝚞𝚗 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚙𝚛𝚎𝚖𝚒𝚞𝚖'}
╰──────•

 𝘌𝘴𝘤𝘳𝘪𝘣𝘢 ${usedPrefix} 𝘱𝘢𝘳𝘢 𝘰𝘣𝘵𝘦𝘯𝘦𝘳 𝘵𝘶 𝘯𝘶𝘮𝘦𝘳𝘰 𝘥𝘦 𝘴𝘦𝘳𝘪𝘦 𝘺 𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘳 𝘵𝘶 𝘳𝘦𝘨𝘪𝘴𝘵𝘳𝘰`.trim())
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp', 'main']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler
