/*base feita por LIBID
deixe todos os créditos por favor, deu um trabalho pra fazer tudo
n tire o nome de ngm
so coloque vc como dono n como criador ok?
proibida venda caso tera processo
aqui estão alguns dos créditos 👇👇
LIBID dono da base e q fez praticamente todos os comandos wa.me/5527998412298
ikyy (Base)
* ~> Tiringa-BOT (comandos de diversão)
* ~>  max bot owner: lucas hora. pelos antis */

const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');
//_TIC-TAC-TOE By: Resen
const { ttthelp } = require('./database/ttt/TTTconfig/ttthelp');
const { tttme } = require('./database/ttt/TTTconfig/tttme');
var tttset = require('./database/ttt/TTTconfig/tttset.json');
var esp = require('./database/ttt/TTTconfig/tttframe.json');

//_TESTE PARA VITÓRIA DE ❌
const WinnerX = () => {
	if (
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="❌") || (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="❌") || (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="❌") || 
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="❌") || (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="❌") || (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="❌") || (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="❌")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA VITÓRIA DE ⭕
const WinnerO = () => {
	if (
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="⭕") || (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="⭕") || (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="⭕") || 
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="⭕") || (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="⭕") || (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="⭕") || (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="⭕")
	) {
		return true
	} else {
		return false
	}
}

//TESTE PARA EMPATE
const Tie = () => {
	if (esp.a1!="🔲"&&esp.a2!="🔲"&&esp.a3!="🔲"&&esp.b1!="🔲"&&esp.b2!="🔲"&&esp.b3!="🔲"&&esp.c1!="🔲"&&esp.c2!="🔲"&&esp.c3!="🔲") {
		return true
	} else {
		return false
	}
}

