export async function all(m, { isBotAdmin }) {
    if (!m.message)
        return
    this.spam = this.spam ? this.spam : {}
    if (m.sender in this.spam) {
        this.spam[m.sender].count++
        if (m.messageTimestamp - this.spam[m.sender].lastspam > 4) {
            if (this.spam[m.sender].count > 4) {
                global.db.data.users[m.sender].banned = true
            	m.reply('*Kamu di banned karena spam!*\n\n*Laporkan masalah ini ke wa.me/6283854551575*')
            }
        this.spam[m.sender].count = 0
        this.spam[m.sender].lastspam = m.messageTimestamp
        }
    }
    else
        this.spam[m.sender] = {
            jid: m.sender,
            count: 0,
            lastspam: 0
        }
}