const users = new Map()

async function antiSpam(sock, msg, from) {
  const sender = msg.key.participant || msg.key.remoteJid

  let count = users.get(sender) || 0
  count++

  users.set(sender, count)

  if (count > 5) {
    await sock.sendMessage(from, {
      text: "⚠️ Spam detected!"
    })

    await sock.groupParticipantsUpdate(from, [sender], "remove")

    users.set(sender, 0)
  }

  setTimeout(() => {
    users.set(sender, 0)
  }, 5000)
}

module.exports = antiSpam
