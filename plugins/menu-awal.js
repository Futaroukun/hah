import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let name = global.db.data.users[m.sender].name
let ucpn = `${ucapan()}`
conn.sendHydrated(m.chat, `*Halo ${name}👋🏻* \n*${ucpn}*`, `Baca Peraturan Dibawah, Jangan Buta Rules, Bisa Baca Kan?

 Peraturan Bot Ini:
1. Jangan spam bot!!!
2. Beri jeda 5 detik setiap command
3. Gunakan bot dengan bijak
4. Setiap command terdapat cmd Ⓛ dan Ⓟ
5. Untuk cmd Ⓛ berarti command itu menggunakan limit
6. Dan untuk cmd Ⓟ berarti command itu khusus user premium
7. Ketika limit habis kamu bisa membeli dengan mengetik .shop buy limit 1
8. Untuk upgrade premium kalian tinggal ketik .premium 
9. Ketik .rules lalu baca semua rules bot nya
10. Jangan ngemis minta sc tod
11. Tekan tombol Menu Utama dibawah untuk melihat menu bot

   ${wm}
`.trim(), './media/intro.jpg', 'https://wa.me/6283854551575?text=Halo+bang+A7+RAFLI+[VZ]🎭', 'Chat Owner', null, null, [
 ['Menu Utama', '#pinn'], 
 ['Rules Bot', '#rules'],
 ['Sewa Bot', '#sewa']
], m, {asLocation: true})
  }
handler.help = ['menu']
handler.tags = ['info', 'main']
handler.command =  /^(menu|help)$/i

handler.register = true
handler.premium = false
handler.limit = false

export default handler

function ucapan() {
	const time = moment.tz('Asia/Jakarta').format('HH')
	let res = "Selamat Dinihari🌃"
	if (time >= 4) {
		res = "Selamat Pagi🌄"
	}
	if (time >= 10) {
    res = "Selamat Siang☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore🌇"
  }
  if (time >= 18) {
    res = "Selamat Malam🌙"
  }
  return res
}