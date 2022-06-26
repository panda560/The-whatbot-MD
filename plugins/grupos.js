/**
 * TOLONG JANGAN GANTI GAMBARNYA,NOMORKU DAN SAWERIAKU
 * MENDING KALIAN TAMBAHIN NOMOR KALIAN
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let duit = `*────── 「 GRUPO」 ──────*

*Hola 👋*
*estos sos los grupo oficial del bot*
*https://chat.whatsapp.com/Lus9S60MABnH9lF4Wf2T7k*
h`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/ca517a39ce85c8a4c0479.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'github',
               url: ''
             }

           },
               {
             quickReplyButton: {
               displayText: 'menu completo',
               id: '.full',
             }
           },           
               {
             quickReplyButton: {
               displayText: 'Owner',
               id: '.owner',
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

handler.help = ['grupos']
handler.tags = ['info']
handler.command = /^gru(po|s)|grupos$/i

module.exports = handler
