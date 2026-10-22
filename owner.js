module.exports = {
  command: ["owner", "creator"],
  description: "kontak owner verified",
  run: async (sock, m, args) => {
    const nomorOwner = global.owner
    const namaOwner = global.ownername

    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${namaOwner} - Owner
ORG:${namaOwner} Verified;
TEL;type=CELL;type=VOICE;waid=${nomorOwner}:+${nomorOwner}
X-WA-BIZ-NAME:${namaOwner}
X-WA-BIZ-DESCRIPTION:I AM SUKI
END:VCARD`

    const contact = {
      contacts: {
        displayName: namaOwner,
        contacts: [{ vcard }]
      }
    }

    await sock.sendMessage(m.key.remoteJid, contact, { quoted: m })
    
    await sock.sendMessage(m.key.remoteJid, { 
      text: `Nih owner gue kak @${nomorOwner} chat aja kalo mau vcs`,
      mentions: [nomorOwner + '@s.whatsapp.net']
    }, { quoted: m })
  }
}