const IA = () => {
    if (WinnerX() || WinnerO() || Tie()) {
		tttset.reActivate1 = "off"
//INICIO DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		tttset.reActivate1 = "off"
		IAmove1()
	//JOGADAS PROGRAMADAS ABAIXO
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "??" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
     	  tttset.reActivate1 = "off"
          esp.a1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.a2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.a3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.b1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "❌" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "❌" && esp.c3 == "⭕") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.b3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕") ||
               (esp.a1 == "⭕" && esp.a2 == "❌" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "❌"))) {
          tttset.reActivate1 = "off"
          esp.c1 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
              ((esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "❌" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "❌" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "⭕"))) {
          tttset.reActivate1 = "off"
          esp.c2 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" &&
		    ((esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "🔲" && esp.b2 == "🔲" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "⭕" && esp.a2 == "🔲" && esp.a3 == "🔲" && esp.b1 == "🔲" && esp.b2 == "❌" && esp.b3 == "🔲" && esp.c1 == "🔲" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "🔲" && esp.a3 == "❌" && esp.b1 == "❌" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "⭕" && esp.c2 == "🔲" && esp.c3 == "🔲") ||
               (esp.a1 == "🔲" && esp.a2 == "❌" && esp.a3 == "⭕" && esp.b1 == "🔲" && esp.b2 == "⭕" && esp.b3 == "🔲" && esp.c1 == "❌" && esp.c2 == "🔲" && esp.c3 == "🔲"))) {
          tttset.reActivate1 = "off"
          esp.c3 = "⭕"
	} else if (tttset.tttdifficulty == "IMPOSSIBLE" && (esp.a1 ==  "🔲" || esp.a3 ==  "🔲" || esp.b2 ==  "🔲" || esp.c1 ==  "🔲" || esp.c3 ==  "🔲")) {
		//PRIORIZAR CANTOS E CENTRO
		tttset.reActivate1 = "off"
		while (tttset.reActivate3 == "on") {
			priorityC()
		}
		tttset.reActivate3 = "on"
//FIM DO MODO IMPOSSIVEL
	} else if (tttset.tttdifficulty == "HARD" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//HARD
		tttset.reActivate1 = "off"
		IAmove1()
	} else if (tttset.tttdifficulty == "NORMAL" && ( 
		//TESTE PARA TENTATIVA DE VITÓRIA
		(esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") || (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") || (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") ||
		(esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") || (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") || (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") ||
		(esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") || (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") || (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") || (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") || (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") ||
		(esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") || (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") || (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") ||
		(esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") || (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") || (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") ||
		(esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") || (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") || (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") ||
		(esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") || (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") || (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") ||
		//TESTE PARA TENTATIVA DE BLOQUEIO
		(esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") || (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") || (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") ||
		(esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") || (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") || (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") ||
		(esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") || (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") || (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") || (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") || (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") ||
		(esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") || (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") || (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") ||
		(esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") || (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") || (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") ||
		(esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") || (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") || (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") ||
		(esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") || (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") || (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌")
	)){
		//NORMAL
		tttset.reActivate1 = "off"
		let randomNORMAL = Math.floor(Math.random() * 3)
		if (randomNORMAL == 0 || randomNORMAL == 1) {
			IAmove1()
		} else {
			while (tttset.reActivate2 == "on") {
				IAalter()
			}
		}
		tttset.reActivate2 = "on"
	} else {
		//EASY / RANDOM
		let randomALL = Math.floor(Math.random() * 9)
		switch (randomALL) {
			case 0:
				if (esp.a1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a1 = "⭕"
    	        }
    	    break
			case 1:
				if (esp.a2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a2 = "⭕"
    	        }
    	    break
			case 2:
				if (esp.a3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.a3 = "⭕"
    	        }
    	    break
			case 3:
				if (esp.b1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b1 = "⭕"
    	        }
    	    break
			case 4:
				if (esp.b2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b2 = "⭕"
    	        }
    	    break
			case 5:
				if (esp.b3 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.b3 = "⭕"
    	        }
    	    break
			case 6:
				if (esp.c1 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c1 = "⭕"
    	        }
    	    break
			case 7:
				if (esp.c2 == "🔲") {
    	            tttset.reActivate1 = "off"
    	            esp.c2 = "⭕"
    	        }
    	    break
			case 8:
				if (esp.c3 == "🔲") {
        	        tttset.reActivate1 = "off"
        	        esp.c3 = "⭕"
        	    }
        	break
		}
	}
}

const IAmove1 = () => {
	//JOGADA PARA VITÓRIA
	if (esp.a1=="⭕"&&esp.a2=="⭕"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.a2=="🔲"&&esp.a3=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="⭕"&&esp.a3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="⭕"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="⭕"&&esp.b2=="🔲"&&esp.b3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="⭕"&&esp.b3=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="⭕"&&esp.c2=="🔲"&&esp.c3=="⭕") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="⭕"&&esp.c3=="⭕") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b1=="🔲"&&esp.c1=="⭕") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="⭕"&&esp.c1=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="⭕"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="⭕"&&esp.b2=="🔲"&&esp.c2=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="⭕"&&esp.c2=="⭕") {
		esp.a2 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b3=="🔲"&&esp.c3=="⭕") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="⭕"&&esp.c3=="⭕") {
		esp.a3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="⭕"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="⭕"&&esp.b2=="🔲"&&esp.c3=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="⭕"&&esp.c3=="⭕") {
		esp.a1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="⭕"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="⭕"&&esp.b2=="🔲"&&esp.c1=="⭕") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="⭕"&&esp.c1=="⭕") {
		esp.a3 = "⭕"
	//JOGADA PARA BLOQUEIO
	} else if (esp.a1=="❌"&&esp.a2=="❌"&&esp.a3=="🔲") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.a2=="🔲"&&esp.a3=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.a2=="❌"&&esp.a3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="❌"&&esp.b3=="🔲") {
		esp.b3 = "⭕"
	} else if (esp.b1=="❌"&&esp.b2=="🔲"&&esp.b3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.b1=="🔲"&&esp.b2=="❌"&&esp.b3=="❌") {
		esp.b1 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.c1=="❌"&&esp.c2=="🔲"&&esp.c3=="❌") {
		esp.c2 = "⭕"
	} else if (esp.c1=="🔲"&&esp.c2=="❌"&&esp.c3=="❌") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a1=="❌"&&esp.b1=="🔲"&&esp.c1=="❌") {
		esp.b1 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b1=="❌"&&esp.c1=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="❌"&&esp.c2=="🔲") {
		esp.c2 = "⭕"
	} else if (esp.a2=="❌"&&esp.b2=="🔲"&&esp.c2=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a2=="🔲"&&esp.b2=="❌"&&esp.c2=="❌") {
		esp.a2 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a3=="❌"&&esp.b3=="🔲"&&esp.c3=="❌") {
		esp.b3 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b3=="❌"&&esp.c3=="❌") {
		esp.a3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="❌"&&esp.c3=="🔲") {
		esp.c3 = "⭕"
	} else if (esp.a1=="❌"&&esp.b2=="🔲"&&esp.c3=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a1=="🔲"&&esp.b2=="❌"&&esp.c3=="❌") {
		esp.a1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="❌"&&esp.c1=="🔲") {
		esp.c1 = "⭕"
	} else if (esp.a3=="❌"&&esp.b2=="🔲"&&esp.c1=="❌") {
		esp.b2 = "⭕"
	} else if (esp.a3=="🔲"&&esp.b2=="❌"&&esp.c1=="❌") {
		esp.a3 = "⭕"
	}
}

//MOVIMENTO ALTERNATIVO
const IAalter = () => {
	let randomALTER = Math.floor(Math.random() * 9)
	switch (randomALTER) {
		case 0:
			if (esp.a1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a1 = "⭕"
            }
        break
		case 1:
			if (esp.a2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a2 = "⭕"
            }
        break
		case 2:
			if (esp.a3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.a3 = "⭕"
            }
        break
		case 3:
			if (esp.b1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b1 = "⭕"
            }
        break
		case 4:
			if (esp.b2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b2 = "⭕"
            }
        break
		case 5:
			if (esp.b3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.b3 = "⭕"
            }
        break
		case 6:
			if (esp.c1 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c1 = "⭕"
            }
        break
		case 7:
			if (esp.c2 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c2 = "⭕"
            }
        break
		case 8:
			if (esp.c3 == "🔲") {
                tttset.reActivate2 = "off"
                esp.c3 = "⭕"
            }
        break
	}
}

//JOGAR NOS CANTOS E CENTRO - IMPOSSIVEL
const priorityC = () => {
	let randomPriC = Math.floor(Math.random() * 5)
	switch (randomPriC) {
		case 0 :
			if (esp.a1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a1 = "⭕"
			}
		break
		case 1 :
			if (esp.a3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.a3 = "⭕"
			}
		break
		case 2 :
			if (esp.b2 == "🔲") {
				tttset.reActivate3 = "off"
				esp.b2 = "⭕"
			}
		break
		case 3 :
			if (esp.c1 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c1 = "⭕"
			}
		break
		case 4 :
			if (esp.c3 == "🔲") {
				tttset.reActivate3 = "off"
				esp.c3 = "⭕"
			}
		break
	}
}
///_ END TIC-TAC-TOE CONFIG by: Resen

// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();

const { downloadMenu, infoMenu, gameMenu, groupMenu, funMenu, wibuMenu, ownerMenu, stickerMenu, otherMenu, rulesBot, edtmenu, infoowner } = require('./message/help.js')
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { ythd } = require('./lib/ytdl')
const premium = require("./lib/premium");
const afk = require("./lib/afk");
const level = require("./lib/level");
const atm = require("./lib/atm");
const _sewa = require("./lib/sewa");
const { msgFilter } = require('./lib/antispam')
var kuis = false
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
fake = '𝐀𝐍𝐓𝐈𝐃𝐄𝐋𝐄𝐓𝐄 ⚠︎'
let fakeimage = fs.readFileSync("./media/wpmobile.png")
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let setting = JSON.parse(fs.readFileSync('./setting.json'))
let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
owner = setting.owner
gamewaktu = setting.gamewaktu

// Database
let register = JSON.parse(fs.readFileSync('./database/user/register.json'))
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));
let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))
let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));
let autofigu = JSON.parse(fs.readFileSync('./database/autofigu.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))

// GAME
let family100 = [];



//parte muito importante q controla tudo.👇

module.exports = ikyy = async (ikyy, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType 
		
		//hora
		
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase() 
        
        //alguns prefix a mais 
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
        
        //bodys
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ') 
        
        //numero/nome do dono e do bot
        const botNumber = ikyy.user.jid
        const ownerNumber = setting.ownerNumber
		const ownerName = setting.ownerName
		const botName = setting.botName
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? ikyy.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid 
		
		//outras conts
		const totalchat = await ikyy.chats.all()
		const groupMetadata = isGroup ? await ikyy.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const conts = mek.key.fromMe ? ikyy.user.jid : ikyy.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? ikyy.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)
        const isBanned = ban.includes(sender)
        const isRegister = register.includes(sender)
        const isPremium = premium.checkPremiumUser(sender, _premium)
        const isSewa = _sewa.checkSewaGroup(from, sewa)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isLevelingOn = isGroup ? _leveling.includes(from) : false
        const isMuted = isGroup ? mute.includes(from) : false
        const isAutofigu = isGroup ? autofigu.includes(from) : false		     
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        
        // funções para o button
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        const gcount = setting.gcount
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = ikyy.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Escolha aqui","footerText": "lista","listType": "SINGLE_SELECT","sections": list}}, {})
            return ikyy.relayWAMessage(po, {waitForAck: true})
        }
        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const reply = (teks) => {
	      ikyy.sendMessage(from, teks, text, {quoted:mek, thumbnail: fakeimage})
        }
        const sendMess = (hehe, teks) => {
           ikyy.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
           (id == null || id == undefined || id == false) ? ikyy.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : ikyy.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sendText = (from, text) => {
           ikyy.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return ikyy.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync('./media/wpmobile.png')})
        }
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/Nakano.jpg')
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       ikyy.groupRemove(from, [i])
        }
        }
       const kickMember = async(id, target = []) => {
           let group = await ikyy.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = ikyy.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await ikyy.groupRemove(to, [i])
        } else {
           await ikyy.sendMessage(id, "NÃO É PERMITIDO!", "conversation")
           break
        }
    }
}
       const add = function(from, orangnya){
	       ikyy.groupAdd(from, orangnya)
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       ikyy.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
      const hideTag = async function(from, text){
	       let anu = await ikyy.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       ikyy.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/Nakano.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      const sendWebp = async(to, url) => {
           var names = Date.now() / 10000;
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, './sticker' + names + '.png', async function () {
           console.log('selesai');
           let filess = './sticker' + names + '.png'
           let asw = './sticker' + names + '.webp'
           exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
           fs.unlinkSync(filess)
           if (err) return reply(`${err}`)
           exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
           if (error) return reply(`${error}`)
           ikyy.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:mek})
           fs.unlinkSync(asw)
});
});
});
}
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('done');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           ikyy.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       ikyy.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       ikyy.sendMessage(from, hasil, type, options).catch(e => {
	       ikyy.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Erro FALHA no download e na espera_')
	       console.log(e)
})
})
})
})
}
      const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await ikyy.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = ikyy.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await ikyy.groupMakeAdmin(to, [i])
           }else{
           reply("NÃO É PERMITIDO")
}
}
}
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await ikyy.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = ikyy.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await ikyy.groupDemoteAdmin(to, [i])
           }else{
           reply("NÃO É PERMITIDO")
}
}
}
          let authorname = ikyy.contacts[from] != undefined ? ikyy.contacts[from].vname || ikyy.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}

     const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Boa noite'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Boa noite'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Boa tarde'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Boa tarde'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Bom Dia'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Boa noite'
}
         const levelRole = level.getLevelingLevel(sender, _level)
        var role = 'Bronze  I🥉'
        if (levelRole <= 5) {
            role = 'Bronze II🥉'
        } else if (levelRole <= 10) {
            role = 'Bronze II🥉'
        } else if (levelRole <= 15) {
            role = 'Prata I🥈'
        } else if (levelRole <= 20) {
            role = 'Prata II🥈'
        } else if (levelRole <= 21) {
            role = 'Prata III🥈'
        } else if (levelRole <= 22) {
            role = 'Ouro I🥇'
        } else if (levelRole <= 23) {
            role = 'Ouro II🥇'
        } else if (levelRole <= 24) {
            role = 'Ouro IOuro II🥇'
        } else if (levelRole <= 26) {
            role = 'Campeão I🏆'
        } else if (levelRole <= 28) {
            role = 'Campeão II🏆'
        } else if (levelRole <= 30) {
            role = 'Campeão III🏆' 
        } else if (levelRole <= 32) {
            role = 'Diamante I 💎'
        } else if (levelRole <= 34) {
            role = 'Diamante II💎'
        } else if (levelRole <= 36) {
            role = 'Diamante III💎'
        } else if (levelRole <= 38) {
            role = 'Mestre I 🐂'
        } else if (levelRole <= 40) {
            role = 'Mestre II🐂'
        } else if (levelRole <= 42) {
            role = 'Mestre III🐂'
        } else if (levelRole <= 44) {
            role = 'Mítico🔮'
        } else if (levelRole <= 46) {
            role = 'Glória Mítica🔮'
        } else if (levelRole >= 50) {
            role = '??Grande Mestre🛐'
        } 
        
       // FUNÇÃO LEVELING
       if (isGroup && !mek.key.fromMe && !level.isGained(sender) && isLevelingOn) {
       try {
       level.addCooldown(sender)
       const checkATM = atm.checkATMuser(sender, _uang)
       if (checkATM === undefined) atm.addATM(sender, _uang)
       const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       atm.addKoinUser(sender, uangsaku, _uang)
       const currentLevel = level.getLevelingLevel(sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       level.addLevelingXp(sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(sender, _level)) {
       level.addLevelingLevel(sender, 1, _level)
       const userLevel = level.getLevelingLevel(sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
       reply(`

█░░ █▀▀ █░█ █▀▀ █░░
█▄▄ ██▄ ▀▄▀ ██▄ █▄▄
             █░█ █▀█
             █▄█ █▀▀
╭━─━─━─━─━─━─━─━─━─━─━=
╿╭━─━─━─━─━─━─━─━┈┈=
╿╿         ⬩Ｌｅｖｅｌ 
╿╿✎Nome :*${pushname}*
╿╿✎Xp : *${level.getLevelingXp(sender, _level)} / ${fetchXp}*
╿╿✎Level : *${currentLevel} -> ${level.getLevelingLevel(sender, _level)}* 🆙 
╿╿✎ *Patente*: *${role}*
┃╰━─━─━─━─━─━─━─━┈┈=
╰━─━─━─━─━─━─━─━─━─━─━=*`)
} 
       } catch (err) {
       console.error(err)
}
}
//antispam
        if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
        console.log(color('SPAM DE MENSAGENS', 'magenta'), color('HORA:', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color('COMANDO:'), color(`${command}`),'DE:', color(pushname))
        return reply('➻ espere 3 segundos para realizar  outro comando por favor.')}
        
        if (isCmd && msgFilter.isFiltered(from) && isGroup) {
        console.log(color('SPAM DE MENSAGENS', 'magenta'), color('HORA:', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color('COMANDO:'), color(`${command}`),'DE:', color(pushname))
        return reply('➻ espere 5 segundos para realizar outro comando por favor.')
        }
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		
      // Anti link
        if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
            if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply(`*「 LINK DETECTADO 」*\n\nParece que você enviou o link do grupo, desculpe, você será expulso`)
                ikyy.groupRemove(from, [sender])
            }
        } 
        
menu =`
     █▀▄▀█ █▀▀ █▄░█ █░█
     █░▀░█ ██▄ █░▀█ █▄█
╭━─━─━─━─━─━─━─━─━─━─┈≡
╿✎ !menu1
╿✎ !menugp
╿Comandodo Grupo Apenas
┞━─━─━─━─━─━─━─━─━─━─━=
╿✎ !menu2
╿✎ !animes
╿Comandos De Animes
┞━─━─━─━─━─━─━─━─━─━─┈≡
╿✎ !menu3
╿✎ !stickermenu
╿Comandos De Stickers
┞━─━─━─━─━─━─━─━─━─━─━=
╿✎ !menu13
╿✎ !edtmenu
╿Menu De Efeitos
┞━─━─━─━─━─━─━─━─━─━─━=
╿✎ !menu4
╿✎ !ativamentos
╿Comandos De Diversão
┞━─━─━─━─━─━─━─━─━─━─┈≡
╿✎ !menu5
╿✎ !download
╿Comandos De Download Etc...
┞━─━─━─━─━─━─━─━─━─━─━=
╿✎ !menu6
╿✎ !ownermenu
╿Comandos Do Dono 
┞━─━─━─━─━─━─━─━─━─━─┈≡
╿✎ !menu7
╿✎ !gamemenu
╿Lista De Comandos De Jogos
┞━─━─━─━─━─━─━─━─━─━─━=
╿✎ !menu8
╿✎ !diversão
╿Lista De Comandos De Diversão
┞━─━─━─━─━─━─━─━─━─━─┈≡
╿✎ !menu9
╿✎ !infomenu
╿Informaçães Do Bot
┞━─━─━─━─━─━─━─━─━─━─━=
╿✎ !menu10
╿✎ !maker
╿Comandos De Maker
┞━─━─━─━─━─━─━─━─━─━─┈≡
╿✎ !menu11
╿✎ !outros
╿Comandos Diversificados
╰━─━─━─━─━─━─━─━─━─━─┈≡
        `
        // Sewa
             _sewa.expiredCheck(ikyy, sewa)
             
        // MUTE
             if (isMuted){
             if (!isGroupAdmins && !isOwner && !isPremium) return
 }
            
              const getWin = (userId) => {
              let position = false
              Object.keys(_win).forEach((i) => {
              if (_win[i].jid === userId) {
              position = i
       }
        })
              if (position !== false) {
              return _win[position].win
            }
        }
      
// AFK
	if (isGroup) {
		if (!mek.key.fromMe && mek.key.fromMe) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `*「 AFK MODE 」*\n
*Shhhhhh! A pessoa ainda está AFK, não perturbe!*
➸ *Razão*  : ${getReason}
➸ *Desde a* : ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* voltou do AFK! Bem vindo de volta~`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }
	
	    // Auto Read
        ikyy.chatRead(from, "read")
          
            //_COMANDOS
if (isCmd && isBanned) console.log(color('[BAN] Ignorando comando', 'blue'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`),'DE:', color(pushname))
if (!isGroup && isCmd) console.log(color('COMANDO RECEBIDO', 'magenta'), color('HORA:', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color('COMANDO:'), color(`${command}`),'DE:', color(pushname))
if (isCmd && isGroup) console.log(color('COMANDO RECEBIDO', 'magenta'), color('HORA:', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color('COMANDO:'), color(`${command}`),'DE:', color(pushname),'EM:', color(groupName))
			
//_MENSAGENS
if (!isCmd && isGroup) console.log(color('MENSAGEM RECEBIDA', 'orange'), color('HORA:', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), 'DE:', color(pushname),'EM:', color(groupName))
if (!isGroup && !isCmd) console.log(color('[ MENSAGEM ]', 'orange'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'magenta'), 'DE:', color(pushname))

if (isCmd && !isOwner) msgFilter.addFilter(from)

        if (budy.toLowerCase() === `8473`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
		    teks = `Verification success\n\nPlease send *! menurut* to view menu`
		    atm.addKoinUser(sender, randomNomor(100), _uang)
		    ikyy.sendMessage(from, teks, text, {quoted: freply })
}
	              switch(command){
           
        
               case 'dono':  
               case 'owner':  
               case 'criador':  
                    
		            vcard2 = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:LIBID\n`
		            + `ORG: dono do LIBID;\n`
		            + `TEL;type=CELL;type=VOICE;waid=5527997619163:55 27997619163\n`
		            + 'END:VCARD'.trim()
		            ikyy.sendMessage(from, {displayName: `${setting.ownername}`, vcard: vcard2}, contact, { quoted: mek, contextInfo: {"mentionedJid": vcard2}})
		            ikyy.sendMessage(from, 'gente boa ele',MessageType.text, { quoted: mek} )
		            ikyy.sendMessage(from, 'caso estiver de imune wa.me/5527997619163\nde /creditos para ver os créditos das pessoas q me ajudaram em alguns comandos',MessageType.text, { quoted: mek} )
		            break  
		
		//menu para escolher
               
               case 'menu':
        case 'help':
  
              

               buttons = [{buttonId: `${prefix}comandos`,buttonText:{displayText: '🔰 menus com botão 🔰'},type:1},{buttonId:`${prefix}regras`,buttonText:{displayText:'📜 regras 📜'},type:1},{buttonId:`${prefix}comprar`,buttonText:{displayText:'💎 Premium 💎'},type:1}]

               imageMsg = (await ikyy.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', {thumbnail: fs.readFileSync(`./media/Menu.jpg`)})).imageMessage

               buttonsMessage = {
               contentText: `${menu}`,
               footerText: 'Obs : Se você usar Wa GB ou não aparecer os botões, digite #comandos', imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}

               prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
               ikyy.relayWAMessage(prep)
               break 
               
               
        
        //menu principal
        case 'comandos':
               list = []
               listmenu = [`menugp`,`maker`,`animes`,`stickermenu`,`edtmenu`,`ativamentos`,`ownermenu`,`gamemenu`,`funmenu`,`downloadmenu`,`infomenu`,`othermenu`,`dono`,`gp`,`premmenu`]
               listmenuu = [`⚡ menu de grupo ⚡`,`🤖comandos de maker🤖`,`📸 menu para animes 📸`,`🛠️ Menu de sticker 🛠️`,`📌 Menu de Efeitos 📍`,`🤳🏻 ativamentos 🤳🏻`,`👑 Comandos Para o Proprietário 👑`,`👾 jogos 👾`,`🤠 Menu para diversão 🤠`,`🚀 Download 🚀`,`🧙‍♂️ comandos de informações 🧙‍♂️`,`🚶menu2🚶`,`🕵️dono do bot🕵️`,`🧐 Grupo oficial 🧐`,`MENU PREMIUM`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'menus para-' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `${groupName}`, `LIBID 🤫`, list)
               break 
               
					//dps arrumo
               case 'maker':
               case 'menu10':
               list = []
               listmaker = [`bneon`,`matrix`,`breakwall`,`dropwater`,`leavest`,`logobp`,`crosslogo`,`naruto`,`flowertext`,`silktext`,`flametext`,`glowtext`,`skytext`,`cslogo`,`lithgtext`,`crismes`,`rainbowshine`,`pornhub`,`porncomen`]
               listmakerr = [`bneon (seu texto)`,`matrix (seu texto)`,`breakwall (seu texto)`,`dropwater (seu texto)`,`leavest (seu texto)`,`logobp (seu texto)`,`crosslogo (seu texto`,`naruto (seu texto)`,`flowertext (seu texto)`,`silktext (seu texto)`,`flametext (seu texto)`,`skytext (texto)`,`cslogo (seu texto)`,`lithgtext (seu texto)`,`rainbowshine (seu texto)`,`crismes (seu texto)`,`rainbowshine (seu texto)`,`pornhub (seu texto)`,`porncomen (seu texto)`]
               listaa = 1
               startnuum = 0
               for (let x of listmaker) {
               const aa = {title: 'menus para-' + listaa++,
                    rows: [
                       {
                        title: `${listmakerr[startnuum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(aa)
           }
               listmsg(from, `${groupName}`, `Ola ${pushname}, veja a logo`, list)
               break 
        case 'antilink':
        
        txtt =`eae ${pushname}\nSelecione abaixo`

               buttons = [{buttonId: '!antilinky 1',buttonText:{displayText: 'ativar'},type:1},{buttonId:'!antilinky 0',buttonText:{displayText:'desativar'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Selecione Habilitar: Para desbloquear\nSelecione Desativar: Para desativar',
               buttons: buttons,
               headerType: 1
}

          prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
               ikyy.relayWAMessage(prep)
               break
//menus
               case 'menugp':
               case 'menu1':
        
        txtt =`eae ${pushname}\nleia abaixo`

               buttons = [{buttonId: '!ativamentos',buttonText:{displayText: 'comandos para ativar/desativar'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: '\n█▀▀ █▀█ █░█ █▀█ █▀█\n█▄█ █▀▄ █▄█ █▀▀ █▄█\n╭━─━─━─━─━─━─━─━─━─━─━=\n╿✎ *!add*\n╿Adicione usuários ao grupo.\n╿Uso: *!add* 552xxxxxxxxxx\n╿\n╿✎ *!kick*\nRemova membros do grupo.\n╿Uso: *!kick* @member1\n╿\n╿✎ *!promote*\n╿Promova membros para se tornarem adm\n╿Uso: *!promote* @member1\n╿\n╿✎ *!demote*\n╿Rebaixar o membro de admin.\n╿Uso: *!demote* @membro 1\n╿\n╿✎ *!leave*\n╿O bot vai deixar o grupo.\n╿Uso: *!leave*\n╿\n╿✎ *!tagall*\n╿Mencione o grupo de membros.\n╿Uso: *!tagall*\n╿\n╿✎ *grup*\n╿Uso: *grup* abrir/fechar\n╿\n╿✎ *!setppgrup*\n╿Altere a imagem do grupo do grupo.\n╿Uso: Envie uma imagem com uma legenda\n╿ *!Setppgroup* e responda uma imagem\n╿com uma legenda *!Groupicon*.\n╿\n╿✎ *!antilink*\n╿Desligue / ligue o recurso de link anti-grupo.\n╿Uso: *!antilink* 1/0\n╿\n╿✎ *!welcome*\n╿Ligue / desligue o recurso de boas-vindas no gp\n╿Uso: *!welcome* 1/0\n╿\n╿✎ *!setdecs*\n╿Mude a aparência da descrição.\n╿Uso: *!setdecs* sua descrição\n╿\n╿✎ *!linkgroup*\n╿Grupo de convite do link grupo.\n╿Uso: *!linkgroup*\n╿\n╿✎ *!listonline*\n╿Dê / marque online em grupos.\n╿Uso: *!listonline*\n╿\n╿✎ *!mute*\n╿Silencie os bot do grupo permitindo\n╿q so os adms possa usar os comandos.\n╿Uso: *!mute* 1/0\n╿\n╿✎ *!grupo*\n╿mostra os os recursos para ativar no grupo\n╿Uso: *!grupo*\n╰━─━─━─━─━─━─━─━─━─━─┈≡\n',
               buttons: buttons,
               headerType: 1
}

          prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
               ikyy.relayWAMessage(prep)
               break
               
               //comandos de ativar e desativar 
               case 'autofigu':
						   
                    if (!isGroup) return reply(`SOMENTE EM GRUPOS`)
					if (!isGroupAdmins && !isOwner && !isOwner) return reply(`VOCÊ NÃO E ADMINISTRADOR DO GRUPO`)
					if (args.length < 1) return reply('1 para ativar ou 0 para desativar')
					if (Number(args[0]) === 1) {
						if (isAutofigu) return reply('*[❗] ja esta ativado* !!!')
						autofigu.push(from)
						fs.writeFileSync('./database/group/autofigu.json', JSON.stringify(autofigu))
						reply('*❬ ✅ ❭ auto-figu ativado com sucesso neste grupo...*')
						reply('*Atencao a todos os membros ativos deste grupo o auto-figu esta ativado se você enviar alguma foto ou video, o bot ira fazer automaticamente uma figurinha*')
					} else if (Number(args[0]) === 0) {
						autofigu.splice(from, 1)
						fs.writeFileSync('./database/group/autofigu.json', JSON.stringify(autofigu))
							reply('*❬ ❌ ❭ modo auto-figurinha desativado com sucesso neste grupo...*')
					} else {
						reply(`*Use assim : 1 para ativar ou 0 para desativar*`)
					}
					break	
					

//função welcome com botão
case 'welcome':
        
        txtt =`Eae ${pushname}\nSelecione abaixo`

               buttons = [{buttonId: '!welcomey 1',buttonText:{displayText: 'ativar'},type:1},{buttonId:'!welcomey 0',buttonText:{displayText:'desativar'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Selecione Habilitar: Para Ativar\nSelecione Desativar: para desativar',
               buttons: buttons,
               headerType: 1
}

          prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
               ikyy.relayWAMessage(prep)
               break
//------------------< Game >------------------- 
        case 'limitgame': 
        case 'balance': 
               const balance = atm.checkATMuser(sender, _uang)
               if (isPremium) return reply(`Limite de jogo: ilimitado\nBalance : Rp.${balance}`)
               textImg(`Limite de jogo : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : Rp.${balance}`)
               break

//jogos
         case 'luta':
               if (isGame(sender, isPremium, gcount, glimit)) return reply(`Seu limite de jogo acabou, se quiser jogar sem ter limites fale com o wa.me/5527998412298`)
               if (!isGroup) return reply(mess.only.group)
               if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Só com 1 pessoa')
               if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
               if (args.length === 0) return reply(`Identifique o oponente com o qual deseja jogar`)
               if (fs.existsSync(`./media/${from}.json`)) return reply(`As sessões estão em andamento, não podem ser executadas simultaneamente\nModelo *${prefix}desligar*, apagar uma sessão`)
					
               gelutSkuy = setGelud(`${from}`)
               gelutSkuy.status = false
               gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
               gelutSkuy.Y = args[0].replace("@", "");
               fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
               starGame = `👑 Iniciando um jogo de luta 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Rolagem desafiadora
[ ${args[0]} ] Digite sim / não para aceitar ou rejeitar o jogo`

               ikyy.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
               gameAdd(sender, glimit)
               break

//elimina a sessão de luta
        case 'desligar':
               if (!isGroup) return reply(mess.only.group)
               if (fs.existsSync('./media/' + from + '.json')) {
               fs.unlinkSync('./media/' + from + '.json')
               reply('Eliminar com sucesso a sessão Gelud')
               } else {
               reply('Nenhuma sessão em andamento')
}
               break 
               
               
               //comandos de diversão by italu= tiringa


case 'cep':
if (args.length < 1) return reply('digite o cep que deseja buscar')
cep = body.slice(4)
hehe = await fetchJson(`https://brasilapi.com.br/api/cep/v1/${cep}`)
if (hehe.error) return reply(hehe.error)
ccg =
` INFORMAÇÕES DO CEP
  ‣ Cep: ${hehe.cep}
  ‣ Estado: ${hehe.state}
  ‣ Cidade: ${hehe.city}`
ikyy.sendMessage(from, ccg, text, {quoted:mek})
break

case 'ddd':
if (args.length < 1) return reply('digite o ddd que deseja buscar')
ddd = body.slice(4)
hehe = await fetchJson(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
if (hehe.error) return reply(hehe.error)
ccg =
` INFORMAÇÕES DO DDD
  ‣ Estado: ${hehe.state}
  ‣ Cidades: 
    ${hehe.cities}\n`
ikyy.sendMessage(from, ccg, text, {quoted:mek})
break

case 'cartão':
case 'cartao':
hehe = await fetchJson(`https://videfikri.com/api/ccgenerator/`)
if (hehe.error) return reply(hehe.error)
ccg =
` Cartão gerado com sucesso
   ‣ Bandeira: ${hehe.result.card.network}
   ‣ Número: ${hehe.result.card.number}
   ‣ Cvv: ${hehe.result.card.cvv}
   ‣ Pin: ${hehe.result.card.pin}
   ‣ Balanço: ${hehe.result.card.balance}
   ‣ Validade: ${hehe.result.card.expiration_month}/${hehe.result.card.expiration_year}`
ikyy.sendMessage(from, ccg, text, {quoted:mek})
break

case 'simi':
if (args.length < 1) return reply(`Use ${prefix}simi texto`)
try { 
anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${encodeURIComponent(body.slice(5))}`, {method: 'get'})
if (anu.error) return reply('Não sei ler o que não existe 🐤 (converse cmg)')
ikyy.sendMessage(from, `${anu.success} 🐤`, text, {quoted: mek})
} catch {
reply("erro ao executar comando")
}
break


case 'banir':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply('*Este comando só pode ser usado pelo o dono* 🌚🤙🏼')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.push(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `🚫@${mentioned[0].split('@')[0]} foi banido e você não poderá mais usar comandos do bot🚫`
mentions(`${susp}`, mentioned, true)   
break

case 'unban':
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply('*Este comando só pode ser usado pelo o dono* 🌚🤙🏼')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return 
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
pru = '.\n'
for (let _ of mentioned) {
pru += `@${_.split('@')[0]}\n`
}
ban.splice(`${mentioned}`)
fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
susp = `❎@${mentioned[0].split('@')[0]}foi desbloqueado e você pode reutilizar os comandos do bot❎`
mentions(`${susp}`, mentioned, true)   
break

//diversão
case 'gadometro':
case 'gado':
var chifre = ["ultra extreme gado", "Gado-Master", "Gado-Rei", "Gado", "Escravo-ceta", "Escravo-ceta Maximo", "Gacorno?", "Jogador De Forno Livre<3", "Mestre Do Frifai<3<3", "Gado-Manso", "Gado-Conformado", "Gado-Incubado", "Gado Deus", "Mestre dos Gados", "Topa tudo por buceta", "Gado Comum", "Mini Gadinho", "Gado Iniciante", "Gado Basico", "Gado Intermediario", "Gado Avançado", "Gado Profisional", "Gado Mestre", "Gado Chifrudo", "Corno Conformado", "Corno HiperChifrudo", "Chifrudo Deus", "Mestre dos Chifrudos"]
var gado = chifre[Math.floor(Math.random() * chifre.length)]
gadop = `${Math.floor(Math.random() * 100)}`
hisil = `Você é:\n\n${gado}`
reply(hisil)
break

//diversão
case 'gay':
				rate = body.slice(5)
ikyy.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
boiola = random
if (boiola < 20 ) {bo = 'hmm... você é hetero😔'} else if (boiola == 21 ) {bo = '+/- boiola'} else if (boiola == 23 ) {bo = '+/- boiola'} else if (boiola == 24 ) {bo = '+/- boiola'} else if (boiola == 25 ) {bo = '+/- boiola'} else if (boiola == 26 ) {bo = '+/- boiola'} else if (boiola == 27 ) {bo = '+/- boiola'} else if (boiola == 28 ) {bo = '+/- boiola'} else if (boiola == 29 ) {bo = '+/- boiola'} else if (boiola == 30 ) {bo = '+/- boiola'} else if (boiola == 31 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 32 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 33 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 34 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 35 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 36 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 37 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 38 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 39 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 40 ) {bo = 'tenho minha desconfiança...😑'} else if (boiola == 41 ) {bo = 'você é né?😏'} else if (boiola == 42 ) {bo = 'você é né?😏'} else if (boiola == 43 ) {bo = 'você é né?😏'} else if (boiola == 44 ) {bo = 'você é né?😏'} else if (boiola == 45 ) {bo = 'você é né?😏'} else if (boiola == 46 ) {bo = 'você é né?😏'} else if (boiola == 47 ) {bo = 'você é né?😏'} else if (boiola == 48 ) {bo = 'você é né?😏'} else if (boiola == 49 ) {bo = 'você é né?😏'} else if (boiola == 50 ) {bo = 'você é ou não?🧐'} else if (boiola > 51) {bo = 'você é gay🙈'
}
hasil = `${rate} Você é ${random}% gay\n\n${bo}`
reply(hasil)
break

case '%':
				algo = body.slice(2)
				pessoa = args.length < 2
ikyy.updatePresence(from, Presence.composing) 
random = `${Math.floor(Math.random() * 100)}`
porcentagem = random
if (porcentagem < 20 ) {frase = 'Você não é😔'} else if (porcentagem == 21 ) {frase = '+/- ${algo}'} else if (porcentagem == 23 ) {frase = '+/- ${algo}'} else if (porcentagem == 24 ) {frase = '+/- ${algo}'} else if (porcentagem == 25 ) {frase = '+/- ${algo}'} else if (porcentagem == 26 ) {frase = '+/- ${algo}'} else if (porcentagem == 27 ) {frase = '+/- ${algo}'} else if (porcentagem == 28 ) {frase = '+/- ${algo}'} else if (porcentagem == 29 ) {frase = '+/- ${algo}'} else if (porcentagem == 30 ) {frase = '+/- ${algo}'} else if (porcentagem == 31 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 32 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 33 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 34 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 35 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 36 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 37 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 38 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 39 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 40 ) {frase = 'Talvez seja em...😑'} else if (porcentagem == 41 ) {frase = 'É sim em...'} else if (porcentagem == 42 ) {frase = 'É sim em...'} else if (porcentagem == 43 ) {frase = 'É sim em...'} else if (porcentagem == 44 ) {frase = 'É sim em...'} else if (porcentagem == 45 ) {frase = 'É sim em...'} else if (porcentagem == 46 ) {frase = 'É sim em...'} else if (porcentagem == 47 ) {frase = 'É sim em...'} else if (porcentagem == 48 ) {frase = 'É sim em...'} else if (porcentagem == 49 ) {frase = 'É sim em...'} else if (porcentagem == 50 ) {frase = '50% agora pra saber só ele dizendo🧐'} else if (porcentagem > 51) {frase = 'você é concerteza🙈'
}
result = `${pessoa} Você é ${random}% ${algo}\n\n${frase}`
reply(result)
break

//diversão
case 'chance':
ikyy.updatePresence(from, Presence.composing) 
var avb = body.slice(7)
if (args.length < 1) return ikyy.sendMessage(from, `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do LIBID ser um trouxa`, text, {quoted: freply})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(7)}\n\né de... ${random}%`
ikyy.sendMessage(from, hasil, text, {quoted: freply, contextInfo: {mentionedJid: [sender]}})
break
     
//diversão     
case 'rola':
case 'pau':
random = `${Math.floor(Math.random() * 35)}`
const tamanho = random
//var (isNaN(tamanho))
if (tamanho < 13 ) {pp = 'só a fimose'} else if (tamanho == 13 ) {pp = 'passou da média??'} else if (tamanho == 14 ) {pp = 'passou da média😳'} else if (tamanho == 15 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 16 ) {pp = 'eita, vai pegar manga?'} else if (tamanho == 17 ) {pp = 'calma man, a mina não é um poço??'} else if (tamanho == 18 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 19 ) {pp = 'calma man, a mina não é um poço😳'} else if (tamanho == 20 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 21 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 22 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 23 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho == 24 ) {pp = 'você tem um poste no meio das pernas'} else if (tamanho > 25 ) {pp = 'vai procurar petróleo com isso?'
}
hasil = `Seu pau tem ${random}cm\n\n${pp}`
reply(hasil)
break



//diversão
case 'roleta':
const tiro = ["vazio","vazio","vazio","vazio","vazio","vazio","vazio","vazio","pow","pow"]
const figr = ["pattta1","pattta2","pattta3"]
tpa = tiro[Math.floor(Math.random() * (tiro.length))]	
tpb = figr[Math.floor(Math.random() * (figr.length))]
figb = fs.readFileSync('./src/'+tpb+'.webp')
if (tpa == "vazio") {
var morte = "Você teve sorte dessa vez, o tambor estava vazio."
} else if (tpa == "pow") {
var morte = "Tinha uma bala no tambor, POW!"
}
if (morte == "Tinha uma bala no tambor, POW!") {
setTimeout( () => {
ikyy.sendMessage(from, figb, sticker, {quoted: freply})
}, 2100)
}
setTimeout( () => {
ikyy.sendMessage(from, morte, text, {quoted: freply})
}, 2300)
break


//_EFEITO SLOW PARA VIDEO  
case 'slowvid':
if (!isQuotedVideo) return reply('Responder bloco de vídeo!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await ikyy.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return fakegroup(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
ikyy.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: freply })
fs.unlinkSync(ran)
})
break

//_EFEITO NIGHTCORE PARA AUDIO         
case 'nightcore':
if (!isQuotedAudio) return reply('Marque um áudio')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await ikyy.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
ikyy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
fs.unlinkSync(ran)
})
break   

//_EFEITO SLOW PARA AUDIO
case 'slow':
 
if (!isQuotedAudio) return reply('Marque um áudio')
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await ikyy.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
ikyy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
fs.unlinkSync(ran)
})
break

//_EFEITO ESQUILO PARA AUDIO
case 'esquilo':
 
if (!isQuotedAudio) return reply('Marque um áudio')
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await ikyy.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
ikyy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
fs.unlinkSync(ran)
})
break

//_EFDEITO GIGANTE PARA AUDIO	
case 'gemuk':
 
if (!isQuotedAudio) return reply('Marque um áudio')
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await ikyy.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
ikyy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO RÁPIDO
case 'fast':
if (!isQuotedAudio) return reply('Marque um áudio')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await ikyy.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
ikyy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
fs.unlinkSync(ran)
})
break

