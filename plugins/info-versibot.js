import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
	let name = global.db.data.users[m.sender].name
	let level = global.db.data.users[m.sender].level
	let exp = global.db.data.users[m.sender].exp
conn.sendHydrated(m.chat, `*––––––「 VERSION BOT 」––––––*`, `╭━━━━「 INFO USER 」   
┊ Name : ${name}
┊ Level : ${level}
┊ Exp : ${exp}
╰═┅═━––––––─ׄ✧
╭━━━━「 INFO 」   
┊ Bot ini menggunakan base dari Bochil Gaming
┊ Script: Private
┊ Base: http://github.com/bochilgaming/games-wabot-md/
┊ Version: Release Version
┊ Build Version: V.2.1.1
╰═┅═━––––––─ׄ✧
`.trim(), './media/versibot.jpg', 'http://github.com/bochilgaming/games-wabot-md/', 'BASE SCRIPT', null, null, [
 ['Menu', '#menu'], 
 ['Owner', '#owner']
], m, {asLocation: false})
  }
handler.help = ['cekversi']
handler.tags = ['info']
handler.command =  /^(cekversi)$/i

handler.register = true
handler.premium = false
handler.limit = false

export default handler