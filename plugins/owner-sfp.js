import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let alvin = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu.getRandom()) 
try {
    if (!text) throw `uhm.. teksnya mana?\n\npenggunaan:\n${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} menu`
    let path = `plugins/${text}.js`
    await fs.writeFileSync(path, m.quoted.text)
    let buttonMessage = `tersimpan di ${path}`
 await conn.sendButton(m.chat, buttonMessage, wm, await(await fetch(alvin)).buffer(), [['Owner', '.owner']], m)
} catch (e) {
    console.log(e)
}
}
handler.help = ['sfp'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^sfp$/i

handler.rowner = true
export default handler