let handler = async (m, { command, usedPrefix, DevMode, args, conn }) => {
let type = (args[0] || '').toLowerCase()
let msk = (args[0] || '').toLowerCase()
let user = global.db.data.users[m.sender]

let cocinar = `
*◈ Pollo a la parrilla 🍖*
*${rpg.emoticon('ayam')} →* _${user.ayam}/3_
*${rpgshop.emoticon('coal')} →* _${user.coal}/1_
*${rpg.emoticon('ramuan')} →* _${user.ramuan}/1_
${user.ayam >= 3 && user.coal >= 1 && user.ramuan >= 1 ? '*🫕 PUEDE COCINAR 🫕*' : ''.concat(`*FALTA →* `, user.ayam < 3 ? `❗${rpgg.emoticon('ayam')} ` : '', user.coal < 1 ? `❗${rpgshopp.emoticon('coal')} ` : '', user.ramuan < 1 ? `❗${rpgg.emoticon('ramuan')}` : '')} 
- - - - - - - - - - - - - - - - - - - - - - - - - -
*◈ Pollo frito 🍗*
*${rpg.emoticon('ayam')} →* _${user.ayam}/2_
*${rpgshop.emoticon('coal')} →* _${user.coal}/1_
*${rpg.emoticon('ramuan')} →* _${user.ramuan}/1_
${user.ayam >= 2 && user.coal >= 1 && user.ramuan >= 1 ? '*🫕 PUEDE COCINAR 🫕*' : ''.concat(`*FALTA →* `, user.ayam < 2 ? `❗${rpgg.emoticon('ayam')} ` : '', user.coal < 1 ? `❗${rpgshopp.emoticon('coal')} ` : '', user.ramuan < 1 ? `❗${rpgg.emoticon('ramuan')}` : '')} 
- - - - - - - - - - - - - - - - - - - - - - - - - -
*◈ Fideos con crema de leche y pollo 🍜*
*${rpg.emoticon('ayam')} →* _${user.ayam}/1_
*${rpgshop.emoticon('aqua')} →* _${user.aqua}/5_
*${rpg.emoticon('fideos')} →* _${user.fideos}/3_
*${rpg.emoticon('ramuan')} →* _${user.ramuan}/2_
${user.ayam >= 1 && user.aqua >= 5 && user.fideos >= 3 && user.ramuan >= 2 ? '*🫕 PUEDE COCINAR 🫕*' : ''.concat(`*FALTA →* `, user.ayam < 1 ? `❗${rpgg.emoticon('ayam')} ` : '', user.aqua < 5 ? `❗${rpgshopp.emoticon('aqua')} ` : '', user.fideos < 3 ? `❗${rpgg.emoticon('fideos')} ` : '', user.ramuan < 2 ? `❗${rpgg.emoticon('ramuan')}` : '')} 
- - - - - - - - - - - - - - - - - - - - - - - - - -
*◈ Filete de Vaca 🥩*
*${rpg.emoticon('cow')} →* _${user.sapi}/2_
*${rpgshop.emoticon('coal')} →* _${user.coal}/6_
*${rpg.emoticon('ramuan')} →* _${user.ramuan}/2_
${user.sapi >= 2 && user.coal >= 6 && user.ramuan >= 2 ? '*🫕 PUEDE COCINAR 🫕*' : ''.concat(`*FALTA →* `, user.sapi < 2 ? `❗${rpgg.emoticon('cow')} ` : '', user.coal < 6 ? `❗${rpgshopp.emoticon('coal')} ` : '', user.ramuan < 2 ? `❗${rpgg.emoticon('ramuan')}` : '')} 
- - - - - - - - - - - - - - - - - - - - - - - - - -
*◈ Paella 🥘*
*${rpg.emoticon('cumi')} →* _${user.cumi}/2_
*${rpgshop.emoticon('aqua')} →* _${user.aqua}/6_
*${rpg.emoticon('udang')} →* _${user.udang}/8_
*${rpg.emoticon('ramuan')} →* _${user.ramuan}/3_
${user.cumi >= 2 && user.aqua >= 6 && user.udang >= 8 && user.ramuan >= 3 ? '*🫕 PUEDE COCINAR 🫕*' : ''.concat(`*FALTA →* `, user.cumi < 2 ? `❗${rpgg.emoticon('cumi')} ` : '', user.aqua < 6 ? `❗${rpgshopp.emoticon('aqua')} ` : '', user.udang < 8 ? `❗${rpgshopp.emoticon('udang')} ` : '', user.ramuan < 3 ? `❗${rpgg.emoticon('ramuan')}` : '')} 
- - - - - - - - - - - - - - - - - - - - - - - - - -
*◈ Curry de pollo 🍲*
*${rpg.emoticon('ayam')} →* _${user.ayam}/4_
*${rpgshop.emoticon('aqua')} →* _${user.aqua}/10_
*${rpgshop.emoticon('coal')} →* _${user.coal}/4_
*${rpg.emoticon('ramuan')} →* _${user.ramuan}/2_
${user.ayam >= 4 && user.aqua >= 10 && user.coal >= 4 && user.ramuan >= 2 ? '*🫕 PUEDE COCINAR 🫕*' : ''.concat(`*FALTA →* `, user.ayam < 4 ? `❗${rpgg.emoticon('ayam')} ` : '', user.aqua < 10 ? `❗${rpgshopp.emoticon('aqua')} ` : '', user.coal < 4 ? `❗${rpgshopp.emoticon('coal')} ` : '', user.ramuan < 2 ? `❗${rpgg.emoticon('ramuan')}` : '')} 
- - - - - - - - - - - - - - - - - - - - - - - - - -
*◈ Cerdo asado 🥠*
*${rpg.emoticon('babi')} →* _${user.babi}/3_
*${rpgshop.emoticon('coal')} →* _${user.coal}/4_
*${rpg.emoticon('ramuan')} →* _${user.ramuan}/2_
${user.babi >= 3 && user.coal >= 4 && user.ramuan >= 2 ? '*🫕 PUEDE COCINAR 🫕*' : ''.concat(`*FALTA →* `, user.babi < 3 ? `❗${rpgg.emoticon('babi')} ` : '', user.coal < 4 ? `❗${rpgshopp.emoticon('coal')} ` : '', user.ramuan < 2 ? `❗${rpgg.emoticon('ramuan')}` : '')} 
- - - - - - - - - - - - - - - - - - - - - - - - - -
*◈ Pescado asado 🐟*
*${rpg.emoticon('ikan')} →* _${user.babi}/4_
*${rpgshop.emoticon('coal')} →* _${user.coal}/6_
*${rpg.emoticon('ramuan')} →* _${user.ramuan}/2_
${user.ikan >= 4 && user.coal >= 6 && user.ramuan >= 2 ? '*🫕 PUEDE COCINAR 🫕*' : ''.concat(`*FALTA →* `, user.ikan < 4 ? `❗${rpgg.emoticon('ikan')} ` : '', user.coal < 6 ? `❗${rpgshopp.emoticon('coal')} ` : '', user.ramuan < 2 ? `❗${rpgg.emoticon('ramuan')}` : '')} 
- - - - - - - - - - - - - - - - - - - - - - - - - -
▧ lele bakar 🐟
〉Need 2 lele 🐟 & 1 Coal 🕳️
▧ nila bakar 🐟
〉Need 2 nila 🐟 & 1 Coal 🕳️
▧ bawal bakar 🐟
〉Need 2 bawal 🐟 & 1 Coal 🕳️
▧ udang bakar 🦐
〉Need 2 udang 🦐 & 1 Coal 🕳️
▧ paus bakar 🐳
〉Need 2 paus 🐳 & 1 Coal 🕳️
▧ kepiting bakar 🦀
〉Need 2 kepiting 🦀 & 1 Coal 🕳️
`

try {
       if (/masak|cook/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(5, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'ayambakar':
            if (user.ayam < count * 2 || user.coal < 1 * count) {
                           user.ayam >= count * 1
                            user.ayam -= count * 2
                            user.coal -= count * 1
                            user.ayambakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} ayam bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak ayam bakar\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
				  case 'gulaiayam':
            if (user.ayam < count * 2 || user.coal < 1 * count) {
                            user.ayam >= count * 1
                            user.ayam -= count * 2
                            user.coal -= count * 1
                            user.gulai += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } Gulai Ayam🍜`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak gulai ayam\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
                  case 'rendang':
            if (user.sapi < count * 2 || user.coal < 1 * count) {
                            user.sapi >= count * 1
                            user.sapi -= count * 2
                            user.coal -= count * 1
                            user.rendang += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } Rendang 🍜`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak dimasak rendang\nAnda butuh 2 sapi dan 1 coal untuk memasak`, m)
					break
                   case 'ayamgoreng':
            if (user.ayam < count * 2 || user.coal < 1 * count) {
                           user.ayam >= count * 1
                            user.ayam -= count * 2
                            user.coal -= count * 1
                            user.ayamgoreng += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } ayam goreng🍗`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak ayam goreng\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
                        case 'oporayam':
            if (user.lele < count * 2 || user.coal < 1 * count) {
                          user.lele >= count * 1
                            user.lele -= count * 2
                            user.coal -= count * 1
                            user.oporayam += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } opor ayam`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak opor ayam\nAnda butuh 2 ayam dan 1 coal untuk memasak`, m)
					break
                        case 'steak':
            if (user.sapi < count * 2 || user.coal < 1 * count) {
                            user.sapi >= count * 1
                            user.sapi -= count * 2
                            user.coal -= count * 1
                            user.steak += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } Steak`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak steak\nAnda butuh 2 sapi dan 1 coal untuk memasak`, m)
				break
             case 'babipanggang':
            if (user.babi < count * 2 || user.coal < 1 * count) {
                            user.babi >= count * 1
                            user.babi -= count * 2
                            user.coal -= count * 1
                            user.babipanggang += count * 1
                            conn.reply(m.chat, `Sukses memasak ${ count } babi panggang`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak babi panggang\nAnda butuh 2 babi dan 1 coal untuk memasak`, m)
				break
				case 'ikanbakar':
            if (user.ikan < count * 2 || user.coal < 1 * count) {
                           user.ikan >= count * 1
                            user.ikan -= count * 2
                            user.coal -= count * 1
                            user.ikanbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} ikan bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak ikan bakar\nAnda butuh 2 ikan dan 1 coal untuk memasak`, m)
					break
					case 'lelebakar':
            if (user.lele < count * 2 || user.coal < 1 * count) {
                           user.lele >= count * 1
                            user.lele -= count * 2
                            user.coal -= count * 1
                            user.lelebakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} lele bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak lele bakar\nAnda butuh 2 lele dan 1 coal untuk memasak`, m)
					break
					case 'nilabakar':
            if (user.nila < count * 2 || user.coal < 1 * count) {
                           user.nila >= count * 1
                            user.nila -= count * 2
                            user.coal -= count * 1
                            user.nilabakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} nila bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak nila bakar\nAnda butuh 2 nila dan 1 coal untuk memasak`, m)
					break
					case 'bawalbakar':
            if (user.bawal < count * 2 || user.coal < 1 * count) {
                           user.bawal >= count * 1
                            user.bawal -= count * 2
                            user.coal -= count * 1
                            user.bawalbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} bawal bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak bawal bakar\nAnda butuh 2 bawal dan 1 coal untuk memasak`, m)
					break
					case 'udangbakar':
            if (user.udang < count * 2 || user.coal < 1 * count) {
                           user.udang >= count * 1
                            user.udang -= count * 2
                            user.coal -= count * 1
                            user.udangbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} udang bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak udang bakar\nAnda butuh 2 udang dan 1 coal untuk memasak`, m)
					break
					case 'pausbakar':
            if (user.paus < count * 2 || user.coal < 1 * count) {
                           user.paus >= count * 1
                            user.paus -= count * 2
                            user.coal -= count * 1
                            user.pausbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} paus bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak paus bakar\nAnda butuh 2 paus dan 1 coal untuk memasak`, m)
					break
					case 'kepitingbakar':
            if (user.kepiting < count * 2 || user.coal < 1 * count) {
                           user.kepiting >= count * 1
                            user.kepiting -= count * 2
                            user.coal -= count * 1
                            user.kepitingbakar += count * 1
                            conn.reply(m.chat, `Sukses memasak ${count} kepiting bakar🍖`, m)
                       } else conn.reply(m.chat, `Anda tidak memiliki bahan untuk memasak kepiting bakar\nAnda butuh 2 kepiting dan 1 coal untuk memasak`, m)
					break
default:
await conn.sendButton(m.chat, `*𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ${user.premium ? "✅": "❌"}*\n${wm}`, cocinar, [
[`🤺 𝙄𝙣𝙫𝙚𝙣𝙩𝙖𝙧𝙞𝙤 𝙙𝙚 𝘾𝙤𝙢𝙗𝙖𝙩𝙚`, `${usedPrefix}inventario 2`],
[`🏕️ 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖𝙧 | 𝙑𝙚𝙣𝙩𝙪𝙧𝙚`, `${usedPrefix}adventure`],
['💗 𝙈𝙚𝙣𝙪 𝘼𝙫𝙚𝙣𝙩𝙪𝙧𝙖 | 𝙍𝙋𝙂', '.rpgmenu']], m, { mentions: conn.parseMention(cocinar) })	    
await conn.sendMessage(m.chat, {
				text: wm,
				footer: cocinar,
				title: '「 *C O O K I N G* 」',
				buttonText: "C O O K I N G",
				sections: [{
					title: "List Featured",
					rows: [{
				title: "Ayam Bakar 🍖",
				rowId: ".cook ayambakar",
				description: "Cooking Ayam Bakar"
			},{
				title: "Ayam Goreng 🍗",
				rowId: ".cook ayambakar",
				description: "Cooking Ayam Goreng"
			},{
				title: "Opor Ayam 🍜",
				rowId: ".cook oporayam",
				description: "Cooking Opor Ayam"
			},{
				title: "Steak 🥩",
				rowId: ".cook steak",
				description: "Cooking Steak"
			},{
				title: "Rendang 🥘",
				rowId: ".cook rendang",
				description: "Cooking Rendang"
			},{
				title: "Gulai Ayam 🍲",
				rowId: ".cook gulaiayam",
				description: "Cooking Gulai Ayam"
			},{
				title: "Babi Panggang 🥠",
				rowId: ".cook babipanggang",
				description: "Cooking Babi Panggang"
			},{
				title: "ikan bakar 🐟",
				rowId: ".cook ikanbakar",
				description: "Cooking ikan bakar"
			},{
				title: "lele bakar 🐟",
				rowId: ".cook lelebakar",
				description: "Cooking lele bakar"
			},{
				title: "nila bakar 🐟",
				rowId: ".cook nilabakar",
				description: "Cooking nila bakar"
			},{
				title: "bawal bakar 🐟",
				rowId: ".cook bawalbakar",
				description: "Cooking bawal bakar"
			},{
				title: "udang bakar 🦐",
				rowId: ".cook udangbakar",
				description: "Cooking udang bakar"
			},{
				title: "paus bakar 🐳",
				rowId: ".cook pausbakar",
				description: "Cooking paus bakar"
			},{
				title: "kepiting bakar 🦀",
				rowId: ".cook kepitingbakar",
				description: "Cooking kepiting bakar"
			}
					]
				}]
			})
            }
        }
    } catch (e) {
        conn.reply(m.chat, `Sepertinya ada yg eror,coba laporin ke owner deh`, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['masak <masakan> <args>', 'cook <masakan> <args>']
handler.tags = ['rpg']
handler.command = /^(masak|cook)$/i

export default handler
