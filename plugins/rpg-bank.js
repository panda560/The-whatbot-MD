const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
let anu = `╭───❑ 「 𝐁𝐀𝐋𝐀𝐍𝐂𝐄 」 ❑────
│ ✇ 𝙽𝚘𝚖𝚋𝚛𝚎: ${user.name}
│ ✇ 𝙻𝚒𝚖𝚒𝚝𝚎: ${user.limit}
│ ✇ 𝙳𝚒𝚗𝚎𝚛𝚘: ${user.money}
│ ✇ 𝙴𝚇𝙿: ${user.exp}
│ ✇ 𝙽𝚒𝚟𝚎𝚕: ${user.level}
│ ✇ 𝚁𝚊𝚗𝚐𝚘: ${user.role}
╰❑`
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           hydratedContentText: anu,
           locationMessage: { 
           jpegThumbnail: fs.readFileSync('./media/bank.jpg') }, 
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '💠 ɢɪᴛʜᴜʙ',
               url: 'https://github.com/ilmanhdyt/ShiraoriBOT-Md'
             }

           },
               {
             quickReplyButton: {
               displayText: '🔙 ᴍᴇɴᴜ',
               id: '.menu',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}
handler.help = ['my', 'my @user']
handler.tags = ['xp']
handler.command = /^(my)$/i

module.exports = handler
