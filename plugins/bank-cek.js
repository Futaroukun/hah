let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
▧「 *BANK CEK* 」
│ 📛 *Name:* ${user.registered ? user.name : conn.getName(m.sender)}
│ 💳 *Atm:* ${user.atm > 0 ? 'Level ' + user.atm : 'Belum Punya ATM'}
│ 🏛️ *Bank:* Rp.${user.bank}
│ 💹 *Money:* Rp.${user.money}
│ 🤖 *Robo:* ${user.robo > 0 ? 'Level ' + user.robo : 'Belum Punya'}
│ 🌟 *Status:* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
│ 📑 *Registered:* ${user.registered ? 'Terdaftar':'Belum Terdaftar'}
└──···
`.trim()
  conn.sendButton(m.chat, caption, global.wm, './media/bank.jpg', [
[`INVENTORY`, '.inv'],
[`MENU`, '.menu']
], m, {asLocation: true})
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i

handler.register = true
export default handler