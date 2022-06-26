let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        throw `_todavia hay voto el este chat!_\n\n*user ${usedPrefix}hapusvote* - para elimina voto`
    }
    m.reply(`comenzo la votación!\n\n*${usedPrefix}si vota*\n*${usedPrefix}no vota*\n*${usedPrefix}cekvote* - para verificar el voto\n*${usedPrefix}hapusvote* - para elimina voto`)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['mulaivote [alasan]']
handler.tags = ['vote']
handler.command = /^(start|mulai)vote$/i
handler.limit = true
handler.group = true
handler.admin = true
module.exports = handler