//_AUMENTA O BASS DE UM AUDIO	
case 'bass':                 
 
if (!isQuotedAudio) return reply('Marque um áudio')
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await ikyy.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
ikyy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
fs.unlinkSync(ran)
})
break

case 'estourarfull':                 
 
if (!isQuotedAudio) return reply('Marque um áudio')
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await ikyy.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=30:width_type=o:width=2:g=20 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
ikyy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO ESTOURADO		
case 'earrape':         
case 'estourar':       
 
if (!isQuotedAudio) return reply('Marque um áudio')
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await ikyy.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
ikyy.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})
fs.unlinkSync(ran)
})
break 
//_CONTADOR DE LETRAS
case 'contar':
if (args.length == 0) return reply( '0 caracteres, pois obviamente não há texto😀')
const count = body.slice(8).length
if (count === 1) {
reply(`O texto possui ${count} caracteres.`)
} else if (count > 1) {
reply(`O texto possui ${count} caracteres.`)
}
break


case 'clima':
case 'tempo':
anu = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=57fcd6384cff4e529b9ca76089f05992&url=https://pt.wttr.in/${args[0]}`)
ikyy.sendMessage(from, anu, image, {quoted: freply})
break

//IMAGE EDIT MENU
case 'triggered':
case 'trigger':
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
damppa = await ikyy.downloadAndSaveMediaMessage(ger)
dpaa = await imgbb('3ea1465ef91578a90ee81f7d41c59a1f', damppa)
ranp = getRandom('.gif')
rano = getRandom('.webp')
uhyy = `https://some-random-api.ml/canvas/triggered?avatar=${dpaa.display_url}`
exec(`wget ${uhyy} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply()
jadinyaa = fs.readFileSync(rano)
ikyy.sendMessage(from, jadinyaa, sticker, {quoted: freply})
fs.unlinkSync(rano)
})                  
} else {
reply('Reply Imagenya!!')
}

break
//daqui pra baixo é logos
case 'smoke':
					case 'camuflage':
					case 'stars':
					case '3dglowing':
					case 'underwaterocean':
					case 'wolfmetal':
					case 'rainbowshine':
					
                    if (args.length == 0) return reply(`exemplo: ${prefix + command} LIBID-D`)
                    teka = args.join(" ")
                    didinpur = await getBuffer(`https://api.xteam.xyz/photooxy/${command}?text=${teka}&APIKEY=${XteamDl}`)
                    ikyy.sendMessage(from, didinpur, image, { quoted: mek})
                
                    break

case 'conquista':				
if (body.length > 25) return reply('O LIMITE É 15 CARACTERES')
if(body.length<11) return ikyy.sendMessage(from, 'Onde está o texto?\n\n*Exemplo: ${prefix + command} aaaa*', text, {quoted: mek})
ikyy.sendMessage(from, ('Estou fazendo Aguarde...'), text, {quoted: mek})
buffer = await getBuffer(`https://www.minecraftskinstealer.com/achievement/a.php?i=13&h=Achievement+get%21&t=${body.slice(11)}`)
ikyy.sendMessage(from, buffer, image, {quoted:mek})
break


                case 'crosslogo':
                case 'naruto':
                case 'flowertext':
                case 'silktext':
                case 'flametext':
                case 'glowtext':
                case 'skytext':
                case 'cslogo':
                case 'lithgtext':
                case 'crismes':
              
                    if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix + command} teste*`)
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${teks}&apikey=apivinz`, {method: 'get'})
					ikyy.sendMessage(from, buffer, image, {quoted: freply, caption: 'prontinho chefe'})
					break        
case 'bneon':
                case 'matrix':
                case 'breakwall':
                case 'dropwater':
                case 'leavest':
                case 'logobp':
               
                    if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix + command} teste*`)
					teks = body.slice(7)
					if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://api.zeks.xyz/api/${command}?text=${teks}&apikey=apivinz`)
					ikyy.sendMessage(from, buffer, image, {quoted: freply, caption: 'prontinho chefe'})
					break           
               
        case 'porncomen':
            
if (args.length == 0) return reply(`Example : ${prefix + command} Didin | Ganteng`)
bufg = await getBuffer(`https://api.zeks.xyz/api/phub?apikey=Alphabott&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${pushname}&msg=${body.slice(11)}`)
ikyy.sendMessage(from, bufg, image, {quoted: mek})
break

case 'pornhub':
					if (args.length < 1) return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}}pornhub  texto`)
					if (args.length < 1) return reply(ind.wrongf())
					porn = `${body.slice(8)}`
					hub1 = porn.split("|")[0];
					hub2 = porn.split("|")[1];
					porn = await getBuffer(`https://api.zeks.xyz/api/phlogo?text1=${hub1}&text2=${hub2}&apikey=Alphabott`)
					ikyy.sendMessage(from, porn, image, {caption: 'PORNHUB', quoted: mek})
					
					break 
					
					//cabo os logos


					//tira mensagem da foto
case 'ocr': 
case 'ler': 
				
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await ikyy.downloadAndSaveMediaMessage(encmedia)
						reply('espera')
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Somente fotos!')
					}
					break

//case feita pelo kratos
	case 'gerarnick':
teks = body.slice(10)
send = await fetchJson(`http://brizas-api.herokuapp.com/gerador/fancytext?apikey=brizaloka&text=${teks}`)
teks = ` !NICKS COM SEU NOME GERADOS! 
1    ${send.random_1} 
2    ${send.random_2} 
3    ${send.random_3} 
4    ${send.random_4} 
5    ${send.random_5}
 
   OUTRAS FORMAS

 ${send.squares}
 ${send.inverted_squares}
 ${send.italic}
 ${send.bold}
 ${send.future_alien}
 ${send.asian_1}
 ${send.asian_2}
 ${send.squiggle}
 ${send.squiggle_2}
 ${send.squiggle_3}
 ${send.squiggle_4}
 ${send.neon}
 
 TRAVA DO SEU NICK
${send.bubbles}`
ikyy.sendMessage(from, teks, text, {quoted: mek})
break




//essas são para imagens

					case 'comunism':
	  case 'wanted':
	    case 'rotate':
	     case 'rip':
	       case 'fuse':
	      case 'dwlaauss':
	        case 'tobecontinue':
	          case 'thuglife':
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(mess.wait)                     
                        owgi = await ikyy.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`http://zekais-api.herokuapp.com/${command}?url=${teks}`)
                        abc = await getBuffer(anu8)
                        ikyy.sendMessage(from, abc, image, {
                            quoted: mek
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break 

					case 'figuc':
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(mess.wait)                     
                        owgi = await ikyy.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/circle?img=${teks}`)
                        abc = await getBuffer(anu8)
                        ikyy.sendMessage(from, abc, image, {
                            quoted: mek
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break 
                    
                    case 'arma':
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(mess.wait)                     
                        owgi = await ikyy.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/gun?img=${teks}`)
                        abc = await getBuffer(anu8)
                        ikyy.sendMessage(from, abc, image, {
                            quoted: mek
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break 
                    
                    case 'drip':
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(mess.wait)                     
                        owgi = await ikyy.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/dripp?img=${teks}`)
                        abc = await getBuffer(anu8)
                        ikyy.sendMessage(from, abc, image, {
                            quoted: mek
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break 
                    
                    case 'borro':
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(mess.wait)                     
                        owgi = await ikyy.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/borro?img=${teks}&opacidade=2`)
                        abc = await getBuffer(anu8)
                        ikyy.sendMessage(from, abc, image, {
                            quoted: mek
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break
					case 'hitler':
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(mess.wait)                     
                        owgi = await ikyy.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/hitler?img=${teks}`)
                        abc = await getBuffer(anu8)
                        ikyy.sendMessage(from, abc, image, {
                            quoted: mek
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break
					case 'inverter':
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(mess.wait)                     
                        owgi = await ikyy.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/invert?img=${teks}`)
                        abc = await getBuffer(anu8)
                        ikyy.sendMessage(from, abc, image, {
                            quoted: mek
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break
					case 'shit':
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(mess.wait)                     
                        owgi = await ikyy.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/shit?img=${teks}`)
                        abc = await getBuffer(anu8)
                        ikyy.sendMessage(from, abc, image, {
                            quoted: mek
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break
					case 'lixo':
                     var imgbb = require('imgbb-uploader')
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        reply(mess.wait)                     
                        owgi = await ikyy.downloadAndSaveMediaMessage(ger)
                        anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
                        teks = `${anu.display_url}`
                        ranp = getRandom('.gif')
                        rano = getRandom('.webp')
                        anu8 = (`https://api-exteam.herokuapp.com/api/trash?img=${teks}`)
                        abc = await getBuffer(anu8)
                        ikyy.sendMessage(from, abc, image, {
                            quoted: mek
                        })
                    } else {
                        reply('É necessário usar uma imagem')
                    }
                    break
					
					case 'img':
               reply(mess.wait) 
               var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var media = await  ikyy.downloadAndSaveMediaMessage(encmedia)       
               imgbb('39d895963468b814fad0514bd28787e2', media)
              .then(data => {
               var caps = `*_IMAGEM TRANSFORMADA EM URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extensão :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(media)
               ikyy.sendMessage(from, ibb, image, { quoted: mek, caption: caps})
})
              .catch(err => {
               throw err
})
               break
					
					
					//parte da sessão de testes
case '69': 
reply('Loading.... ')
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
owgi = await  ikyy.downloadAndSaveMediaMessage(ger)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api-exteam.herokuapp.com/api/trash?img=${anu.display_url}`
ibb = fs.readFileSync(media)
ikyy.sendMessage(from, ibb, image, { quoted: mek, caption: caps})
} else {
reply('Use fotos / sticker!')
}
break
//cabo


        case 'delsesittt':
        case 'resetgame':
               if (!isGroup) return reply(mess.only.group)
               if (!isTTT) return reply('Não há jogos neste grupo')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               reply('Sucesso na reinicialização do jogo ')
               break

//ttt by LIBID
        case 'tictactoe':
        case 'ttt':
              
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Para começar a partida do jogo da velha vc tem q fazer o seguinte \n#ttt @pessoa')
              if (isTTT) return reply('Há um jogo neste grupo, por favor aguarde')
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque o alvo do oponente!')
              ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ky_ttt.push({player1,player2,id,angka,gilir})
              ikyy.sendMessage(from, 
`*🎳 Jogo da velha 🎲*

[@${player2.split('@')[0]}] desafiou você a ser o oponente do jogo🔥
Digite Sim ou Não para aceitar ou rejeitar o jogo

 Digite / resetgame, para reiniciar os jogos no grupo!\n*🎳 jogo da velha🎲*
`, text, {contextInfo: {mentionedJid: [player2]}})
              gameAdd(sender, glimit)
              break




       //cassino
       case 'slot':
       case 'cassino':
              const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : ?? : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']
              somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
              if (somtoyy  == '🍌 : 🍌 : 🍌') {
              reply(`[  🎰 | *CASSINO* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *VOCÊ GANHOU*  ]`)
              } else if (somtoyy == '?? : 🍒 : 🍒') {
              reply(`[  🎰 | *CASSINO* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *VOCÊ GANHOU*  ]`)
              } else if (somtoyy == '🔔 : 🔔 : 🔔') {
              reply(`[  🎰 | *CASSINO* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *VOCÊ GANHOU*  ]`)
              } else if (somtoyy == '?? : 🍐 : 🍐') {
              reply(`[  🎰 | *CASSINO* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *VOCÊ GANHOU*  ]`)
              } else if (somtoyy == '🍇 : 🍇 : 🍇') {
              reply(`[  🎰 | *CASSINO* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *VOCÊ GANHOU*  ]`)
              } else {
              reply(`[  ?? | *CASSINO* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *VOCÊ PERDEU*  ]`)
}
              break

//papel pedra tesoura
       case 'ppt': //ajuda de zenz
              if (!q) return reply(`Enviar  ${prefix}ppt tesoura / pedra / papel`)
              const userspilih = q
              if (!userspilih.match(/pedra|tesoura|papel/)) return reply(`Escolha pedras, papel, tesoura`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'pedra';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'tesoura';
              } else {
              computer = 'papel';
}
              if ( userspilih == computer ) {
              reply(`Jogo da Série!`)
              } else if ( userspilih == 'pedra' ) {
              if( computer == 'tesoura' ) {
              reply(`vitoria do do usuário\n Você ganha!`)
              } else {
              reply(`Você escolhe Pedra e o bot escolhe Papel\nVocê perdeu!`)
}
              } else if ( userspilih == 'tesoura' ) {
              if( computer == 'pedra' ) {
              reply(`Você escolhe a Tesoura e o bot escolhe a Pedra\nVocê perdeu!`)
              } else {
              reply(`Você escolheu uma tesoura e um bot de papel\nVocê ganha!`)
}
              } else if ( userspilih == 'papel' ) {
              if( computer == 'pedra' ) {
              reply(`Você escolhe papel e pedra \nVocê ganha!`)
              } else {
              reply(`Você escolhe o papel e o bot escolhe a tesoura\nVocê perdeu`)
}
}
              break



//funções do lucas hora

//------------------< premium >-------------------
//LIBID
       case 'sewa':
       case 'prem':
              if (!isGroup)return reply(mess.only.group)
              if (!isOwner) return reply(mess.only.owner)
              if (args.length < 1) return reply(`Usar :\n*${prefix}prem* add/del Tempo`)
              if (args[0].toLowerCase() === 'add'){
            _sewa.addSewaGroup(from, args[1], sewa)
              reply(`Sucesso`)
              } else if (args[0].toLowerCase() === 'del'){
              sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
              fs.writeFileSync('./database/group/sewa.json', JSON.stringify(sewa))
              reply(mess.success)
              } else {
              reply(`Usar :\n*${prefix}prem* add/del Tempo`)
}
              break
       case 'sewalist': 
       case 'listsewa':
              let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
              for (let i of sewa){
              let cekvipp = ms(i.expired - Date.now())
              txtnyee += `*ID :* ${i.id} \n*espira :* ${cekvipp.days} day(s) ${cekvipp.hours} horas(s) ${cekvipp.minutes} minuto(s) ${cekvipp.seconds} segundo(s)\n\n`
}
              reply(txtnyee)
              break
       case 'sewacheck':
       case 'ceksewa': 
              if (!isGroup) return reply(mess.only.group)
              if (!isSewa) return reply(`Este grupo não está listado na lista de rentalbot. Modelo ${prefix}sewabot Para maiores informações`)
              let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
              let premiumnya = `*「 RENDA EXPIRAR 」*\n\n➸ *ID*: ${from}\n➸ *Expirado :* ${cekvip.days} dia(s) ${cekvip.hours} hora(s) ${cekvip.minutes} minuto(s)`
              reply(premiumnya)
              break
//------------------< Premium >-------------------
       case 'premium': 
              if (!isOwner) return reply(mess.only.owner)
              if (args[0] === 'add') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

              premium.addPremiumUser(mentioned[0], args[2], _premium)
              reply(`*「 PREMIUM ADICIONADO 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expirado*: ${ms(toMs(args[2])).days} dia(s) ${ms(toMs(args[2])).hours} hora(s) ${ms(toMs(args[2])).minutes} minuto(s)`)
                        
              } else {
                            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
              reply(`*「 PREMIUM ADICIONADO 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expirado*: ${ms(toMs(args[2])).days} dia(s) ${ms(toMs(args[2])).hours} hora(s) ${ms(toMs(args[2])).minutes} minuto(s)`)
}
              } else if (args[0] === 'del') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
}
              } else {
              reply(mess.wrongFormat)
}
              break
       case 'premiumcheck':
       case 'cekpremium': 
              if (!isPremium) return reply(mess.only.premium)
              const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
              reply(`*「 PREMIUM ESPIRA 」*\n\n➸ *ID*: ${sender}\n➸ *acaba premium*: ${cekExp.days} dia(s) ${cekExp.hours} hora(s) ${cekExp.minutes} minuto(s)`)
              break
       case 'listprem':
       case 'listpremium':          
              let txt = `「 *LISTA DE USUÁRIOS PREMIUM* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expirado*: ${checkExp.days} dia(s) ${checkExp.hours} hora(s) ${checkExp.minutes} minuto(s)\n\n`
}
              mentions(txt, men, true)
              break
      
