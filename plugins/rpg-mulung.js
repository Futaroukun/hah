const timeout = 1800000

let handler = async (m, { conn, usedPrefix, text }) => {
	    let time = global.db.data.users[m.sender].lastmulung + 1800000
  if (new Date - global.db.data.users[m.sender].lastmulung< 1800000) throw `Anda sudah lelah untuk mulung\nTunggu selama ${msToTime(time - new Date())} lagi`
	    let botol = `${Math.floor(Math.random() * 1000)}`.trim()
	    let kaleng = `${Math.floor(Math.random() * 1000)}`.trim()
	    let kardus = `${Math.floor(Math.random() * 1000)}`.trim()
	    let gelas = `${Math.floor(Math.random() * 1000)}`.trim()
	    let plastik = `${Math.floor(Math.random() * 1000)}`.trim()
	let uang= `${Math.floor(Math.random() * 30000)}`.trim()
	
	global.db.data.users[m.sender].botol += botol * 1
	global.db.data.users[m.sender].kaleng += kaleng * 1
	global.db.data.users[m.sender].kardus += kardus * 1
	global.db.data.users[m.sender].gelas += gelas * 1
	global.db.data.users[m.sender].plastik += plastik * 1
	global.db.data.users[m.sender].money += uang * 1
	
	global.db.data.users[m.sender].lastmulung = new Date * 1
  m.reply(`Selamat kamu mendapatkan: \nBotol: ${botol}\nKaleng: ${kaleng}\nKardus: ${kardus}\nGelas: ${gelas}\nPlastik: ${plastik}\n\nDan kamu menemukan\nUang: Rp.${uang}`)
  setTimeout(() => {
					conn.reply(m.chat, `_Udah waktunya mulung lagi nih kak_…`, m)
					}, timeout)
}
handler.help = ['mulung']
handler.tags = ['rpg']
handler.command = /^(mulung)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false
handler.exp = 0
handler.money = 0

export default handler 

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}