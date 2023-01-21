import daily from './rpg-daily.js'
import weekly from './rpg-weekly.js'
import monthly from './rpg-monthly.js'
import adventure from './rpg-adventure.js'
let handler = async (m, { conn }) => {
	let health = global.db.data.users[m.sender].health
	let armor = global.db.data.users[m.sender].armor
	let warn = global.db.data.users[m.sender].warn
	let pet = global.db.data.users[m.sender].pet
	let kucing = global.db.data.users[m.sender].cat
	let _kucing = global.db.data.users[m.sender].anakkucing
	let anjing = global.db.data.users[m.sender].dog
	let _anjing = global.db.data.users[m.sender].anakanjing
	let rubah = global.db.data.users[m.sender].fox
	let _rubah = global.db.data.users[m.sender].anakrubah
	let serigala = global.db.data.users[m.sender].serigala 
	let naga = global.db.data.users[m.sender].dragon 
	let kuda = global.db.data.users[m.sender].horse
	let _kuda = global.db.data.users[m.sender].anakkuda
	let robot = global.db.data.users[m.sender].robo
	let phonix = global.db.data.users[m.sender].phonix
	let griffin = global.db.data.users[m.sender].griffin
	let centaur = global.db.data.users[m.sender].centaur
	let diamond = global.db.data.users[m.sender].diamond
	let potion = global.db.data.users[m.sender].potion
	let common = global.db.data.users[m.sender].common
	let makananpet = global.db.data.users[m.sender].makananpet
	let makanannaga = global.db.data.users[m.sender].makanannaga
	let makananphonix = global.db.data.users[m.sender].makananphonix
	let makanangriffin = global.db.data.users[m.sender].makanangriffin
	let makanancentaur = global.db.data.users[m.sender].makanancentaur
	let uncommon = global.db.data.users[m.sender].uncommon
	let mythic = global.db.data.users[m.sender].mythic
	let legendary = global.db.data.users[m.sender].legendary
	let level = global.db.data.users[m.sender].level
	let money = global.db.data.users[m.sender].money
	let exp = global.db.data.users[m.sender].exp
	let sampah = global.db.data.users[m.sender].trash
	let apel = global.db.data.users[m.sender].apel
	let anggur = global.db.data.users[m.sender].anggur
	let mangga = global.db.data.users[m.sender].mangga
	let pisang = global.db.data.users[m.sender].pisang
	let jeruk = global.db.data.users[m.sender].jeruk
	let bibitapel = global.db.data.users[m.sender].bibitapel
	let bibitanggur = global.db.data.users[m.sender].bibitanggur
	let bibitmangga = global.db.data.users[m.sender].bibitmangga
	let bibitpisang = global.db.data.users[m.sender].bibitpisang
	let bibitjeruk = global.db.data.users[m.sender].bibitjeruk
	let bank = global.db.data.users[m.sender].bank
	let limit = global.db.data.users[m.sender].limit
	let pangkat = global.db.data.users[m.sender].role
	let umur = global.db.data.users[m.sender].age
	let aqua = global.db.data.users[m.sender].aqua
	let kayu = global.db.data.users[m.sender].wood
	let botol = global.db.data.users[m.sender].botol
	let batu = global.db.data.users[m.sender].rock
	let besi = global.db.data.users[m.sender].iron
	let sword = global.db.data.users[m.sender].sword
	let string = global.db.data.users[m.sender].string
	let kaleng = global.db.data.users[m.sender].kaleng
	let kardus = global.db.data.users[m.sender].kardus
	let berlian = global.db.data.users[m.sender].diamond
	let emas = global.db.data.users[m.sender].gold
	let emerald = global.db.data.users[m.sender].emerald
	let ayam = global.db.data.users[m.sender].ayam
	let kambing = global.db.data.users[m.sender].kambing
	let sapi = global.db.data.users[m.sender].sapi
	let kerbau = global.db.data.users[m.sender].kerbau
	let babi = global.db.data.users[m.sender].babi
	let harimau = global.db.data.users[m.sender].harimau
	let banteng = global.db.data.users[m.sender].banteng
	let monyet = global.db.data.users[m.sender].monyet 
	let babihutan = global.db.data.users[m.sender].babihutan
	let panda = global.db.data.users[m.sender].panda
	let gajah = global.db.data.users[m.sender].gajah
	let buaya = global.db.data.users[m.sender].buaya
	let paus = global.db.data.users[m.sender].paus
	let kepiting = global.db.data.users[m.sender].kepiting
	let gurita = global.db.data.users[m.sender].gurita
	let cumi = global.db.data.users[m.sender].cumi
	let buntal = global.db.data.users[m.sender].buntal
	let dory = global.db.data.users[m.sender].dory
	let lumba = global.db.data.users[m.sender].lumba
	let lobster = global.db.data.users[m.sender].lobster 
	let hiu = global.db.data.users[m.sender].hiu
	let lele = global.db.data.users[m.sender].lele
	let nila = global.db.data.users[m.sender].nila
	let bawal = global.db.data.users[m.sender].bawal
	let udang = global.db.data.users[m.sender].udang 
	let ikan = global.db.data.users[m.sender].ikan
	let orca = global.db.data.users[m.sender].orca
	let { lastadventure, lastberburu, lastdungeon, lastdagang, lastmining, lastfishing, lastclaim, lastweekly, lastmonthly } = db.data.users[m.sender]
	
	let str = `╭┈─────❒ *STATUS*
│📑 *Nama:* ${conn.getName(m.sender)}
│💵 *Money:* Rp.${money}
│🏛️ *Bank:* Rp.${bank}
│🌟 *Exp:* ${exp}
│🎟️ *Limit:* ${limit}
│❤️ *Health:* ${health}
│📊 *Level:* ${level}
│🎨 *Umur:* ${umur} Tahun
│🎖️ *Pangkat:* ${pangkat}
╰┈───────────────❒ 
╭┈─────❒ *INVENTORY*
│💎 *Diamond:* ${berlian}
│❇️ *Emerald:* ${emerald}
│🪙 *Emas:* ${emas}
│🧪 *Potion:* ${potion}
│🪨 *Batu:* ${batu}
│🗑 *Sampah:* ${sampah}
│📦️ *Kardus:* ${kardus}
│🛢️ *Kaleng:* ${kaleng}
│🪵 *Kayu:* ${kayu}
│🕸️ *String:* ${string}
│⛓️ *Besi:* ${besi}
│ 🔖 *Pet Token:* ${pet}
│🥓 *Makanan Hewan:* ${makananpet}
╰┈───────────────❒ 
╭┈─────❒ *CRATE*
│📦 *Common:* ${common}
│🛍️ *Uncommon:* ${uncommon}
│🎁 *Mythic:* ${mythic}
│🧰 *Legendary:* ${legendary}
│ 
│🪅 *Total Crate:* ${common + uncommon + mythic + legendary} Crate
╰┈───────────────❒ 
╭┈─────❒ *KANDANG*
│🐓 *Ayam:* ${ayam}
│🐐 *Kambing:* ${kambing}
│🐄 *Sapi:* ${sapi}
│🐃 *Kerbau:* ${kerbau}
│🐖 *Babi:* ${babi}
│🐗 *Babi Hutan:* ${babihutan}
│🐅 *Harimau:* ${harimau}
│🐂 *Banteng:* ${banteng}
│🐒 *Monyet:* ${monyet}
│🐼 *Panda:* ${panda}
│🐘 *Gajah:* ${gajah}
│🐊 *Buaya:* ${buaya}
│
│⛺ *Total Hewan:* ${ayam + kambing + sapi + kerbau + babi + babihutan + harimau + banteng + monyet + panda + gajah + buaya} Ekor
╰┈───────────────❒ 
╭┈─────❒ *KOLAM*
│🐳 *Paus:* ${paus}
│🦀 *Kepiting:* ${kepiting}
│🐙 *Gurita:* ${gurita}
│🦑 *Cumi:* ${cumi}
│🐡 *Buntal:* ${buntal}
│🐠 *Dory:* ${dory}
│🐬 *Lumba:* ${lumba}
│🦞 *Lobster:* ${lobster}
│🦈 *Hiu:* ${hiu}
│🦐 *Udang:* ${udang}
│🐟 *Ikan:* ${ikan}
│🐋 *Orca:* ${orca}
│
│🎏 *Total Ikan:* ${paus + kepiting + gurita + cumi + buntal + dory + lumba + lobster + hiu + udang + ikan + orca} Jenis
╰┈───────────────❒ 
╭┈─────❒ *BUAH & BIBIT*
│🍎 *Apel:* ${apel}
│🍇 *Anggur:* ${anggur}
│🥭 *Mangga:* ${mangga}
│🍌 *Pisang:* ${pisang}
│🍊 *Jeruk:* ${jeruk}
│
│🌾 *Bibit Apel:* ${bibitapel}
│🌾 *Bibit Anggur:* ${bibitanggur}
│🌾 *Bibit Mangga:* ${bibitmangga}
│🌾 *Bibit Pisang:* ${bibitpisang}
│🌾 *Bibit Jeruk:* ${bibitjeruk}
│
│🛒 *Total Buah:* ${apel + anggur + mangga + pisang + jeruk} Jenis
│🖼️ *Total Bibit:* ${bibitapel + bibitanggur + bibitmangga + bibitpisang + bibitjeruk} Bibit
╰┈───────────────❒ 
╭┈─────❒ *PELIHARAAN*
│🐎 *Kuda:* ${kuda}
│🦊 *Rubah:* ${rubah}
│🐈 *Kucing:* ${kucing}
│🐕 *Anjing:* ${anjing}
│🤖 *Robot:* ${robot}
╰┈───────────────❒ 
╭┈─────❒ *COOLDOWN*
│⛰️ *Adventure:* ${lastadventure > 0 ? '❌' : '✅'}
│🤺 *Berburu:* ${lastberburu > 0 ? '❌' : '✅'}
│🎃 *Dungeon:* ${lastdungeon > 0 ? '❌' : '✅'}
│💱 *Berdagang:* ${lastdagang > 0 ? '❌' : '✅'}
│⛏️ *Mining:* ${lastmining > 0 ? '❌' : '✅'}
│🎣 *Memancing:* ${lastfishing > 0 ? '❌' : '✅'}
│
│📗 *Daily:* ${lastclaim > 0 ? '❌' : '✅'}
│📘 *Weekly:* ${lastweekly > 0 ? '❌' : '✅'}
│📙 *Monthly:* ${lastmonthly > 0 ? '❌' : '✅'}
╰┈───────────────❒ 
`.trim()
	conn.sendButton(m.chat, str, global.wm, './media/inventory.jpg', [
[`Adventure`, '.adv'],
[`Menu`, '.menu']
], m, {asLocation: true})
}
handler.help = ['inventory', 'inv']
handler.tags = ['rpg']
handler.command = /^(inv(entory)?|bal(ance)?|money|e?xp)$/i
export default handler