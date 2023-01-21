import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 1 」*
https://alight.link/jFQ3BdcHfxEmfTFbA
`.trim()
  m.reply(caption)
}
handler.help = ['preset AM1']
handler.tags = ['tools']
handler.command = /^(p1)$/i
handler.limit = true

export default handler
