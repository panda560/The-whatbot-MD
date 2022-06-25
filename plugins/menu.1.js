/** 
*/

const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let duit = `*╭═─═─═─═─═─═╮
║   botprueba
║╰═─═─═─═─══╯
┠╮
║- 𝙷𝙾𝙻𝙰 @${m.sender.split("@")[0]}
║- 𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾: ${uptime}
╿- 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂: ${rtotalreg}
╠╯               
╠═─═─ • ⏄ • ─═─═╮
║    *ＣＯＭＡＮＤＯＳ*
╠═─═─ • ⏄ • ─═─═╯
║
╰╮
01╠ Bot (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
02╠ admins (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
03╠ ${usedPrefix}grupos
04╠ ${usedPrefix}estado
05╠ ${usedPrefix}infobot
06╠ ${usedPrefix}donar
07╠ ${usedPrefix}grouplist
08╠ ${usedPrefix}owner
09╠ ${usedPrefix}script
10╠ ${usedPrefix}join
11╠ ${usedPrefix}mates
12╠ ${usedPrefix}ppt 
13╠ ${usedPrefix}prostituto 
14╠ ${usedPrefix}prostituta 
15╠ ${usedPrefix}gay2 
16╠ ${usedPrefix}lesbiana 
17╠ ${usedPrefix}pajero 
18╠ ${usedPrefix}pajera 
19╠ ${usedPrefix}puto 
20╠ ${usedPrefix}puta 
21╠ ${usedPrefix}manco 
22╠ ${usedPrefix}manca 
23╠ ${usedPrefix}rata 
24╠ ${usedPrefix}love 
25╠ ${usedPrefix}doxear 
26╠ ${usedPrefix}pregunta 
27╠ ${usedPrefix}slot 
28╠ ${usedPrefix}pvp 
29╠ ${usedPrefix}simi 
30╠ ${usedPrefix}topgays
31╠ ${usedPrefix}topotakus
32╠ ${usedPrefix}formarpareja
33╠ ${usedPrefix}verdad
34╠ ${usedPrefix}reto
35╠ ${usedPrefix}enable
36╠ ${usedPrefix}disable
37╠ ${usedPrefix}reporte
38╠ ${usedPrefix}facebook
39╠ ${usedPrefix}instagram
40╠ ${usedPrefix}mediafire
41╠ ${usedPrefix}instagram
42╠ ${usedPrefix}gitclone
43╠ ${usedPrefix}gdrive
44╠ ${usedPrefix}tiktok
45╠ ${usedPrefix}ytmp3
46╠ ${usedPrefix}ytmp4
47╠ ${usedPrefix}ytmp3doc
48╠ ${usedPrefix}ytmp4doc
49╠ ${usedPrefix}play.1
50╠ ${usedPrefix}play.2
51╠ ${usedPrefix}play
52╠ ${usedPrefix}playdoc
53╠ ${usedPrefix}spotify
54╠ ${usedPrefix}imagen
55╠ ${usedPrefix}pinteret
56╠ ${usedPrefix}wallpaper
57╠ ${usedPrefix}wallpaper2
58╠ ${usedPrefix}pptiktok
59╠ ${usedPrefix}igstalk
60╠ ${usedPrefix}igstory
61╠ ${usedPrefix}tiktokstalk
62╠ ${usedPrefix}add
63╠ ${usedPrefix}kick
64╠ ${usedPrefix}grupo
65╠ ${usedPrefix}promote
66╠ ${usedPrefix}demote
67╠ ${usedPrefix}demote 
68╠ ${usedPrefix}infogroup
69╠ ${usedPrefix}link
70╠ ${usedPrefix}setname 
71╠ ${usedPrefix}setdesc
72╠ ${usedPrefix}invocar
73╠ ${usedPrefix}setwelcome
74╠ ${usedPrefix}setbye 
75╠ ${usedPrefix}hidetag
76╠ ${usedPrefix}toimg
77╠ ${usedPrefix}tomp3
78╠ ${usedPrefix}toptt
79╠ ${usedPrefix}tovideo
80╠ ${usedPrefix}tourl
81╠ ${usedPrefix}tts
82╠ ${usedPrefix}logos
83╠ ${usedPrefix}simpcard
84╠ ${usedPrefix}hornycard
85╠ ${usedPrefix}lolice
86╠ ${usedPrefix}ytcomment
╠╯
║ㅤㅤㅤ A____A
║ㅤㅤㅤ |・ㅅ・|
║ㅤㅤㅤ |っ　ｃ|
║ㅤㅤㅤ |　　　|
║ㅤㅤㅤ |　　　|
║ㅤㅤㅤ U￣￣U
╠═─═─ • ⏄ • ─═─═╮
╰═─═─ • ⏄ • ─═─═╯'

╭─「 %category 」
│ • 
╰────\n`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/10842a031f39684aa2297.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: 'grupo',
               url: 'https://chat.whatsapp.com/Lus9S60MABnH9lF4Wf2T7k'
             }

           },
               {
             callButton: {
               displayText: 'owner',
               id: '.owner',
             }
           },           
               {
             quickReplyButton: {
               displayText: 'descarga',
               id: '.descarga',
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

handler.help = ['prueba']
handler.tags = ['info']
handler.command = /^prueba(com|ple)|prueba$/i

module.exports = handler