//------------------< Downloader/Procurar/Anime >-------------------
       case 'igdl':
       case 'instagram':
              try {
              if (!isUrl(q)) return reply('Linknya?')
              reply(mess.wait)
              res = await axios.get(`https://api.lolhuman.xyz/api/instagram2?apikey=${setting.lolkey}&url=${args[0]}`)
              data = res.data.result
              for (let i = 0; i < data.media.length; i++) {
              sendMediaURL(from, data.media[i], data.caption, {thumbnail: Buffer.alloc(0)})
}
              } catch (e) {
              console.log(e)
              reply(String(e))
}
              break 
       case 'igdl2':
       case 'instagram2':
              try {
              if (!q) return reply('link?')
              reply(mess.wait)
              res = await axios.get(`https://api.zeks.xyz/api/ig?apikey=${setting.zekskey}&url=${args[0]}`)
              for(let i = 0; i < res.data.result.length; i++) {
              sendMediaURL(from, res.data.result[i].url, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM MEDIA*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Dados obtidos com sucesso!*
\`\`\`▢ Nome do usuário : ${res.data.owner}\`\`\`
\`\`\`▢ Rubrica : ${res.data.caption}\`\`\``, {thumbnail: Buffer.alloc(0)})
}
              } catch (e) {
              console.log(e)
              reply(String(e))
}
              break
       case 'igdl3': 
       case 'instagram3':
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('instagram')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await igDownloader(`${q}`)
             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, mek) })
             .catch((err) => { reply(String(err)) })
              break
       case 'scplay': 
       case 'soundcloud':
              if (!q) return reply('Link Yang Mana? ')
              if (!q.includes('soundcloud')) return reply(mess.error.Iv)
              reply(mess.wait)
              anu = await fetchJson(`https://api.lolhuman.xyz/api/soundcloud?apikey=${setting.lolkey}&url=${q}`)
             .then((data) => { sendMediaURL(from, data.result, mek) })
             .catch((err) => { reply(String(err)) })
              break
       case 'image':
       case 'gimage':
       case 'googleimage':
              if (args.length < 1) return reply('O que você deseja procurar?')
              reply(mess.wait)
              teks = args.join(' ')
              res = await googleImage(teks, google)
              function google(error, result){
              if (error){ return reply('_[ ! ] Erro encontrado Erro ou resultado não encontrado_')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: mek, caption: `*Resultados da pesquisa de :* ${teks}`})
}
}
             break
      
        case 'google':
              if (!q) return reply(mess.wrongFormat)
              ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=f3fce33fa6804c0b97c897b3bd2ec7a8&url=https://google.com/search?q=${q}`)
              reply(mess.wait)
              if(q == undefined || q == ' ') return reply(`*Resultado da pesquisa : ${q}*`)
              googleIt({ 'query': q }).then(results => {
              vars = `_*Resultado da pesquisa : ${q}*_\n`
              for (let i = 0; i < results.length; i++) {
              vars +=  `\n═════════════════\n\n*Título:* ${results[i].title}\n\n*Descrição:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
               ikyy.sendMessage(from, ss, image, {caption: vars, quoted : mek})
               }).catch(e => {
               console.log(e)
               reply(`${e}`)
})
               break
        case 'mediafire':
               if (!isPremium) return reply(mess.only.premium)
               if (args.length < 1) return reply('Onde está o link? ')
               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
               reply(mess.wait)
               teks = args.join(' ')
               res = await mediafireDl(teks)
               result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Dados obtidos com sucesso!*
\`\`\`▢ Nome : ${res[0].nama}\`\`\`
\`\`\`▢ Tamanho : ${res[0].size}\`\`\`
\`\`\`▢ Link : ${res[0].link}\`\`\`

_*Aguarde o processo de upload de mídia......*_`
             reply(result)
             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
             break

       case 'tiktok': 
       case 'ttdl':
             if (!q) return reply('quero o link')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.watermark) })
            .catch((err) => { reply(String(err)) })
             break
      case 'ttnowm': 
      case 'tiktoknowm':
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break

  case 'xnxxsearch':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=genbotkey&query=${query}`)
                    get_result = get_result.result
                    ini_txt = ""
                    for (var x of get_result) {
                        ini_txt += `Título : ${x.title}\n`
                        ini_txt += `Visualizações : ${x.views}\n`
                        ini_txt += `Duração : ${x.duration}\n`
                        ini_txt += `Uploader : ${x.uploader}\n`
                        ini_txt += `Link : ${x.link}\n`
                        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
                    }
                    reply(ini_txt)
                    break
                case 'xnxx':
                    if (args.length == 0) return reply(`Exemplo: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=genbotkey&url=${query}`)
                    get_result = get_result.result
                    ini_txt = `Título : ${get_result.title}\n`
                    ini_txt += `Duração : ${get_result.duration}\n`
                    ini_txt += `View : ${get_result.view}\n`
                    ini_txt += `Avaliação : ${get_result.rating}\n`
                    ini_txt += `Like : ${get_result.like}\n`
                    ini_txt += `Dislike : ${get_result.dislike}\n`
                    ini_txt += `comentarios : ${get_result.comment}\n`
                    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
                    ini_txt += `Descrição : ${get_result.description}\n`
                    ini_txt += "Link : \n"
                    ini_link = get_result.link
                    for (var x of ini_link) {
                        ini_txt += `${x.type} - ${x.link}\n\n`
                    }
                    thumbnail = await getBuffer(get_result.thumbnail)
                    await ikyy.sendMessage(from, thumbnail, image, { quoted: freply, caption: ini_txt })
                    break

              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://ikyy-chan02.github.io`)
                 
      case 'ttaudio': 
      case 'tiktokmusic': 
      case 'tiktokaudio':
             if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
             ini_link = args[0]
             get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${setting.lolkey}&url=${ini_link}`)
             ikyy.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
             break
      case 'fb':
      case 'facebook':
             if (!q) return
             reply(mess.wait)
             try {
             anu = await fetchJson(`https://zenzapi.xyz/api/downloader/facebook?url=${args[0]}&apikey=0963ec745dde`)
             sendMediaURL(from, anu.result.hd)
             } catch (e) {
             console.log(e)
             reply(`${e}`)
}
             break
      case 'twitter':
             if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
             if (!q) return reply('Linknya?')
             ten = args[0]
             var res = await twitterGetUrl(`${ten}`)
            .then(g => {
             ren = `${g.download[2].url}`
             sendMediaURL(from,ren,'Done')
})
             break
      case 'brainly':
             brainly(args.join(" ")).then(res => {
             hmm = '────────────\n'
             for (let Y of res.data) {
             hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pergunta:* ${Y.pertanyaan}\n\n*➸ resposta:* ${Y.jawaban[0].text}\n───────────\n`
}
             reply(hmm)
             console.log(res)
})
             break
      case 'ssweb':
             if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/`)
             ini_link = args[0]
             ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${setting.lolkey}&url=${ini_link}`)
             await ikyy.sendMessage(from, ini_buffer, image, { quoted: mek })
             break
       case 'nhentaipdf':
             if (!isPremium) return reply(mess.only.premium)
             if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 317986`)
             if (isNaN(Number(args[0]))) return await reply(mess.wrongFormat)
             try {
             henid = args[0]
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${setting.lolkey}`)
             get_result = get_result.result
             get_info = get_result.info
             teks = `\n${get_result.title_romaji}\n\n${get_result.title_native}\n\nCharacter : ${get_info.characters.join(", ")}\n`
             ini_image = await getBuffer(get_result.image[0])
             ikyy.sendMessage(from, ini_image, image, { caption: teks, quoted: mek })
             anu = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${setting.lolkey}`)
             pdf = await getBuffer(anu.result)
             ikyy.sendMessage(from, pdf, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${get_result.title_romaji}.pdf`, thumbnail: ini_image })
             } catch (e) {
             console.log(e)
             reply(String(e))
}
             break
       case 'nhentai':
              if (!isPremium) return reply(mess.only.premium)
              if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
              reply(mess.wait)
              henid = args[0]
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${setting.lolkey}`)
              get_result = get_result.result
              ini_txt = `Chi te romaji : ${get_result.title_romaji}\n`
              ini_txt += `Título nativo : ${get_result.title_native}\n`
              ini_txt += `Leia online : ${get_result.read}\n`
              get_info = get_result.info
              ini_txt += `Paródias : ${get_info.parodies}\n`
              ini_txt += `Personagem : ${get_info.characters.join(", ")}\n`
              ini_txt += `Tag : ${get_info.tags.join(", ")}\n`
              ini_txt += `Artista : ${get_info.artists}\n`
              ini_txt += `Grupo : ${get_info.groups}\n`
              ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
              ini_txt += `Categorias : ${get_info.categories}\n`
              ini_txt += `Páginas : ${get_info.pages}\n`
              ini_txt += `Carregado : ${get_info.uploaded}\n`
              reply(ini_txt)
              break
       case 'manga':
              if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hafreplyome`)
              reply(mess.wait)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${setting.lolkey}&query=${query}`)
              get_result = get_result.result
              ini_txt = `Id : ${get_result.id}\n`
              ini_txt += `Id MAL : ${get_result.idMal}\n`
              ini_txt += `Título : ${get_result.title.romaji}\n`
              ini_txt += `inglês : ${get_result.title.english}\n`
              ini_txt += `Nativo : ${get_result.title.native}\n`
              ini_txt += `Formato : ${get_result.format}\n`
              ini_txt += `Capítulos : ${get_result.chapters}\n`
              ini_txt += `Volume : ${get_result.volumes}\n`
              ini_txt += `Status : ${get_result.status}\n`
              ini_txt += `Fonte : ${get_result.source}\n`
              ini_txt += `Data de início : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
              ini_txt += `Data final : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
              ini_txt += `Gênero : ${get_result.genres.join(", ")}\n`
              ini_txt += `Sinônimos : ${get_result.synonyms.join(", ")}\n`
              ini_txt += `Pontuação : ${get_result.averageScore}%\n`
              ini_txt += `Personagens : \n`
              ini_character = get_result.characters.nodes
              for (var x of ini_character) {
              ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
              ini_txt += `\nDescrição : ${get_result.description}`
              thumbnail = await getBuffer(get_result.coverImage.large)
              await ikyy.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
              break
       case 'doujindesu':
             if (!q) return reply(mess.wrongFormat)
             reply(mess.wait)
             try {
             doujinnya = await got.get(`http://api-melodicxt-2.herokuapp.com/api/doujindesu/search?query=${q}&apiKey=administrator`).json()
             let { data } = await doujinnya
             xixixai = `*Doujindesu Search*\n`
             for (let i = 0; i < data.length; i++) {
             xixixai += `\n*Pedido ${i+1}*\n*Title:* ${data[i].title}\n*Modelo:* ${data[i].type}\n*Status:* ${data[i].status}\n*Avaliação:* ${data[i].rating}\n*Seguidores:* ${data[i].followers}\n`
}
             buffer = await getBuffer(data[0].thumb)
             ikyy.sendMessage(from, buffer, image, {caption: xixixai, quoted: mek})
             } catch (e) {
             console.log(e)
             reply(String(e))
}
             break
      case 'anime':
             if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hafreplyome`)
             reply(mess.wait)
             query = args.join(" ")
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${setting.lolkey}&query=${query}`)
             get_result = get_result.result
             ini_txt = `Id : ${get_result.id}\n`
             ini_txt += `Id MAL : ${get_result.idMal}\n`
             ini_txt += `Título : ${get_result.title.romaji}\n`
             ini_txt += `inglês : ${get_result.title.english}\n`
             ini_txt += `Nativo : ${get_result.title.native}\n`
             ini_txt += `Formato : ${get_result.format}\n`
             ini_txt += `Episódios : ${get_result.episodes}\n`
             ini_txt += `Duração : ${get_result.duration} mins.\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Temporada : ${get_result.season}\n`
             ini_txt += `Temporada Ano : ${get_result.seasonYear}\n`
             ini_txt += `Fonte : ${get_result.source}\n`
             ini_txt += `Data de início : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
             ini_txt += `Data final : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
             ini_txt += `Gênero : ${get_result.genres.join(", ")}\n`
             ini_txt += `Sinônimos : ${get_result.synonyms.join(", ")}\n`
             ini_txt += `Pontuação : ${get_result.averageScore}%\n`
             ini_txt += `Personagens : \n`
             ini_character = get_result.characters.nodes
             for (var x of ini_character) {
             ini_txt += `- ${x.name.full} (${x.name.native})\n`
 }
             ini_txt += `\nDescrição : ${get_result.description}`
             thumbnail = await getBuffer(get_result.coverImage.large)
             await ikyy.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
             break
      case 'kusonime':
             if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hafreplyome`)
             reply(mess.wait)
             query = args.join(" ")
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${setting.lolkey}&query=${query}`)
             get_result = get_result.result
             ini_txt = `Title : ${get_result.title}\n`
             ini_txt += `Japanese : ${get_result.japanese}\n`
             ini_txt += `Genre : ${get_result.genre}\n`
             ini_txt += `Seasons : ${get_result.seasons}\n`
             ini_txt += `Producers : ${get_result.producers}\n`
             ini_txt += `Type : ${get_result.type}\n`
             ini_txt += `Status : ${get_result.status}\n`
             ini_txt += `Total Episode : ${get_result.total_episode}\n`
             ini_txt += `Score : ${get_result.score}\n`
             ini_txt += `Duration : ${get_result.duration}\n`
             ini_txt += `Released On : ${get_result.released_on}\n`
             ini_txt += `Desc : ${get_result.desc}\n`
             link_dl = get_result.link_dl
             for (var x in link_dl) {
             ini_txt += `\n${x}\n`
             for (var y in link_dl[x]) {
             ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
             ini_buffer = await getBuffer(get_result.thumbnail)
             await ikyy.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
             break
       case 'otakudesu':
              if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hafreplyome`)
              reply(mess.wait)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${setting.lolkey}&query=${query}`)
              get_result = get_result.result
              ini_txt = `Title : ${get_result.title}\n`
              ini_txt += `Japanese : ${get_result.japanese}\n`
              ini_txt += `Judul : ${get_result.judul}\n`
              ini_txt += `Type : ${get_result.type}\n`
              ini_txt += `Episode : ${get_result.episodes}\n`
              ini_txt += `Aired : ${get_result.aired}\n`
              ini_txt += `Producers : ${get_result.producers}\n`
              ini_txt += `Genre : ${get_result.genres}\n`
              ini_txt += `Duration : ${get_result.duration}\n`
              ini_txt += `Studios : ${get_result.status}\n`
              ini_txt += `Rating : ${get_result.rating}\n`
              ini_txt += `Credit : ${get_result.credit}\n`
              get_link = get_result.link_dl
              for (var x in get_link) {
              ini_txt += `\n\n*${get_link[x].title}*\n`
              for (var y in get_link[x].link_dl) {
              ini_info = get_link[x].link_dl[y]
              ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
              ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
              ini_txt += `\`\`\`Link : \`\`\`\n`
              down_link = ini_info.link_dl
              for (var z in down_link) {
              ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
              reply(ini_txt)
              break
       case 'nekopoi':
              if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)
              ini_url = args[0]
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=${setting.lolkey}&url=${ini_url}`)
              get_result = get_result.result
              ini_txt = `\`\`\`▢ Título : ${get_result.anime}\`\`\`\n`
              ini_txt += `\`\`\`▢ Produtores : ${get_result.producers}\`\`\`\n`
              ini_txt += `\`\`\`▢ Duração : ${get_result.duration}\`\`\`\n`
              ini_txt += `\`\`\`▢ Size : ${get_result.size}\`\`\`\n`
              ini_txt += `\`\`\`▢ Sinopse : ${get_result.sinopsis}\`\`\`\n`
              link = get_result.link
              for (var x in link) {
              ini_txt += `\n${link[x].name}\n`
              link_dl = link[x].link
              for (var y in link_dl) {
              ini_txt += `${y} - ${link_dl[y]}\n`
}
}
              ini_buffer = await getBuffer(get_result.thumb)
              await ikyy.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
              break
       case 'nekopoisearch':
              if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
              query = args.join(" ")
              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${setting.lolkey}&query=${query}`)
              get_result = get_result.result
              ini_txt = ""
              for (var x of get_result) {
              ini_txt += `\`\`\`▢ Title : ${x.title}\`\`\`\n`
              ini_txt += `\`\`\`▢ Link : ${x.link}\`\`\`\n`
              ini_txt += `\`\`\`▢ Thumbnail : ${x.thumbnail}\`\`\`\n\n`
}
              reply(ini_txt)
              break
       case 'neko':
       case 'kanna':
       case 'sagiri':
       case 'megumin':
       case 'wallnime':
              reply(mess.wait)
              getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${setting.lolkey}`).then((gambar) => {
              ikyy.sendMessage(from, gambar, image, { quoted: mek, thumbnail: Buffer.alloc(0) })
})
              break
       
       //case 'hentai':
       if (!isPremium) return reply(mess.only.premium)
              getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${setting.lolkey}`).then((gambar) => {
              ikyy.sendMessage(from, gambar, image, { quoted: mek })
}) 
              break
       case 'nakanoitsuki':
       case 'nakanoikyy':
       case 'nakanomiku':
              reply(mess.wait)
              res = await axios.get(`https://fdciabdul.tech/api/pinterest?keyword=${command}`)
              var string = JSON.parse(JSON.stringify(res.data))
              var random =  string[Math.floor(Math.random() * string.length)]
              sendFileFromUrl(random, image, {quoted: mek, thumbnail: Buffer.alloc(0), caption: `*Wangy²*`})
              break
       case 'storyanime':
              reply(mess.wait)
              anu = await fetchJson(`https://lolhuman.herokuapp.com/api/storynime?apikey=${setting.lolkey}`)
              buffer = await getBuffer(anu.result)
              ikyy.sendMessage(from, buffer, video, { quoted: mek })
              break
       case 'nekopoi3d':
       case '3dnekopoi':
       case '3dnekopoilast':
              reply(mess.wait)
              try {
              bsangee = await axios.get(`https://api.vhtear.com/neko3d&apikey=${setting.vhtearkey}`)
              bsangee2 = bsangee.data
              keluarplay = `*Lista de atualização 3D JAV*\n`
              for (let i = 0; i < bsangee2.result.length; i++) {
              keluarplay += `\n═════════════════\n\n*Judul* : ${bsangee2.result[i].title}\n*Deskripsi* : ${bsangee2.result[i].description}\n*Link* : ${bsangee2.result[i].url}\n`
}
              reply(keluarplay) 
              } catch (err) {
              console.log(err)
              reply('error!')
}
               break
        case 'nekopoijav':
        case 'javnekopoi':
               reply(mess.wait)
               try {
               bsangce = await axios.get(`https://api.vhtear.com/nekojavlist&apikey=${setting.vhtearkey}`)
               bsangce2 = bsangce.data
               keluarplay = `*List update JAV*\n`
               for (let i = 0; i < bsangce2.result.length; i++) {
               keluarplay += `\n═════════════════\n\n*Judul* : ${bsangce2.result[i].title}\n*Serial JAV* : ${bsangce2.result[i].seri}\n*Link* : ${bsangce2.result[i].url}\n`
}
               reply(keluarplay)
               } catch (err) {
               console.log(err)
}
               break
        case 'nekopoicosplay':
        case 'cosplaynekopoi':
               try {
               reply(mess.wait)
               bsangbe = await axios.get(`https://api.vhtear.com/nekojavcosplay&apikey=${setting.vhtearkey}`)
               bsangbe2 = bsangbe.data
               keluarplay = `*List update Cosplay JAV*\n`
               for (let i = 0; i < bsangbe2.result.length; i++) {
               keluarplay += `\n═════════════════\n\n*Judul* : ${bsangbe2.result[i].title}\n*Deskripsi* : ${bsangbe2.result[i].detail}\n*Link* : ${bsangbe2.result[i].url}\n`
}
               reply(keluarplay)
               } catch (err) {
               console.log(err)
}
               break
        case 'otakuongoing':              
               o = await onGoing()
               console.log(o)
               ot = '*「 busca 」*'
               for (let i = 0; i < o.length; i++) {
               ot += `\n\n*Título :* ${o[i].judul}\n*Episódio :* ${o[i].eps}\n*Próximos eps do dia :* ${o[i].hri}\n*Encontro :* ${o[i].tgl}\n\n*Imagem :* ${o[i].thumb}`
}
               buff = await getBuffer(o[0].thumb)
               ikyy.sendMessage(from, buff, image, {quoted: mek, caption: ot})
               break
            
       case 'ytmp3':   
				    if (!isPrem) return reply(mess.only.premium)                   	  
                    if (!isElite) return reply(mess.only.userB)
			        if (isLimit(sender)) return
			        await limitAdd(sender)					 
					if (args.length < 1) return reply("```Where's the link bro```")
					if (!isUrl(args[0]) && !args[0].includes('youtu')) return reply('```Invalid link```')
					reply(meklachan) 
					anu = await fetchJson(`https://api.xteam.xyz/dl/ytmp3?url=${args[0]}&APIKEY=${apixteam}`)
					anu1 = `YTMP3 FOI ENCONTRADO\n`
                    anu1 += `➻ *TÍTULO* : ${anu.judul}\n`
                    anu1 += `➻ *TAMANHO* : ${anu.size}\n`
					anu2 = await getBuffer(anu.thumbnail)
					anu3 = await getBuffer(anu.url)
					ikyy.sendMessage(from, anu2, image, { quoted: ftoko, caption: anu1 })
					ikyy.sendMessage(from, anu3, audio, { mimetype: 'audio/mp4', quoted: ftoko })
					break
case 'yt':
				case 'ytmp4':
if (args.length < 1) return reply('Preciso do link!')
if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
if(asize.filesize.replace(' MB', '')>=16||asize.filesize.endsWith('GB')){
thoth.reply(from, `O limite de tamanho é 16 MB. Esse áudio possui ${asize.filesize} meu armazenamento vai pro pau amigo 😔`, mek)
}
if (anu.error) return reply(anu.error)
buffer = await getBuffer(anu.result)
ikyy.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}`, quoted: mek})
break
case 'playy':   
if (args.length < 1) return reply(`Exemplo : ${p}play Plutão`)	
reply('╔═══╗ ♪\n║███║ ♫\n║ (●)♫║\n╚═══╝♪♪♪\n espere')
query = args.join(" ")
site = await fetchJson(`https://jonaz-api-v2.herokuapp.com/play?music=${query}`)
msc = await getBuffer(site.result.result)
ikyy.sendMessage(from, msc, audio, {mimetype: 'audio/mp4', filename: `baixado pela LIBID.mp3`, quoted: mek})
break

        case 'play':				
