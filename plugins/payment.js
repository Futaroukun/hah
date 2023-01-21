import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
  const ultah = new Date('Juli 14 2006 00:00:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let vn = `https://github.com/saipulanuar/Api-Github/raw/main/audio/Donasiku.mp3`
  conn.sendButton(m.chat, `
❏––––––『 *Donasi & Payment* 』––––––
│ *Bantu Donasi Ya Biar On 24 Jam Non Stop
┠––––––『 *Non Pulsa* 』––––––
│✧ Dana: [${global.pdana}]
│✧ Ovo: [${global.povo}]
│✧ Gopay:  [${global.pgopay]
│✧ Saweria: [${global.psaweria}]
┠––––––『 *Via Pulsa* 』––––––
│✧ Indosat: [${global.ppulsa}]
│✧ Axis: [${global.ppulsa2}]
┠––––––『 *Penting* 』––––––
│✧ Ingin donasi & bayar? 
│✧ Chat ke: wa.me/6283854551575
│✧ Untuk payment via non pulsa jangan lupa kirim bukti pembayaran
│✧ Hasil dari donasi bakal digunain untuk keperluan bot
│✧ Bantu donasinya ya
┗––––––––––✦`)
`.trim(), wm, [['Owner',`/owner`]],m) // Tambah sendiri kalo mau
conn.sendFile(m.chat, vn, 'haori.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true, contextInfo:{ externalAdReply: { title: `💌 Ultah Owner : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`, body: `Follow Tiktok My Bestie`, sourceUrl: 'https://www.tiktok.com/@raraharsita2', thumbnail: await (await fetch('https://i.ibb.co/jfZVKmC/babi2.jpg')).buffer(),}} 
     }) 
}
handler.command = /^(pay|payment|bayar)$/i
handler.tags = ['info']
handler.help = ['payment']
handler.premium = false
handler.limit = true

export default handler
