import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}
handler.customPrefix = /^(hutao|Hutao|bot|Bot)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [
 "https://telegra.ph/file/fa2bbea0f7de2575cf027.png",//patrick huu
 "https://telegra.ph/file/4a2db7bc9f3f9ecfc007d.png",//anime yntkts
 "https://telegra.ph/file/5f6079714851d9927697e.png",//windah bocil
 "https://telegra.ph/file/d5100b4ce95a0012e88c1.png",//patrick bawa minum
 "https://telegra.ph/file/eb2b5e5fff569896c1639.png",//kucing1
 "https://telegra.ph/file/300610838ffa0e6576eb9.png",//patrick pembohong
 "https://telegra.ph/file/954afe562e58c144620ae.png",//spongebob FBI
 "https://telegra.ph/file/72026dcc46e4cb4b6f9ae.png",//mazowski monster inc
 "https://telegra.ph/file/09bbff0da316ba21b4f8e.png",//kucing2
 "https://telegra.ph/file/2e0637d57e3cc1abcb4a0.png",//patrick anak setan
 "https://telegra.ph/file/d771ae015b5486859d03f.png",//mazowski 2
 "https://telegra.ph/file/9c7606f571c05b4d0c941.png",//hengker
 "https://telegra.ph/file/84fd937257bcd614d6c9e.png",//anjing
 "https://telegra.ph/file/2f618fffab6ff7bea32ab.png",//abang saleh
 "https://telegra.ph/file/dfbf483c209a31f01b4e5.png",//hengker2
 "https://telegra.ph/file/abfe511b3ac34d204bafe.png", //rahmat slamet
 "https://telegra.ph/file/f899e51abab40e19896f1.png", //gatau
 "https://telegra.ph/file/d0ddb1231a7915ea98590.png", //gatau ini juga
 "https://telegra.ph/file/7e50199eed371614a4757.png", //Islami cuy
 "https://telegra.ph/file/79875c2bfa0236a786ab1.png", //prinsip
 "https://telegra.ph/file/3057284c00772a29cbf17.png", //yo nda tau
 "https://telegra.ph/file/1405144c1b88ba5877908.jpg", //puja paha
]
