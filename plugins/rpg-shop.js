
const potion = 300
const Spotion = 150
const Bdiamond = 1000
const Sdiamond = 500
const Bcommon = 30000
const Scommon = 15000
const Buncommon = 40000
const Suncommon = 20000
const Bmythic = 50000
const Smythic = 25000
const Blegendary = 75000
const Slegendary = 35000
const Bsampah = 50
const Ssampah = 25
const Bkayu = 700
const Skayu = 350
const Bbotol = 700
const Sbotol = 350
const Bkaleng = 700
const Skaleng = 350
const Bkardus = 700
const Skardus = 350
const Bpisang = 1000
const Spisang = 500
const Bmangga = 1000
const Smangga = 500
const Bjeruk = 1000
const Sjeruk = 500
const Banggur = 1000
const Sanggur = 500
const Bapel = 1000
const Sapel = 500
const Bbibitpisang = 2000
const Sbibitpisang = 1000
const Bbibitmangga = 2000
const Sbibitmangga = 1000
const Bbibitjeruk = 2000
const Sbibitjeruk = 1000
const Bbibitanggur = 2000
const Sbibitanggur = 1000
const Bbibitapel = 2000
const Sbibitapel = 1000
const Bgardenboxs = 5000
const Sgardenboc = 2500
const Bberlian = 15000
const Sberlian = 10000
const Bemasbatang = 25000
const Semasbatang = 10000
const Bemasbiasa = 15000
const Semasbiasa = 10000
const Bphonix = 1000000
const Sphonix = 500000
const Bgriffin = 1000000
const Sgriffin = 500000
const Bkyubi = 1000000
const Skyubi = 500000
const Bnaga = 1000000
const Snaga = 500000
const Bcentaur = 1000000
const Scentaur = 500000
const Bkuda = 100000000
const Skuda = 500000
const Brubah = 1000000
const Srubah = 500000
const Bkucing = 200000
const Skucing = 100000
const Bserigala = 1000000
const Sserigala = 500000
const Bmakananpet = 1000
const Smakananpet = 500
const Bmakananphonix = 1000
const Smakananphonix = 500
const Bmakanangriffin = 1000
const Smakanangriffin = 500
const Bmakanannaga = 1000
const Smakanannaga = 500
const Bmakanankyubi = 1000
const Smakanankyubi = 500
const Bmakanancentaur = 1000
const Smakanancentaur = 500
const Bhealtmonster = 20000
const Bpet = 5000
const Spet = 2500
const Blimit = 10000
const Slimit = 3000
const Bexp = 550
const Baqua = 1000
const Saqua = 500
const Bpettoken = 5000
const Spettoken = 2500
const Biron = 2000
const Siron = 1000
const Bstring = 2000
const Sstring = 500
const Bsword = 3000000
const Ssword = 150000
const Bumpan = 1500
const Sumpan = 100
const Bpancingan = 500000
const Spancingan = 250000
const Bbatu = 500
const Sbatu = 100
const Bketake = 15
const Btiketcoin = 500
const Bkoinexpg = 50000
const Beleksirb = 500
let handler  = async (m, { conn, command, args, usedPrefix, owner }) => {
    const _armor = global.db.data.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    let nomors = m.sender
    const Kchat = `
📝 Cara penggunaan:\n${usedPrefix}shop <buy|sell> <item> <jumlah>

📮 Contoh penggunaan:\n*${usedPrefix}shop buy potion 1*
📫 Note:\nHarga sewaktu-waktu dapat berubah 

🛍️ List Barang
============================
🛒 *Barang* | 💲 *Harga Beli*
🎟️ *Limit:* Rp.${Blimit}
🫗 *Aqua:* Rp.${Baqua}
============================
🛍️ List Bibit Buah
============================
🛒 *Bibit Buah* | 💲 *Harga Beli*
🌾 *BibitPisang:* Rp.${Bbibitpisang}
🌾 *BibitAnggur:* Rp.${Bbibitanggur}
🌾 *BibitMangga:* Rp.${Bbibitmangga}
🌾 *BibitJeruk:* Rp.${Bbibitjeruk}
🌾 *BibitApel:* Rp.${Bbibitapel}
============================
🛍️ List Barang 
============================
🛒 *Barang* | 💲 *Harga Beli*
🧪 *Potion:* Rp.${potion}
💎 *Diamond:* Rp.${Bdiamond}
📦 *Common:* Rp.${Bcommon}
🛍️ *Uncommon:* Rp.${Buncommon}
🎁 *Mythic:* Rp.${Bmythic}
🧰 *Legendary:* Rp.${Blegendary}
🗑️ *Sampah:* Rp.${Bsampah}
🕸 *String:* Rp.${Bstring}
⛓ *Iron:* Rp.${Biron}
🪨️️ *Batu:* Rp.${Bbatu}
🧴 *Botol:* Rp.${Bbotol}
🛢️ *Kaleng:* Rp.${Bkaleng}
📦 *Kardus:* Rp.${Bkardus}
🪵 *Kayu:* Rp.${Bkayu}
🪙 *Emas:* Rp.${Bemasbiasa}
🔖 *PetToken:* Rp.${Bpet}
============================
🛍️ List Buah
============================
🛒 *Barang* | 💲 *Harga Beli*
🍌 *Pisang:* Rp.${Bpisang}
🍇 *Anggur:* Rp.${Banggur}
🥭 *Mangga:* Rp.${Bmangga}
🍊 *Jeruk:* Rp.${Bjeruk}
🍎 *Apel:* Rp.${Bapel}
============================
🛍️ List Makanan Pet
============================
🛒 *Barang* | 💲 *Harga Beli*
🥓 *MakananPet:* Rp.${Bmakananpet}
🥓 *MakananNaga:* Rp.${Bmakanannaga}
🥓 *MakananKyubi:* Rp.${Bmakanankyubi}
🥓 *MakananGriffin:* Rp.${Bmakanangriffin}
🥓 *MakananPhonix:* Rp.${Bmakananphonix}
🥓 *MakananCentaur:* Rp.${Bmakanancentaur}
============================
🛒 *Barang* | 💲 *Harga Beli*
🗡️ *Sword:* Rp.${Bsword}
🎣 *Pancingan:* Rp.${Bpancingan}
🪱 *Umpan:* Rp.${Bumpan}
============================

🛍️ List Barang
============================
🛒 *Barang* | 💲 *Harga Jual*
🎟️ *Limit:* Rp.${Slimit}
🫗 *Aqua:* Rp.${Saqua}
============================
🛍️ List Barang 
============================
🛒 *Barang:* | 💲 *Harga Jual*
🧪 *Potion:* Rp.${Spotion}
💎 *Diamond:* Rp.${Sdiamond}
📦 *Common:* Rp.${Scommon}
🛍️ *Uncommon:* Rp.${Suncommon}
🎁 *Mythic:* Rp.${Smythic}
🧰 *Legendary:* Rp.${Slegendary}
🗑️ *Sampah:* Rp.${Ssampah}
🕸 *String:* Rp.${Sstring}
⛓️ *Iron:* Rp.${Siron}
🪨️️ *Batu:* Rp.${Sbatu}
🧴 *Botol:* Rp.${Sbotol}
🛢️ *Kaleng:* Rp.${Skaleng}
📦 *Kardus:* Rp.${Skardus}
🪵 *Kayu:* Rp.${Skayu}
🪙 *Emas:* Rp.${Semasbiasa}
🔖 *PetToken:* Rp.${Spet}
============================
🛍️ List Buah
============================
🛒 *Barang* | 💲 *Harga Jual*
🍌 *Pisang:* Rp.${Spisang}
🍇 *Anggur:* Rp.${Sanggur}
🥭 *Mangga:* Rp.${Smangga}
🍊 *Jeruk:* Rp.${Sjeruk}
🍎 *Apel:* Rp.${Sapel}
============================
🛍️ List Makanan Pet 
============================
🛒 *Barang:* | 💲 *Harga Jual*
🥓 *MakananPet:* ${Smakananpet}
🥓 *MakananNaga:* Rp.${Smakanannaga}
🥓 *MakananKyubi:* Rp.${Smakanankyubi}
🥓 *MakananGriffin:* Rp.${Smakanangriffin}
🥓 *MakananPhonix:* Rp.${Smakananphonix}
🥓 *MakananCentaur:* Rp.${Smakanancentaur}
============================
🛒 *Barang* | 💲 *Harga Jual*
🗡️ *Sword:* Rp.${Ssword}
🎣 *Pancingan:* Rp.${Bpancingan}
🪱 *Umpan:* Rp.${Bumpan}
============================
`.trim()
    try {
        if (/shop|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.db.data.users[m.sender].sampah
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                    case 'potion':
                            if (global.db.data.users[m.sender].money >= potion * count) {
                                global.db.data.users[m.sender].money -= potion * count
                                global.db.data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `Succes membeli ${count} Potion dengan harga Rp.${potion * count}\n\nGunakan potion dengan ketik: *${usedPrefix}use potion <jumlah>*`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Potion dengan harga Rp.${potion * count}`,)
                        break
                    case 'diamond':
                            if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                                global.db.data.users[m.sender].diamond += count * 1
                                global.db.data.users[m.sender].money -= Bdiamond * count
                                conn.reply(m.chat, `Succes membeli ${count} Diamond dengan harga Rp.${Bdiamond * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Diamond dengan harga Rp.${Bdiamond * count}`, m)
                        
                        break
                    case 'common':
                            if (global.db.data.users[m.sender].money >= Bcommon * count) {
                                global.db.data.users[m.sender].common += count * 1
                                global.db.data.users[m.sender].money -= Bcommon * count
                                conn.reply(m.chat, `Succes membeli ${count} Common Crate dengan harga Rp.${Bcommon * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Common Crate dengan harga Rp.${Bcommon * count}\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                          
                        break
                    case 'uncommon':
                            if (global.db.data.users[m.sender].money >= Buncommon * count) {
                                global.db.data.users[m.sender].uncommon += count * 1
                                global.db.data.users[m.sender].money -= Buncommon * count
                                conn.reply(m.chat, `Succes membeli ${count} Uncommon Crate dengan harga Rp.${Buncommon * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Uncommon Crate dengan harga Rp.${Buncommon * count}\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                        
                        break
                    case 'mythic':
                            if (global.db.data.users[m.sender].money >= Bmythic * count) {
                                    global.db.data.users[m.sender].mythic += count * 1
                                global.db.data.users[m.sender].money -= Bmythic * count
                                conn.reply(m.chat, `Succes membeli ${count} Mythic Crate dengan harga Rp.${Bmythic * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mythic Crate dengan harga Rp.${Bmythic* count}\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                        
                        break
                    case 'legendary':
                            if (global.db.data.users[m.sender].money >= Blegendary * count) {
                                global.db.data.users[m.sender].legendary += count * 1
                                global.db.data.users[m.sender].money -= Blegendary * count
                                conn.reply(m.chat, `Succes membeli ${count} Legendary Crate dengan harga Rp.${Blegendary * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Legendary Crate dengan harga Rp.${Blegendary * count}\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                        
                        break
                    case 'sampah':
                            if (global.db.data.users[m.sender].money >= Bsampah * count) {
                                global.db.data.users[m.sender].trash += count * 1
                                global.db.data.users[m.sender].money -= Bsampah * count
                                conn.reply(m.chat, `Succes membeli ${count} Sampah dengan harga Rp.${Bsampah * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Sampah dengan harga Rp.${Bsampah * count}`.trim(), m)
                        
                        break
                    case 'kaleng':
                            if (global.db.data.users[m.sender].money >= Bkaleng * count) {
                                global.db.data.users[m.sender].kaleng += count * 1
                                global.db.data.users[m.sender].money -= Bkaleng * count
                                conn.reply(m.chat, `Succes membeli ${count} Kaleng dengan harga Rp.${Bkaleng * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Kaleng dengan harga Rp.${Bkaleng * count}`.trim(), m)
                        
                        break
                    case 'kardus':
                            if (global.db.data.users[m.sender].money >= Bkardus * count) {
                                global.db.data.users[m.sender].kardus += count * 1
                                global.db.data.users[m.sender].money -= Bkardus * count
                                conn.reply(m.chat, `Succes membeli ${count} Kardus dengan harga Rp.${Bkardus * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Kardus dengan harga Rp.${Bkardus * count}`.trim(), m)
                        
                        break
                    case 'botol':
                            if (global.db.data.users[m.sender].money >= Bbotol * count) {
                                global.db.data.users[m.sender].botol += count * 1
                                global.db.data.users[m.sender].money -= Bbotol * count
                                conn.reply(m.chat, `Succes membeli ${count} Botol dengan harga Rp.${Bbotol * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Botol dengan harga Rp.${Bbotol * count}`.trim(), m)
                        
                        break
                    case 'kayu':
                            if (global.db.data.users[m.sender].money >= Bkayu * count) {
                                global.db.data.users[m.sender].wood += count * 1
                                global.db.data.users[m.sender].money -= Bkayu * count
                                conn.reply(m.chat, `Succes membeli ${count} Kayu dengan harga Rp.${Bkayu * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Kayu dengan harga Rp.${Bkayu * count}`.trim(), m)
                        
                        break
                    case 'pisang':
                            if (global.db.data.users[m.sender].money >= Bpisang * count) {
                                global.db.data.users[m.sender].pisang += count * 1
                                global.db.data.users[m.sender].money -= Bpisang * count
                                conn.reply(m.chat, `Succes membeli ${count} Pisang dengan harga Rp.${Bpisang * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Pisang dengan harga Rp.${Bpisang * count}`.trim(), m)
                        
                        break
                    case 'anggur':
                            if (global.db.data.users[m.sender].money >= Banggur * count) {
                                global.db.data.users[m.sender].anggur += count * 1
                                global.db.data.users[m.sender].money -= Banggur * count
                                conn.reply(m.chat, `Succes membeli ${count} Anggur dengan harga Rp.${Banggur * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Anggur dengan harga Rp.${Banggur * count}`.trim(), m)
                        
                        break
                    case 'mangga':
                            if (global.db.data.users[m.sender].money >= Bmangga * count) {
                                global.db.data.users[m.sender].mangga += count * 1
                                global.db.data.users[m.sender].money -= Bmangga * count
                                conn.reply(m.chat, `Succes membeli ${count} Mangga dengan harga Rp.${Bmangga * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mangga dengan harga Rp.${Bmangga * count}`.trim(), m)
                        
                        break
                    case 'jeruk':
                            if (global.db.data.users[m.sender].money >= Bjeruk * count) {
                                global.db.data.users[m.sender].jeruk += count * 1
                                global.db.data.users[m.sender].money -= Bjeruk * count
                                conn.reply(m.chat, `Succes membeli ${count} Jeruk dengan harga Rp.${Bjeruk * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Jeruk dengan harga Rp.${Bjeruk * count}`.trim(), m)
                        
                        break
                    case 'apel':
                            if (global.db.data.users[m.sender].money >= Bapel * count) {
                                global.db.data.users[m.sender].apel += count * 1
                                global.db.data.users[m.sender].money -= Bapel * count
                                conn.reply(m.chat, `Succes membeli ${count} Apel dengan harga Rp.${Bapel * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Apel dengan harga Rp.${Bapel * count}`.trim(), m)
                        
                        break
                    case 'bibitpisang':
                            if (global.db.data.users[m.sender].money >= Bbibitpisang * count) {
                                global.db.data.users[m.sender].bibitpisang += count * 1
                                global.db.data.users[m.sender].money -= Bbibitpisang * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Pisang dengan harga Rp.${Bbibitpisang * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Bibit Pisang dengan harga Rp.${Bbibitpisang * count}`.trim(), m)
                        
                        break
                    case 'bibitanggur':
                            if (global.db.data.users[m.sender].money >= Bbibitanggur * count) {
                                global.db.data.users[m.sender].bibitanggur += count * 1
                                global.db.data.users[m.sender].money -= Bbibitanggur * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Anggur dengan harga Rp.${Bbibitanggur * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Bibit Anggur dengan harga Rp.${Bbibitanggur * count}`.trim(), m)
                        
                        break
                    case 'bibitmangga':
                            if (global.db.data.users[m.sender].money >= Bbibitmangga * count) {
                                global.db.data.users[m.sender].bibitmangga += count * 1
                                global.db.data.users[m.sender].money -= Bbibitmangga * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Mangga dengan harga Rp.${Bbibitmangga * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Bibit Mangga dengan harga Rp.${Bbibitmangga * count}`.trim(), m)
                        
                        break
                    case 'bibitjeruk':
                            if (global.db.data.users[m.sender].money >= Bbibitjeruk * count) {
                                global.db.data.users[m.sender].bibitjeruk += count * 1
                                global.db.data.users[m.sender].money -= Bbibitjeruk * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Jeruk dengan harga Rp.${Bbibitjeruk * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Bibit Jeruk dengan harga Rp.${Bbibitjeruk * count}`.trim(), m)
                        
                        break
                    case 'bibitapel':
                            if (global.db.data.users[m.sender].money >= Bbibitapel * count) {
                                global.db.data.users[m.sender].bibitapel += count * 1
                                global.db.data.users[m.sender].money -= Bbibitapel * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Apel dengan harga ${Bbibitapel * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Bibit Apel dengan harga Rp.${Bbibitapel * count}`.trim(), m)
                        
                        break 
                    /* case 'gardenboxs':
                            if (global.db.data.users[m.sender].money >= Bgardenboxs * count) {
                                global.db.data.users[m.sender].gardenboxs += count * 1
                                global.db.data.users[m.sender].money -= Bgardenboxs * count
                                conn.reply(m.chat, `Succes membeli ${count} Gardenboxs dengan harga Rp.${Bgardenboxs * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Gardenboxs dengan harga Rp.${Bgardenboxs * count}`.trim(), m)
                        
                        break
                    case 'berlian':
                            if (global.db.data.users[m.sender].money >= Bberlian * count) {
                                global.db.data.users[m.sender].berlian += count * 1
                                global.db.data.users[m.sender].money -= Bberlian * count
                                conn.reply(m.chat, `Succes membeli ${count} Berlian dengan harga Rp.${Bberlian * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Berlian dengan harga Rp.${Bberlian * count}`.trim(), m)
                        
                        break */
                    case 'emas':
                            if (global.db.data.users[m.sender].money >= Bemasbiasa * count) {
                                global.db.data.users[m.sender].gold += count * 1
                                global.db.data.users[m.sender].money -= Bemasbiasa * count
                                conn.reply(m.chat, `Succes membeli ${count} Emas dengan harga Rp.${Bemasbiasa * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Emas dengan harga Rp.${Bemasbiasa * count}`.trim(), m)
                        
                        break
                     case 'pettoken':
                            if (global.db.data.users[m.sender].money >= Bpet * count) {
                                global.db.data.users[m.sender].pet += count * 1
                                global.db.data.users[m.sender].money -= Bpet * count
                                conn.reply(m.chat, `Succes membeli ${count} Pet Random dengan harga Rp.${Bpet * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Pet Random dengan harga Rp.${Bpet * count}`.trim(), m)
                        
                        break
                   case 'limit':
                            if (global.db.data.users[m.sender].money >= Blimit * count) {
                                global.db.data.users[m.sender].limit += count * 1
                                global.db.data.users[m.sender].money -= Blimit * count
                                conn.reply(m.chat, `Succes membeli ${count} Limit dengan harga Rp.${Blimit * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Limit dengan harga Rp.${Blimit * count}`.trim(), m)
                        
                        break 
                   /*case 'exp':
                            if (global.db.data.users[m.sender].money >= Bexp * count) {
                                global.db.data.users[m.sender].exp += count * 1
                                global.db.data.users[m.sender].money -= Bexp * count
                                conn.reply(m.chat, `Succes membeli ${count} Exp dengan harga Rp.${Bexp * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} exp dengan harga Rp.${Bexp * count}`.trim(), m)
                        
                        break
                     case 'eleksirb':
                            if (global.db.data.users[m.sender].money >= Beleksirb * count) {
                                global.db.data.users[m.sender].eleksirb += count * 1
                                global.db.data.users[m.sender].money -= Beleksirb * count
                                conn.reply(m.chat, `Succes membeli ${count} Eleksir Biru dengan harga Rp.${Beleksirb * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Eleksir Biru dengan harga Rp.${Beleksirb * count}`.trim(), m)
                        
                        break
                        case 'koinexpg':
                            if (global.db.data.users[m.sender].money >= Bkoinexpg * count) {
                                global.db.data.users[m.sender].koinexpg += count * 1
                                global.db.data.users[m.sender].money -= Bkoinexpg * count
                                conn.reply(m.chat, `Succes membeli ${count} Koinexpg dengan harga Rp.${Bkoinexpg * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} koinexpg dengan harga Rp.${Bkoinexpg * count}`.trim(), m)
                        
                        break 
                  case 'cupon':
                            if (global.db.data.users[m.sender].tiketcoin >= Btiketcoin * count) {
                                global.db.data.users[m.sender].cupon += count * 1
                                global.db.data.users[m.sender].tiketcoin -= Btiketcoin * count
                                conn.reply(m.chat, `Succes membeli ${count} Cupon dengan harga ${Btiketcoin * count} Tiketcoin`, m)
                            } else conn.reply(m.chat, `Tiketcoin anda tidak cukup untuk membeli ${count} cupon dengan harga ${Btiketcoin * count} Tiketcoin\n\nCara mendapatkan tiketcoin, anda harus memainkan semua fitur game..`.trim(), m)
                        
                        break */
                  case 'makananpet':
                            if (global.db.data.users[m.sender].money >= Bmakananpet * count) {
                                global.db.data.users[m.sender].makananpet += count * 1
                                global.db.data.users[m.sender].money -= Bmakananpet * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Pet dengan harga Rp.${Bmakananpet * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Makanan Pet dengan harga Rp.${Bmakananpet * count}`.trim(), m)
                        
                        break 
                case 'makanannaga':
                            if (global.db.data.users[m.sender].money >= Bmakanannaga * count) {
                                global.db.data.users[m.sender].makanannaga += count * 1
                                global.db.data.users[m.sender].money -= Bmakanannaga * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Naga dengan harga Rp.${Bmakanannaga * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Makanan Naga dengan harga Rp.${Bmakanannaga * count}`.trim(), m)
                        
                        break 
                 case 'makananphonix':
                            if (global.db.data.users[m.sender].money >= Bmakananphonix * count) {
                                global.db.data.users[m.sender].makananphonix += count * 1
                                global.db.data.users[m.sender].money -= Bmakananphonix * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Phonix dengan harga Rp.${Bmakananphonix * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Makanan Phonix dengan harga Rp.${Bmakananphonix * count}`.trim(), m)
                        
                        break 
                case 'makanankyubi':
                            if (global.db.data.users[m.sender].money >= Bmakanankyubi * count) {
                                global.db.data.users[m.sender].makanankyubi += count * 1
                                global.db.data.users[m.sender].money -= Bmakanankyubi* count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Kyubi dengan harga Rp.${Bmakanankyubi * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Makanan Kyubi dengan harga Rp.${Bmakanankyubi * count}`.trim(), m)
                        
                        break 
                 case 'makanangriffin':
                            if (global.db.data.users[m.sender].money >= Bmakanangriffin * count) {
                                global.db.data.users[m.sender].makanangriffin += count * 1
                                global.db.data.users[m.sender].money -= Bmakanangriffin * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Griffin dengan harga Rp.${Bmakanangriffin * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Makanan Griffin dengan harga Rp.${Bmakanangriffin * count}`.trim(), m)
                        
                        break 
                  case 'makanancentaur':
                            if (global.db.data.users[m.sender].money >= Bmakanancentaur * count) {
                                global.db.data.users[m.sender].makanancentaur += count * 1
                                global.db.data.users[m.sender].money -= Bmakanancentaur * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Centaur dengan harga Rp.${Bmakanancentaur * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Makanan Centaur dengan harga Rp.${Bmakanancentaur * count}`.trim(), m)
                        
                        break 
                  /* case 'tiketm':
                            if (global.db.data.users[m.sender].money >= Bhealtmonster * count) {
                                global.db.data.users[m.sender].healtmonster += count * 1
                                global.db.data.users[m.sender].money -= Bhealtmonster * count
                                conn.reply(m.chat, `Succes membeli ${count} TiketM dengan harga Rp.${Bhealtmonster * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} tiketm dengan harga Rp.${Bhealtmonster * count}`.trim(), m)
                        
                        break */
                  case 'aqua':
                            if (global.db.data.users[m.sender].money >= Baqua * count) {
                                global.db.data.users[m.sender].aqua += count * 1
                                global.db.data.users[m.sender].money -= Baqua * count
                                conn.reply(m.chat, `Succes membeli ${count} Aqua dengan harga Rp.${Baqua * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Aqua dengan harga Rp.${Baqua * count}`.trim(), m)
                        
                        break
                  case 'iron':
                            if (global.db.data.users[m.sender].money >= Biron * count) {
                                global.db.data.users[m.sender].iron += count * 1
                                global.db.data.users[m.sender].money -= Biron * count
                                conn.reply(m.chat, `Succes membeli ${count} Iron dengan harga Rp.${Biron * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Iron dengan harga Rp.${Biron * count}`.trim(), m)
                        
                        break
                  case 'string':
                            if (global.db.data.users[m.sender].money >= Bstring * count) {
                                global.db.data.users[m.sender].string += count * 1
                                global.db.data.users[m.sender].money -= Bstring * count
                                conn.reply(m.chat, `Succes membeli ${count} String dengan harga Rp.${Bstring * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} String dengan harga Rp.${Bstring * count}`.trim(), m)
                        
                        break
                  case 'sword':
                            if (global.db.data.users[m.sender].money >= Bsword * count) {
                                global.db.data.users[m.sender].sword += count * 1
                                global.db.data.users[m.sender].money -= Bsword * count
                                conn.reply(m.chat, `Succes membeli ${count} Sword dengan harga Rp.${Bsword * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Sword dengan harga Rp.${Bsword * count}`.trim(), m)
                        
                        break 
                  case 'batu':
                            if (global.db.data.users[m.sender].money >= Bbatu * count) {
                                global.db.data.users[m.sender].rock += count * 1
                                global.db.data.users[m.sender].money -= Bbatu * count
                                conn.reply(m.chat, `Succes membeli ${count} Batu dengan harga Rp.${Bbatu * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Batu dengan harga Rp.${Bbatu * count}`.trim(), m)
                        
                        break 
                    case 'umpan':
                            if (global.db.data.users[m.sender].money >= Bumpan * count) {
                                global.db.data.users[m.sender].umpan += count * 1
                                global.db.data.users[m.sender].money -= Bumpan * count
                                conn.reply(m.chat, `Succes membeli ${count} Umpan dengan harga Rp.${Bumpan * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Umpan dengan harga Rp.${Bumpan * count}`.trim(), m)
                        
                        break 
                    case 'pancingan':
                            if (global.db.data.users[m.sender].money >= Bpancingan * count) {
                                global.db.data.users[m.sender].fishingrod += count * 1
                                global.db.data.users[m.sender].money -= Bpancingan * count
                                conn.reply(m.chat, `Succes membeli ${count} Pancingan dengan harga Rp.${Bpancingan * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Pancingan dengan harga Rp.${Bpancingan * count}`.trim(), m)
                        
                        break
                    case 'armor':
                            if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (global.db.data.users[m.sender].money > armor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].money -= armor * 1
                                conn.reply(m.chat, `Succes membeli Armor seharga Rp.${armor}` ,m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli Armor seharga Rp.${armor}`, m)
                        
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            case 'sell': 
                switch (_type) {
                    case 'potion':
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].money += Spotion * count
                            global.db.data.users[m.sender].potion -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Potion dengan harga Rp.${Spotion * count}`.trim(), m)
                        } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                        break
                    case 'common':
                        if (global.db.data.users[m.sender].common >= count * 1) {
                            global.db.data.users[m.sender].money += Scommon * count
                            global.db.data.users[m.sender].common -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga Rp.${Scommon * count}`.trim(), m)
                        } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'uncommon':
                        if (global.db.data.users[m.sender].uncommon >= count * 1) {
                            global.db.data.users[m.sender].money += Suncommon * count
                            global.db.data.users[m.sender].uncommon -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga Rp.${Suncommon * count}`.trim(), m)
                        } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'mythic':
                        if (global.db.data.users[m.sender].mythic >= count * 1) {
                            global.db.data.users[m.sender].money += Smythic * count
                            global.db.data.users[m.sender].mythic -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga Rp.${Smythic * count}`.trim(), m)
                        } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'legendary':
                        if (global.db.data.users[m.sender].legendary >= count * 1) {
                            global.db.data.users[m.sender].money += Slegendary * count
                            global.db.data.users[m.sender].legendary -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga Rp.${Slegendary * count}`.trim(), m)
                        } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'sampah':
                        if (global.db.data.users[m.sender].trash >= count * 1) {
                            global.db.data.users[m.sender].trash -= count * 1
                            global.db.data.users[m.sender].money += Ssampah * count
                            conn.reply(m.chat, `Succes menjual ${count} Sampah, dan anda mendapatkan Rp.${Ssampah * count}`, m)
                        } else conn.reply(m.chat, `Sampah anda tidak cukup`, m)
                        break
                    case 'kaleng':
                        if (global.db.data.users[m.sender].kaleng >= count * 1) {
                            global.db.data.users[m.sender].kaleng -= count * 1
                            global.db.data.users[m.sender].money += Skaleng * count
                            conn.reply(m.chat, `Succes menjual ${count} Kaleng, dan anda mendapatkan Rp.${Skaleng * count}`, m)
                        } else conn.reply(m.chat, `Kaleng anda tidak cukup`, m)
                        break
                    case 'kardus':
                        if (global.db.data.users[m.sender].kardus >= count * 1) {
                            global.db.data.users[m.sender].kardus -= count * 1
                            global.db.data.users[m.sender].money += Skardus * count
                            conn.reply(m.chat, `Succes menjual ${count} Kardus, dan anda mendapatkan Rp.${Skardus * count}`, m)
                        } else conn.reply(m.chat, `Kardus anda tidak cukup`, m)
                        break
                    case 'botol':
                        if (global.db.data.users[m.sender].botol >= count * 1) {
                            global.db.data.users[m.sender].botol -= count * 1
                            global.db.data.users[m.sender].money += Sbotol * count
                            conn.reply(m.chat, `Succes menjual ${count} Botol, dan anda mendapatkan Rp.${Sbotol * count}`, m)
                        } else conn.reply(m.chat, `Botol anda tidak cukup`, m)
                        break
                    case 'kayu':
                        if (global.db.data.users[m.sender].wood >= count * 1) {
                            global.db.data.users[m.sender].wood -= count * 1
                            global.db.data.users[m.sender].money += Skayu * count
                            conn.reply(m.chat, `Succes menjual ${count} Kayu, dan anda mendapatkan Rp.${Skayu * count}`, m)
                        } else conn.reply(m.chat, `Kayu anda tidak cukup`, m)
                        break
                    case 'pisang':
                        if (global.db.data.users[m.sender].pisang >= count * 1) {
                            global.db.data.users[m.sender].pisang -= count * 1
                            global.db.data.users[m.sender].money += Spisang * count
                            conn.reply(m.chat, `Succes menjual ${count} Pisang, dan anda mendapatkan Rp.${Spisang * count}`, m)
                        } else conn.reply(m.chat, `Pisang anda tidak cukup`, m)
                        break
                    case 'anggur':
                        if (global.db.data.users[m.sender].anggur >= count * 1) {
                            global.db.data.users[m.sender].anggur -= count * 1
                            global.db.data.users[m.sender].money += Sanggur * count
                            conn.reply(m.chat, `Succes menjual ${count} Anggur, dan anda mendapatkan Rp.${Sanggur * count}`, m)
                        } else conn.reply(m.chat, `Anggur anda tidak cukup`, m)
                        break
                    case 'mangga':
                        if (global.db.data.users[m.sender].mangga >= count * 1) {
                            global.db.data.users[m.sender].mangga -= count * 1
                            global.db.data.users[m.sender].money += Smangga * count
                            conn.reply(m.chat, `Succes menjual ${count} Mangga, dan anda mendapatkan Rp.${Smangga * count}`, m)
                        } else conn.reply(m.chat, `Mangga anda tidak cukup`, m)
                        break
                    case 'jeruk':
                        if (global.db.data.users[m.sender].jeruk >= count * 1) {
                            global.db.data.users[m.sender].jeruk -= count * 1
                            global.db.data.users[m.sender].money += Sjeruk * count
                            conn.reply(m.chat, `Succes menjual ${count} Jeruk, dan anda mendapatkan Rp.${Sjeruk * count}`, m)
                        } else conn.reply(m.chat, `Jeruk anda tidak cukup`, m)
                        break
                    case 'apel':
                        if (global.db.data.users[m.sender].apel >= count * 1) {
                            global.db.data.users[m.sender].apel -= count * 1
                            global.db.data.users[m.sender].money += Sapel * count
                            conn.reply(m.chat, `Succes menjual ${count} Apel, dan anda mendapatkan Rp.${Sapel * count}`, m)
                        } else conn.reply(m.chat, `Apel anda tidak cukup`, m)
                        break
                   /* case 'berlian':
                        if (global.db.data.users[m.sender].berlian >= count * 1) {
                            global.db.data.users[m.sender].berlian -= count * 1
                            global.db.data.users[m.sender].money += Sberlian * count
                            conn.reply(m.chat, `Succes menjual ${count} berlian, dan anda mendapatkan Rp.${Sberlian * count}`, m)
                        } else conn.reply(m.chat, `Berlian anda tidak cukup`, m)
                        break */
                   case 'emas':
                        if (global.db.data.users[m.sender].gold >= count * 1) {
                            global.db.data.users[m.sender].gold -= count * 1
                            global.db.data.users[m.sender].money += Semasbiasa * count
                            conn.reply(m.chat, `Succes menjual ${count} Emas , dan anda mendapatkan Rp.${Semasbiasa * count}`, m)
                        } else conn.reply(m.chat, `Emas anda tidak cukup`, m)
                        break  
                    case 'pettoken':
                        if (global.db.data.users[m.sender].pet >= count * 1) {
                            global.db.data.users[m.sender].pet -= count * 1
                            global.db.data.users[m.sender].money += Spet * count
                            conn.reply(m.chat, `Succes menjual ${count} Pet Random, dan anda mendapatkan Rp.${Spet * count}`, m)
                        } else conn.reply(m.chat, `Pet Random anda tidak cukup`, m)
                        break 
                    case 'makananpet':
                        if (global.db.data.users[m.sender].makananpet >= count * 1) {
                            global.db.data.users[m.sender].makananpet -= count * 1
                            global.db.data.users[m.sender].money += Smakananpet * count
                            conn.reply(m.chat, `Succes menjual ${count} Makanan Pet, dan anda mendapatkan Rp.${Smakananpet * count}`, m)
                        } else conn.reply(m.chat, `Makanan Pet anda tidak cukup`, m)
                        break 
                    case 'makananphonix':
                        if (global.db.data.users[m.sender].makananphonix >= count * 1) {
                            global.db.data.users[m.sender].makananphonix -= count * 1
                            global.db.data.users[m.sender].money += Smakananphonix * count
                            conn.reply(m.chat, `Succes menjual ${count} Makanan Phonix, dan anda mendapatkan Rp.${Smakananphonix * count}`, m)
                        } else conn.reply(m.chat, `Makanan Phonix anda tidak cukup`, m)
                        break
                    case 'makanannaga':
                        if (global.db.data.users[m.sender].makanannaga >= count * 1) {
                            global.db.data.users[m.sender].makanannaga -= count * 1
                            global.db.data.users[m.sender].money += Smakanannaga * count
                            conn.reply(m.chat, `Succes menjual ${count} Makanan Naga, dan anda mendapatkan Rp.${Smakanannaga * count}`, m)
                        } else conn.reply(m.chat, `Makanan Naga anda tidak cukup`, m)
                        break
                    case 'makanankyubi':
                        if (global.db.data.users[m.sender].makanankyuni >= count * 1) {
                            global.db.data.users[m.sender].makanankyubi -= count * 1
                            global.db.data.users[m.sender].money += Smakanankyubi * count
                            conn.reply(m.chat, `Succes menjual ${count} Makanan Kyubi, dan anda mendapatkan Rp.${Smakanankyubi* count}`, m)
                        } else conn.reply(m.chat, `Makanan Kyubi anda tidak cukup`, m)
                        break
                    case 'makanangriffin':
                        if (global.db.data.users[m.sender].makanangriffin >= count * 1) {
                            global.db.data.users[m.sender].makanangriffin -= count * 1
                            global.db.data.users[m.sender].money += Smakanangriffin * count
                            conn.reply(m.chat, `Succes menjual ${count} Makanan Griffin, dan anda mendapatkan Rp.${Smakanangriffin * count}`, m)
                        } else conn.reply(m.chat, `Makanan Griffin anda tidak cukup`, m)
                        break 
                    case 'makanancentaur':
                        if (global.db.data.users[m.sender].makanancentaur >= count * 1) {
                            global.db.data.users[m.sender].makanancentaur -= count * 1
                            global.db.data.users[m.sender].money += Smakanancentaur * count
                            conn.reply(m.chat, `Succes menjual ${count} Makanan Centaur, dan anda mendapatkan Rp.${Smakanancentaur * count}`, m)
                        } else conn.reply(m.chat, `Makanan Centaur anda tidak cukup`, m)
                        break
                    case 'aqua':
                        if (global.db.data.users[m.sender].aqua >= count * 1) {
                            global.db.data.users[m.sender].aqua -= count * 1
                            global.db.data.users[m.sender].money += Saqua * count
                            conn.reply(m.chat, `Succes menjual ${count} Aqua, dan anda mendapatkan Rp.${Saqua * count}`, m)
                        } else conn.reply(m.chat, `Aqua anda tidak cukup`, m)
                        break
                    case 'pancingan':
                        if (global.db.data.users[m.sender].fishingrod >= count * 1) {
                            global.db.data.users[m.sender].fishingrod -= count * 1
                            global.db.data.users[m.sender].money += Spancingan * count
                            conn.reply(m.chat, `Succes menjual ${count} Pancingan, dan anda mendapatkan Rp.${Spancingan * count}`, m)
                        } else conn.reply(m.chat, `Pancingan anda tidak cukup`, m)
                        break
                    case 'iron':
                        if (global.db.data.users[m.sender].iron >= count * 1) {
                            global.db.data.users[m.sender].iron -= count * 1
                            global.db.data.users[m.sender].money += Siron * count
                            conn.reply(m.chat, `Succes menjual ${count} Iron, dan anda mendapatkan Rp.${Siron * count}`, m)
                        } else conn.reply(m.chat, `Iron anda tidak cukup`, m)
                        break
                    case 'string':
                        if (global.db.data.users[m.sender].string >= count * 1) {
                            global.db.data.users[m.sender].string -= count * 1
                            global.db.data.users[m.sender].money += Sstring * count
                            conn.reply(m.chat, `Succes menjual ${count} String, dan anda mendapatkan Rp.${Sstring * count}`, m)
                        } else conn.reply(m.chat, `String anda tidak cukup`, m)
                        break
                    case 'sword':
                        if (global.db.data.users[m.sender].sword >= count * 1) {
                            global.db.data.users[m.sender].sword -= count * 1
                            global.db.data.users[m.sender].money += Ssword * count
                            conn.reply(m.chat, `Succes menjual ${count} Sword, dan anda mendapatkan Rp.${Ssword * count}`, m)
                        } else conn.reply(m.chat, `Sword anda tidak cukup`, m)
                        break
                    case 'batu':
                        if (global.db.data.users[m.sender].rock >= count * 1) {
                            global.db.data.users[m.sender].rock -= count * 1
                            global.db.data.users[m.sender].money += Sbatu * count
                            conn.reply(m.chat, `Succes menjual ${count} Batu, dan anda mendapatkan Rp.${Sbatu * count}`, m)
                        } else conn.reply(m.chat, `Batu anda tidak cukup`, m)
                        break
                    case 'limit':
                        if (global.db.data.users[m.sender].limit >= count * 1) {
                            global.db.data.users[m.sender].limit -= count * 1
                            global.db.data.users[m.sender].money += Slimit * count
                            conn.reply(m.chat, `Succes menjual ${count} Limit, dan anda mendapatkan Rp.${Slimit * count}`, m)
                        } else conn.reply(m.chat, `Limit anda tidak cukup`, m)
                        break
                    case 'diamond':
                        if (global.db.data.users[m.sender].diamond >= count * 1) {
                            global.db.data.users[m.sender].diamond -= count * 1
                            global.db.data.users[m.sender].money += Sdiamond * count
                            conn.reply(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan Rp.${Sdiamond * count}`, m)
                        } else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            default:
                return conn.reply(m.chat, Kchat, m)
            }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                        if (global.db.data.users[m.sender].money >= potion * count) {
                            global.db.data.users[m.sender].money -= potion * count
                            global.db.data.users[m.sender].potion += count * 1
                            conn.reply(m.chat, `Succes membeli ${count} Potion dengan harga Rp.${potion * count}\n\nGunakan potion dengan ketik: *${usedPrefix}use potion <jumlah>*`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Potion dengan harga Rp.${potion * count}`,m)
                    
                    break
                case 'diamond':
                        if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                            global.db.data.users[m.sender].diamond += count * 1
                            global.db.data.users[m.sender].money -= Bdiamond * count
                            conn.reply(m.chat, `Succes membeli ${count} Diamond dengan harga Rp.${Bdiamond * count}`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Diamond dengan harga Rp.${Bdiamond * count}`, m)
                    
                    break
                case 'common':
                        if (global.db.data.users[m.sender].money >= Bcommon * count) {
                            global.db.data.users[m.sender].common += count * 1
                            global.db.data.users[m.sender].money -= Bcommon * count
                            conn.reply(m.chat, `Succes membeli ${count} Common Crate dengan harga Rp.${Bcommon * count}`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Common Crate dengan harga Rp.${Bcommon * count}\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                    
                    break
                case 'uncommon':
                        if (global.db.data.users[m.sender].money >= Buncommon * count) {
                            global.db.data.users[m.sender].uncommon += count * 1
                            global.db.data.users[m.sender].money -= Buncommon * count
                            conn.reply(m.chat, `Succes membeli ${count} Uncommon Crate dengan harga Rp.${Buncommon * count}`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Uncommon Crate dengan harga Rp.${Buncommon * count}\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                   
                    break
                case 'mythic':
                        if (global.db.data.users[m.sender].money >= Bmythic * count) {
                            global.db.data.users[m.sender].mythic += count * 1
                            global.db.data.users[m.sender].money -= Bmythic * count
                            conn.reply(m.chat, `Succes membeli ${count} Mythic Crate dengan harga Rp.${Bmythic * count}`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mythic Crate dengan harga Rp.${Bmythic* count}\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                    
                    break
                case 'legendary':
                        if (global.db.data.users[m.sender].money >= Blegendary * count) {
                            global.db.data.users[m.sender].legendary += count * 1
                            global.db.data.users[m.sender].money -= Blegendary * count
                            conn.reply(m.chat, `Succes membeli ${count} Legendary Crate dengan harga Rp.${Blegendary * count}`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Legendary Crate dengan harga Rp.${Blegendary * count}\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                    
                    break
                case 'sampah':
                        if (global.db.data.users[m.sender].money >= Bsampah * count) {
                            global.db.data.users[m.sender].trash += count * 1
                            global.db.data.users[m.sender].money -= Bsampah * count
                            conn.reply(m.chat, `Succes membeli ${count} Sampah dengan harga Rp.${Bsampah * count}`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Sampah dengan harga Rp.${Bsampah * count}`.trim(), m)
                    
                    break
                    case 'kaleng':
                            if (global.db.data.users[m.sender].money >= Bkaleng * count) {
                                global.db.data.users[m.sender].kaleng += count * 1
                                global.db.data.users[m.sender].money -= Bkaleng * count
                                conn.reply(m.chat, `Succes membeli ${count} Kaleng dengan harga Rp.${Bkaleng * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Kaleng dengan harga Rp.${Bkaleng * count}`.trim(), m)
                        
                        break
                    case 'kardus':
                            if (global.db.data.users[m.sender].money >= Bkardus * count) {
                                global.db.data.users[m.sender].kardus += count * 1
                                global.db.data.users[m.sender].money -= Bkardus * count
                                conn.reply(m.chat, `Succes membeli ${count} Kardus dengan harga Rp.${Bkardus * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Kardus dengan harga Rp.${Bkardus * count}`.trim(), m)
                        
                        break
                    case 'botol':
                            if (global.db.data.users[m.sender].money >= Bbotol * count) {
                                global.db.data.users[m.sender].botol += count * 1
                                global.db.data.users[m.sender].money -= Bbotol * count
                                conn.reply(m.chat, `Succes membeli ${count} Botol dengan harga Rp.${Bbotol * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Botol dengan harga Rp.${Bbotol * count}`.trim(), m)
                        
                        break
                    case 'kayu':
                            if (global.db.data.users[m.sender].money >= Bkayu * count) {
                                global.db.data.users[m.sender].wood += count * 1
                                global.db.data.users[m.sender].money -= Bkayu * count
                                conn.reply(m.chat, `Succes membeli ${count} Kayu dengan harga Rp.${Bkayu * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Kayu dengan harga Rp.${Bkayu * count}`.trim(), m)
                        
                        break
                    case 'pisang':
                            if (global.db.data.users[m.sender].money >= Bpisang * count) {
                                global.db.data.users[m.sender].pisang += count * 1
                                global.db.data.users[m.sender].money -= Bpisang * count
                                conn.reply(m.chat, `Succes membeli ${count} Pisang dengan harga Rp.${Bpisang * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Pisang dengan harga Rp.${Bpisang * count}`.trim(), m)
                        
                        break
                    case 'anggur':
                            if (global.db.data.users[m.sender].money >= Banggur * count) {
                                global.db.data.users[m.sender].anggur += count * 1
                                global.db.data.users[m.sender].money -= Banggur * count
                                conn.reply(m.chat, `Succes membeli ${count} Anggur dengan harga Rp.${Banggur * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Anggur dengan harga Rp.${Banggur * count}`.trim(), m)
                        
                        break
                    case 'mangga':
                            if (global.db.data.users[m.sender].money >= Bmangga * count) {
                                global.db.data.users[m.sender].mangga += count * 1
                                global.db.data.users[m.sender].money -= Bmangga * count
                                conn.reply(m.chat, `Succes membeli ${count} Mangga dengan harga Rp.${Bmangga * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mangga dengan harga Rp.${Bmangga * count}`.trim(), m)
                        
                        break
                    case 'jeruk':
                            if (global.db.data.users[m.sender].money >= Bjeruk * count) {
                                global.db.data.users[m.sender].jeruk += count * 1
                                global.db.data.users[m.sender].money -= Bjeruk * count
                                conn.reply(m.chat, `Succes membeli ${count} Jeruk dengan harga Rp.${Bjeruk * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Jeruk dengan harga Rp.${Bjeruk * count}`.trim(), m)
                        
                        break
                    case 'apel':
                            if (global.db.data.users[m.sender].money >= Bapel * count) {
                                global.db.data.users[m.sender].apel += count * 1
                                global.db.data.users[m.sender].money -= Bapel * count
                                conn.reply(m.chat, `Succes membeli ${count} Apel dengan harga Rp.${Bapel * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Apel dengan harga Rp.${Bapel * count}`.trim(), m)
                        
                        break
                    case 'bibitpisang':
                            if (global.db.data.users[m.sender].money >= Bbibitpisang * count) {
                                global.db.data.users[m.sender].bibitpisang += count * 1
                                global.db.data.users[m.sender].money -= Bbibitpisang * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Pisang dengan harga Rp.${Bbibitpisang * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Bibit Pisang dengan harga Rp.${Bbibitpisang * count}`.trim(), m)
                        
                        break
                    case 'bibitanggur':
                            if (global.db.data.users[m.sender].money >= Bbibitanggur * count) {
                                global.db.data.users[m.sender].bibitanggur += count * 1
                                global.db.data.users[m.sender].money -= Bbibitanggur * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Anggur dengan harga Rp.${Bbibitanggur * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Bibit Anggur dengan harga Rp.${Bbibitanggur * count}`.trim(), m)
                        
                        break
                    case 'bibitmangga':
                            if (global.db.data.users[m.sender].money >= Bbibitmangga * count) {
                                global.db.data.users[m.sender].bibitmangga += count * 1
                                global.db.data.users[m.sender].money -= Bbibitmangga * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Mangga dengan harga Rp.${Bbibitmangga * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Bibit Mangga dengan harga Rp.${Bbibitmangga * count}`.trim(), m)
                        
                        break
                    case 'bibitjeruk':
                            if (global.db.data.users[m.sender].money >= Bbibitjeruk * count) {
                                global.db.data.users[m.sender].bibitjeruk += count * 1
                                global.db.data.users[m.sender].money -= Bbibitjeruk * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Jeruk dengan harga Rp.${Bbibitjeruk * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Bibit Jeruk dengan harga Rp.${Bbibitjeruk * count}`.trim(), m)
                        
                        break
                    case 'bibitapel':
                            if (global.db.data.users[m.sender].money >= Bbibitapel * count) {
                                global.db.data.users[m.sender].bibitapel += count * 1
                                global.db.data.users[m.sender].money -= Bbibitapel * count
                                conn.reply(m.chat, `Succes membeli ${count} Bibit Apel dengan harga Rp.${Bbibitapel * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Bibit Apel dengan harga Rp.${Bbibitapel * count}`.trim(), m)
                        
                        break 
                    /* case 'gardenboxs':
                            if (global.db.data.users[m.sender].money >= Bgardenboxs * count) {
                                global.db.data.users[m.sender].gardenboxs += count * 1
                                global.db.data.users[m.sender].money -= Bgardenboxs * count
                                conn.reply(m.chat, `Succes membeli ${count} Gardenboxs dengan harga Rp.${Bgardenboxs * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Gardenboxs dengan harga Rp.${Bgardenboxs * count}`.trim(), m)
                        
                        break
                    case 'berlian':
                            if (global.db.data.users[m.sender].money >= Bberlian * count) {
                                global.db.data.users[m.sender].berlian += count * 1
                                global.db.data.users[m.sender].money -= Bberlian * count
                                conn.reply(m.chat, `Succes membeli ${count} Apel dengan harga Rp.${Bberlian * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Berlian dengan harga Rp.${Bberlian * count}`.trim(), m)
                        
                        break */
                    case 'emas':
                            if (global.db.data.users[m.sender].money >= Bemasbiasa * count) {
                                global.db.data.users[m.sender].gold += count * 1
                                global.db.data.users[m.sender].money -= Bemasbiasa * count
                                conn.reply(m.chat, `Succes membeli ${count} Emas dengan harga Rp.${Bemasbiasa * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Emas dengan harga Rp.${Bemasbiasa * count}`.trim(), m)
                        
                        break  
                     case 'pettoken':
                            if (global.db.data.users[m.sender].money >= Bpet * count) {
                                global.db.data.users[m.sender].pet += count * 1
                                global.db.data.users[m.sender].money -= Bpet * count
                                conn.reply(m.chat, `Succes membeli ${count} Pet Random dengan harga Rp.${Bpet * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Pet Random dengan harga Rp.${Bpet * count}`.trim(), m)
                        
                        break
                  case 'limit':
                            if (global.db.data.users[m.sender].money >= Blimit * count) {
                                global.db.data.users[m.sender].limit += count * 1
                                global.db.data.users[m.sender].money -= Blimit * count
                                conn.reply(m.chat, `Succes membeli ${count} Limit dengan harga Rp.${Blimit * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Limit dengan harga Rp.${Blimit * count}`.trim(), m)
                        
                        break 
                   /*case 'exp':
                            if (global.db.data.users[m.sender].money >= Bexp * count) {
                                global.db.data.users[m.sender].exp += count * 1
                                global.db.data.users[m.sender].money -= Bexp * count
                                conn.reply(m.chat, `Succes membeli ${count} Exp dengan harga Rp.${Bexp * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Exp dengan harga Rp.${Bexp * count}`.trim(), m)
                        
                        break
                     case 'eleksirb':
                            if (global.db.data.users[m.sender].money >= Beleksirb * count) {
                                global.db.data.users[m.sender].eleksirb += count * 1
                                global.db.data.users[m.sender].money -= Beleksirb * count
                                conn.reply(m.chat, `Succes membeli ${count} Eleksir Biru dengan harga Rp.${Beleksirb * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Eleksir Biru dengan harga Rp.${Beleksirb * count}`.trim(), m)
                        
                        break
                        case 'koinexpg':
                            if (global.db.data.users[m.sender].money >= Bkoinexpg * count) {
                                global.db.data.users[m.sender].koinexpg += count * 1
                                global.db.data.users[m.sender].money -= Bkoinexpg * count
                                conn.reply(m.chat, `Succes membeli ${count} Koinexpg dengan harga Rp.${Bkoinexpg * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Koinexpg dengan harga Rp.${Bkoinexpg * count}`.trim(), m)
                        
                        break*/
                  /* case 'cupon':
                            if (global.db.data.users[m.sender].tiketcoin >= Btiketcoin * count) {
                                global.db.data.users[m.sender].cupon += count * 1
                                global.db.data.users[m.sender].tiketcoin -= Btiketcoin * count
                                conn.reply(m.chat, `Succes membeli ${count} cupon dengan harga Rp.${Btiketcoin * count} Tiketcoin`, m)
                            } else conn.reply(m.chat, `Tiketcoin anda tidak cukup untuk membeli ${count} Cupon dengan harga Rp.${Btiketcoin * count} Tiketcoin\n\nCara mendapatkan tiketcoin, anda harus memainkan semua fitur game..`.trim(), m)
                        
                        break  */
                 case 'makananpet':
                            if (global.db.data.users[m.sender].money >= Bmakananpet * count) {
                                global.db.data.users[m.sender].makananpet += count * 1
                                global.db.data.users[m.sender].money -= Bmakananpet * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Pet dengan harga Rp.${Bmakananpet * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Makanan Pet dengan harga Rp.${Bmakananpet * count}`.trim(), m)
                        
                        break
                case 'makanannaga':
                            if (global.db.data.users[m.sender].money >= Bmakanannaga * count) {
                                global.db.data.users[m.sender].makanannaga += count * 1
                                global.db.data.users[m.sender].money -= Bmakanannaga * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Naga dengan harga Rp.${Bmakanannaga * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Makanan Pet dengan harga Rp.${Bmakanannaga * count}`.trim(), m)
                        
                        break 
                 case 'makananphonix':
                            if (global.db.data.users[m.sender].money >= Bmakananphonix * count) {
                                global.db.data.users[m.sender].makananphonix += count * 1
                                global.db.data.users[m.sender].money -= Bmakananphonix * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Phonix dengan harga Rp.${Bmakananphonix * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Makanan Pet dengan harga Rp.${Bmakananphonix * count}`.trim(), m)
                        
                        break 
                case 'makanankyubi':
                            if (global.db.data.users[m.sender].money >= Bmakanankyubi * count) {
                                global.db.data.users[m.sender].makanankyubi += count * 1
                                global.db.data.users[m.sender].money -= Bmakanankyubi* count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Kyubi dengan harga Rp.${Bmakanankyubi * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Makanan Kyubi dengan harga Rp.${Bmakanankyubi * count}`.trim(), m)
                        
                        break 
                 case 'makanangriffin':
                            if (global.db.data.users[m.sender].money >= Bmakanangriffin * count) {
                                global.db.data.users[m.sender].makanangriffin += count * 1
                                global.db.data.users[m.sender].money -= Bmakanangriffin * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Griffin dengan harga Rp.${Bmakanangriffin * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Makanan Griffin dengan harga Rp.${Bmakanangriffin * count}`.trim(), m)
                        
                        break 
                  case 'makanancentaur':
                            if (global.db.data.users[m.sender].money >= Bmakanancentaur * count) {
                                global.db.data.users[m.sender].makanancentaur += count * 1
                                global.db.data.users[m.sender].money -= Bmakanancentaur * count
                                conn.reply(m.chat, `Succes membeli ${count} Makanan Centaur dengan harga Rp.${Bmakanancentaur * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Makanan Centaur dengan harga Rp.${Bmakanancentaur * count}`.trim(), m)
                        
                        break 
                /* case 'tiketm':
                            if (global.db.data.users[m.sender].money >= Bhealtmonster * count) {
                                global.db.data.users[m.sender].healtmonster += count * 1
                                global.db.data.users[m.sender].money -= Bhealtmonster * count
                                conn.reply(m.chat, `Succes membeli ${count} TiketM dengan harga Rp.${Bhealtmonster * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Tiketm dengan harga Rp.${Bhealtmonster * count}`.trim(), m)
                        
                        break */
                  case 'aqua':
                            if (global.db.data.users[m.sender].money >= Baqua * count) {
                                global.db.data.users[m.sender].aqua += count * 1
                                global.db.data.users[m.sender].money -= Baqua * count
                                conn.reply(m.chat, `Succes membeli ${count} Aqua dengan harga Rp.${Baqua * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Aqua dengan harga Rp.${Baqua * count}`.trim(), m)
                        
                        break
                  case 'iron':
                            if (global.db.data.users[m.sender].money >= Biron * count) {
                                global.db.data.users[m.sender].iron += count * 1
                                global.db.data.users[m.sender].money -= Biron * count
                                conn.reply(m.chat, `Succes membeli ${count} Iron dengan harga Rp.${Biron * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Iron dengan harga Rp.${Biron * count}`.trim(), m)
                        
                        break
                  case 'string':
                            if (global.db.data.users[m.sender].money >= Bstring * count) {
                                global.db.data.users[m.sender].string += count * 1
                                global.db.data.users[m.sender].money -= Bstring * count
                                conn.reply(m.chat, `Succes membeli ${count} String dengan harga Rp.${Bstring * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} String dengan harga Rp.${Bstring * count}`.trim(), m)
                        
                        break
                  case 'sword':
                            if (global.db.data.users[m.sender].money >= Bsword * count) {
                                global.db.data.users[m.sender].sword += count * 1
                                global.db.data.users[m.sender].money -= Bsword * count
                                conn.reply(m.chat, `Succes membeli ${count} Sword dengan harga Rp.${Bsword * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Sword dengan harga Rp.${Bsword * count}`.trim(), m)
                        
                        break
                  case 'batu':
                            if (global.db.data.users[m.sender].money >= Bbatu * count) {
                                global.db.data.users[m.sender].rock += count * 1
                                global.db.data.users[m.sender].money -= Bbatu * count
                                conn.reply(m.chat, `Succes membeli ${count} Batu dengan harga Rp.${Bbatu * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Batu dengan harga Rp.${Bbatu * count}`.trim(), m)
                        
                        break 
                 case 'umpan':
                            if (global.db.data.users[m.sender].money >= Bumpan * count) {
                                global.db.data.users[m.sender].umpan += count * 1
                                global.db.data.users[m.sender].money -= Bumpan * count
                                conn.reply(m.chat, `Succes membeli ${count} Umpan dengan harga Rp.${Bumpan * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Umpan dengan harga Rp.${Bumpan * count}`.trim(), m)
                        
                        break
                    case 'pancingan':
                            if (global.db.data.users[m.sender].money >= Bpancingan * count) {
                                global.db.data.users[m.sender].fishingrod += count * 1
                                global.db.data.users[m.sender].money -= Bpancingan * count
                                conn.reply(m.chat, `Succes membeli ${count} Pancingan dengan harga Rp.${Bpancingan * count}`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Pancingan dengan harga Rp.${Bpancingan * count}`.trim(), m)
                        
                        break
                case 'armor':
                        if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].money > armor * 1) {
                            global.db.data.users[m.sender].armor += 1
                            global.db.data.users[m.sender].money -= armor * 1
                            conn.reply(m.chat, `Succes membeli Armor seharga ${armor}` ,m)
                          
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli Armor seharga Rp.${armor}`, m)
                    
                    break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].money += Spotion * count
                        global.db.data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Potion dengan harga Rp.${Spotion * count}`.trim(), m)
                    } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                    break
                case 'common':
                    if (global.db.data.users[m.sender].common >= count * 1) {
                        global.db.data.users[m.sender].money += Scommon * count
                        global.db.data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga Rp.${Scommon * count}`.trim(), m)
                    } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                    break
                case 'uncommon':
                    if (global.db.data.users[m.sender].uncommon >= count * 1) {
                        global.db.data.users[m.sender].money += Suncommon * count
                        global.db.data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga Rp.${Suncommon * count}`.trim(), m)
                    } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                    break
                case 'mythic':
                    if (global.db.data.users[m.sender].mythic >= count * 1) {
                        global.db.data.users[m.sender].money += Smythic * count
                        global.db.data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga Rp.${Smythic * count}`.trim(), m)
                    } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                    break
                case 'legendary':
                    if (global.db.data.users[m.sender].legendary >= count * 1) {
                        global.db.data.users[m.sender].money += Slegendary * count
                        global.db.data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga Rp.${Slegendary * count}`.trim(), m)
                    } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                    break
                case 'sampah':
                    if (global.db.data.users[m.sender].trash >= count * 1) {
                        global.db.data.users[m.sender].trash -= count * 1
                        global.db.data.users[m.sender].money += Ssampah * count
                        conn.reply(m.chat, `Succes menjual ${count} Sampah, dan anda mendapatkan Rp.${Ssampah * count}`.trim(), m)
                    } else conn.reply(m.chat, `Sampah anda tidak cukup`.trim(), m)
                    break
                    case 'kaleng':
                        if (global.db.data.users[m.sender].kaleng >= count * 1) {
                            global.db.data.users[m.sender].kaleng -= count * 1
                            global.db.data.users[m.sender].money += Skaleng * count
                            conn.reply(m.chat, `Succes menjual ${count} Kaleng, dan anda mendapatkan Rp.${Skaleng * count}`, m)
                        } else conn.reply(m.chat, `Kaleng anda tidak cukup`, m)
                        break
                    case 'kardus':
                        if (global.db.data.users[m.sender].kardus >= count * 1) {
                            global.db.data.users[m.sender].kardus -= count * 1
                            global.db.data.users[m.sender].money += Skardus * count
                            conn.reply(m.chat, `Succes menjual ${count} Kardus, dan anda mendapatkan Rp.${Skardus * count}`, m)
                        } else conn.reply(m.chat, `Kardus anda tidak cukup`, m)
                        break
                    case 'botol':
                        if (global.db.data.users[m.sender].botol >= count * 1) {
                            global.db.data.users[m.sender].botol -= count * 1
                            global.db.data.users[m.sender].money += Sbotol * count
                            conn.reply(m.chat, `Succes menjual ${count} Botol, dan anda mendapatkan Rp.${Sbotol * count}`, m)
                        } else conn.reply(m.chat, `Botol anda tidak cukup`, m)
                        break
                    case 'kayu':
                        if (global.db.data.users[m.sender].wood >= count * 1) {
                            global.db.data.users[m.sender].wood -= count * 1
                            global.db.data.users[m.sender].money += Skayu * count
                            conn.reply(m.chat, `Succes menjual ${count} Kayu, dan anda mendapatkan Rp.${Skayu * count}`, m)
                        } else conn.reply(m.chat, `Kayu anda tidak cukup`, m)
                        break
                    case 'pisang':
                        if (global.db.data.users[m.sender].pisang >= count * 1) {
                            global.db.data.users[m.sender].pisang -= count * 1
                            global.db.data.users[m.sender].money += Spisang * count
                            conn.reply(m.chat, `Succes menjual ${count} Pisang, dan anda mendapatkan Rp.${Spisang * count}`, m)
                        } else conn.reply(m.chat, `Pisang anda tidak cukup`, m) 
                        break
                    case 'anggur':
                        if (global.db.data.users[m.sender].anggur >= count * 1) {
                            global.db.data.users[m.sender].anggur -= count * 1
                            global.db.data.users[m.sender].money += Sanggur * count
                            conn.reply(m.chat, `Succes menjual ${count} Anggur, dan anda mendapatkan Rp.${Sanggur * count}`, m)
                        } else conn.reply(m.chat, `Anggur anda tidak cukup`, m)
                        break
                    case 'mangga':
                        if (global.db.data.users[m.sender].mangga >= count * 1) {
                            global.db.data.users[m.sender].mangga -= count * 1
                            global.db.data.users[m.sender].money += Smangga * count
                            conn.reply(m.chat, `Succes menjual ${count} Mangga, dan anda mendapatkan Rp.${Smangga * count}`, m)
                        } else conn.reply(m.chat, `Mangga anda tidak cukup`, m)
                        break
                    case 'jeruk':
                        if (global.db.data.users[m.sender].jeruk >= count * 1) {
                            global.db.data.users[m.sender].jeruk -= count * 1
                            global.db.data.users[m.sender].money += Sjeruk * count
                            conn.reply(m.chat, `Succes menjual ${count} Jeruk, dan anda mendapatkan Rp.${Sjeruk * count}`, m)
                        } else conn.reply(m.chat, `Jeruk anda tidak cukup`, m)
                        break
                    case 'apel':
                        if (global.db.data.users[m.sender].apel >= count * 1) {
                            global.db.data.users[m.sender].apel -= count * 1
                            global.db.data.users[m.sender].money += Sapel * count
                            conn.reply(m.chat, `Succes menjual ${count} Apel, dan anda mendapatkan Rp.${Sapel * count}`, m)
                        } else conn.reply(m.chat, `Apel anda tidak cukup`, m)
                        break
                    /* case 'berlian':
                        if (global.db.data.users[m.sender].berlian >= count * 1) {
                            global.db.data.users[m.sender].berlian -= count * 1
                            global.db.data.users[m.sender].money += Sberlian * count
                            conn.reply(m.chat, `Succes menjual ${count} Berlian, dan anda mendapatkan Rp.${Sberlian * count}`, m)
                        } else conn.reply(m.chat, `Berlian anda tidak cukup`, m)
                        break */
                   case 'emas':
                        if (global.db.data.users[m.sender].gold >= count * 1) {
                            global.db.data.users[m.sender].gold -= count * 1
                            global.db.data.users[m.sender].money += Semasbiasa * count
                            conn.reply(m.chat, `Succes menjual ${count} Emas, dan anda mendapatkan Rp.${Semasbiasa * count}`, m)
                        } else conn.reply(m.chat, `Emas anda tidak cukup`, m)
                        break
                    case 'pettoken':
                        if (global.db.data.users[m.sender].pet >= count * 1) {
                            global.db.data.users[m.sender].pet -= count * 1
                            global.db.data.users[m.sender].money += Spet * count
                            conn.reply(m.chat, `Succes menjual ${count} Pet Random, dan anda mendapatkan Rp.${Spet * count}`, m)
                        } else conn.reply(m.chat, `Pet Random anda tidak cukup`, m)
                        break 
                 case 'makananpet':
                        if (global.db.data.users[m.sender].makananpet >= count * 1) {
                            global.db.data.users[m.sender].makananpet -= count * 1
                            global.db.data.users[m.sender].money += Smakananpet * count
                            conn.reply(m.chat, `Succes menjual ${count} Makanan Pet, dan anda mendapatkan Rp.${Smakananpet * count}`, m)
                        } else conn.reply(m.chat, `Makanan Pet anda tidak cukup`, m)
                        break 
                case 'makanannaga':
                        if (global.db.data.users[m.sender].makanannaga >= count * 1) {
                            global.db.data.users[m.sender].makanannaga -= count * 1
                            global.db.data.users[m.sender].money += Smakanannaga * count
                            conn.reply(m.chat, `Succes menjual ${count} Makanan Naga, dan anda mendapatkan Rp.${Smakanannaga * count}`, m)
                        } else conn.reply(m.chat, `Makanan Naga anda tidak cukup`, m)
                        break
                 case 'makananphonix':
                        if (global.db.data.users[m.sender].makananphonix >= count * 1) {
                            global.db.data.users[m.sender].makananphonix -= count * 1
                            global.db.data.users[m.sender].money += Smakananphonix * count
                            conn.reply(m.chat, `Succes menjual ${count} Makanan Phonix, dan anda mendapatkan Rp.${Smakananphonix * count}`, m)
                        } else conn.reply(m.chat, `Makanan Phonix anda tidak cukup`, m)
                        break
                    case 'makanankyubi':
                        if (global.db.data.users[m.sender].makanankyuni >= count * 1) {
                            global.db.data.users[m.sender].makanankyubi -= count * 1
                            global.db.data.users[m.sender].money += Smakanankyubi * count
                            conn.reply(m.chat, `Succes menjual ${count} Makanan Kyubi, dan anda mendapatkan Rp.${Smakanankyubi* count}`, m)
                        } else conn.reply(m.chat, `Makanan Kyubi anda tidak cukup`, m)
                        break
                    case 'makanangriffin':
                        if (global.db.data.users[m.sender].makanangriffin >= count * 1) {
                            global.db.data.users[m.sender].makanangriffin -= count * 1
                            global.db.data.users[m.sender].money += Smakanangriffin * count
                            conn.reply(m.chat, `Succes menjual ${count} Makanan Griffin, dan anda mendapatkan Rp.${Smakanangriffin * count}`, m)
                        } else conn.reply(m.chat, `Makanan Griffin anda tidak cukup`, m)
                        break
                    case 'makanancentaur':
                        if (global.db.data.users[m.sender].makanancentaur >= count * 1) {
                            global.db.data.users[m.sender].makanancentaur -= count * 1
                            global.db.data.users[m.sender].money += Smakanancentaur * count
                            conn.reply(m.chat, `Succes menjual ${count} Makanan Centaur, dan anda mendapatkan Rp.${Smakanancentaur * count}`, m)
                        } else conn.reply(m.chat, `Makanan Centaur anda tidak cukup`, m)
                        break
                    case 'aqua':
                        if (global.db.data.users[m.sender].aqua >= count * 1) {
                            global.db.data.users[m.sender].aqua -= count * 1
                            global.db.data.users[m.sender].money += Saqua * count
                            conn.reply(m.chat, `Succes menjual ${count} Aqua, dan anda mendapatkan Rp.${Saqua * count}`, m)
                        } else conn.reply(m.chat, `Aqua anda tidak cukup`, m)
                        break
                    case 'pancingan':
                        if (global.db.data.users[m.sender].fishingrod >= count * 1) {
                            global.db.data.users[m.sender].fishingrod -= count * 1
                            global.db.data.users[m.sender].money += Spancingan * count
                            conn.reply(m.chat, `Succes menjual ${count} Pancingan, dan anda mendapatkan Rp.${Spancingan * count}`, m)
                        } else conn.reply(m.chat, `Pancingan anda tidak cukup`, m)
                        break
                    case 'iron':
                        if (global.db.data.users[m.sender].iron >= count * 1) {
                            global.db.data.users[m.sender].iron -= count * 1
                            global.db.data.users[m.sender].money += Siron * count
                            conn.reply(m.chat, `Succes menjual ${count} Iron, dan anda mendapatkan Rp.${Siron * count}`, m)
                        } else conn.reply(m.chat, `Iron anda tidak cukup`, m)
                        break
                    case 'string':
                        if (global.db.data.users[m.sender].string >= count * 1) {
                            global.db.data.users[m.sender].string -= count * 1
                            global.db.data.users[m.sender].money += Sstring * count
                            conn.reply(m.chat, `Succes menjual ${count} String, dan anda mendapatkan Rp.${Sstring * count}`, m)
                        } else conn.reply(m.chat, `String anda tidak cukup`, m)
                        break
                    case 'sword':
                        if (global.db.data.users[m.sender].sword >= count * 1) {
                            global.db.data.users[m.sender].sword -= count * 1
                            global.db.data.users[m.sender].money += Ssword * count
                            conn.reply(m.chat, `Succes menjual ${count} Sword, dan anda mendapatkan Rp.${Ssword * count}`, m)
                        } else conn.reply(m.chat, `Sword anda tidak cukup`, m)
                        break
                    case 'batu':
                        if (global.db.data.users[m.sender].rock >= count * 1) {
                            global.db.data.users[m.sender].rock -= count * 1
                            global.db.data.users[m.sender].money += Sbatu * count
                            conn.reply(m.chat, `Succes menjual ${count} Batu, dan anda mendapatkan Rp.${Sbatu * count}`, m)
                        } else conn.reply(m.chat, `Batu anda tidak cukup`, m)
                        break
                    case 'limit':
                        if (global.db.data.users[m.sender].limit >= count * 1) {
                            global.db.data.users[m.sender].limit -= count * 1
                            global.db.data.users[m.sender].money += Slimit * count
                            conn.reply(m.chat, `Succes menjual ${count} Limit, dan anda mendapatkan Rp.${Slimit * count}`, m)
                        } else conn.reply(m.chat, `Limit anda tidak cukup`, m)
                        break
                    case 'diamond':
                       if (global.db.data.users[m.sender].diamond >= count * 1) {
                           global.db.data.users[m.sender].diamond -= count * 1
                           global.db.data.users[m.sender].money += Sdiamond * count
                           conn.reply(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan Rp.${Sdiamond * count}`, m)
                        } else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
                       break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kchat, m)
        console.log(e)
    }
}

handler.help = ['shop <sell|buy> <args>']
handler.tags = ['rpg']
    
handler.command = /^(shop)$/i
handler.limit = false
handler.group = false
export default handler
