require("./database/module")

//GLOBAL PAYMENT
global.storename = "ᏦᎥᏞᏞᎬᏒᎶᎻᎾᎦᏆ "
global.dana = "237673804138"
global.qris = "https://i.ibb.co/BnYRXcw/STINGER-V4.jpg"


// GLOBAL SETTING
global.owner = "237673804138"
global.namabot = "ᏦᎥᏞᏞᎬᏒ ᎶᎻᎾᎦᏆ v5"
global.nomorbot = "237673804138"
global.namaCreator = "ᏦᎥᏞᏞᎬᏒ ᎶᎻᎾᎦᏆ "
global.linkyt = "https://youtube.com/@esteams"
global.autoJoin = true
global.antilink = false
global.versisc = '4.0.0'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://i.ibb.co/BnYRXcw/STINGER-V4.jpg'
global.isLink = 'https://whatsapp.com/channel/0029Vaj1vKSK5cDDT4tVvY1y'
global.packname = "ES TEAMS"
global.author = "ᏦᎥᏞᏞᎬᏒ ᎶᎻᎾᎦᏆ "
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
