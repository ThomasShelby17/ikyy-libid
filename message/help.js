exports.gameMenu = (prefix) => {
    return `
━━━ *「* Menu do jogo *」* ━━━
 ╭━─━─━─━─━─━─━─━─━─━─━=
 ╿✎  ${prefix}slot
 ╿✎ Jogos de usuário
 ╿Use: !slot
 ╿
 ╿✎  ${prefix}limitgame
 ╿✎ Limita usuário
 ╿Use : *${prefix}limitgame*
 ╰━─━─━─━─━─━─━─━─━─━─┈≡

━━━ 「 JOGOS DA VELHA 」 ━━━
 ╭━─━─━─━─━─━─━─━─━─━─━=
 ╿✎  ${prefix}ttt @tag
 ╿✎ inicia um jogo da velha contra o usuário
 ╿Use :  *${prefix}ttt @tag*
 ╿
 ╿✎  ${prefix}velha @tag
 ╿✎ inicia um jogo da velha contra o bot
 ╿Use :  *${prefix}velha @tag*
 ╿
 ╿✎  ${prefix}ppt *pedra Papel Tesoura
 ╿✎ jogo pedra papel tesoura
 ╿Use : *${prefix}ppt *pedra Papel Tesoura*
 ╰━─━─━─━─━─━─━─━─━─━─┈≡
`
}
exports.funMenu = (prefix) => {
    return `
 ─━─━ *「* DIVERSÃO MENU *」* ━─━─
 ╭━─━─━─━─━─━─━─━─━─━─━=
 ╿✎  ${prefix}mining
 ╿✎ -Usuário do jogo
 ╿Use : *${prefix}mining*
 ╿
 ╿✎  ${prefix}rank
 ╿✎ -mostra os ranks dos melhores no nivelamento
 ╿Use : *${prefix}rank*
 ╿
 ╿  by italu (tiringa)
 ╿✎ ${prefix}simi
 ╿fale com o bot com ${prefix}simi (texto)
 ╿
 ╿✎ ${prefix}nomeninja (texto)
 ╿exemplo: ${prefix}nomeninja Libid
 ╿Cria um nome ninja
 ╿
 ╿✎ ${prefix}gerarnick (texto)
 ╿exemplo: ${prefix}gerarnick libid
 ╿Cria um nick modificando as letras
 ╿
 ╿✎ ${prefix}ppt (pedra, papel ou tesoura)
 ╿exemplo: ${prefix}ppt pedra 
 ╿Jogue pedra, papel e tesoura com o bot
 ╿
 ╿✎ ${prefix}sn
 ╿faça uma pergunta com ${prefix}sn
 ╿Lhe diz sim ou não para uma pergunta
 ╿
 ╿✎ ${prefix}gado
 ╿use apenas ${prefix}gado
 ╿Lhe diz seu nível de gado
 ╿
 ╿✎ ${prefix}rankgay
 ╿use apenas ${prefix}rankgay
 ╿Lhe diz o rank gay do grupo
 ╿
 ╿✎ ${prefix}chance
 ╿use  ${prefix}chance do Libid ser gay
 ╿Lhe diz a chance de algo
 ╿
 ╿✎ ${prefix}pau
 ╿use apenas ${prefix}pau
 ╿Lhe diz o tamanho do seu brinquedo
 ╿
 ╿✎ ${prefix}cassino
 ╿use apenas ${prefix}cassino
 ╿jogo
 ╿
 ╿✎ ${prefix}roleta
 ╿use apenas ${prefix}roleta
 ╿Roleta russa
 ╿
 ╿✎ ${prefix}luta @pessoa
 ╿use ${prefix}luta @pessoa
 ╿começa um jogo de luta entre vc e a pessoa
 ╿mais em breve kkkkkkk
 ╰━─━─━─━─━─━─━─━─━─━─┈≡
`
}
exports.imagens = (prefix) => {
    return `
 ╭━─━─━─━─━─━─━─━─━─━─━=
 ╿✎ ${prefix} hitler (imagem)
 ╿use ${prefix}hitler e marque uma imagem
 ╿exemplo ${prefix}hitler (marcar imagem) faz figurinha ao procurando hitler
 ╰━─━─━─━─━─━─━─━─━─━─┈≡
 
 ╭━─━─━─━─━─━─━─━─━─━─━=
 ╿✎ ${prefix}inverte (imagem)
 ╿use ${prefix}inverte e marque uma imagem
 ╿exemplo ${prefix}inverte (marcar imagem) faz figurinha ao contrário (igual o meme do contrário)
 ╰━─━─━─━─━─━─━─━─━─━─┈≡

 ╭━─━─━─━─━─━─━─━─━─━─━=
 ╿✎ ${prefix}shit (imagem)
 ╿use ${prefix}shit e marque uma imagem
 ╿exemplo ${prefix}shit (marcar imagem) faz figurinha no estilo shit
 ╰━─━─━─━─━─━─━─━─━─━─┈≡

 ╭━─━─━─━─━─━─━─━─━─━─━=
 ╿✎ ${prefix}lixo (imagem)
 ╿use ${prefix}lixo e marque uma imagem
 ╿exemplo ${prefix}lixo (marcar imagem) faz figurinha no estilo um meme  
 ╰━─━─━─━─━─━─━─━─━─━─┈≡

 ╭━─━─━─━─━─━─━─━─━─━─━=
 ╿✎ ${prefix}figuc (imagem)
 ╿use ${prefix}figuc e marque uma imagem
 ╿exemplo ${prefix}figuc (marcar imagem) faz figurinha redonda
 ╰━─━─━─━─━─━─━─━─━─━─┈≡

 ╭━─━─━─━─━─━─━─━─━─━─━=
 ╿✎ ${prefix}arma (imagem)
 ╿use ${prefix}arma e marque uma imagem
 ╿exemplo ${prefix}arma (marcar imagem) faz figurinha com arma
 ╰━─━─━─━─━─━─━─━─━─━─┈≡

 ╭━─━─━─━─━─━─━─━─━─━─━=
 ╿✎ ${prefix}drip (imagem)
 ╿use ${prefix}drip e marque uma imagem
 ╿exemplo ${prefix}drip (marcar imagem) faz figurinha no drip 🥶
 ╰━─━─━─━─━─━─━─━─━─━─┈≡
`
}
exports.otherMenu = (prefix) => {
    return `
╭━─━─━─━─━─━─━─━─━─━─━=
╿              「 *MENU EXTRA* 」
╘┬─━─━─━─━─━─━─━─━─━─━=
┌┤
╿╿✎  ${prefix}brainly *consulta*
╿╿✎  ${prefix}shopee  _*produtos*_
╿╿✎  ${prefix}playstore  _*consulta*_
╿╿✎  ${prefix}ssweb  _*consulta*_
╿╿✎  ${prefix}google  _*consulta*_
╿╿✎  ${prefix}image  _*consulta*_
╿╿✎  ${prefix}pinterest  _*consulta*_
╿╿✎  ${prefix}nulis  _*texto*_
╿╿✎  ${prefix}iguser  _*nome do usuário*_
╿╿✎  ${prefix}igstalk  _*nome do usuário*_
╿╿✎  ${prefix}githubstalk  _*nome do usuário*_
╿╿✎  ${prefix}tiktokstalk  _*nome do usuário*_
╿╿✎  ${prefix}img2url  _*responder foto*_
╿╿✎  ${prefix}ytsearch  _*consulta*_
╿╰─━─━─━─━─━─━─━─━─━┈┈=
╿            🤖「𝗟𝗜𝗕𝗜𝗗 𝗕𝗢𝗧」🤖
╰━─━─━─━─━─━─━─━─━─━─┈≡
`
}
exports.stickerMenu = (prefix) => {
    return `
 ╭━─━─━─━─━─━─━─━─━─━─━=
 ╿  「 *MENU DE FIGURINHAS* 」
 ╘┬─━─━─━─━─━─━─━─━─━─━=
 ┌┤
 ╿╿✎  ${prefix}dadu
 ╿╿ Autocolante de dar dados
 ╿╿Use: *${prefix}dadu*
 ╿╿
 ╿╿✎  ${prefix}doge
 ╿╿ Dê um adesivo de Doge
 ╿╿Use: *${prefix}doge*
 ╿╿
 ╿╿✎  ${prefix}toimg
 ╿╿ Alterar * adesivo * para * foto *
 ╿╿Use: *${prefix}toimg*
 ╿╿
 ╿╿✎  ${prefix}ttg* 
 ╿╿Dê um adesivo de texto
 ╿╿Use: *${prefix}ttg* _*teks*_
 ╿╿
 ╿╿✎  ${prefix}attp
 ╿╿ Dê um adesivo de texto
 ╿╿Use: *${prefix}attp* _*texto*_
 ╿╿
 ╿╿✎  ${prefix}stickeranime
 ╿╿ Distribuindo adesivos de anime
 ╿╿Use:  *${prefix}stickeranime*
 ╿╿
 ╿╿✎  ${prefix}semoji* _*emoji*_
 ╿╿Dê um adesivo de Doge
 ╿╿Use: 
 ╿╿
 ╿╿✎  ${prefix}sticker* 
 ╿╿Transforme fotos em figurinhas
 ╿╿Use: *${prefix}sticker* _*marcar foto/video*_
 ╿╿
 ╿╿✎  ${prefix}swm
 ╿╿ Dê nome as figurinhas
 ╿╿Use: *${prefix}swm* _*pack|author*_
 ╿╿
 ╿╿✎  ${prefix}take*
 ╿╿Use: *${prefix}take* _*pacote | autor*_
 ╿╿
 ╿╿✎  ${prefix}tovideo* _*responder sgif * _
 ╿╿Transformando figurinhas GIF em vídeos
 ╿╿Use: *${prefix}tovideo*
 ╿╿
 ╿╿✎  ${prefix}togif* _*responder sgif * _
 ╿╿Transformando figurinhas GIF em gif
 ╿╿Use: *${prefix}togif*
 ╿╿
 ╿╿✎  ${prefix}attp1 (texto)
 ╿╿exemplo ${prefix}attp1 aaa
 ╿╿faz sticker led
 ╿╿
 ╿╿✎  ${prefix}attp2 (texto)
 ╿╿exemplo ${prefix}attp2 aaa
 ╿╿faz sticker led
 ╿╿
 ╿╿✎  ${prefix}attp3 (texto)
 ╿╿exemplo ${prefix}attp3 aaa
 ╿╿faz sticker led
 ╿╿
 ╿╿✎  ${prefix}attp4 (texto)
 ╿╿exemplo ${prefix}attp4 aaa
 ╿╿faz sticker led
 ╿╿
 ╿╿✎  ${prefix}attp5 (texto)
 ╿╿exemplo ${prefix}attp5 aaa
 ╿╿faz sticker led
 ╿╰─━─━─━─━─━─━─━─━─━┈┈=
 ╿            🤖「𝗟𝗜𝗕𝗜𝗗 𝗕𝗢𝗧」🤖
 ╰━─━─━─━─━─━─━─━─━─━┈┈=
`
}
exports.wibuMenu = (prefix) => {
    return `
╭━─━─━─━─━─━─━─━─━─━─━=
╿  「 *MENU PARA ANIMES* 」
╘┬─━─━─━─━─━─━─━─━─━─━=
┌┤
╿╿✎  ${prefix}loli
╿╿pesquisar imagens do mundo do bot
╿╿Use: *${prefix}loli*
╿╿
╿╿✎  ${prefix}manga
╿╿pesquisar imagens do mundo do bot
╿╿Use: *${prefix}manga*
╿╿
╿╿✎  ${prefix}anime
╿╿pesquisar imagens do mundo do bot
╿╿Use:
╿╿
╿╿✎  ${prefix}lolivideo
╿╿ pesquisar imagens do mundo do bot
╿╿Use: 
╿╿
╿╿✎  ${prefix}husbu
╿╿pesquisar imagens do mundo do bot
╿╿Use: *${prefix}husbu*
╿╿
╿╿✎  ${prefix}waifu
╿╿pesquisar imagens do mundo do bot
╿╿Use: *${prefix}waifu*
╿╿
╿╿✎  ${prefix}milf
╿╿pesquisar imagens do mundo do bot
╿╿Use: *${prefix}milf*
╿╿
╿╿✎  ${prefix}neko
╿╿pesquisar imagens  nek o
╿╿Use: *${prefix}neko*
╿╿
╿╿✎  ${prefix}kanna
╿╿pesquisar imagens kanna
╿╿Use: *${prefix}kanna*
╿╿
╿╿✎  ${prefix}sagiri
╿╿pesquisar imagens sagiri
╿╿Use: *${prefix}sagiri*
╿╿
╿╿✎  ${prefix}hentai
╿╿pesquisar imagens hentai
╿╿Use: *${prefix}hentai*
╿╿
╿╿✎  ${prefix}cosplay
╿╿pesquisar imagens cosplay
╿╿Use: *${prefix}cosplay*
╿╿
╿╿✎  ${prefix}wallnime
╿╿pesquisar imagens wallnime
╿╿Use: *${prefix}wallnime*
╿╿
╿╿✎  ${prefix}kUsenime
╿╿pesquisar imagens kUsenime
╿╿Use: *${prefix}kUsenime*
╿╿
╿╿✎  ${prefix}megumin
╿╿pesquisar imagens Usenime
╿╿Use: *${prefix}megumin*
╿╿
╿╿✎  ${prefix}otakudesu
╿╿pesquisar imagens otakudesu
╿╿Use: *${prefix}otakudesu*
╿╿
╿╿✎  ${prefix}doujindesu
╿╿pesquisar imagens otakudesu
╿╿Use: *${prefix}doujindesu*
╿╿
╿╿✎  ${prefix}storyanime
╿╿pesquisar imagens storyanime
╿╿Use: *${prefix}storyanime*
╿╿
╿╿✎  ${prefix}nakanomiku
╿╿pesquisar imagens nakanomiku
╿╿Use: *${prefix}nakanomiku*
╿╿
╿╿✎  ${prefix}nakanonino
╿╿pesquisar imagens nakanonino
╿╿Use: *${prefix}nakanonino*
╿╿
╿╿✎  ${prefix}nakanoitsuki
╿╿pesquisar imagens nakanoitsuki
╿╿Use: *${prefix}nakanoitsuki*
╿╿
╿╿✎  ${prefix}otakuongoing
╿╿pesquisar imagens otakuongoing
╿╿Use: *${prefix}otakuongoing*
╿╿
╿╿✎  ${prefix}nhentai *code
╿╿baixa seu hentai em pdf
╿╿Use: *${prefix}nhentai *code*
╿╿
╿╿✎  ${prefix}nekopoi *link
╿╿pesquisar imagens nekopoi
╿╿Use: *${prefix}nekopoi *link*
╿╿
╿╿✎  ${prefix}nekopoi3d
╿╿pesquisar imagens nekopoi3d
╿╿Use: *${prefix}nekopoi3d*
╿╿
╿╿✎  ${prefix}nekopoicosplay
╿╿pesquisar imagens nekopoicosplay
╿╿Use: *${prefix}nekopoicosplay*
╿╿
╿╿✎  ${prefix}nekopoisearch* 
╿╿pesquisar imagens nekopoisearch
╿╿Use: *${prefix}nekopoisearch*
╿╿
╿╿✎  ${prefix}anime* (nome do anime)
╿╿pesquisa a imagem e informações do anime
╿╿Use: *${prefix}anime* seu anime
╿╰─━─━─━─━─━─━─━─━─━┈┈=
╿            🤖「𝗟𝗜𝗕𝗜𝗗 𝗕𝗢𝗧」🤖
╰━─━─━─━─━─━─━─━─━─━┈┈=
`
}
exports.ownerMenu = (prefix) => {
    return `
╭━─━─━─━─━─━─━─━─━─━─━=
╿  「 *DONO DO LIBID* 」
╘┬─━─━─━─━─━─━─━─━─━─━=
┌┤
╿╿
╿╿✎ bc *texto*
╿╿✎ term
╿╿✎ entrar* link gp
╿╿✎ eval*
╿╿✎ reiniciar
╿╿✎ clearall
╿╿✎ getquoted
╿╿✎ premium* add @tags | número
╿╿✎ addupdate* funcionalidades
╿╿✎ leaveall
╿╿✎ premium* _*adicionar / deletar tempo*_
╿╿✎exif* _*nome | autor*_
╿╿✎ leaveall
╿╿✎ addpalavra
╿╿✎ delpalavra
╿╿✎ lispalavras
╿╿✎ antipalavra 1/0
╿╰─━─━─━─━─━─━─━─━─━┈┈=
╿          🚩「 *LIBIDGEL* 」🚩
╰━─━─━─━─━─━─━─━─━─━┈┈=
`
}

