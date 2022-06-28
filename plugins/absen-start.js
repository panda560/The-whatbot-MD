let handler = async (m, { usedPrefix, text }) => {
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        throw `_*𝙰𝚞𝚗 𝚑𝚊𝚢 𝚊𝚜𝚒𝚜𝚝𝚎𝚗𝚌𝚒𝚊 𝚎𝚗 𝚎𝚜𝚝𝚎 𝚌𝚑𝚊𝚝!*_\n\n*${usedPrefix}delasitencia* - 𝙿𝚊𝚛𝚊 𝚋𝚘𝚛𝚛𝚊𝚛 𝚕𝚊 𝚊𝚜𝚒𝚜𝚝𝚎𝚗𝚌𝚒𝚊`
    }
    conn.absen[id] = [
        m.reply(`Berhasil memulai absen!\n\n*${usedPrefix}absen* - untuk absen\n*${usedPrefix}cekabsen* - untuk mengecek absen\n*${usedPrefix}hapusabsen* - untuk menghapus data absen`),
        [],
        text
    ]
}
handler.help = ['asistencia [teks]']
handler.tags = ['absen']
handler.command = /^(asis|mulai)tencia$/i
handler.group = true
handler.admin = true
module.exports = handler