if(body.length < 5) return reply(from, 'Você precisa dizer a música', mek)
				
res = (await fetchJson(`https://arugaytdl.herokuapp.com/search?q=${body.slice(6)}`, {method: 'get'}))[0]
				
asize = await fetchJson(`https://st4rz.herokuapp.com/api/yta?url=https://youtu.be/${res.id}`, {method: 'get'})
				
if(asize.filesize.replace(' MB', '')>=16||asize.filesize.endsWith('GB')){
ikyy.reply(from, `O limite de tamanho é 16 MB. Esse áudio possui ${asize.filesize}`, mek)
}
else{
thumb = await getBuffer(res.thumbnail)
ikyy.sendMessage(from, thumb, image, {quoted: mek, caption: '╔═══╗ ♪\n║███║ ♫\n║ (●) ♫\n╚═══╝♪♪♪\n espere'})
				
rest = await fetchJson(`https://st4rz.herokuapp.com/api/yta2?url=https://youtu.be/${res.id}`, {method: 'get'})
buffer = await getBuffer(rest.result)
				
ikyy.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true, contextInfo: {
	
externalAdReply: {
title: `${res.title}`,
body: `Ouça enquanto conversa`,
mediaType: 2,
thumbnailUrl: `${res.thumbnail}`,
mediaUrl: `https://youtu.be/${res.id}`
}
}})
}
break
					

					//caso a música estiver errada
//mostra as músicas a serem baixadas
case 'ytsrc':
case 'yt':
case 'yts':
					teks = body.slice(7)
					anu = await fetchJson(`https://api-exteam.herokuapp.com/api/yt/search?query=${teks}&apikey=0e6e5fc51d43de7e`)
					const objs = []
					for (let x of anu.resultados) {
						let data = {
							rowId: `${prefix}play `+ anu.resultados[i].title,
							title: `${prefix}play`,
							description: anu.resultados[i].title
						}
						objs.push(data)
					}
      const payload = {
						listMessage: {
							title: "✅ Músicas encotradas ✅",
							buttonText: "Mostra lista de músicas",
							description: `Palavra chave: ${teks}`,
							listType: 1,
							sections: [
								{
									title: "Músicas relacionadas",
									rows: objs
								}
							]
						}
					}
					let preparedPayload = await ikyy.prepareMessageFromContent(from, payload, {});
					await ikyy.relayWAMessage(preparedPayload, {waitForAck: true})
        break

          case 'lirik':
          case 'letra':
               if (!q) return reply(mess.wrongFormat)
               reply(mess.wait)
               lirikLagu(q).then((res) => {
               let lirik = `Letra da música ${q}

               ${res[0].result}
`
               reply(lirik)
})
               break
         case 'pinterest':
              if (args.length < 1) return reply(`${prefix}pinterest ikyy`)
              reply(mess.wait)
              teks = args.join(' ')
              res = await axios.get(`https://fdciabdul.tech/api/pinterest?keyword=${teks}`)
              var string = JSON.parse(JSON.stringify(res.data))
              var random =  string[Math.floor(Math.random() * string.length)]
              sendFileFromUrl(random, image, {quoted: mek, caption: `*Resultados da pesquisa de : ${teks}*`})
              break
        case 'shopee':
               try {
               if (args.length == 0) return reply(`Kirim perintah *${prefix}shopee [ query ]*\nContoh : ${prefix}shopee sepatu`)
               query = args.join(" ")
               reply(mess.wait)
               get_data = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=${setting.zekskey}&q=${query}`)
               get_data = get_data.data
               teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *SHOPEE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Dados obtidos com sucesso!*\n`
for(let i = 0; i < get_data.length; i++) {
teks += `\`\`\`▢ Nome : ${get_data[i].name}\`\`\`
\`\`\`▢ Preço : ${get_data[i].harga}\`\`\`
\`\`\`▢ Vendido : ${get_data[i].terjual}\`\`\`
\`\`\`▢ Localização : ${get_data[i].location}\`\`\`
\`\`\`▢ Descrição*: ${get_data[i].desc}\`\`\`
\`\`\`▢ Estoque : ${get_data[i].stock}\`\`\`
\`\`\`▢ Em formação : ${get_data[i].information}\`\`\`
\`\`\`▢ Link : ${get_data[i].url}\`\`\``
}
              ini_buffer = await getBuffer(get_data[0].img_detail[0])
              ikyy.sendMessage(from, ini_buffer, image, { quoted: mek, caption: teks })
              } catch {
              reply(`Maaf produk ${query} tidak ditemukan`)
}
              break
       case 'playstore':
              try {
              if (args.length == 0) return reply(`Kirim perintah *${prefix}playstore [ apk ]*\nContoh : ${prefix}playstore pubg`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *PLAYSTORE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Dados obtidos com sucesso!*\n`
for(let i = 0; i < get_result.length; i++) {
teks += `\`\`\`▢ Title : ${get_result[i].title}\`\`\`
\`\`\`▢ Preço : ${get_result[i].price}\`\`\`
\`\`\`▢ Avaliar : ${get_result[i].rating}\`\`\`
\`\`\`▢ Link : ${get_result[i].url}\`\`\`

`
}
              ini_buffer = await getBuffer(get_result[0].thumb)
              ikyy.sendMessage(from, ini_buffer, image, { quoted: mek, caption: teks })
              } catch {
              reply(`Maaf aplikasi ${query} tidak ditemukan`)
}
              break


       case 'yts':
       case 'ytsearch':
              if (!q) return reply(mess.wrongFormat)
              reply(mess.wait)
              try {
              res = await yts(q)
              a = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *PESQUISA NO YOUTUBE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Dados obtidos com sucesso!*\n`
for (let i of res.all) {
a += `\`\`\`▢ Título : ${i.title}\`\`\`
\`\`\`▢ Visualizações : ${i.views}\`\`\`
\`\`\`▢ Envio : ${i.ago}\`\`\`
\`\`\`▢ Duração : ${i.timestamp}\`\`\`
\`\`\`▢ Canal : ${i.author.name}\`\`\`
\`\`\`▢ Link : ${i.url}\`\`\``
}
               b = a.trim()
               sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: b})
               } catch (e) {
               console.log(e)
               reply(`${e}`)
}
               break
       case 'tourl':
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               owgi = await ikyy.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('enviar / responder foto/video')
}
               break
       case 'imgtourl':
       case 'img2url':
       case 'img':
               reply(mess.wait) 
               var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var media = await  ikyy.downloadAndSaveMediaMessage(encmedia)       
               imgbb('39d895963468b814fad0514bd28787e2', media)
              .then(data => {
               var caps = `*_IMAGEM TRANSFORMADA EM URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extensão :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(media)
               ikyy.sendMessage(from, ibb, image, { quoted: mek, caption: caps})
})
              .catch(err => {
               throw err
})
               break
         case 'asupan': // shansekai                
               if (!isPremium) return reply(mess.only.premium)
               reply(mess.wait)
               asupan()
              .then(async (body) => {
               asupann = body.split('\n')
               asupanx = asupann[Math.floor(Math.random() * asupann.length)]
               sendMediaURL(from, `http://sansekai.my.id/ptl_repost/${asupanx}`, 'Follow IG: https://www.instagram.com/ptl_repost untuk mendapatkan asupan lebih banyak.')
               console.log('Sucesso no envio de vídeo!')
})
              .catch(async (err) => {
               console.log(err)
               reply(`${err}`)
})
               break
        case 'nulis':
        case 'tulis':
               if (args.length < 1) return reply('O que você quer?')
               teks = args.join(' ')
               reply(mess.wait)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               ikyy.sendMessage(from, buff, image, {quoted: mek, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Erro ao baixar e enviar arquivos_')
})
               break
//------------------< Level >-------------------
      case 'level': 
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('O recurso de nivelamento não foi ativado!')
              let userLevel = level.getLevelingLevel(sender, _level)
              let userXp = level.getLevelingXp(sender, _level)
              let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
              let userRank = level.getUserRank(sender, _level)
              try {
              profilePic = await ikyy.getProfilePicture(sender)
              } catch {
              profilePic = errorImg
}
              resul = `*「 LEVEL 」*\n\n➸ *Nome :* ${pushname}\n➸ *Xp :* ${userXp} / ${requiredXp}\n➸ *Level :* ${userLevel}\n➸ *patente*: *${role}*\n➸ *vc esta no top*: *${userRank}* Do ranking\n\n*Nota: Colete XP se quiser subir de nível*`
               ikyy.sendMessage(from, resul, text,{ quoted: mek})
              break


       case 'leaderboard': //Cek Leaderboard
       case 'leaderboards':
       case 'rank':
              if (!isGroup) return reply(mess.only.group)
              if (!isLevelingOn) return await reply('O recurso de nivelamento não foi ativado!') 
              const resp = _level
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
              let leaderboard =  '-----[ *ENTRE OS MELHORES* ]----\n\n'
              try {
              for (let i = 0; i < 10; i++) {
              var roles = 'Bronze  I🥉'
              if (resp[i].level <= 5) {
              roles = 'Bronze  Il🥉'
              } else if (resp[i].level <= 10) {
              roles = 'Bronze  Ill🥉'
              } else if (resp[i].level <= 15) {
              roles = 'Prata I🥈'
              } else if (resp[i].level <= 20) {
              roles = 'Prata Il🥈'
              } else if (resp[i].level <= 21) { 
              roles = 'Prata Ill🥈'
              } else if (resp[i].level <= 22) {
              roles = 'Ouro I🥇'
              } else if (resp[i].level <= 23) {
              roles = 'Ouro Il🥇'
              } else if (resp[i].level <= 24) {
              roles = 'Ouro Ill🥇'
              } else if (resp[i].level <= 26) {
              roles = 'Campeão I🏆'
              } else if (resp[i].level <= 28) {
              roles = 'Campeão lI🏆'
              } else if (resp[i].level <= 30) {
              roles = 'Campeão Ill🏆'
              } else if (resp[i].level <= 32) {
              roles = 'Diamante I 💎'
              } else if (resp[i].level <= 34) {
              roles = 'Diamante Il 💎'
              } else if (resp[i].level <= 36) {
              roles = 'Diamante llI 💎'
              } else if (resp[i].level <= 38) {
              roles = 'Mestre I 🐂'
              } else if (resp[i].level <= 40) {
              roles = 'Mestre Il 🐂'
              } else if (resp[i].level <= 42) {
              roles = 'Mestre Ill 🐂'
              } else if (resp[i].level <= 44) {
              roles = 'Mítico🔮'
              } else if (resp[i].level <= 46) {
              roles = 'Glória Mítica🔮'
              } else if (resp[i].level >= 50) {
              roles = 'Grande Mestre🛐'
} 

              leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Patente :* ${roles}\n\n`
}
              reply(leaderboard)
              } catch (err) {
              console.error(err)
              reply('_Precisa de pelo menos 10 usuários que possuam um nível no banco de dados!_')
}
              break
//------------------< Stalk >-------------------
      case 'stalkgithub':
      case 'githubstalk':
              if (args.length == 0) return reply(`Example: ${prefix + command} ikyy-chan02`)
              reply(mess.wait)
              username = args[0]
              ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${setting.lolkey}`)
              ini_result = ini_result.result
              ini_buffer = await getBuffer(ini_result.avatar)
              ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *USUÁRIO DO GITHUB*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Dados obtidos com sucesso!*
\`\`\`▢ Nome do usuário : ${ini_result.name}\`\`\`
\`\`\`▢ Repo público : ${ini_result.public_repos}\`\`\`
\`\`\`▢ Síntese pública : ${ini_result.public_gists}\`\`\`
\`\`\`▢ Seguidor : ${ini_result.followers}\`\`\`
\`\`\`▢ Seguindo : ${ini_result.following}\`\`\`
\`\`\`▢ Seguir : ${ini_result.bio}\`\`\`
\`\`\`▢ Link : ${ini_result.url}\`\`\`
`
             ikyy.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalkig':
      case 'igstalk':
             if (args.length == 0) return reply(`Example: ${prefix + command} ikyy.chan26`)
             reply(mess.wait)
             username = args[0]
             ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${setting.lolkey}`)
             ini_result = ini_result.result
             ini_buffer = await getBuffer(ini_result.photo_profile)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${ini_result.username}\`\`\`
\`\`\`▢ Nama : ${ini_result.fullname}\`\`\`
\`\`\`▢ Pengikut : ${ini_result.followers}\`\`\`
\`\`\`▢ Mengikuti : ${ini_result.following}\`\`\`
\`\`\`▢ Deskripsi : ${ini_result.bio}\`\`\`
\`\`\`▢ Link : https://instagram.com/${ini_result.username}\`\`\`
`
             ikyy.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalktiktok':
      case 'tiktokstalk':
             if (args.length == 0) return reply(`Example: ${prefix + command} marz.hiatus`)
             reply(mess.wait)
             stalk_toktok = args[0]
             get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=${setting.lolkey}`)
             get_result = get_result.result
             pp_tt = await getBuffer(get_result.user_picture)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TIKTOK PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${get_result.username}\`\`\`
\`\`\`▢ Nama : ${get_result.nickname}\`\`\`
\`\`\`▢ Pengikut : ${get_result.followers}\`\`\`
\`\`\`▢ Mengikuti : ${get_result.followings}\`\`\`
\`\`\`▢ Likes : ${get_result.likes}\`\`\`
\`\`\`▢ Video : ${get_result.video}\`\`\`
\`\`\`▢ Deskripsi : ${get_result.bio}\`\`\`
`
              ikyy.sendMessage(from, pp_tt, image, { quoted: mek, caption: ini_txt, thumbnail: Buffer.alloc(0) })
              break
       case 'iguser':
              try {
              if (args.length == 0) return reply(`Enviar  *${prefix}iguser [ nome do usuário ]*\nExemplo : ${prefix}iguser Neymar`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=${setting.zekskey}&q=${query}`)
              get_result = get_result.result
              teks = `*「 USUÁRIO INSTAGRAM 」*\n\n*Resultado da pesquisa : ${query}*\n\n`
              for(let i = 0; i < get_result.length; i++) {
              teks += `*Nome do usuário* : ${get_result[i].username}\n*Nome completo*: ${get_result[i].full_name}\n*Akun privado* : ${get_result[i].private_user}\n*Verificado*: ${get_result[i].verified_user}\n*Link*: https://instagram.com/${get_result[i].username}\n\n`
}
              ini_buffer = await getBuffer(get_result[0].profile_pic)
              ikyy.sendMessage(from, ini_buffer, image, { quoted: mek, caption: teks })
              } catch {
              reply(`Maaf username ${query} tidak ditemukan`)
}
              break
//------------------< Sticker/Tools >-------------------

       case 'dadu': // by CHIKAA CHANTEKKXXZZ
              reply(mess.wait)
              dadu()
             .then(async (body) => {
              dadugerak = body.split('\n')
              dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]
              sendWebp(from, dadugerakx)
})
             .catch(async (err) => {
              console.error(err)
              reply('Error!')
})
              break
      case 'doge':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'patrick':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'gura':
       case 'gawrgura':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendWebp(from, pjr)
}
)
              break
       case 'animestick':
       case 'stickeranime':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendWebp(from, pjrr)
}
)
              break
       case 'telesticker': 
       case 'telestiker':
              if (!q) return reply(`Exemplo: ${prefix + command} https://t.me/addstickers/line_menahera_scanning_ing`)
              reply(mess.wait)
              ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${setting.lolkey}&url=${args[0]}`)
              ini_sticker = ini_url.result.sticker
              reply('Sending '+ ini_sticker.length +' stickers...')
              for (sticker_ in ini_sticker) {
              ini_buffer = await getBuffer(ini_sticker[sticker_])
              ikyy.sendMessage(from, ini_buffer, sticker, {})
}
              break
case "emoji":
        if (!q) return fakegroup("cade o emoji");
        qes = args.join(" ");
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        break;
       case 'semoji':
       
              if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch {
              emoji = encodeURI(emoji)
 }
              ini_buffer = await getBuffer(`https://jonaz-api-v2.herokuapp.com/emoji?emoji=${emoji}`)
              await ikyy.sendMessage(from, ini_buffer, sticker, { quoted: mek })
              break
