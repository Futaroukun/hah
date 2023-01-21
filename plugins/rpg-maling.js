const timeout = 604800000

let handler = async (m, { conn, usedPrefix, text }) => {
	    let time = global.db.data.users[m.sender].lastmaling + 604800000
  if (new Date - global.db.data.users[m.sender].lastmaling< 604800000) throw `📮Anda sudah merampok bank\nTunggu selama ⏲️ ${msToTime(time - new Date())} lagi`
	let money = `${Math.floor(Math.random() * 30000)}`.trim()
	let exp = `${Math.floor(Math.random() * 999)}`.trim()
	let kardus = `${Math.floor(Math.random() * 2000)}`.trim()
	let gold = `${Math.floor(Math.random() * 2000)}`.trim()
	let diamond = `${Math.floor(Math.random() * 2000)}`.trim()
	let kaleng = `${Math.floor(Math.random() * 2000)}`.trim()
	let emerald = `${Math.floor(Math.random() * 2000)}`.trim()
	let ftr = `Selamat kamu mendapatkan: \n\nUang: Rp.${money}\nKardus: ${kardus}\nXp: ${exp}\nEmas: ${gold}\nDiamond: ${diamond}\nKaleng: ${kaleng}\nEmerald: ${emerald}`.trim()
	global.db.data.users[m.sender].money += money * 1
	global.db.data.users[m.sender].exp += exp * 1
	global.db.data.users[m.sender].kardus += kardus * 1
	global.db.data.users[m.sender].gold += gold * 1
	global.db.data.users[m.sender].diamond += diamond * 1
	global.db.data.users[m.sender].kaleng += kaleng * 1
	global.db.data.users[m.sender].emerald += emerald * 1
	global.db.data.users[m.sender].lastmaling = new Date * 1
  conn.sendButton(m.chat, ftr, global.wm, './media/maling.jpg', [
[`Inventory`, '.inv'],
[`Mining`, '.mining']
], m, {asLocation: true})
}
  setTimeout(() => {
					conn.reply(m.chat, `_Udah waktunya maling lagi nih_…`, m)
					}, timeout)
handler.help = ['maling']
handler.tags = ['rpg']
handler.command = /^(maling)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
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