import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let money = 10000
let limit = 1
let handler = async (m, { conn, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.tebakbendera[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = `
📮 Bendera apakah ini?

⏳ Timeout *${(timeout / 1000).toFixed(2)} detik*
💬 Ketik ${usedPrefix}hben untuk bantuan
➕ Money: Rp. ${money}
🎟️ Limit: ${limit} Limit
📊 Bonus: ${poin} XP
    `.trim()
    conn.tebakbendera[id] = [
        await conn.sendButton(m.chat, caption, author, json.img, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.name}*`, author, null, [
                ['tebakbendera', '/tebakbendera']
            ], conn.tebakbendera[id][0])
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['tebakbendera']
handler.tags = ['game']
handler.command = /^tebakbendera/i
handler.limit = true
export default handler

const buttons = [
    ['Hint', '/hben'],
    ['Nyerah', 'menyerah']
]