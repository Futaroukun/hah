//Fix by Dev ×͜×
import axios from 'axios'

let handler = async (m, { conn, text }) => {
	if (!text) throw `[!] Masukkan teks.`
		let res = (await axios.get(API('males', '/ai', {text: text}, 'apikey'))).data;
		if (!res) throw 'Terjadi Kesalahan...';
		await conn.reply(m.chat, `${res.message}`, m);
}

handler.help = ['ai']
handler.tags = ['main', 'tools', 'premium']
handler.command = /^((open)?ai)$/i

handler.premium = false
handler.limit = false

export default handler