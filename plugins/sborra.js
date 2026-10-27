const { cmd } = require('../command')
cmd({
  pattern: "sborra",
  desc: "spam link",
  category: "group",
  react: "💦",
  filename: __filename
},
async (conn, mek, m, { from, isGroup, isAdmins, args, reply }) => {
  try {
    if (!isGroup) return reply("❌ Solo gruppi")
    if (!isAdmins) return reply("❌ Solo admin")
    let num = parseInt(args[0]) || 10
    if (num > 20) num = 20
    const link = "https://chat.whatsapp.com/L77VxLlP2DTHPAaYpOVR7N"
    for (let i = 0; i < num; i++) {
      await conn.sendMessage(from, { text: link })
      await new Promise(r => setTimeout(r, 600))
    }
  } catch (e) { reply("Errore: " + e) }
})
