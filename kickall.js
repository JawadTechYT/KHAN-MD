async function kickAll(sock, from) {
  const group = await sock.groupMetadata(from)

  const admins = group.participants
    .filter(p => p.admin !== null)
    .map(p => p.id)

  const members = group.participants
    .filter(p => p.admin === null)
    .map(p => p.id)

  for (let user of members) {
    await sock.groupParticipantsUpdate(from, [user], "remove")
  }

  return sock.sendMessage(from, {
    text: "💥 All members removed (KickAll executed)"
  })
}

module.exports = kickAll
