const fs = require('fs')
const chalk = require('chalk')

// Free Apikey
global.APIs = {
	riy: 'https://api-xriy04.herokuapp.com',
}

// Other
global.owner = ['62821220876725']
global.premium = ['62821220876725']
global.youtube = 'https://youtube.com/c/f'
global.ownername = '𝕭𝖔𝖙 • Andii ༢࿔ྀ'
global.botname ='𝕭𝖔𝖙 • Andii ༢࿔ྀ'
global.donasi = {
    saweria: 'https://saweria.co/f',
    nomor: '082122087672'
}
global.packname = '𝕭𝖔𝖙 • Andii ༢࿔ྀ'
global.author = 'WhatsApp Bot'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...'
}
global.thumb = fs.readFileSync('./image/hinata.jpg')
global.vn = './sound/menu.mp3'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
