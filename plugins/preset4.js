import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 4 」*
https://alight.link/mLGSRgFjU7tgaZ9ZA
`.trim()
  m.reply(caption)
}
handler.help = ['preset AM4']
handler.tags = ['tools']
handler.command = /^(p4)$/i
handler.limit = true

export default handler
