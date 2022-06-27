let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    let toos = fs.readFileSync('./media/bank.jpg')
    let anu =`╭───❑ 「 𝐁𝐀𝐋𝐀𝐍𝐂𝐄 」 ❑────
├─ 📇 *𝙽𝚘𝚖𝚋𝚛𝚎*: ${user.name}
├─ 🆔 *𝙽𝚞𝚖𝚎𝚛𝚘* : ${require('awesome-phonenumber')(`+${m.sender.split('@')[0]}`).getNumber('international')}
├─ 🎨 *𝙴𝚍𝚊𝚍* : ${user.registered ? '' + user.age : ''}
├─ 🎫 *𝙻𝚒𝚖𝚒𝚝𝚎*: ${user.limit}
├─ 💹 *𝙳𝚒𝚗𝚎𝚛𝚘*: ${user.money}
├─ 📍 *Role*: ${user.role}
├─ 💳 *Bank* : ${user.atm}
├─ 🎟 ️ *𝙻𝚒𝚖𝚒𝚝𝚎𝚜 𝚍𝚎 𝙹𝚞𝚎𝚐𝚘* : ${user.glimit}
├─ 📊 *𝙽𝚒𝚟𝚎𝚕*: ${user.level}
╰─❑ ✨ *𝙴𝚇𝙿*: ${user.exp}
`
    conn.sendButtonImg(m.chat, toos, anu, wm2, 'ɪɴᴠᴇɴᴛᴀʀɪᴏ🐦', '.inv', m) 
}
handler.help = ['dompet', 'dompet @user', 'bank', 'bank @user']
handler.tags = ['xp', 'rpg']
handler.command = /^(my|dompet|bank)$/i

module.exports = handler
