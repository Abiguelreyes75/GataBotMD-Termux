async function handler(m, { usedPrefix }) {
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
await m.reply( '😺𝘼𝙌𝙐𝙄 𝙏𝙄𝙀𝙉𝙀𝙎 𝙇𝘼 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙎𝙐𝘽𝘽𝙊𝙏𝙎 (𝙎𝙀𝙍𝘽𝙊𝙏/𝙅𝘼𝘿𝙄𝘽𝙊𝙏) 𝘼𝘾𝙏𝙄𝙑𝙊𝙎 🤖️*\n\n*◉ 𝙋𝙐𝙀𝘿𝙀𝙎 𝘾𝙊𝙉𝙏𝘼𝘾𝙏𝘼𝙍𝙇𝙊𝙎 𝙋𝘼𝙍𝘼 𝙋𝙀𝘿𝙄𝙍 𝙌𝙐𝙀 𝙎𝙀 𝙐𝙉𝘼𝙉 𝘼 𝙏𝙐 𝙂𝙍𝙐𝙋𝙊, 𝙎𝙀 𝙍𝙀𝙎𝙋𝙀𝙏𝙐𝙊𝙎𝙊*\n\n*◉ 𝙎𝙄 𝙀𝙇 𝙏𝙀𝙓𝙏𝙊 𝘼𝙋𝘼𝙍𝙀𝘾𝙀 𝙀𝙉 𝘽𝙇𝘼𝙉𝘾𝙊 𝙎𝙄𝙂𝙉𝙄𝙁𝙄𝘾𝘼 𝙌𝙐𝙀 𝙉𝙊 𝘼𝙃𝙄 𝙎𝙐𝘽𝘽𝙊𝙏𝙎 𝘼𝘾𝙏𝙄𝙑𝙊𝙎*\n\n*[❗] 𝙀𝙇/𝙇𝘼 𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊/𝘼 𝙎𝙀 𝘿𝙀𝙎𝙇𝙄𝙉𝘼 𝘿𝙀 𝙏𝙊𝘿𝙊 𝙎𝙐𝘾𝙀𝙎𝙊 𝙊𝘾𝙐𝙍𝙍𝙄𝘿𝙊 𝘾𝙊𝙉 𝙍𝙀𝙎𝙋𝙀𝘾𝙏𝙊 𝘼𝙇 𝘽𝙊𝙏 𝙊 𝙎𝙐𝘽𝘽𝙊𝙏𝙎*')
await m.reply(users.map(v => '👉🏻 wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}estado (${v.name})`).join('\n'))}
handler.command = handler.help = ['listjadibot','bots','subsbots']
handler.tags = ['jadibot']
export default handler