exports.groupMenu = (prefix) => {
    return`
╭━─━─━─━─━─━─━─━─━─━─━=
╿          👨‍💻「 *MODERAÇÃO* 」👨‍💻
╘┬─━─━─━─━─━─━─━─━─━─━=
┌┤
╿╿✎!add
╿╿Adicione usuários ao grupo.
╿╿Use: *!add* 628xxxxxxxxxx
╿╿
╿╿✎*!kick
╿╿Remova membros do grupo.
╿╿Use: *!kick* @member1
╿╿
╿╿✎!promote
╿╿Promova membros para se tornarem administradores.
╿╿Use: *!promote* @member1
╿╿
╿╿✎!demote
╿╿Rebaixar o membro de admin.
╿╿Use: *!demote* @membro 1
╿╿
╿╿✎!leave
╿╿O bot vai deixar o grupo.
╿╿Use: *!leave*
╿╿
╿╿✎!tagall
╿╿Mencione o grupo de membros.
╿╿Use: *!tagall*
╿╿
╿╿✎!grup
╿╿Use: *grup* buka/tutup
╿╿
╿╿✎!setppgrup
╿╿Altere o ícone do grupo.
╿╿Use: Envie uma imagem com uma legenda *! Setppgroup * ou responda uma imagem com uma legenda *! Groupicon *.
╿╿
╿╿✎!antilink
╿╿Desligue / ligue o recurso de link anti-grupo.
╿╿Use: *!antilink* 1/0
╿╿
╿╿✎!welcome
╿╿Ligue / desligue o recurso de boas-vindas no grupo para dar as boas-vindas à chegada de cada membro.
╿╿Use: *!welcome* 1/0
╿╿
╿╿✎!setdecs
╿╿Mude a aparência da descrição.
╿╿Use: *!setdecs* sua descrição
╿╿
╿╿✎!linkgp
╿╿Grupo de convite do link grupo.
╿╿Use: *!linkgp*
╿╿
╿╿✎!listonline
╿╿Dê / marque online em grupos.
╿╿Use: *!listonline*
╿╿
╿╿✎!mute
╿╿Silencie os bot do grupo permitindo q so os adms possa usar os comandos.
╿╿Use: *!mute* 1/0
╿╿
╿╿✎!grupo
╿╿mostra os os recursos para ativar no grupo
╿╿Use: *!grupo* 
╿╿
╿╰─━─━─━─━─━─━─━─━─━┈┈=
╿          👨‍💻「 *MODERAÇÃO* 」👨‍💻
╰━─━─━─━─━─━─━─━─━─━┈┈=
`
}
exports.downloadMenu = (prefix) => {
    return `
╭━─━─━─━─━─━─━─━─━─━─━=
╿  「 *MENU PARA DOWNLOAD* 」
╘┬─━─━─━─━─━─━─━─━─━─━=
┌┤✎  ${prefix}facebook
╿╿Baixe o vídeo do Facebook.
╿╿Use: *${prefix}facebook* link_video
╿╿
╿╿✎  ${prefix}nthentaipdf*
╿╿Pesquise e baixe hentais em pdf.
╿╿Use: *${prefix}nthentaipdf* -code-
╿╿
╿╿✎  ${prefix}tiktok*
╿╿Baixe o vídeo do TikTok.
╿╿Use: *${prefix}tiktok* link_video
╿╿
╿╿✎  ${prefix}twitter*
╿╿Baixe mídia do Twitter.
╿╿Use: *${prefix}twiter* link
╿╿
╿╿✎  ${prefix}tiktoknowm*
╿╿Baixe o código-fonte do tiktokvideo.
╿╿Use: *${prefix}tiktoknowm*
╿╿
╿╿✎  ${prefix}igdl*
╿╿Baixe vídeos do Source Instagram.
╿╿Use: *${prefix}ig* link_video
╿╿
╿╿✎  ${prefix}ytmp3*
╿╿Baixar usuário do canal de áudio
╿╿Use: *${prefix}ytmp3* Link Video
╿╿
╿╿✎  ${prefix}ytmp4*
╿╿Baixar vídeo do usuário do canal
╿╿Use: *${prefix}ytmp4* Link de vídeo
╿╿
╿╿✎  ${prefix}soundcloud*
╿╿ Baixe música soundcloud.
╿╿Use: *${prefix}souncloud* link_music
╿╿
╿╿✎  ${prefix}tikokaudio*
╿╿pesquisar áudio tikok
╿╿Use: *${prefix}linedl* link_sticker
╿╿
╿╿✎  ${prefix}play
╿╿ pesquisar áudio do YouTube
╿╿Use: *${prefix}play* nome da música
╿╿
╿╿✎  ${prefix}xnxx
╿╿ baixa imagem do link e informações (não faça em gp sem permissão de um adm)
╿╿Use: *${prefix}xnxx* (https://www.xnxx.com/video-...)
╿╿✎  ${prefix}xnxxsearch
╿╿ procura informações do site com resultados
╿╿Use: *${prefix}xnxxsearch* cu
╿╿
╿╿✎✎  ${prefix}yt
╿╿ manda lista de músicas para vc baixar
╿╿Use: *${prefix}yt* needs
╿╰─━─━─━─━─━─━─━─━─━┈┈=
╿          📥「 *DOWNLOAD* 」📥
╰━─━─━─━─━─━─━─━─━─━┈┈=
`
}
exports.edtmenu = (prefix) => {
    return `
╭━─━─━─━─━─━─━─━─━─━─━=
╿  「 *MENU DE EFEITOS* 」
╘┬─━─━─━─━─━─━─━─━─━─━=
┌┤
╿╿✎ ${prefix}esquilo (marque um áudio)
╿╿use apenas #esquilo
╿╿Efeito de áudio esquilo
╿╿
╿╿✎ ${prefix}slow (marque um áudio)
╿╿use apenas ${prefix}slow
╿╿Efeito de áudio lento
╿╿
╿╿✎ ${prefix}gemuk (marque um áudio)
╿╿use apenas ${prefix}gemuk
╿╿Efeito de áudio gigante
╿╿
╿╿✎ ${prefix}bass (marque um áudio)
╿╿use apenas ${prefix}bass
╿╿Aumenta o bass de uma música
╿╿
╿╿✎ ${prefix}earrape
╿╿use apenas ${prefix}earrape
╿╿Deixa o áudio estourado
╿╿
╿╿✎ ${prefix}fast
╿╿use apenas ${prefix}fast
╿╿Deixa o áudio rápido
╿╿
╿╿✎ ${prefix}fastvid
╿╿use apenas ${prefix}fastvid
╿╿Deixa o video no estilo fast
╿╿
╿╿✎ ${prefix}reversevid
╿╿use apenas ${prefix}reversevid
╿╿reverte video
╿╿
╿╿✎ ${prefix}slowvid
╿╿use apenas ${prefix}slowvid
╿╿deixa o video lento
╿╰─━─━─━─━─━─━─━─━─━┈┈=
╿          🛠️「 *EFEITOS* 」📐
╰━─━─━─━─━─━─━─━─━─━┈┈=
`
}
exports.rulesBot = (prefix) => {
    return `
╭━─━─━─━─━─━─━─━─━─━─━=
╿      📜「 *REGRAS BOT* 」📜
╘┬─━─━─━─━─━─━─━─━─━─━=
┌┤
╿╿
╿╿✎1. Não envie spam para bot.
╿╿punição: * block *
╿╿
╿╿✎2. Não ligue bot.
╿╿punição: * BLOCO SUAVE *
╿╿
╿╿✎3. Não chingue o bot.
╿╿punição: * BLOCO PERMANENTE *
╿╿
╿╿✎3. Meu menu sc é feio, o importante é
╿╿Meu bot anda acordado
╿╿Se você entende as regras, digite * ${prefix}menu * para começar!
╿╿
╿╿✎ * Se você deseja este script, entre em contato com o proprietário *
╿╿
╿╿✎Proprietário:
╿╿wa.me/556996103915
╿╰─━─━─━─━─━─━─━─━─━┈┈=
╿      📜「 *REGRAS BOT* 」📜
╰━─━─━─━─━─━─━─━─━─━┈┈=
`
}
exports.premmenu = (prefix) => {
    return `
╭━─━─━─━─━─━─━─━─━─━─━=
╿  「 *💎 PREMIUM 💎* 」
╘┬─━─━─━─━─━─━─━─━─━─━=
┌┤
╿╿✎${prefix}nhentaipdf
╿╿baixa música hentai em pdf
╿╿Use: *${prefix}nhentaipdf* -cod-
╿╿
╿╿✎${prefix}nhentai
╿╿manda info do hentai
╿╿Use: *${prefix}nhentai* -cod-
╿╿
╿╿✎${prefix}hentai
╿╿manda fotos de hentai kkkkkkk
╿╿Use: *${prefix}hentai* -nome-
╿╿
╿╿✎!add
╿╿Adicione usuários ao grupo.
╿╿Use: *!add* 556xxxxxxxxxx
╿╿
╿╿✎!kick
╿╿Remova membros do grupo.
╿╿Use: *!kick* @member1
╿╰─━─━─━─━─━─━─━─━─━┈┈=
╿          💎「 *Premium* 」💎
╰━─━─━─━─━─━─━─━─━─━┈┈=
`
}
exports.infoMenu = (prefix) => {
return `
╭━─━─━─━─━─━─━─━─━─━─━=
╿  「 *🤔 INFORMAÇÕES 🤔* 」
╘┬─━─━─━─━─━─━─━─━─━─━=
┌┤
╿╿✎ update
╿╿✎ level
╿╿✎ listsewa
╿╿✎ sourcecode
╿╿✎ reiniciar
╿╿✎ prefil
╿╿✎ status
╿╿✎ regras
╿╿✎ rank
╿╿✎ owner
╿╿✎ ping
╿╿✎ runtime
╿╿✎ listpremium
╿╿✎ cekpremium
╿╿✎ listpremium
╿╿✎ bug  _texto_
╿╰─━─━─━─━─━─━─━─━─━┈┈=
╿          🤔「 *informações* 」🤔
╰━─━─━─━─━─━─━─━─━─━┈┈=
`
}
exports.sewamenu = (prefix) => {
return `
*── 「 LISTA DE PREÇOS 」 ──*

*sem
`
}
exports.infoowner = (prefix) => {
return `
╭━─━─━─━─━─━─━─━─━─━─━=
╿          👑「 *DONO_INFOR* 」👑
╘┬─━─━─━─━─━─━─━─━─━─━=
┌┤
╿╿✎QUEM É MEU DONO ?
╿╿não vou falar
╿╿
╿╿✎ *GRUPO DA IGREJA IRMÃO*
╿╿ *https://chat.whatsapp.com/HX0Tx7q43rxGumu1PiQnRc*
╿╿
╿╿✎ *Instagram do bot*
╿╿ *@libid_gg*
╿╰─━─━─━─━─━─━─━─━─━┈┈=
╿          👑「 *DONO_INFOR* 」👑
╰━─━─━─━─━─━─━─━─━─━┈┈=
`
}