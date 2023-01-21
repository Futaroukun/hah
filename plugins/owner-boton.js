let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Sukses Menghidupkan Hu Tao Bot-MD 🤖* ')
}

handler.tags = ['owner']
handler.command = /^(boton)$/i

handler.group = true
handler.owner = true

export default handler
