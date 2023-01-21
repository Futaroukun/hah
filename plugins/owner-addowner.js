let handler = async (m, { conn, text, args }) => {
    try {
    let ada = global.owner
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')
    else who = args[0] ? args[0].replace(/[^0-9]/g, '') : m.chat
    if (!who) throw `tag orangnya!`
    if (ada.includes(who)) throw `dia sudah menjadi owner !`
    ada.push([`${who.split`@`[0]}`])
    conn.reply(m.chat, `@${who.split`@`[0]} sekarang owner !`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

} catch {
    conn.reply(m.chat, 'Terjadi kesalahan', m)
    conn.reply('6283854551575@s.whatsapp.net', `Kesalahan Pengodean`, m)
}
}
handler.help = ['addowner @user']
handler.tags = ['owner']
handler.command = /^(addowner)$/i

handler.owner = true

export default handler