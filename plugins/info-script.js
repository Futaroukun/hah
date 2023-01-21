import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
conn.sendHydrated(m.chat, `*––––––「 SCRIPT BOT」––––––*`, `❏━━━━「 SCRIPT 」   
│ Script HU TAO BOT-MD 
│•  Script:
│↳ Private
│•  Base:
│↳ http://github.com/bochilgaming/games-wabot-md/
╰═┅═━––––––─ׄ✧

📮 Note:
 • Script private gak usah minta
 • Ngemis minta scriptnya ke owner? gak bakal gua kasih
 • Jika terdapat bug atau error di script langsung lapor owner
 • Github : http://github.com/Awokawokawok_Mau_Scnya_Ya_Kasian
 • Noh pake ae base nya
`.trim(), './media/scriptbot.jpg', 'http://github.com/bochilgaming/games-wabot-md/', 'BASE SCRIPT', null, null, [
 ['Menu', '#menu'], 
 ['Owner', '#owner']
], m, {asLocation: true})
  }
handler.help = ['sc', 'script']
handler.tags = ['info', 'main']
handler.command =  /^script|sc$/i

handler.register = true
handler.premium = false
handler.limit = false

export default handler