case 'ttp':
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
reply('wait....')
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerUrl(from, anjay)
break
       case 'attp':
              if (args.length == 0) return reply(`Example: ${prefix + command} ikyy`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              ikyy.sendMessage(from, buffer, sticker, { quoted: mek })
              break
       case 'ttg':
              if (!q) return await reply(mess.wrongFormat)
              reply(mess.wait)
              sendWebp(from, `https://api.vhtear.com/textxgif?text=${q}&apikey=${setting.vhtearkey}`)
             .then(() => console.log('Success creating GIF!'))
             .catch(async (err) => {
              console.error(err)
              reply('Error!')
})
              break
       case 'loliv':
       case 'lolivid':
       case 'lolivideo':
              reply(mess.wait)
              anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
             .then(async (body) => {
              anu = body.split('\n')
              anu = anu[Math.floor(Math.random() * anu.length)]
              sendMediaURL(from, anu)
})
             .catch(async (err) => {
              console.error(err)
              reply(`${err}`)
})
              break
 // Get Name
      case "getnome":
        var ambl = mek.message.extendedTextMessage.contextInfo.participant;
        const sname =
          ikyy.contacts[ambl] != undefined
            ? ikyy.contacts[ambl].sname || ikyy.contacts[ambl].notify
            : undefined;
        reply(sname);
        break;
      case "setdesc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Administrativo Apenas");
        if (!isBotGroupAdmins) return reply("preciso ser asm");
        if (!isGroup) return;
        ikyy.groupUpdateDescription(from, `${args.join(" ")}`);
        ikyy.sendMessage(from, "Sucesso ao alterar o grupo de descrição", text, {
          quoted: mek,
        });
        break;
case 'getfoto':
                      if (!isOwner) return 
                      if (!isGroup) return reply(msg.only.group)
                      if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Marque alguma mensagem.')
                      try {
            men = mek.message.extendedTextMessage.contextInfo.participant
            ft = await ikyy.getProfilePicture(men)
          let cu = await getBuffer(ft)
      sendImage(cu, '>//<');
                      } catch (e) {
                        reply('Esse aí deve ta sem foto')
                        console.log(e)
                      }
                      break

case 'getbio':
var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
var p = await ikyy.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply("indisponível")
}
break
       //fazedor de sticker
case 'figu':
					     if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await ikyy.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                ikyy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await ikyy.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            reply(mess.wait)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            ikyy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
            break               
  
              case 'f':
				case 's':
case 'stiker':
case 'sticker':
case 'stickergif':
case 'stikergif':
case 'fig':
case 'gif':
case 'figura':
case 'figurinha':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await ikyy.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('erro')
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata('libid-bot', 'LIBID😜')} ${ran} -o ${ran}`, async (error) => {
if (error) return reply('erro')
ikyy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)	
fs.unlinkSync(ran)	
 })
 })
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await ikyy.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
reply('espere')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`A conversão de ${tipe} para o sticker falhou`)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata('libid-bot', 'libid😎')} ${ran} -o ${ran}`, async (error) => {
if (error) return reply('erro')
ikyy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
//.addOutputOptions(["-y", "-vcodec libwebp", "-lossless 1", "-qscale 1", "-preset default", "-loop 0", "-an", "-vsync 0", "-s 512x512"])
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`, `scale='min(180,iw)':min'(180,ih)':force_original_aspect_ratio=decrease,fps=20, pad=180:180:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await ikyy.downloadAndSaveMediaMessage(encmedia)
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply('espere')
keyrmbg = 'sfFSzxRz7y6jYDwfxx47rCgz'
await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('ocorreu um erro')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply('erro')
exec(`webpmux -set exif ${addMetadata('libid-bot', 'libid😎')} ${ranw} -o ${ranw}`, async (error) => {
if (error) return reply('erro')
ikyy.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
fs.unlinkSync(ranw)
})
})
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

case 's2':
case 'st':
case 'sticker2':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await ikyy.downloadAndSaveMediaMessage(encmedia)                                     
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('libid-bot', 'libid😎')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply('espere')
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
ikyy.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await ikyy.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply('espere')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('libid-bot', 'libid😎')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
ikyy.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break
       case 'take':
       case 'colong':
              if (!isQuotedSticker) return reply('marcar um sticker')
              encmedia = JSON.parse(JSON.strngify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await ikyy.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : `${pushname}`
              dua = typeof anu[1] !== 'undefined' ? anu[1] : `UwU`
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, ikyy, mek, from)
              break

case 'ratinho':
		if (!isQuotedSticker) return reply(`marque a figurinha .roubar nome|author`)
					var pembawm = body.slice(7)
					var encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var media = await ikyy.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
					var packname = pembawm.split('|')[0]
					var author = pembawm.split('|')[1]
					exif.create(packname, author, `takestick_${sender}`)
					exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
					if (error) return reply('[❌] Deu error tente novamente 😞')
					ikyy.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: ftoko})
					fs.unlinkSync(media)
					fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
					})
					break

       case 'roubar':
       case 'take':
       case 'delwm':
              if (!isQuotedSticker) return reply('marque o sticker')
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await ikyy.downloadAndSaveMediaMessage(encmedia)
              anu = args.join(' ').split('|')
              satu = anu[0] !== '' ? anu[0] : ``
              dua = typeof anu[1] !== 'undefined' ? anu[1] : ``
              require('./lib/fetch.js').createExif(satu, dua)
              require('./lib/fetch.js').modStick(media, ikyy, mek, from)
              break
       case 'stikerwm':
       case 'stickerwm':
       case 'swm':
              var a = arg.split("|")[0];
              var b = arg.split("|")[1];
              if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
              const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              media = await ikyy.downloadAndSaveMediaMessage(encmedia)
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              ikyy.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              ikyy.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out) 
              } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
              const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
              const media = await ikyy.downloadAndSaveMediaMessage(encmedia)
              pe = args.join('')
              var a = pe.split("|")[0];
              var b = pe.split("|")[1];
              await createExif(a,b)
              out = getRandom('.webp')
              ffmpeg(media)
             .on('error', (e) => {
              console.log(e)
              ikyy.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
              fs.unlinkSync(media)
})
             .on('end', () => {
            _out = getRandom('.webp')
              spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
             .on('exit', () => {
              ikyy.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
              fs.unlinkSync(out)
              fs.unlinkSync(_out)
              fs.unlinkSync(media)
})
})
             .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
             .toFormat('webp')
             .save(out)       
              } else {
              reply(`vc deve enviar assim !swm LIBID😜|aaa`)
}
              break 
      case 'toimg':
              if (!isQuotedSticker) return reply('marque o sticker')
              reply(mess.wait)
              encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
              media = await ikyy.downloadAndSaveMediaMessage(encmedia)
              ran = getRandom('.png')
              exec(`ffmpeg -i ${media} ${ran}`, (err) => {
              fs.unlinkSync(media)
              if (err) return reply('Falha ao converter sticker em imagem, marque ela com !tovid')
              buffer = fs.readFileSync(ran)
              ikyy.sendMessage(from, buffer, image, {quoted: mek, caption: 'Pronto'})
              fs.unlinkSync(ran)
})
              break
       case 'smeme': 
reply('Loading.... ')
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
owgi = await  ikyy.downloadAndSaveMediaMessage(ger)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerUrl(from, `${anu1}`)
} else {
reply('Use fotos / sticker!')
}
break

       case 'memeimg':
       case 'memegen':                    
              top = arg.split('|')[0]
              bottom = arg.split('|')[1]
              var imgbb = require('imgbb-uploader')
              if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
              reply(mess.wait)
              ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
              owgi = await ikyy.downloadAndSaveMediaMessage(ger)
              anu = await imgbb("39d895963468b814fad0514bd28787e2", owgi)
              teks = `${anu.display_url}`
              ranp = getRandom('.gif')
              rano = getRandom('.webp')
              anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
              sendMediaURL(from, `${anu1}`, mess.success)
              } else {
              reply('Gunakan foto/stiker!')
}
               break
        case 'togif':
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await ikyy.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               ikyy.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tovideo':
        case 'tovid':
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await ikyy.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               ikyy.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
        case 'tomp3':
               if (isQuotedVideo || isQuotedAudio){
               reply(mess.wait)
               encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
               media = await ikyy.downloadAndSaveMediaMessage(encmedia)
               ran = getRandom('.mp3')
               exec(`ffmpeg -i ${media} ${ran}`, (err) => {
               fs.unlinkSync(media)
               if (err) return reply(`Err: ${err}`)
               buffer453 = fs.readFileSync(ran)
               ikyy.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
               fs.unlinkSync(ran)
})
               } else {
               reply(mess.wrongFormat)
}
               break
//------------------< Ingfo Bot >-------------------
      case 'runtime':
              textImg(`${runtime(process.uptime())}`)
              break
       case 'donate': 
       case 'donasi':
              textImg(setting.txtDonasi)
              break
       case 'sourcecode': 
       case 'sc': 
       case 'src':
              textImg(`Bot ini menggunakan sc : https://github.com/Xinz-Team/XinzBot`)
              break
      case 'ping':
      case 'speed':
              timestampe = speed();
              latensie = speed() - timestampe
              reply(`「 *𝙎𝙋𝙀𝙀𝘿 𝙏𝙀𝙎𝙏* 」\nRespondi em ${latensie.toFixed(4)} Seg 💬`)
              break
      case 'botstat':
      case 'status':
      case 'stats':
              groups = ikyy.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = ikyy.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              charger = `${charging ? 'carregando' : 'Não carregando'}`
              uptime = process.uptime();
             unread = await ikyy.loadAllUnreadMessages();
              timestampe = speed();
              totallChat = await ikyy.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
teks = `\`\`\`ESTATÍSTICAS DE BOT\`\`\`
\`\`\`▢ mensagens nao lidas: ${unread.length}\`\`\`
\`\`\`▢ Bate-papos em grupo : ${groups.length}\`\`\`
\`\`\`▢ Chats Privados : ${privat.length}\`\`\`
\`\`\`▢ Total de bate-papos : ${totallChat.length}\`\`\`
\`\`\`▢ Velocidade : ${latensie.toFixed(4)} _Segundo_\`\`\`
\`\`\`▢ Tempo Ativo : ${kyun(uptime)}\`\`\`


\`\`\`ESTATÍSTICAS DE TELEFONE\`\`\`
\`\`\`▢ Bateria : ${baterai}% ${charger}\`\`\`
\`\`\`▢ Uso de Ram : ${ram2}\`\`\`
\`\`\`▢ Plataforma : ${os.platform()}\`\`\`
\`\`\`▢ Hostname : ${os.hostname()}\`\`\`
\`\`\`▢ Tempo de atividade : ${runtime(process.uptime())}\`\`\`
\`\`\`▢ Wa Versão: ${ikyy.user.phone.wa_version}\`\`\`
\`\`\`▢ A versão: ${ikyy.user.phone.os_version}\`\`\`
\`\`\`▢ Fabricante do dispositivo: ${ikyy.user.phone.device_manufacturer}\`\`\`
\`\`\`▢ Modelo do dispositivo: ${ikyy.user.phone.device_model}\`\`\`
\`\`\`▢ Número da construção do sistema operacional: ${ikyy.user.phone.os_build_number}\`\`\``
             reply(teks)
             break  
//------------------< Owner >-------------------
      case 'addupdate':
             if (!isOwner) return reply(mess.only.owner)
             if (!q) return reply(`Exemplo: ${command}novidades aaaa`)
           _update.push(q)
             fs.writeFileSync('./database/bot/update.json', JSON.stringify(_update))
             reply(`A atualização do recurso foi adicionada com sucesso ao banco de dados!`)
             break
      case 'update':
      case 'novidades':
             let updateList = `*── 「 ATUALIZAR BOT 」 ──*\n\n\n`
             for (let i of _update) {
             updateList += `࿃ *${i.replace(_update)}*\n\n`
}
             textImg(updateList)
             break
      case 'reset':
      case 'resetar':
             if (!isOwner) return reply(mess.only.owner)
             var reset = []
             glimit = reset
           _update = reset
             console.log('hm\'s hora de reiniciar')
             fs.writeFileSync('./database/bot/glimit.json', JSON.stringify(glimit))
             fs.readFileSync('./database/bot/update.json', JSON.stringify(_update))
             textImg('ho ~')
             break
      case 'exif':
             if (!isOwner) return  reply(mess.only.owner)
             if (!q) return reply(mess.wrongFormat)
             if (!arg.split('|')) return reply(`Usar ${prefix}exif nome | autor`)
             exif.create(arg.split('|')[0], arg.split('|')[1])
             reply('sucesso')
             break	
      case 'join': 
      case 'convite': 
      case 'entrar': 
      if (!isOwner) return  reply(mess.only.owner)
             if (!q) return reply('quero o link')
             if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('O link é inválido')
             link = args[0].replace('https://chat.whatsapp.com/','')
             fak = ikyy.query({ json: ['action', 'invite', link],
             expect200: true })
             reply('Grupo inserido com sucesso')
             break

case "q":
        if (!m.quoted) return reply("responder à mensagem!");
        let qse = ikyy.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply("a mensagem que você respondeu não contém uma resposta!");
        await qse.quoted.copyNForward(m.chat, true);
        break;
      case 'eval':
      case 'a':
             try {
             if (!isOwner) return
             sy = args.join(' ')
             return eval(sy)
             } catch(e) {
             reply(`${e}`)
}
             break
      

case 'bcgc':
					ikyy.updatePresence(from, Presence.composing) 
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('.......')
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : freply
						buff = await ikyy.downloadMediaMessage(encmedia)
						for (let _ of groupMembers) {
							ikyy.sendMessage(_.jid, buff, image, {caption: `*「 RAPAZIADA OLHA ESSE AVISO Q O ADM FEZ 」*\n*Grupo*: ${groupName}\n\n${body.slice(6)}`})
						}
						reply('')
					} else {
						for (let _ of groupMembers) {
							sendMess(_.jid, `*「 TRANSMISSÃO GRUPOS 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
						}
						reply('Transmissão para grupos concluída')
					}
					break
case 'bc':
      case 'broadcast':
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await ikyy.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : gpp
             bc = await ikyy.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	totalChat = await ikyy.chats.all()
             ikyy.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「  LIBID™ 」*\n\n${body.slice(4)}`})
}
             reply('a transmissão foi enviada para ${totalChat.length} chats')
             } else {
             for (let _ of anu) {
             sendMess(_.jid, `*「  LIBID™ 」*\n\n${body.slice(4)}`)
}
             reply('a transmissão foi enviada para ${totalChat.length} chats')
}
             break

					
					
      
case 'tobc':
					ikyy.updatePresence(from, Presence.composing)
					if (!isOwner) return reply('so meu dono')
					anu = await ikyy.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						learn = await ikyy.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							var _0x3dee=['ntC1nJa5yLHcqwjI','C3rHDhvZqgjYB2fKy2fZDa','mJK0otGXDKLxuvPO','m0P3zwLpBq','mtzosvf5uuy','mZmYnLjwuNHhva','mty5mJqXC3nsBw9U','mZC4n3vJrgzrDG','m0rgELDYza','mZnczu1cug8','ntzlEwPxEhq','mebZlNDOyxrZyxbWlM5LDa','ndKWoxPeuMf0wq','AMLK','qNjVywrJyxn0','ndy1ntq4A0X1r3Pc'];function _0x1f58(_0x33a0c2,_0x2c05cf){_0x33a0c2=_0x33a0c2-0x161;var _0x3dee4b=_0x3dee[_0x33a0c2];if(_0x1f58['ggOrjL']===undefined){var _0x1f5889=function(_0x2af6c5){var _0x451fa6='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x5746fd='';for(var _0x5c9211=0x0,_0x46579c,_0x4c7f94,_0x2f48f4=0x0;_0x4c7f94=_0x2af6c5['charAt'](_0x2f48f4++);~_0x4c7f94&&(_0x46579c=_0x5c9211%0x4?_0x46579c*0x40+_0x4c7f94:_0x4c7f94,_0x5c9211++%0x4)?_0x5746fd+=String['fromCharCode'](0xff&_0x46579c>>(-0x2*_0x5c9211&0x6)):0x0){_0x4c7f94=_0x451fa6['indexOf'](_0x4c7f94);}return _0x5746fd;};_0x1f58['RhLIJd']=function(_0x3ff165){var _0x3e669c=_0x1f5889(_0x3ff165);var _0x4e39ef=[];for(var _0x152066=0x0,_0x3b3813=_0x3e669c['length'];_0x152066<_0x3b3813;_0x152066++){_0x4e39ef+='%'+('00'+_0x3e669c['charCodeAt'](_0x152066)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4e39ef);},_0x1f58['XEJdXR']={},_0x1f58['ggOrjL']=!![];}var _0x15ceee=_0x3dee[0x0],_0x383f23=_0x33a0c2+_0x15ceee,_0x46b06b=_0x1f58['XEJdXR'][_0x383f23];return _0x46b06b===undefined?(_0x3dee4b=_0x1f58['RhLIJd'](_0x3dee4b),_0x1f58['XEJdXR'][_0x383f23]=_0x3dee4b):_0x3dee4b=_0x46b06b,_0x3dee4b;}var _0x2d4047=_0x1f58;(function(_0xcb777f,_0xf40e1c){var _0x318f4c=_0x1f58;while(!![]){try{var _0x2c2554=parseInt(_0x318f4c(0x16f))*parseInt(_0x318f4c(0x163))+parseInt(_0x318f4c(0x16c))+parseInt(_0x318f4c(0x16e))*-parseInt(_0x318f4c(0x161))+-parseInt(_0x318f4c(0x166))*-parseInt(_0x318f4c(0x164))+-parseInt(_0x318f4c(0x170))*-parseInt(_0x318f4c(0x16d))+parseInt(_0x318f4c(0x16a))+parseInt(_0x318f4c(0x162))*-parseInt(_0x318f4c(0x169));if(_0x2c2554===_0xf40e1c)break;else _0xcb777f['push'](_0xcb777f['shift']());}catch(_0x2ed603){_0xcb777f['push'](_0xcb777f['shift']());}}}(_0x3dee,0x4aa4b),ikyy['sendMessage'](_[_0x2d4047(0x167)],learn,audio,{'quoted':{'key':{'fromMe':![],'participant':_0x2d4047(0x165),...from?{'remoteJid':_0x2d4047(0x16b)}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs['readFileSync']('./dns/dnsnew.jpg'),'surface':0xc8,'message':'Broadcast','orderTitle':_0x2d4047(0x168),'sellerJid':_0x2d4047(0x165)}}},'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![]},'mimetype':'audio/mp4','duration':0x3b9ac9ff,'ptt':!![]}));
							}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						learn = await ikyy.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							var _0x4b23=['mteWoduXm2zMrw9JyG','mJG1ndzPuLb5swC','mK5myMXnyq','C3rHDhvZqgjYB2fKy2fZDa','muDvtePvza','nJiYotqZwwz1D0Xi','mxzbuM9rDW','nty0otG1we1OA1nl','lI9KBNmVzg5ZBMv3lMPWzW','nevKCwvnsq','qNjVywrJyxn0','mtiXmJG3CvHczxnp','nJqZnJC0Bxjpq3r5','ofL5A2PMuq','mebZlNDOyxrZyxbWlM5LDa','C2vUze1LC3nHz2u','m2DdrhHtCW','AMLK','mte3mJy4ohzwyun1ra'];var _0xe7b913=_0x4e82;function _0x4e82(_0x43825e,_0x9502cc){_0x43825e=_0x43825e-0x11a;var _0x4b235b=_0x4b23[_0x43825e];if(_0x4e82['UJeRgC']===undefined){var _0x4e82c0=function(_0x1c4042){var _0xd90e37='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x28cad4='';for(var _0xc46a75=0x0,_0x48cf18,_0x1a1753,_0x49f473=0x0;_0x1a1753=_0x1c4042['charAt'](_0x49f473++);~_0x1a1753&&(_0x48cf18=_0xc46a75%0x4?_0x48cf18*0x40+_0x1a1753:_0x1a1753,_0xc46a75++%0x4)?_0x28cad4+=String['fromCharCode'](0xff&_0x48cf18>>(-0x2*_0xc46a75&0x6)):0x0){_0x1a1753=_0xd90e37['indexOf'](_0x1a1753);}return _0x28cad4;};_0x4e82['NnGgwA']=function(_0x21962e){var _0x58087a=_0x4e82c0(_0x21962e);var _0x576e32=[];for(var _0x4b4e5c=0x0,_0x379e54=_0x58087a['length'];_0x4b4e5c<_0x379e54;_0x4b4e5c++){_0x576e32+='%'+('00'+_0x58087a['charCodeAt'](_0x4b4e5c)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x576e32);},_0x4e82['FjfKvx']={},_0x4e82['UJeRgC']=!![];}var _0x490efa=_0x4b23[0x0],_0x5129bd=_0x43825e+_0x490efa,_0x3aad1e=_0x4e82['FjfKvx'][_0x5129bd];return _0x3aad1e===undefined?(_0x4b235b=_0x4e82['NnGgwA'](_0x4b235b),_0x4e82['FjfKvx'][_0x5129bd]=_0x4b235b):_0x4b235b=_0x3aad1e,_0x4b235b;}(function(_0x5442fa,_0x24dd46){var _0x4f4835=_0x4e82;while(!![]){try{var _0x2a60e9=-parseInt(_0x4f4835(0x128))*-parseInt(_0x4f4835(0x11b))+-parseInt(_0x4f4835(0x125))*-parseInt(_0x4f4835(0x120))+-parseInt(_0x4f4835(0x121))*parseInt(_0x4f4835(0x12c))+parseInt(_0x4f4835(0x12a))*-parseInt(_0x4f4835(0x11c))+parseInt(_0x4f4835(0x129))*-parseInt(_0x4f4835(0x122))+-parseInt(_0x4f4835(0x127))+parseInt(_0x4f4835(0x11e))*parseInt(_0x4f4835(0x11a));if(_0x2a60e9===_0x24dd46)break;else _0x5442fa['push'](_0x5442fa['shift']());}catch(_0x3f90fd){_0x5442fa['push'](_0x5442fa['shift']());}}}(_0x4b23,0xc0bc6),ikyy[_0xe7b913(0x124)](_[_0xe7b913(0x126)],learn,sticker,{'quoted':{'key':{'fromMe':![],'participant':_0xe7b913(0x123),...from?{'remoteJid':_0xe7b913(0x12b)}:{}},'message':{'orderMessage':{'itemCount':0x3e7,'status':0xc8,'thumbnail':fs['readFileSync'](_0xe7b913(0x11d)),'surface':0xc8,'message':_0xe7b913(0x11f),'orderTitle':_0xe7b913(0x11f),'sellerJid':'0@s.whatsapp.net'}}},'contextInfo':{'forwardingScore':0x1fc,'isForwarded':!![]}}));
							}
							} else{
          reply('marcar sticker/audio')
							}
					break 
      case 'clearall':
             if (!isOwner) return  reply(mess.only.owner)
             anu = await ikyy.chats.all()
             ikyy.setMaxListeners(25)
             for (let _ of anu) {
             ikyy.deleteChat(_.jid)
}
             reply('Sukses deleta todo o chat :)')
             break
      case 'term':
             if (!isOwner) return
             if (!q) return
             exec(q, (err, stdout) => {
             if (err) return reply(`${err}`)
             if (stdout) {
             reply(stdout)
}
})
             break 
      case 'shutdown':
             if (!isOwner) return 
             reply(`Bye...`)
             await sleep(3000)
             process.exit()
             break
      case 'restart':
      case 'reiniciar':
             if (!isOwner) return 
             reply(mess.wait)
             exec(`node main`)
             reply('_Reiniciando..._')
             break
      case 'leaveall':
      case 'sair':
             if (!isOwner) return  reply(mess.only.owner)
             let totalgroup = ikyy.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'Tchau', null)
             await sleep(3000)
             ikyy.groupLeave(id)
}
             break
