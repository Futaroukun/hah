let handler = async(m, { conn, text, usedPrefix }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dikirim', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
    let user = global.db.data.users[m.sender]

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `*ć š§ EMAIL ć*\n\nšŖ Dari: Owner Hu Tao Bot-MD\nš« Kepada: wa.me/${korban}\nš¬ Pesan : ${pesan}\n\n *${global.wm}*`

    conn.reply(korban + '@s.whatsapp.net', spam1, m)

    let logs = `[!] Berhasil mengirim pesan wa ke nomor ${korban}`
    conn.reply(m.chat, logs, m)
}
handler.help = ['email', 'pesan']
handler.tags = ['owner']

handler.command = /^(email|pesan)$/i
handler.rowner = true
handler.limit = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler