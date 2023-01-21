import fetch from 'node-fetch'
let timeout = 120000
let poin = 4999
let money = 10000
let limit = 1
let handler = async (m, { conn, command, usedPrefix }) => {
let imgr = flaaa.getRandom()

    conn.lengkapikalimat = conn.lengkapikalimat ? conn.lengkapikalimat : {}
    let id = m.chat
    if (id in conn.lengkapikalimat) {
        conn.sendButton(m.chat, 'Masih ada soal belum terjawab di chat ini', author, null, buttons, conn.lengkapikalimat[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/qisyana/scrape/main/lengkapikalimat.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
  let caption = `
  ${json.pertanyaan}
  
⏳ Timeout *${(timeout / 1000).toFixed(2)} detik*
💬 Ketik ${usedPrefix}hlen untuk bantuan
➕ Money: Rp. ${money}
🎟️ Limit: ${limit} Limit
📊 Bonus: ${poin} XP
    `.trim()
    conn.lengkapikalimat[id] = [
        await conn.sendButton(m.chat, caption, author, `${imgr + command}`, buttons, m),
        json, poin,
        setTimeout(() => {
            if (conn.lengkapikalimat[id]) conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, author, null, [
                ['lengkapikalimat', '/lengkapikalimat']
            ], conn.lengkapikalimat[id][0])
            delete conn.lengkapikalimat[id]
        }, timeout)
    ]
}
handler.help = ['lengkapikalimat']
handler.tags = ['game']
handler.command = /^lengkapikalimat/i
handler.limit = true
export default handler

const buttons = [
    ['Hint', '/hlen'],
    ['Nyerah', 'menyerah']
]