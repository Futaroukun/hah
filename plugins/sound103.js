import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = fs.readFileSync('./mp3/sound103.mp3')

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, {},{ contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://youtube.com/@A7_RAFLI",
    mediaType: 2,
    description: "https://youtube.com/@A7_RAFLI", 
    title: 'HU TAO BOT-MD',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig  }}})
}
handler.command = ['sound103']
handler.help = ['sound103']
handler.limit = true
export default handler