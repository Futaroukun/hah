import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 2 」*
https://alight.link/yFBAfi6X845BjVuM9
`.trim()
  m.reply(caption)
}
handler.help = ['preset AM2']
handler.tags = ['tools']
handler.command = /^(p2)$/i
handler.limit = true

export default handler
