let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
โงใ *BANK CEK* ใ
โ ๐ *Name:* ${user.registered ? user.name : conn.getName(m.sender)}
โ ๐ณ *Atm:* ${user.atm > 0 ? 'Level ' + user.atm : 'Belum Punya ATM'}
โ ๐๏ธ *Bank:* Rp.${user.bank}
โ ๐น *Money:* Rp.${user.money}
โ ๐ค *Robo:* ${user.robo > 0 ? 'Level ' + user.robo : 'Belum Punya'}
โ ๐ *Status:* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
โ ๐ *Registered:* ${user.registered ? 'Terdaftar':'Belum Terdaftar'}
โโโยทยทยท
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