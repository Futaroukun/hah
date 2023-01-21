let handler = async (m, { text, usedPrefix, command }) => {
	if (!text) throw `_Gunakan_ *${usedPrefix}liststore* _untuk melihat daftar pesan yang tersimpan_...`
	let msgs = db.data.msgs
	if (!(text in msgs)) throw `'${text}' tidak terdaftar di daftar pesan.`
	delete msgs[text]
	m.reply(`\n  [❗] berhasil menghapus pesan di daftar List dengan nama *${text}*.\n`)
}
handler.help = ['list'].map(v => 'del' + v + ' <teks>')
handler.tags = ['store']
handler.command = /^dellist$/i
handler.group = false
handler.owner = true
export default handler