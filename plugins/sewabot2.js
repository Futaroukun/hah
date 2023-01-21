let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let url = 'https://telegra.ph/file/d1aa836bc14b9fd8e5671.jpg'
let text = `❏––––––『 *Sewa & Premium* 』––––––
│ Berikut Ini Untuk List Harganya
┠––––––『 *Sewa Bot* 』––––––
│✧ 1 Minggu: Rp.5.000 / Grup
│✧ 1 Bulan: Rp.10.000 / Grup
│✧ 2 Bulan: Rp.20.000 / Grup
│✧ 4 Bulan: Rp.45.000 / Grup
│✧ 12 Bulan: Rp.60.000 / Grup
┠––––––『 *Up Premium* 』––––––
│✧ 1 Minggu: Rp.10.000
│✧ 1 Bulan: Rp.15.000
│✧ 2 Bulan: Rp.25.000
│✧ 4 Bulan: Rp.50.000
│✧ 12 Bulan: 65.000
┠––––––『 *Perpanjang Sewa* 』––––––
│✧ 3 Hari: Rp.1.000 Untuk Paket Hemat 
│✧ 1 Minggu: Rp.3.000 Untuk Paket Normal & Standar 
│✧ 1 Minggu: Rp.5.000 Untuk Paket Pro & Vip
┠––––––『 *Perpanjang Premium* 』––––––
│✧ 3 Hari: Rp.2.000 Untuk Paket Hemat
│✧ 1 Minggu: Rp.4.000 Untuk Paket Normal & Standar 
│✧ 1 Minggu: Rp.6.000 Untuk Paket Pro & Vip
┗––––––––––––––––––––––––––––––✦
❏––––––『 *Payment* 』––––––
│ Berikut Ini Untuk Cara Pembayarannya
┠––––––『 *Non Pulsa* 』––––––
│✧ Dana: [${pdana}]
│✧ Ovo: [${povo}]
│✧ Gopay: [${pgopay}]
┠––––––『 *Pulsa* 』––––––
│✧ Indosat: [${ppulsa}]
│✧ Axis: [${ppulsa2}]
┗––––––––––✦
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Klick untuk berlangganan', url: `https://wa.me/6283854551575?text=Hallo Bang, saya tertarik untuk menyewa bot ${namebot}`}},
    {index: 4, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: url
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^(masuk)$/i

export default handler
