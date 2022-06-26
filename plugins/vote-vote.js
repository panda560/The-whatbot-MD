let handler = async (m, { conn, usedPrefix, command }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*no se vota en este grupo!*_\n\n*usar ${usedPrefix}mulaivote* - para empezar al votar`
    let isVote = conn.vote[id][1].concat(conn.vote[id][2])
    const wasVote = isVote.includes(m.sender)
    if (wasVote) throw 'Kamu sudah vote!'
    if (/up/i.test(command)) {
        conn.vote[id][1].push(m.sender)
    } else if (/de/i.test(command)) {
        conn.vote[id][2].push(m.sender)
    }
    m.reply(`Done!\n\n*${usedPrefix}cekvote* - para compraba vota`)
    let [reason, upvote, devote] = conn.vote[id]
    let mentionedJid = [...upvote, ...devote]
    m.reply(`
*「 VOTACION 」*

*razon:* ${reason}

*si vota*
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split('@')[0]).join('\n')}

*no vota*
_Total: ${devote.length}_
${devote.map(u => '@' + u.split('@')[0]).join('\n')}

*${usedPrefix}hapusvote* - para borra voto


`.trim(), false, { contextInfo: { mentionedJid } })
}
handler.help = ['votacion', 'no vota']
handler.tags = ['votacion']
handler.command = /^(vo|ta)cion|si vota$/i
handler.group = true
module.exports = handler
