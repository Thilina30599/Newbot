const Neotro = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const Language = require('../language');
const Lang = Language.getString('amazone');


if (Config.WORKTYPE == 'public') {
Neotro.addCommand({ pattern: 'ftext ?(.*)', desc: Lang.FRANCY, fromMe: false }, async (message, match) => {

const word = match[1]
if (!word) return await message.sendMessage(" *Please Input Word* ")

await message.sendMessage('🔁 *Text Converting* ⏩')

await axios
      .get(`https://bx-hunter.herokuapp.com/api/fancytext?text=${word}&apikey=Ikyy69`)
      .then(async (response) => {
        const {
         result,
	status,	
        } = response.data

   
	const msg = `**◁◉◉◉◉Fancy Text◉◉◉▷* \n             *Public-Bot™* * \n              \n\n ${result} \n\n                 *◄◉◉◉◉◉◉◉◉◉◉Thilina◉◉◉◉◉◉◉◉►*`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	})    

})
  }
  
else if (Config.WORKTYPE == 'private') {
	
	Neotro.addCommand({ pattern: 'ftext ?(.*)', desc: Lang.FRANCY, fromMe: true }, async (message, match) => {

const word = match[1]
if (!word) return await message.sendMessage(" *Please Input Word* ")

await message.sendMessage('🔁 *Text Converting* ⏩')

await axios
      .get(`https://bx-hunter.herokuapp.com/api/fancytext?text=${word}&apikey=Ikyy69`)
      .then(async (response) => {
        const {
         result,
	status,	
        } = response.data

   
	const msg = `*◁◉◉◉◉Fancy Text◉◉◉▷* \n             *Public-Bot™* \n\n ${result} \n\n                \n*◄◉◉◉◉◉◉◉◉◉◉Thilina◉◉◉◉◉◉◉◉►*`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	})    

})
  } 