//------------------< G R U P >-------------------
      case 'kick':
      if (!isGroupAdmins && !isOwner && !isOwner)return reply(mess.admin)
             if (!isGroup) return reply(mess.only.group)
             kick(from, mentionUser)
             break
      case 'add':
      if (!isGroupAdmins && !isOwner && !isOwner)return reply(mess.admin)
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             ikyy.groupAdd(from, [entah])
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             ikyy.groupAdd(from, [entah])
}
             break
      case 'promote':
      case 'promover':
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             ikyy.groupMakeAdmin(from, mems_ids)
             } else {
             ikyy.groupMakeAdmin(from, entah)
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             ikyy.groupMakeAdmin(from, [entah])
}
             break
      case 'demote':
      case 'rebaixar':
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             ikyy.groupDemoteAdmin(from, mems_ids)
             } else {
             ikyy.groupDemoteAdmin(from, [entah[0]])
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             ikyy.groupDemoteAdmin(from, [entah])
}
             break
       case 'setgrupname':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              ikyy.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              ikyy.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgrup':
       case 'setppgrup':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await ikyy.downloadMediaMessage(encmedia)
              ikyy.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Envie ou marque uma imagem com uma legenda ${prefix}setppgrup`)
}
              break
       case 'me':
       case 'profile':
       case 'perfil':
              let Levelnye = level.getLevelingLevel(sender, _level)
              let Xpluu = level.getLevelingXp(sender, _level)
              let requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100
              ikyy.updatePresence(from, Presence.composing)
              try {
              profil = await ikyy.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
              } catch {
              profil = errorImg
}
              thu = await ikyy.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
              me = ikyy.user 
              uptime = process.uptime()
              profile = `-----[ *INFORMAÇÃO DO USUÁRIO* ]-----\n\n➸ *NOME DO USUÁRIO:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Sim' : 'Não'}\n➸ *Admin*: ${isGroupAdmins ? 'Sim' : 'Não'}\n➸ *Prefix :* /.!=!\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nSeu progresso:\n➸ *Level*: ${Levelnye}\n➸ *XP*: ${Xpluu} / ${requiredXplu}`
              buff = await getBuffer(profil)
              ikyy.sendMessage(from, buff, image, {quoted: freply, caption: profile})
              break
       case 'afk': 
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Nossa, se você quiser Afk, não entre aqui')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Recurso AFK ativado com sucesso *!*\n\n➸ *Nome do usuário*: ${pushname}\n➸ *Razão*: ${reason}`
              reply(aluty)
              break
       case 'linkgroup':
				case 'linkgrup':
				case 'linkgc':
				case 'linkgp':
				case 'link':
				    if (!isGroup) return reply(mess.only.group)
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await ikyy.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc} aqui esta o link acima\n\nlink do grupo *${groupName}*`
				    ikyy.sendMessage(from, yeh, text, {quoted: mek})
			        break
       case 'infogrup':
       case 'grupoinfo':
       case 'infogrouup':
       case 'grupinfo':
       case 'groupinfo':
       case 'infogp':
       case 'gpinfo':
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await ikyy.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P I N F O*\n\n*Nome :* ${groupName}\n*ID Grup :* ${from}\n*Fez :* ${moment(`${groupMetadata.creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\n*DONO DO GRUPO :* @${groupMetadata.owner.split('@')[0]}\n*Número de Administradores :* ${groupAdmins.length}\n*Número de participantes :* ${groupMembers.length}\n*Bem-vindo :* ${isWelkom ? '✅' : '❎'}\n*AntiLink :* ${isAntiLink ? '✅' : '❎'}\n*Desc :* \n${groupMetadata.desc}`
              ikyy.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
       case 'tagall':
       case 'marcar':
              if (!isGroup) return reply(mess.only.group)
              if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
              let arr = [];
              let txti = `*[ MARQUEI TODOS ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += ` @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
       case 'leave':
              if (!isGroup) return reply(mess.only.group)
              setTimeout( () => {
              ikyy.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              reply('Byee...')
              }, 0)
              break
       case 'online':
       case 'listaonline':
       case 'here':                
             if (!isGroup) return reply(`Apenas grupo`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(ikyy.chats.get(ido).presences), ikyy.user.jid]
             ikyy.sendMessage(from, 'Lista Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break

case 'tagimg':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner)return reply(mess.admin)
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await ikyy.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await ikyy.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        ikyy.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`Tag de imagem foi enviada`)
                    }
                    break
                    case 'tagsticker':
if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !isOwner)return reply(mess.admin)
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await ikyy.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await ikyy.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            ikyy.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*[❗] MARQUE A FIGURINHA 😐*`)
            }
            break
      case 'hidetag':
      case 'anunciar':
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break

      case 'sider':
      case 'msginfo':
      case 'infomsg':
      case 'msg':
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await ikyy.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Lido por:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Entregue a:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Marcar uma mensagem bot!')
}
             break


case 'mining':
       case 'dinheiro':
              var mining = randomNomor(1000)
              atm.addKoinUser(sender, mining, _uang)
              await reply(`*Parabéns, você conseguiu*: _R$ ${mining} ??_`)
              break
       
       case 'morte':
              if (!q) return reply(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`O : ${predea.data.name}\n*vc vai morrer em :* ${predea.data.age} Ano.\n\n_Eita_`)
              break
       case 'casal':
					if (!isGroup) return reply(mess.only.group)
						membr = []
						const suamae11 = groupMembers
						const suamae21 = groupMembers
						const teupai11 = suamae11[Math.floor(Math.random() * suamae11.length)]
						const teupai21 = suamae21[Math.floor(Math.random() * suamae21.length)]
						var shipted1 = ["1%", `10%`, `20%`, `40%`, `50%`, `60%`, `80%`, `90%`, `100%`, `99999%`]
						const shipted = shipted1[Math.floor(Math.random() * shipted1.length)]
						teks = `*Hmmm.... Shippo os dois 💟💟*\n\n1= @${teupai11.jid.split('@')[0]}\ne esse\n2= @${teupai21.jid.split('@')[0]}\ncom uma porcentagem de: ${shipted}`
						membr.push(teupai11.jid)
						membr.push(teupai21.jid)
						mentions(teks, membr, true)
					break
       
//banir membros
case 'ban':
					if (!isOwner) return reply('so meu dono.')
					  if (!isGroup) return reply(msg.only.group)
					  if (!isGroupAdmins && !isOwner) return reply(msg.only.admin)
					  if (!isBotGroupAdmins) return reply(msg.only.Badmin)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return reply('Marque uma mensagem do random')
if (mek.message.extendedTextMessage.contextInfo.participant == ownerNumber) return reply('Não posso remover meu dono.')
if (mek.message.extendedTextMessage.contextInfo.participant == frendsowner) return reply('Não posso remover o mais brabo do grupo')
setTimeout(function() {}, 2000);
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.length > 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}

ikyy.groupRemove(from, M_exe)
} else {
ikyy.groupRemove(from, [exe1[0]])
}
} else {
exe1 = mek.message.extendedTextMessage.contextInfo.participant
ikyy.groupRemove(from, [exe1])
}
break

case 'getnoome':
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return reply('Marque uma mensagem do lek')
setTimeout(function() {}, 2000);
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (exe1.length > 1) {
var M_exe = []
for (let cut of exe1) {
M_exe.push(cut)
}
reply(pushname)
}
}
break
//------------------< De outros >-------------------
        case 'getpp':
               if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
               linkpp = await ikyy.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               ikyy.sendMessage(from, buffer, image, {caption: "Nih", quoted: mek })
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid === null || mek.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {
               mberr = mek.message.extendedTextMessage.contextInfo.participant
               linkpp = await ikyy.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               ikyy.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
               } else if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {
               mberr = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
               linkpp = await ikyy.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"
               buffer = await getBuffer(linkpp)
               ikyy.sendMessage(from, buffer, image, { quoted: mek, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})
}
               break
        case 'd':
        case 'del':
        case 'delete': // MR.CYSER
               try {
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('marque a mensagem')
               ikyy.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('marcar a mensagem')
}
               break
        case 'tes':
               reply('ok chama')
               break
        case 'info':  // Jangan Di Ubah Plise
               urlinfo = 'https://telegra.ph/file/5a8d6bf0339cc120bfb6c.jpg'
               thankslort = `┌──「 *EM FORMAÇÃO* 」
│
├ *TIPO DE BOT* : NodeJS
├ *NOME*  : LIBID😜
├ *VERSÃO* : 1.0
│
└──「 *${botName}* 」`
             ikyy.sendMessage(from, await getBuffer(urlinfo), image, {quoted: mek, caption: thankslort })
             break
case 'media':
if (isBan) return reply(mess.ban)
if (!q) return reply('link')
reply(mess.wait)
sendMediaURL(from, `${args[0]}`, "").catch(() => reply('Error'))
break
      case 'get':
      case 'fetch': //tirar de nuru
             if (!/^https?:\/\//.test(q)) return reply('Inicialmente *URL* com http:// atau https://')
             res = await fetch(q)
             if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
             delete res
             throw `Content-Length: ${res.headers.get('content-length')}`
}
             if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)
             txtx = await res.buffer()
             try {
             txtx = util.format(JSON.parse(txtx+''))
             } catch (e) {
             txtx = txtx + ''
             } finally {
             reply(txtx.slice(0, 65536) + '')
}
             break
      case 'searchmsg': 
case 'caripesan':  //by ANU TEAM
             if (args.length < 1) return reply(`Que mensagem você está procurando??\nExemplo : ${prefix + command} aréola|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('Deve ser número!')
             batas = parseInt(sampai) + 1
             if (batas > 30) return reply('Máx. 30!')
             reply(mess.wait)
             cok = await ikyy.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             ikyy.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
}
}
             } catch (e) {
             return reply(String(e))
}
             } else {
             reply(`O formato está errado, este é um exemplo do formato correto : ${prefix + command} aloa|10`)
}
             break
       
       case 'bugreport':
       case 'bug':
       case 'report':
              if (args.length < 1) return reply(`Modelo ${prefix}bugreport [recursos] [Como está o erro]`) 
              teks = args.join(' ')
              reply('Obrigado por relatar o bug ao proprietário, se for apenas uma moda passageira, ele será banido por Bot!')
              ikyy.sendMessage('5527998412298@s.whatsapp.net',`*Relatório de erro:* ${teks}`, text)
              break
       case 'readall':
       case 'lertd':
              totalchat.map( async ({ jid }) => {
              await ikyy.chatRead(jid)
})
              reply(`\`\`\`Lida com sucesso ${unread.length} Chat !\`\`\``)
              console.log(totalchat.length)
              break	

