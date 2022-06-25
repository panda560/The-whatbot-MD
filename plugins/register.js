const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `𝒀𝒂 𝒆𝒔𝒕𝒂𝒔 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒅𝒐\n¿𝑸𝒖𝒊𝒆𝒓𝒆𝒔 𝒗𝒐𝒍𝒗𝒆𝒓 𝒂 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒓𝒕𝒆? ${usedPrefix}unreg <Numero de Serie>`
  if (!Reg.test(text)) throw `𝙴𝚓𝚎𝚖𝚙𝚕𝚘:\n*${usedPrefix + command} Nombre.edad*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '𝑬𝑳 𝒏𝒐𝒎𝒃𝒓𝒆 𝒏𝒐 𝒑𝒖𝒆𝒅𝒆 𝒆𝒔𝒕𝒂𝒓 𝒗𝒂𝒄𝒊𝒐'
  if (!age) throw '𝑳𝒂 𝒆𝒅𝒂𝒅 𝒏𝒐 𝒑𝒖𝒆𝒅𝒆 𝒆𝒔𝒕𝒂𝒓 𝒗𝒂𝒄𝒊𝒂'
  age = parseInt(age)
  if (age > 50) throw '𝙴𝚜𝚝𝚊𝚜 𝚟𝚒𝚎𝚓𝚘'
  if (age < 5) throw '𝚀𝚞𝚎 𝚋𝚘𝚗𝚒𝚝𝚘 𝙱𝙱'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
  m.reply(`
━━━━ 「 𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 」━━━━

╭─• 〘 INFO 〙
│➥ 𝙽𝚘𝚖𝚋𝚛𝚎: ${name}
│➥ 𝙴𝚍𝚊𝚍: ${age} años
│➥ 𝙿𝚛𝚎𝚖𝚒𝚞𝚖: ${prems.includes(who.split`@`[0]) ? '✅ 𝚂𝚒 𝚎𝚜 𝚞𝚗 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚙𝚛𝚎𝚖𝚒𝚞𝚖' : '❌ 𝙽𝚘 𝚎𝚜 𝚞𝚗 𝚞𝚜𝚞𝚊𝚛𝚒𝚘 𝚙𝚛𝚎𝚖𝚒𝚞𝚖'}
╰──────•

 𝘌𝘴𝘤𝘳𝘪𝘣𝘢 ${usedPrefix}SN 𝘱𝘢𝘳𝘢 𝘰𝘣𝘵𝘦𝘯𝘦𝘳 𝘵𝘶 𝘯𝘶𝘮𝘦𝘳𝘰 𝘥𝘦 𝘴𝘦𝘳𝘪𝘦 𝘺 𝘦𝘭𝘪𝘮𝘪𝘯𝘢𝘳 𝘵𝘶 𝘳𝘦𝘨𝘪𝘴𝘵𝘳𝘰`.trim())
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp', 'main']

handler.command = /^(daftar|reg(ister)?)$/i

module.exports = handler
