let handler = async (m, { conn }) => {
let info = `
*${htki} GROUP BOT ${htka}*
`
const sections = [
   {
	title: `*Join Ke Group Bot Ya*`,
	rows: [
	    {title: '💌 › Group HU TAO BOT-MD', description: "Group Official Hu Tao Bot-MD", rowId:".gcbot"},
		{title: '👑 › Owner', description: "Pemilik Bot", rowld:".owner"},
		{title: '💰 › Donasi', description: "Bantu donasi biar bot on 24 jam non stop", rowld: '#pay'},
		{title: '🎐 › Sewa Bot', description: "Sewa Bot ke grup mu", rowld:".sewa"},
		{title: '🌟 › Up Premium', description: "Menampilkan List Harga Upgrade Premium", rowld:".premium"},
	    ]
      },
]

const listMessage = {
  text:  '*Jangan Lupa Buat Donasi Ya Kak Biar On 24jam*\n\nKlik dibawah untuk melihat group bot\n',
  footer: botdate,
  title: info,
  buttonText: "Klik di sini",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['groupbot']
handler.tags = ['info']
handler.command = /^(groupbot)$/i

export default handler