let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendBut(m.chat, `¡𝙽𝚘 𝚑𝚊𝚢 𝚊𝚞𝚜𝚎𝚗𝚝𝚒𝚜𝚖𝚘 𝚎𝚗 𝚎𝚜𝚝𝚎 𝚐𝚛𝚞𝚙𝚘!`, wm, 'ᴇᴍᴘᴇᴢᴀʀ', `${usedPrefix}asistencia`, m)
        throw false
    }

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw '¡𝙴𝚜𝚝𝚊𝚜 𝚊𝚞𝚜𝚎𝚗𝚝𝚎!'
    absen.push(m.sender)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `├ ${i + 1}.  @${v.split`@`[0]}`).join('\n')
    let caption = `
𝙵𝚎𝚌𝚑𝚊: ${date}
${conn.absen[id][2]}
┌〔 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙰𝚂𝙸𝚂𝚃𝙴𝙽𝙲𝙸𝙰 〕
├ Total: ${absen.length}
${list}
└────`.trim()
    await conn.send2But(m.chat, caption, wm, '𝙿𝚛𝚎𝚜𝚎𝚗𝚝𝚎', `${usedPrefix}absen`, 'ᴄʜᴇǫᴜɪᴀʀ', `${usedPrefix}cekabsen`, m, { contextInfo: { mentionedJid: conn.parseMention(caption) } })
}
handler.help = ['presente']
handler.tags = ['absen']
handler.command = /^(absen|presente)$/i

module.exports = handler
