import xfar from 'xfarr-api'
import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { usedPrefix, command, text, args }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'filmanime') {
    if (!text) return conn.reply(m.chat, 'Harap Masukan Nama Film Animenya', m)
    try {
	 let res = await fetch(`https://api.lolhuman.xyz/api/lk21?apikey=${global.lolkey}&query=${text}`)
	 let jsons = await res.json()
	 let x = jsons.result
let hasil = `*${htki} ANIME-SEARCH ${htka}*\n\n๐ซ Film Dari : ${x.title}
๐ฎ Genre: : ${x.genre}
๐ฎ Views: : ${x.views}
๐ฎ Duration: : ${x.duration}
๐ฎ Tahun: : ${x.tahun}
๐ฎ Location: : ${x.location}
๐ฎ Rilis: : ${x.date_release}
๐ฎ Bahasa: : ${x.language}
โญ Rating : ${x.rating}

๐ฅLink Movie : ${x.link_dl}
Link : ${x.link}

๐Sinopsis : ${x.desc}`
    await conn.sendButton(m.chat, hasil, wm, await(await fetch(i[0].thumb)).buffer(), [[' Menu', '/menu']], m, { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '๐ Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: i[0].link
     }}
  })
  } catch {
  throw eror
  }
    }
if (command == 'film') {
    if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} spiderman`
    try {
let i = await xfar.Film(args[0])
let txt = `*${htki} FILM-SEARCH ${htka}*\n\n*๐ซ Judul :* ${i[0].judul}\n*๐๏ธ  Tipe  :* ${i[0].type}\n*๐ Kualitas :* ${i[0].quality}\n*๐ฎUpload :* ${i[0].upload}\n*๐ Url :* ${await shortUrl(i[0].link)}\n-----------------------------------------------\n`

await conn.sendButton(m.chat, txt, wm, await(await fetch(i[0].thumb)).buffer(), [[' Menu', '/menu']], m, { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '๐ Hai, ' + name + ' ' ,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: i[0].link
     }}
  })
  } catch {
  throw eror
  }
  }

}
handler.help = ['filmanime', 'film'].map(v => v + ' <film>')
handler.tags = ['internet', 'anime']
handler.command = /^film(anime)?$/i
handler.premium = true
export default handler

async function shortUrl(url) {
	let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
	return await res.text()
}