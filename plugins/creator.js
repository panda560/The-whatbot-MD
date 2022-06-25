const PhoneNumber = require('awesome-phonenumber')
async function handler(m) {
                let vcard = 'numero del mi owner es wa.me/56977774748, wa.me/51935116539*\n' // metadata of the contact card
                conn.sendMessage(m.chat, { contacts: { displayName: 'Ilman', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler