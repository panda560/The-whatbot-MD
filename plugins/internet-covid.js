let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.confirmed) throw 'Negara?'
  if (json.confirmed) m.reply(`
𝙿𝙰𝙸𝚂 : ${text}
𝙲𝙾𝙼𝙵𝙸𝚁𝙼𝙰𝙳𝙾𝚂 : ${json.confirmed.value}
𝚁𝙴𝙲𝚄𝙿𝙴𝚁𝙰𝙳𝙾𝚂 : ${json.recovered.value}
𝙼𝚄𝙴𝚁𝚃𝙾𝚂 : ${json.deaths.value}
𝚄𝙻𝚃𝙸𝙼𝙰 𝙰𝙲𝚃𝚄𝙰𝙻𝙸𝚉𝙰𝙲𝙸𝙾𝙽 : ${json.lastUpdate}
\n\n2021 © %namebot`.trim())
  else throw json
}
handler.help = ['covid'].map(v => v + ' <negara>')
handler.tags = ['internet']
handler.command = /^(corona|covid|covid19)$/i
//susu, tetek, oppai
module.exports = handler
