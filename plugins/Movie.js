const Asena = require('../events');
const { MessageType } = require('@adiwajshing/baileys');
const got = require('got');
const Language = require('../language');
const Lang = Language.getString('amazone'); 
let config = require('../config');
let td = config.WORKTYPE == 'public' ? false : true


Asena.addCommand({ pattern: 'movie ?(.*)', fromMe: td, desc: Lang.MOVIE }, (async (message, match) => {
	if (match[1] === '') return await message.client.sendMessage(message.jid, '```Give me a name.```', MessageType.text, { quoted: message.data });
	let url = `http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full`
	const response = await got(url);
	const json = JSON.parse(response.body);
	if (json.Response != 'True') return await message.client.sendMessage(message.jid, '*Not found.*', MessageType.text, { quoted: message.data });
	let msg = '```';
	msg += 'Title      : ' + json.Title + '\n\n';
	msg += 'Year       : ' + json.Year + '\n\n';
	msg += 'Rated      : ' + json.Rated + '\n\n';
	msg += 'Released   : ' + json.Released + '\n\n';
	msg += 'Runtime    : ' + json.Runtime + '\n\n';
	msg += 'Genre      : ' + json.Genre + '\n\n';
	msg += 'Director   : ' + json.Director + '\n\n';
	msg += 'Writer     : ' + json.Writer + '\n\n';
	msg += 'Actors     : ' + json.Actors + '\n\n';
	msg += 'Plot       : ' + json.Plot + '\n\n';
	msg += 'Language   : ' + json.Language + '\n\n';
	msg += 'Country    : ' + json.Country + '\n\n';
	msg += 'Awards     : ' + json.Awards + '\n\n';
	msg += 'BoxOffice  : ' + json.BoxOffice + '\n\n';
	msg += 'Production : ' + json.Production + '\n\n';
	msg += 'imdbRating : ' + json.imdbRating + '\n\n';
	msg += 'imdbVotes  : ' + json.imdbVotes + '```';
	msg += 'link       : ' + '\n\n*https://t.me/MovieClubFamily*\nOR Use this link to donwload torrent\nhttps://yts.mx/movies/movie ?';
	await message.client.sendMessage(message.jid, msg, MessageType.text, { quoted: message.data });
}));
