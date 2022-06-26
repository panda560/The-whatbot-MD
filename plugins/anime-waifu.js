let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  if (!res.ok) throw '𝙴𝚛𝚛𝚘𝚛 𝙴𝚕 𝚜𝚒𝚝𝚒𝚘 𝚠𝚎𝚋 𝚎𝚜𝚝𝚊 𝚌𝚊𝚒𝚍𝚘'
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'istri gweh', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i

handler.limit = true

module.exports = handler
