let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*¡No votar en este grupo!*_\n\n*${usedPrefix}startivote* - para empezar a votar`

    let [reason, upvote, devote] = conn.vote[id]
    let mentionedJid = [...upvote, ...devote]
    m.reply(`
*「 VOTACIÓN 」*

*razon:* ${reason}

*voto a favor*
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split('@')[0]).join('\n')}

*no voto*
_Total: ${devote.length}_
${devote.map(u => '@' + u.split('@')[0]).join('\n')}

*${usedPrefix}hapusvote* - para borra voto

`.trim(), false, { contextInfo: { mentionedJid } })
}
handler.help = ['cekvote']
handler.tags = ['vote']
handler.command = /^cekvote$/i
handler.group = true
module.exports = handler
