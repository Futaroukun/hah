let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply(' *Sukses mematikan Hu Tao Bot-MD 📴* ')
    // } else m.reply('Ada nomor Ownerku disini...')
}
handler.help = ['Hutao(on/off)']
handler.tags = ['owner']
handler.command = /^(botoff)$/i

handler.owner = true
handler.group = true

export default handler
