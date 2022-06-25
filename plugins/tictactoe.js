const TicTacToe = require("../lib/tictactoe")

let handler = async (m, { conn, usedPrefix, command, text }) => {
    conn.game = conn.game ? conn.game : {}
    if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw '𝙏𝙤𝙙𝙖𝙫𝙞𝙖 𝙚𝙨𝙩𝙖𝙨 𝙚𝙣 𝙚𝙡 𝙟𝙪𝙚𝙜𝙤'
    let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
    // m.reply('[WIP Feature]')
    if (room) {
        m.reply('𝙀𝙨𝙥𝙚𝙧𝙖𝙣𝙙𝙤 𝙖 𝙤𝙩𝙧𝙤 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙥𝙖𝙧 𝙞𝙣𝙞𝙘𝙞𝙖𝙧')
        room.o = m.chat
        room.game.playerO = m.sender
        room.state = 'PLAYING'
        let arr = room.game.render().map(v => {
            return {
                X: '❌',
                O: '⭕',
                1: '1️⃣',
                2: '2️⃣',
                3: '3️⃣',
                4: '4️⃣',
                5: '5️⃣',
                6: '6️⃣',
                7: '7️⃣',
                8: '8️⃣',
                9: '9️⃣',
            }[v]
        })
        let str = `
ID: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

𝙏𝙪𝙧𝙣𝙤 𝙙𝙚 @${room.game.currentTurn.split('@')[0]}
𝙀𝙨𝙘𝙧𝙞𝙗𝙖 *𝙧𝙚𝙣𝙪𝙣𝙘𝙞𝙖𝙧* 𝙥𝙖𝙧𝙖 𝙙𝙖𝙧𝙨𝙚 𝙥𝙤𝙧 𝙫𝙚𝙣𝙘𝙞𝙙𝙤
`.trim()
        if (room.x !== room.o) m.reply(str, room.x, {
            contextInfo: {
                mentionedJid: conn.parseMention(str)
            }
        })
        m.reply(str, room.o, {
            contextInfo: {
                mentionedJid: conn.parseMention(str)
            }
        })
    } else {
        room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
        }
        if (text) room.name = text
        m.reply('𝙀𝙨𝙥𝙚𝙧𝙖𝙣𝙙𝙤 𝙘𝙤𝙣𝙩𝙧𝙞𝙣𝙘𝙖𝙣𝙩𝙚' + (text ? `𝙀𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙨𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙖 𝙘𝙤𝙣𝙩𝙞𝙣𝙪𝙖𝙘𝙞ó𝙣
${usedPrefix}${command} ${text}` : ''))
        conn.game[room.id] = room
    }
}

handler.help = ['tictactoe', 'ttt'].map(v => v + ' [custom room name]')
handler.tags = ['game']
handler.command = /^(tictactoe|t{3})$/

module.exports = handler
