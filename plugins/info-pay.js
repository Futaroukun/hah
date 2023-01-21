// Remake By ᴋʏᴀᴍɪ×͜×࿐
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {

  let vn = `https://github.com/saipulanuar/Api-Github/raw/main/audio/Donasiku.mp3`
  let ted = `https://telegra.ph/file/e4f6015a317c22e256963.jpg`
  conn.sendButton(m.chat, `
┏━ꕥ〔 *Pulsa* 〕ꕥ━⬣
┃✾ Indosat [${global.ppulsa}]
┃✾ Axis [083854551575]
┗━━━━ꕥ
┏━ꕥ〔 *Non Pulsa* 〕ꕥ━⬣
┃✾ Dana [${global.pdana}]
┃✾ Ovo [${global.povo}]
┃✾ Gopay [${global.pgopay}]
┗━━━━ꕥ
┏━━ꕥ〔 *NOTE* 〕ꕥ━⬣
┃ Ingin donasi? wa.me/${nomorown}
┃ _Hasil donasi akan digunakan buat sewa_
┃ _atau beli *PANEL* agar bot bisa jalan_
┃ _24jam tanpa kendala_
┗━━━━ꕥ
`.trim(), wm, ted, [['Owner',`.owner`]], m, {contextInfo:{ externalAdReply: { title: `Payment\n${wm3}`, body: `Follow My Tiktok`, sourceUrl: 'https://vt.tiktok.com/ZSeABMWuN', thumbnail: await (await fetch('https://telegra.ph/file/42a941ca5bfa815e8b56f.jpg')).buffer()}}}) // Tambah Nomormu Sendiri, Penting jangan hapus punya gw njink
     } 
     
handler.command = /^(pay|payment|bayar)$/i
handler.tags = ['info']
handler.help = ['payment', 'bayar']
handler.premium = false
handler.limit = false
export default handler