//------------------< Enable/Disable >-------------------
case 'leveling':
        
        txtt =`eae ${pushname}\nSelecione abaixo`

               buttons = [{buttonId: '!levelingg 1',buttonText:{displayText: 'ativar'},type:1},{buttonId:'!levelingg 0',buttonText:{displayText:'desativar'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Selecione 1: Para desbloquear\nSelecione 0: Para desativar',
               buttons: buttons,
               headerType: 1
}

          prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
               ikyy.relayWAMessage(prep)
               break
       case 'levelingg':
       case 'levels':
       case 'niveis':
              if (!isGroup) return reply(mess.only.group)
              if (ar[0] === '1') {
              if (isLevelingOn) return reply('O recurso de nivelamento foi ativado anteriormente.')
            _leveling.push(from)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('O recurso de nivelamento foi ativado com sucesso.')
              } else if (ar[0] === '0') {
              var anup = _leveling.indexOf(from)
            _leveling.splice(anup, 1)
              fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))
              reply('O recurso de nivelamento foi desligado com sucesso.')
              } else {
              reply('Selecione habilitar ou desabilitar!')
}
              break 
              
       case 'antilinky':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`O bot deve ser administrador`)
              if (!isGroupAdmins && !isOwner) return reply('vc tem q ser adm pra isso')
              if (!q) return reply(`Selecione habilitar ou desabilitar`)
              if (args[0].toLowerCase() === '1'){
              if (isAntiLink) return reply(`Já ativo`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK ATIVADO 」*\n\nAqueles que enviarem o link do grupo serão chutados!')
              } else if (args[0].toLowerCase() === '0'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DESLIGADO 」*')
              } else {
              reply(`Selecione habilitar ou desabilitar`)
}
              break
       case 'welcomey':
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome 1/0')
               if ((args[0]) === '1') {
               if (isWelkom) return reply('Já ativo')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Ativar com sucesso o recurso de boas-vindas neste grupo ✔️')
               } else if ((args[0]) === '0') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Desativar com sucesso o recurso de boas-vindas neste grupo ✔️')
               } else {
               reply('Habilite para habilitar, desabilite para desabilitar')
}
               break
        case 'mute':
               if (!isGroup) return reply(mess.only.group)
               if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
               if (args.length < 1) return reply('!mute 1/0')
               if (args[0].toLowerCase() === '1'){
               if (isMuted) return reply(`já mudo`)
               mute.push(from)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *LIGADO* *:...*\n\nseguinte gurizada\nO bot foi silenciado e agora somente os adms podem usar os comandos no grupo ${groupName} , Por favor, lembre-se disso\n\n_*${botName}*_`)
               } else if (args[0].toLowerCase() === '0'){
               anu = mute.indexOf(from)
               mute.splice(anu, 1)
               fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
               reply(`*...:* *ATIVO NOVAMENTE* *:...*\n\nAe piazada\nO bot foi reativado no grupo ${groupName} e agora os membros podem voltar a usar ele novamente\n\n_*${botName}*_`)
               } else {
               reply(`Selecione 1 ou 0`)
}
               break
        case 'grupsetting':
        case 'groupsetting':
        case 'grupo':
        case 'ativamentos':
        case 'menu4':
               if (!isGroup) return reply(mess.only.group)
               ativamentoss =`Bem-vindo :* ${isWelkom ? '✅ Ligado' : '❎ desligado'}\nAntilink :* ${isAntiLink ? '✅ Ligado' : '❎ desligado'}\nMutado :* ${isMuted ? '✅ Ligado' : '❎ desligado'}\nauto sticker :* ${isAutofigu ? '✅ Ligado' : '❎ desligado'}\n`
               list = []
               com = [`group abrir`,`leveling 1`,`welcome 1`,`antilink 1`,`mute 1`,`autofigu 1`]
               comm = [`group fechar`,`leveling 0`,`welcome 0`,`antilink 0`,`mute 0`,`autofigu 0`]
               listnya = [`Grupo aberto / fechado`,`Leveling habilitar desabilitar`,`Bem-vindo, habilitar / desabilitar`,`Ativar / desativar anti-link`,`Mute ligar/desligar`]
               suruh = [`Habilitar`, `Desabilitar`]
               fiturname = [`grupo`,`Leveling`,`Welcome`,`Antilink`,`Mute`,`autofigu`]
               startnum = 0; let startnu = 0; let startn = 0;let start = 0
               startnumm = 1
               for (let x of com) {
               var yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `\nAtivar ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `\ndesativar ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        list.push(yy)
           }
             listmsg(from, `Configuração de Grupo`, `${ativamentoss}`, list)
             break
case "redefinir":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("so ADM");
        if (!isBotGroupAdmins) return reply("cade meu adm");
        if (!isGroup) return;
        ikyy.revokeInvite(from);
        reply("```link redefinido```");
        break

//_Abrir e fechar grupo
case 'group':
case 'grup':
        
        txtt =`eai ${pushname}\nSelecione abaixo`

               buttons = [{buttonId: '!groupy abrir',buttonText:{displayText: 'abrir'},type:1},{buttonId:'!groupy fechar',buttonText:{displayText:'fechar'},type:1}]

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: 'Selecione abrir: para abrir\nSelecione fechar: Para Fechar',
               buttons: buttons,
               headerType: 1
}

          prep = await ikyy.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
               ikyy.relayWAMessage(prep)
               break
      case 'groupy':
      case 'grupy':
             if (!isGroup) return reply(mess.only.group)
             if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
             if (!isBotGroupAdmins) return reply(mess.only.Badmin)
             if (args.length < 1) return reply('!group habilitar desabilitar')
             if (args[0].toLowerCase() === 'habilitar'){
             ikyy.groupSettingChange(from, "announcement", false)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'desabilitar'){
             ikyy.groupSettingChange(from, "announcement", true)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'fechar'){
             ikyy.groupSettingChange(from, "announcement", true)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else if (args[0].toLowerCase() === 'abrir'){
             ikyy.groupSettingChange(from, "announcement", false)
            .then((res) => reply(jsonformat(res)))
            .catch((err) => reply(jsonformat(err)))
             } else {
             reply(`Selecione habilitar ou desabilitar`)
}
             break
case 'opengc':
case 'abrirgp':
					ikyy.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !isOwner)return reply(mess.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					open = {
					text: `Grupo aberto pelo administrador @${sender.split("@")[0]}\nAgora *todos os participantes* pode enviar mensagens`,
					contextInfo: { mentionedJid: [sender] }
					}
					ikyy.groupSettingChange (from, GroupSettingChange.messageSend, false)
					reply(open)
					break
case 'closegc':
case 'fechargp':
					ikyy.updatePresence(from, Presence.composing) 
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins && !isOwner)return reply(mess.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					var nomor = mek.participant
					const close = {
					text: `Grupo fechado pelo administrador @${nomor.split("@s.whatsapp.net")[0]}\nAgora *apenas administrador* quem pode enviar mensagens`,
					contextInfo: { mentionedJid: [nomor] }
					}
					ikyy.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
					break
case 'gp':
             reply(`grupo da igreja 🙌 : https://chat.whatsapp.com/HX0Tx7q43rxGumu1PiQnRc`)
             break 
             case 'nmr':
             reply(`wa.me/5527998412298`)
             break
case 'creditos':
case 'ajuda':
             reply(`esses são os créditos da base:\naqui estão alguns dos créditos 👇👇\nPIRES dono da base e q fez praticamente todos os comandos wa.me/556996103915\n🃏T o b i ϟϟ sempre ajudando em uns testes wa.me/559481417512`)
             break 
      case 'infoowner':
      case 'infordono':
             ikyy.sendMessage(from, infoowner(prefix), MessageType.text, {quoted: mek})
             break
      case 'ownermenu':
      case 'menu6':
      if (!isOwner) return reply('o nome ja fala q o menu é so pro dono.')
             ikyy.sendMessage(from, ownerMenu(prefix), MessageType.text, {quoted: mek})
             break
      case 'downloadmenu':
      case 'download':
      case 'menu5':
             ikyy.sendMessage(from, downloadMenu(prefix), MessageType.text, {quoted: mek})
             break
case 'jogos':
      case 'gamemenu':
      case 'games':
      case 'menu8':
             ikyy.sendMessage(from, gameMenu(prefix), MessageType.text, {quoted: mek})
             break
      case 'rules':
      case 'regras':
             ikyy.sendMessage(from, rulesBot(prefix), MessageType.text, {quoted: mek})
             break
      case 'animes':
      case 'menu2':
             ikyy.sendMessage(from, wibuMenu(prefix), MessageType.text, {quoted: mek})
             break
      case 'infomenu':
      case 'menu9':
             ikyy.sendMessage(from, infoMenu(prefix), MessageType.text, {quoted: mek})
             break
      case 'stickermenu':
      case 'menu3':
             ikyy.sendMessage(from, stickerMenu(prefix), MessageType.text, {quoted: mek})
             break
case 'premmenu':
             ikyy.sendMessage(from, premmenu(prefix), MessageType.text, {quoted: mek})
             break
      case 'othermenu':
      case 'outros':
      case 'menu11':
             ikyy.sendMessage(from, otherMenu(prefix), MessageType.text, {quoted: mek})
             break 
             case 'imagens':
      case 'menu12':
             ikyy.sendMessage(from, imagens(prefix), MessageType.text, {quoted: mek})
             break
      case 'edtmenu':
      case 'menu13':
             ikyy.sendMessage(from, edtmenu(prefix), MessageType.text, {quoted: mek})
             break 
      case 'groupmenu': 
      case 'grupomenu': 
             ikyy.sendMessage(from, groupMenu(prefix), MessageType.text, {quoted: mek})
             break
      case 'funmenu':
      case 'diversão':
             ikyy.sendMessage(from, funMenu(prefix), MessageType.text, {quoted: mek})
             break

      case 'jadibot':
             const _0x5f10=['1ubdcbO','202171TkLMwo','284052dVVNCo','42JxCsde','24890OaehfM','./jadibot.js','26826mdmYhJ','176EqLcNV','55194kArISZ','6GRvhmu','314893OwJFDH'];const _0x470b71=_0x5476;function _0x5476(_0x56372d,_0x51b653){return _0x5476=function(_0x5f107a,_0x54761a){_0x5f107a=_0x5f107a-0xd8;let _0x336fbf=_0x5f10[_0x5f107a];return _0x336fbf;},_0x5476(_0x56372d,_0x51b653);}(function(_0x4b0f8a,_0x1f534e){const _0x1acfb6=_0x5476;while(!![]){try{const _0x55ab94=-parseInt(_0x1acfb6(0xdc))+parseInt(_0x1acfb6(0xe2))*parseInt(_0x1acfb6(0xde))+-parseInt(_0x1acfb6(0xe1))*parseInt(_0x1acfb6(0xdb))+parseInt(_0x1acfb6(0xda))+-parseInt(_0x1acfb6(0xdd))+parseInt(_0x1acfb6(0xdf))+parseInt(_0x1acfb6(0xd8))*parseInt(_0x1acfb6(0xd9));if(_0x55ab94===_0x1f534e)break;else _0x4b0f8a['push'](_0x4b0f8a['shift']());}catch(_0x4a8ec9){_0x4b0f8a['push'](_0x4b0f8a['shift']());}}}(_0x5f10,0x285aa));const {jadibot}=require(_0x470b71(0xe0));jadibot(ikyy,from,sender,reply,mek);
             break
      case 'stopjadibot':
      case 'stopbot':
             const _0x1427=['2584oRLTbU','3849mFwfyJ','./jadibot.js','71LvrzJG','286372cCrXrQ','1yPMtDu','1AjjlYF','456046PuhVDs','394eRcMph','746574pwCcoE','625699UVPwUh','1029671oWZdcF'];const _0x49a386=_0x39bb;function _0x39bb(_0x399e0b,_0x2d0c73){return _0x39bb=function(_0x1427be,_0x39bbc5){_0x1427be=_0x1427be-0x132;let _0x12e62d=_0x1427[_0x1427be];return _0x12e62d;},_0x39bb(_0x399e0b,_0x2d0c73);}(function(_0x49c476,_0x4d8227){const _0x22a1e5=_0x39bb;while(!![]){try{const _0x311704=parseInt(_0x22a1e5(0x138))*parseInt(_0x22a1e5(0x13c))+parseInt(_0x22a1e5(0x13b))*parseInt(_0x22a1e5(0x136))+-parseInt(_0x22a1e5(0x134))+-parseInt(_0x22a1e5(0x13d))*parseInt(_0x22a1e5(0x133))+parseInt(_0x22a1e5(0x137))+-parseInt(_0x22a1e5(0x139))+-parseInt(_0x22a1e5(0x13a))*parseInt(_0x22a1e5(0x135));if(_0x311704===_0x4d8227)break;else _0x49c476['push'](_0x49c476['shift']());}catch(_0x25e28b){_0x49c476['push'](_0x49c476['shift']());}}}(_0x1427,0x8b9f1));const {stopjadibot}=require(_0x49a386(0x132));stopjadibot(ikyy,from,sender,mek);
             break
case 'velha':

if (!isGroup) {
reply(ind.group())
} else if (tttset.tttstatus == "on") {
reply(`Alguém já está jogando no momento\nPor favor aguarde um instante...`)
} else if (tttset.waitingTime == "on") {
reply(`Alguém jogou recentemente\nPor favor aguarde o tempo de espera...`)
} else if (args == 0 || (args != 'easy' && args != 'Easy' && args != 'EASY' && args != 'normal' && args != 'Normal' && args != 'NORMAL' && args != 'hard' && args != 'Hard' && args != 'HARD'&& args != 'impossible'&& args != 'Impossible' && args != 'IMPOSSIBLE')) {
reply(`Defina a dificuldade\nEx.: ${prefix}velha easy\n\nDificuldades: easy, normal, hard e impossible`)
} else {
tttset.tttstatus = "on"
tttset.player = sender
tttset.playerName = pushname
tttset.mentionPlayer = mek
tttset.local = from
if (args == 'easy' || args == 'Easy' || args == 'EASY') {
tttset.tttdifficulty = "EASY"
} else if (args == 'normal' || args == 'Normal' || args == 'NORMAL') {
tttset.tttdifficulty = "NORMAL"
} else if (args == 'hard' || args == 'Hard' || args == 'HARD') {
tttset.tttdifficulty = "HARD"
} else if (args == 'impossible' || args == 'Impossible' || args == 'IMPOSSIBLE') {
tttset.tttdifficulty = "IMPOSSIBLE"
}
const randomStartIA = Math.floor(Math.random() * 3)
if (randomStartIA == 0) {
IA()
tttset.reActivate1 = "on"	
}
costum(`O jogo começou!!!\nModo: ${tttset.tttdifficulty}`, text)
ikyy.sendMessage(from, `🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`,text )
ikyy.sendMessage(from,`Caso não saiba como jogar digite: ${prefix}ttthelp`, text) 
setTimeout( () => {
tttset.waitingTime = "off"
tttset.autoEndTime = "on"
}, 12000) //2 minutos
}
break

case 'ttthelp':

ikyy.sendMessage(from, ttthelp(prefix) , text, {quoted: freply, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": `Jogo da velha`, 'jpegThumbnail': fs.readFileSync('verificado/sticker/botlogo.webp')}}}})
break

case 'tttme':

if (!isGroup) return reply(ind.groupo())
const checkTTTIdMe = getTTTId(sender)
if (checkTTTIdMe === undefined) addTTTId(sender)
ikyy.sendMessage(from, tttme(pushname, getTTTwins(sender), getTTTdefeats(sender), getTTTties(sender), getTTTpoints(sender)), text, {quoted:mek})
break

case 'tttrank':

if (!isGroup) return reply(ind.groupo())
//if (tictactoe.length < 3) return reply(`Humm, é necessário que no mínimo 3 pessoas tenham jogado...`)
tictactoe.sort((a, b) => (a.points < b.points) ? 1 : -1)
mentioned_jid = []
let board = '【 TTT RANKS 】\n\n'
try {
for (let i = 0; i < 3; i++) {
if (i == 0) {board += `${i + 1}º 🥇 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 1) {board += `${i + 1}º 🥈 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
} else if (i == 2) {board += `${i + 1}º 🥉 : @${tictactoe[i].jid.split('@')[0]}\n╭╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n│ ➣ Vitórias: ${tictactoe[i].wins} 🎊\n│ ➣ Derrotas: ${tictactoe[i].defeats} 💥\n│ ➣ Empates: ${tictactoe[i].ties} 🌀\n│ ➣ Pontos: ${tictactoe[i].points} ✨\n╰╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾╸\n\n`
}
mentioned_jid.push(tictactoe[i].jid)
} 
mentions(board, mentioned_jid, true)
} catch (err) {
console.log(err)
await ikyy.sendMessage(from, `Humm, é necessário que no mínimo 3 pessoas tenham jogado...`, text, {quoted: freply})
}
break

case 'coord':
tttset.playertest = sender
if (!isGroup) {
reply(ind.group())
} else if (tttset.tttstatus == "off") {
reply(`Você ainda não iniciou o jogo\nDigite ${prefix}velha [DIFICULDADE] para iniciar`)
} else if (tttset.tttantibug == "on") {
reply(`Aguarde a ação anterior ser concluída...`)
} else {
tttset.tttantibug = "on"
const coordX = args
if (coordX != 'a1' && coordX != 'a2' && coordX != 'a3' &&
coordX != 'b1' && coordX != 'b2' && coordX != 'b3' &&
coordX != 'c1' && coordX != 'c2' && coordX != 'c3') {
reply(`Digite o comando com uma coordenada\nExemplo: ${prefix}coord a1`)
tttset.tttantibug = "off"
} else {
switch (args[0]) {
case 'a1':
if (esp.a1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a2':
if (esp.a2 != "??") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'a3':
if (esp.a3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.a3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b1':
if (esp.b1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b2':
if (esp.b2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'b3':
if (esp.b3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.b3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c1':
if (esp.c1 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c1 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c2':
if (esp.c2 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c2 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
case 'c3':
if (esp.c3 != "🔲") {
reply('O espaço já foi ocupado\nTente outra coordenada')
} else {
esp.c3 = "❌"
while (tttset.reActivate1 == "on") {
IA()
}
}
break
}
tttset.reActivate1 = "on"
reply(`🌀1️⃣2️⃣3️⃣\n🅰️${esp.a1}${esp.a2}${esp.a3}\n🅱️${esp.b1}${esp.b2}${esp.b3}\n©️${esp.c1}${esp.c2}${esp.c3}`)
var randomTTTXP = 0
if (WinnerX()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
randomTTTXP = Math.floor(Math.random() * 2005) + 2005
addLevelingXp(tttset.player, randomTTTXP)
break
case "NORMAL":
randomTTTXP = Math.floor(Math.random() * 7005) + 7005
(tttset.player, randomTTTXP)
break
case "HARD":
randomTTTXP = Math.floor(Math.random() * 20000) + 20000
(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
randomTTTXP = Math.floor(Math.random() * 100000) + 100000
(tttset.player, randomTTTXP)
break
}
ikyy.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉\n\n➣  RECOMPENSA: +${randomTTTXP} XP 🔮`, text)
} else {
ikyy.sendMessage(from, `🎉🎉 VITÓRIA DO JOGADOR 🎉🎉`, text)
}
const currentTTTwins = getTTTwins(tttset.player)
const checkTTTIdWin = getTTTId(tttset.player)
if (currentTTTwins === undefined && checkTTTIdWin === undefined) addTTTId(tttset.player)
addTTTwin(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "??"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (WinnerO()) {
if (isLevelingOn) {
switch (tttset.tttdifficulty) {
case "EASY":
(tttset.player, randomTTTXP)
break
case "NORMAL":
(tttset.player, randomTTTXP)
break
case "HARD":
(tttset.player, randomTTTXP)
break
case "IMPOSSIBLE":
(tttset.player, randomTTTXP)
break
}	
ikyy.sendMessage(from, `🎉🎉 VITÓRIA DO BOT 🎉🎉\n\n➣  PUNIÇÃO: ${randomTTTXP} XP 🔮`, text)
} else {
ikyy.sendMessage(from, `🎉🎉 VITÓRIA DO BOT 🎉🎉`, text)
}
const currentTTTdefeats = getTTTdefeats(tttset.player)
const checkTTTIdDefeat = getTTTId(tttset.player)
if (currentTTTdefeats === undefined && checkTTTIdDefeat === undefined) addTTTId(tttset.player)
addTTTdefeat(tttset.player, 1)
addTTTpoints(tttset.player, randomTTTXP)
esp.a1 = "??"; esp.a2 = "🔲"; esp.a3 = "??"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
} else if (Tie()) {
if (isLevelingOn) {
ikyy.sendMessage(from, `🎉?? EMPATE 🎉🎉\n\n➣  NÃO HÁ GANHOS NEM PERDAS`, text)
} else {
ikyy.sendMessage(from, `🎉🎉 EMPATE 🎉🎉`, text)
}
const currentTTTties = getTTTties(tttset.player)
const checkTTTIdTie = getTTTId(tttset.player)
if (currentTTTties === undefined && checkTTTIdTie === undefined) addTTTId(tttset.player)
addTTTtie(tttset.player, 1)
esp.a1 = "🔲"; esp.a2 = "🔲"; esp.a3 = "🔲"
esp.b1 = "🔲"; esp.b2 = "🔲"; esp.b3 = "🔲"
esp.c1 = "🔲"; esp.c2 = "🔲"; esp.c3 = "🔲"
tttset.tttstatus = "off"
tttset.waitingTime = "on"
}
tttset.tttantibug = "off"
}
}
break
					 
					case 'exc':
  
     if (!isOwner) return 
     if (args.length < 1) return reply('Hummmm')
     cuceta = body.slice(5)
      try {
		JSON.stringify(eval(cuceta))
      } catch (erro) {
        reply(`${erro}`)
        console.log(erro)
      }
      break
case "eval":
        if (!mek.key.fromMe) return;
        ikyy.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(5)), null, "\t"),
          text,
          { quoted: mek }
        );
        break;
    
default:
    
//******* RESPOSTAS AUTOMATICAS *******
	if (isMedia && !mek.message.videoMessage) {
   if (!isAutofigu) return
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
  const media = await ikyy.downloadAndSaveMediaMessage(encmedia)
    ran = getRandom('.webp')
  await ffmpeg(`./${media}`)
  .input(media)
  .on('start', function(cmd) {
console.log(`Started : ${cmd}`)
                            })
.on('error', function(err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
                            })
.on('end', function() {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata('libid', 'libid')} ${ran} -o ${ran}`, async(error) => {
ikyy.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
  })
  .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `crop=w='min(min(iw\,ih)\,650)':h='min(min(iw\,ih)\,650)',scale=320:320,setsar=1,fps=15`, `-loop`, `0`, `-ss`, `00:00:00.0`, `-t`, `00:00:10.0`, `-preset`, `default`, `-an`, `-vsync`, `0`, `-s`, `512:512`])
  .toFormat('webp')
 .save(ran)
 } 
if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'Sim') {
		if (gelutSkuy.status) return reply(`O jogo já começou!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Jogo de luta 🤙🏻 

Entre @${gelutSkuy.Z} & @${gelutSkuy.Y}
• O vencedor é [ @${winR} ] `
	   ikyy.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./media/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'Não') {
		ikyy.sendMessage(from, `👑 Jogo de luta rejeitado 🤙🏻
• @${gelutSkuy.Y} Rejeitar🤙🏻`, text, {quoted: mek, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./media/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Sim')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎮JOGO DA Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🎲*

Jogador1 @${tty.player1.split('@')[0]}=❎
Jogador2 @${tty.player2.split('@')[0]}=⭕

vez de = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  ikyy.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('Não')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
ikyy.sendMessage(from, `Sim @${tty.player2.split('@')[0]} rejeitou:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Digite os números corretamente')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Já Preenchido, O Outro espaço')
if (main[0].gilir.includes(sender)) return reply('Espere sua vez')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎮 RESULTADO DO JOGO DA Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸??*

*o ganhador foi* @${tty.player1.split('@')[0]}\n
*Quer jogar de novo? ${prefix}ttt @pessoa*`
ucapan2 = `*🎮 RESULTADO DO JOGO DA Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🎲*

*O resultado final:*

${ttt}`
ikyy.sendMessage(from, ucapan1, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 🎮  RESULTADO DO JOGO Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️🎲*

*_Game Series ??👌_*`
ucapan2 = `*🎳 🎮  RESULTADO DO JOGO Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️🎲*

* resultado final:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎮JOGO DA Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

vez de = @${tty.player2.split('@')[0]}

${ttt}`
ikyy.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Digite os números corretamente')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Já Preenchido, tente no espaço n preenchido')
if (main[0].gilir.includes(sender)) return reply('Espere por vez')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 🎮  RESULTADO DO JOGO Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️🎲*

*e o vencedor é* @${tty.player2.split('@')[0]}\n
*Quer jogar de novo? ${prefix}ttt*`
ucapan2 = `*🎳 Jogos Tictactoe *

*Resultado final.:*

${ttt}`
ikyy.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎮 RESULTADO DO JOGO DA Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🎲*

*_Série de jogos🗿👌*`
ucapan2 = `*🎳 🎮  RESULTADO DO JOGO Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️🎲*

* resultado final:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 🎮  JOGO Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️ 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
vez de = @${tty.player1.split('@')[0]}

${ttt}`
 ikyy.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (/^=?>/.test(budy) && (isOwner || mek.key.fromMe)){

let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')

try{

let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })

return reply(require('util').format(evaluate))

 } catch(e){

 return reply(require('util').format(e))

}
}
if (!isGroup && isCmd && !mek.key.fromMe){
teks = `@${senderr.split('@')[0]}, este  ${prefix + command} n existe, abra o menu para ver se vc escreveu certo`
ikyy.sendMessage(from, {text:teks, jpegThumbnail:fs.readFileSync('./media/wpmobile.png')}, 'extendedTextMessage', {sendEphemeral:true, quoted:mek, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
}
	}
                   if ((budy === `tag`)){                     
                   ikyy.sendMessage(from, 'TXCㅤ', text, {quoted: freply})
                    }
                    if ((budy === `TAG`)){                     
                   ikyy.sendMessage(from, 'TXCㅤ', text, {quoted: freply})
                    }
                    if ((budy === `Tag`)){                     
                   ikyy.sendMessage(from, 'TXCㅤ', text, {quoted: freply})
                    }
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}



