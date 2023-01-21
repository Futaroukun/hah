const { proto } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, text, command, usedPrefix }) => {
	let M = proto.WebMessageInfo;
	if (!m.quoted) throw `_Balas pesan dengan perintah_ *${usedPrefix + command}*`;
	if (!text) throw `Penggunaan: ${usedPrefix + command} <teks>\n\ncontoh:\n${usedPrefix + command} tes`;
	let msgs = db.data.msgs
	if (text in msgs) throw `'${text}' telah terdaftar di List store`
	msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
	m.reply(`\n [❗] berhasil menambahkan *${text}* ke List Store.\n\nAkses dengan mengetik namanya\n`.trim())
}
handler.help = ['list'].map(v => 'add' + v + ' <teks>')
handler.tags = ['store']
handler.command = /^addlist$/i

handler.group = false
handler.owner = true

export default handler