let antibotEnabled = true

async function antiBot(sock, msg, from) {
  if (!antibotEnabled) return

  const sender = msg.key.participant || msg.key.remoteJid

  if (sender.includes("bot") || sender.includes("Bot")) {
    await sock.groupParticipantsUpdate(from, [sender], "remove")

    await sock.sendMessage(from, {
      text: "🤖 Bot detected and removed!"
    })
  }
}

module.exports = { antiBot, antibotEnabled }
