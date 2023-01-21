let handler = async (m, { conn, text }) => {

    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')
    else who = args[0] ? args[0].replace(/[^0-9]/g, '') : m.chat
    if (!who) throw `tag orangnya!`
    //Fix by: https://github.com/bolaxd
    if (!owner.find(v=> v[0] == who.split('@')[0])) throw 'dia bukan Owner !'
    let cari = owner.find(v=> v[0] == who.split('@')[0])
    let cariIndex = owner.indexOf(cari)
    owner.splice(cariIndex, 1)
    conn.reply(m.chat, `@${who.split('@')[0]} Sekarang bukan owner!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['delowner [@user]']
handler.tags = ['owner']
handler.command = /^((remove|hapus|-|del)own(er?)?)$/i

handler.owner = true

export default handler