let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '10'
let ss = '20'
let sp = '45'
let sv = '60'
//premium
let ph = '10'
let pn = '15'
let pp = '25'
let pv = '50'
let ppm = '65'
//perpanjang sewa
let psh = '1'
let psn = '3'
let pss = '5'
//perpanjang premium
let pph = '2'
let ppn = '4'
let pps = '6'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _${sh}k/grup (1 minggu)_
┊⫹⫺ *Normal:* _${sn}k/grup (1 bulan)_
┊⫹⫺ *Standar:* _${ss}k/grup (2 bulan)_
┊⫹⫺ *Pro:* _${sp}k/grup (4 bulan)_                                                      
┊⫹⫺ *Vip:* = _${sv}k/grup (12 bulan)_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _${ph}k (1 minggu)_
┊⫹⫺ *Normal:* _${pn}k (1 bulan)_
┊⫹⫺ *Standar:* _${pp}k (2 bulan)_
┊⫹⫺ *Pro:* _${pv}k (4 bulan)_                                               
┊⫹⫺ *Vip:* = _${ppm}k (12 bulan)_
╰═┅═━––––––๑

*⫹⫺ PAYMENT:*
• *Pulsa1:* [${ppulsa}]
• *Pulsa2:* [083854551575]
• *Gopay:* [${pgopay}]
• *Dana:* [${pdana}]
• *Ovo:* [${povo}]
–––––– *🐾 Catatan* ––––––
• Pulsa1: Indosat
• Pulsa2: Axis
_Untuk Pembayaran Via All Payment Belum Tersedia_
–––––– *🐾 Kelebihan* ––––––
✧ *Virtex Menu* ✅
✧ *Menu Keren* ✅
✧ *Anti Link* ✅
✧ *Button Menu* ✅
✧ *Anti Sticker* ✅
✧ *Jaga Gc* ✅
✧ *Anti Toxic*↗️
✧ *DLL*

_Total Fitur:_ 570++
–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.order *Paket:* HEMAT • Sewa', description: 'Price: ' + sh + 'k (1 minggu)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'Price: ' + sn + 'k (1 bulan)' },
	{title: "🔖 STANDAR", rowId: '.order *Paket:* STANDAR • Sewa', description: 'Price: ' + ss + 'k (2 bulan)' },
	{title: "🔖 PRO", rowId: '.order *Paket:* PRO • Sewa', description: 'Price: ' + sp + 'k (4 bulan)' },
	{title: "🔖 VIP", rowId: '.order *Paket:* VIP • Sewa', description: 'Price: ' + sv + 'k (12 bulan)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* HEMAT • Premium', description: 'Price: ' + ph + 'k (1 minggu)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* NORMAL • Premium', description: 'Price: ' + pn + 'k (1 bulan)' },
	{title: "🌟 STANDAR", rowId: '.order *Paket:* STANDAR • Premium', description: 'Price: ' + pp + 'k (2 bulan)' },
	{title: "🌟 PRO", rowId: '.order *Paket:* PRO • Premium', description: 'Price: ' + pv + 'k (4 bulan)' },
	{title: "🌟 VIP", rowId: '.order *Paket:* VIP • Premium', description: 'Price: ' + ppm + 'k (12 bulan)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler