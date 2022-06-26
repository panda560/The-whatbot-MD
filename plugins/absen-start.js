let handler = async (m, { usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        throw `_*𝙰𝚞𝚗 𝚑𝚊𝚢 𝚊𝚞𝚜𝚎𝚗𝚌𝚒𝚊𝚜 𝚎𝚗 𝚎𝚜𝚝𝚎 𝚌𝚑𝚊𝚝!*_\n\n*${usedPrefix}hapusabsen* - 𝙿𝚊𝚛𝚊 𝚋𝚘𝚛𝚛𝚊𝚛 𝚕𝚊𝚜 𝚊𝚞𝚜𝚎𝚗𝚌𝚒𝚊𝚜 `
    }
    conn.absen[id] = [
        conn.sendBut(m.chat, `𝙸𝚗𝚒𝚌𝚒𝚘 𝚌𝚘𝚗 𝚎𝚡𝚒𝚝𝚘\n\n*${usedPrefix}presente* - 𝙴𝚜𝚝𝚊𝚛 𝙿𝚛𝚎𝚜𝚎𝚗𝚝𝚎\n*${usedPrefix}cekabsen* - 𝙿𝚊𝚛𝚊 𝚌𝚘𝚖𝚙𝚛𝚘𝚋𝚊𝚛 𝚕𝚊 𝚊𝚜𝚒𝚜𝚝𝚎𝚗𝚌𝚒𝚊\n*${usedPrefix}hapusabsen* - 𝙿𝚊𝚛𝚊 𝚋𝚘𝚛𝚛𝚊𝚛 𝚕𝚘𝚜 𝚍𝚊𝚝𝚘𝚜 𝚍𝚎 𝚊𝚜𝚒𝚜𝚝𝚎𝚗𝚌𝚒𝚊`, wm, '𝙿𝚛𝚎𝚜𝚎𝚗𝚝𝚎', '.presente', m),
        [],
        text
    ]
}
handler.help = ['asistencia [teks]']
handler.tags = ['absen']
handler.command = /^(start|asis)tencia$/i
handler.group = true
handler.admin = true
module.exports = handler
