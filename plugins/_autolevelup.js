import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn }) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
//if (!db.data.chats[m.chat].autonivel && m.isGroup) throw 
	
let user = global.db.data.users[m.sender]
 if (!user.autolevelup) //throw `${ag}𝙀𝙇 𝘼𝙐𝙏𝙊𝙉𝙄𝙑𝙀𝙇 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊 𝙐𝙎𝙀 *#on autonivel* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍\n\n𝙏𝙃𝙀 𝘼𝙐𝙏𝙊𝙉𝙄𝙑𝙀𝙇 𝙏𝙃𝙄𝙎 𝘿𝙄𝙎𝘼𝘽𝙇𝙀𝘿 𝙐𝙎𝙀 *#on autonivel* 𝙏𝙊 𝙀𝙉𝘼𝘽𝙇𝙀`
  return !0
	
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
 if (before !== user.level) {
	  
/*m.reply(`
*╭━━━[ 𝙉𝙄𝙑𝙀𝙇 | 𝙇𝙀𝙑𝙀𝙇 ]━━━━⬣*
*┃ NIVEL ANTERIOR: ${before}*
*┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*
*┃ NIVEL ACTUAL: ${user.level}*
*┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈*
*┃ FECHA: ${new Date().toLocaleString('id-ID')}*
*╰━━━〔 𓃠 ${vs} 〕━━━━━⬣*

*_Cuanto más interactúes con GataBot-MD, mayor será tu nivel!!_*
`.trim())*/
	 
conn.sendButton(m.chat, '🐈 ' + wm, `*╭━━━[ 𝙉𝙄𝙑𝙀𝙇 | 𝙇𝙀𝙑𝙀𝙇 ]━━━⬣*
*┃ NIVEL ANTERIOR: ${before}*
*┃┈┈┈┈┈┈┈┈┈┈┈┈┈*
*┃ NIVEL ACTUAL: ${user.level}*
*┃┈┈┈┈┈┈┈┈┈┈┈┈┈*
*┃ RANGO:* ${user.role}
*┃┈┈┈┈┈┈┈┈┈┈┈┈┈*
*┃ FECHA: ${new Date().toLocaleString('id-ID')}*
*╰━━━〔 𓃠 ${vs} 〕━━━━⬣*

*_Cuanto más interactúes conmigo, mayor será tu nivel!!_*`, null, [['🍀 𝗠 𝗘 𝗡 𝗨', `/menu`]], fkontak, m)
}}		
//export const disabled = false 
