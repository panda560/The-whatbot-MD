let xfar = require('xfarr-api')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text }) => {
    if (!text) throw '𝙸𝚗𝚝𝚛𝚘𝚍𝚞𝚌𝚒𝚛 𝚎𝚗𝚕𝚊𝚌𝚎\n\n𝙴𝚓𝚎𝚖𝚙𝚕𝚘: .ytv720 https://youtube.com/xxxxxx'
  let res = await xfar.Youtube(text)
m.reply('*𝚃𝚞𝚗𝚐𝚐𝚞 𝚂𝚎𝚋𝚎𝚗𝚝𝚊𝚛...*')
conn.sendFile(m.chat,res.medias[2].url, '', `Youtube Downloader
720p
𝚜𝚒 𝚝𝚘𝚍𝚊𝚟𝚒𝚊 𝚎𝚜𝚝𝚊 𝚋𝚘𝚛𝚛𝚘𝚜𝚘, 𝚜𝚒𝚐𝚗𝚒𝚏𝚒𝚌𝚊 𝚚𝚞𝚎 𝚎𝚕 𝚟𝚒𝚍𝚎𝚘 𝚎𝚜𝚝𝚊 𝚋𝚘𝚛𝚛𝚘𝚜𝚘 𝚍𝚎 𝚢𝚘𝚞𝚝𝚞𝚋𝚎`, m)

}
handler.help = ['ytv720 <url>']
handler.tags = ['internet']
handler.command = /^ytv720$/i


module.exports = handler
