import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://saipulanuar.ga/api/memeh'
	conn.sendButton(m.chat, 'Memenya nih bang (≧ω≦)', wm, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(meme)$/i
handler.tags = ['fun']
handler.help = ['meme']
handler.premium = false
handler.limit = true

export default handler