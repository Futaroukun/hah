import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let str = `❏━━━━「 RULES 」   
│•  Rules Bot:
│↳ Baca Di Bawah, Bisa Baca Kan?
╰═┅═━––––––─ׄ✧

📮 Rules Bot:
1. Dilarang telp/vc bot.
2. Harap beri jeda saat menggunakan bot (jangan spam).
3. Dilarang mengeksploitasi bot.
4. Dilarang menjual belikan bot, sebab bot ini free untuk digunakan (kecuali memasukkan ke dalam group harus sewa!).
5. Bot tidak menyimpan data user.
6. Kami tidak bertanggung jawab atas apa yang user lakukan kepada bot ataupun sebaliknya.
7. Hindari konten pornografi (berupa gambar, dokumen, video, dan stiker).
8. Bot dikick dari group berarti masa sewa hangus.
9. Dilarang menculik atau mengadd bot ke gc tanpa seizin owner

📮 Rules Owner:
1. Dilarang telp/vc tanpa izin.
2. Dilarang spam chat.
3. Dilarang keras kirim virtex atau sejenisnya ke owner.
4. Owner tidak akan merespon dijam tertentu.
5. Jika chat tidak direspon jangan di spam.
6. Dilarang mengirim file, foto, dan video yang aneh, absurd, atau sejenisnya.
7. Dilarang keras mengirimkan file, foto, video atau sejenisnya yang memiliki unsur pornografi.
8. Melanggar peraturan sanksi tegas akan diberikan.

📮 Kebijakan Privasi:
 1. Bot tidak akan merekam data riwayat chat user.
 2. Bot tidak akan menyebarkan nomor users.
 3. Bot tidak akan menyimpan media yang dikirimkan oleh users.
 4. Bot tidak akan menyalah gunakan data data users.
 5. Owner bot berhak melihat data riwayat chat users.
 6. Owner bot berhak melihat status users.
 7. Owner bot dapat melihat riwayat chat, dan media yang dikirimkan users.
 
 📮 Syarat Ketentuan Bot:
 1. Bot akan keluar dari group apabila sudah waktunya keluar.
 2. Bot dapat mem-banned users secara sepihak terlepas dari users salah atau tidak.
 3. Bot tidak akan bertanggung jawab atas apapun yang users lakukan terhadap fitur bot.
 4. Bot akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
 5. Bot bertanggung jawab atas kesalahan fatal dalam programing maupun owner.

📮 Penting:
1. Bot sudah di uji coba namun terdapat fitur yang error karena rest api error.
2. Jika menggunakan fitur berlebihan tanpa jeda Bot/Owner berhak membanned users.
3. Jika bot tidak merespon ada kemungkinan bot delay atau terbanned WhatsApp.
4. Jika menemukan bug, error, atau sejenisnya harap lapor ke owner.
5. Ingin upgrade premium atau sewa bot kedalam grup bisa chat owner.
6. Ingin request fitur bisa chat owner.
7. Jika warn melebihi 5 bot otomatis mengkick user dari gc.
8. Berikan jeda selama 5 detik agar tidak dibanned bot.

📮 Konsekuensi Jika Melanggar:
1. Mengadd bot ke gc tanpa izin akan mengakibatkan terbanned.
2. Telp/Vc bot akan otomatis terblokir.
3. Menghina atau mengekploitasi bot akan terkena warn +1.
4. Berbicara kasar akan terkena warn +1.
5. Spam fitur bot akan terbanned.
6. Spam fitur 18+ akan mendapatkan warn +1.
7. Melanggar rules Owner otomatis di blokir.

❗ Perlu di ingat!!
• Jika menemukan orang yang memperjual belikan bot ini harap lapor ke owner.
• Bot ini free untuk semua orang, namun ada fitur yang berbayar di dalam bot ini untuk di akses.
• Fitur masih sedikit sih ehehehe, soalnya masih banyak yang bug.
• Namun saya sedang mencoba memperbaiki fitur yang bug tersebut.
• Perlu diingat sekali lagi jangan spam fitur bot agar tidak di banned oleh Bot/Owner.

Syarat dan ketentuan di atas sewaktu waktu dapat berubah!
©Kebijakan Privasi HU TAO BOT-MD`.trim()
conn.sendButton(m.chat, str, global.wm, './media/rules.jpg', [
[`Menu`, '.menu'],
[`Owner`, '.owner']
], m, {asLocation: true})
  }
handler.help = ['rules']
handler.tags = ['info', 'main']
handler.command =  /^rules$/i

handler.register = true
handler.premium = false
handler.limit = false

export default handler