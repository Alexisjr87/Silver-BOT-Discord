const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");
 
client.on("ready", () => {
  console.log(`Estoy listo!, conectado en ${client.guilds.size} servidores y  ${client.users.size} usuarios.`);
  client.user.setPresence( {
      status: "online",
      game: {
          name: `%help | Estoy en ${client.guilds.size} servidores.`,
          type: "PLAYING"
      }
   });
});

var prefix = config.prefix;
client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix)) return;
  if (message.author.bot) return;
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
let texto = args.join(" ");
if(command === 'hablar'){
    if(!texto) return message.channel.send(`Escriba un contenido pára decir.`);
    message.channel.send(texto);
    
}
const chatbot = require("espchatbotapi")
if (message.content.startsWith(prefix + "hablar")) {

    chatbot.hablar(args).then(respuesta => {
    message.channel.send(respuesta)

});

}


if(message.content.startsWith(prefix + 'help')){

  message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
  message.author.send('**Usuarios**\n```\n'+
                      '-> '+prefix+'ping              :: Comprueba la latencia del bot y de tus mensajes.\n'+
                      '-> '+prefix+'avatar <@user>    :: Muestra el avatar de un usuario.\n'+
                      '-> '+prefix+'decir             :: Hace que el bot diga un mensaje.\n'+
                      '-> '+prefix+'love             :: Hace que el bot calcule el amor entre los 2 usuarios mencionados.\n'+
                      '-> '+prefix+'user <@user>      :: Muestra información sobre un usuario mencioando.\n'+
                      '-> '+prefix+'server            :: Muestra información de un servidor determinado.\n'+
                      '-> '+prefix+'pregunta          :: El bot respondera a tus preguntas.\n'+
                      '-> '+prefix+'hola              :: Retorna un saludo como mensaje.\n'+
                      '-> '+prefix+'si                :: El Bot contesta Con un SI.\n'+
                      '-> '+prefix+'no                :: El Bot contesta Con un No.\n```\n\n'+   
                                                       
                     
                      ':man_police_officer: **Admins**:man_police_officer: \n```\n'+
                      '-> '+prefix+'ban <@user>  Razon        :: El Bot Banea al Usuario Mencionado.\n'+
                      '-> '+prefix+'kick <@user> Razon         :: El Bot Kickea al Usuario Mencionado.\n```\n\n'+
                     
                               ':wink: :v:By Jose6042:v:  :wink:' );
}
if(command === 'avatar'){

  let img = message.mentions.users.first()
  if (!img) {

      const embed = new Discord.RichEmbed()
      .setImage(`${message.author.avatarURL}`)
      .setColor(0x66b3ff)
      .setFooter(`Avatar de ${message.author.username}#${message.author.discriminator}`);
      message.channel.send({ embed });

  } else if (img.avatarURL === null) {

      message.channel.sendMessage("El usuario ("+ img.username +") no tiene avatar!");

  } else {

      const embed = new Discord.RichEmbed()
      .setImage(`${img.avatarURL}`)
      .setColor(0x66b3ff)
      .setFooter(`Avatar de ${img.username}#${img.discriminator}`);
      message.channel.send({ embed });

  };

}
if (command === 'ping') {

  let ping = Math.floor(message.client.ping);
  
  message.channel.send(":ping_pong: Pong!")
    .then(m => {

        m.edit(`:incoming_envelope: Ping Mensajes: \`${Math.floor(m.createdTimestamp - Date.now())} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``);
    
    });
  
}


if(command === 'user'){
  let userm = message.mentions.users.first()
  if(!userm){
    var user = message.author;
    
      const embed = new Discord.RichEmbed()
      .setThumbnail(user.avatarURL)
      .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
      .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
      .addField('ID', user.id, true)
      .addField('Estado', user.presence.status, true)
      .addField('Apodo', message.member.nickname, true)
      .addField('Cuenta Creada', user.createdAt.toDateString(), true)
      .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
      .addField('Roles', message.member.roles.map(roles => `\`${roles.name}\``).join(', '))
      .setColor(0x66b3ff)
      
     message.channel.send({ embed });
  }else{
    const embed = new Discord.RichEmbed()
    .setThumbnail(userm.avatarURL)
    .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
    .addField('Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada", true)
    .addField('ID', userm.id, true)
    .addField('Estado', userm.presence.status, true)
    .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
    .setColor(0x66b3ff)
    
   message.channel.send({ embed });
  }


  
}
if(command === 'server'){

  var server = message.guild;

  const embed = new Discord.RichEmbed()
  .setThumbnail(server.iconURL)
  .setAuthor(server.name, server.iconURL)
  .addField('ID', server.id, true)
  .addField('Region', server.region, true)
  .addField('Creado el', server.joinedAt.toDateString(), true)
  .addField('Dueño del Servidor', server.owner.user.username+'#'+server.owner.user.discriminator+' ('+server.owner.user.id +')', true)
  .addField('Miembros', server.memberCount, true)
  .addField('Roles', server.roles.size, true)
  .setColor(0x66b3ff)
  
 message.channel.send({ embed });

}   
client.on('guildMemberAdd', (member) => { 

  let msgChannel = new Discord.RichEmbed() 
     .setThumbnail(member.user.displayAvatarURL)
  .setAuthor(" Bienvenido "+member.user.username,"https://cdn.discordapp.com/emojis/680807826981257218.gif?v=1")
     .setDescription("**¡Bienvenido a " +member.guild.name+ " !**\nRecuerda visitar nuestro canal de reglas para no tener problemas ")
  .setFooter('Nuestra cantidad de miembros actual es de '+member.guild.memberCount)
     .setColor("RANDOM") 
   let channel = client.channels.get('701931697096228945'); 
   channel.send(msgChannel);

});
if (command === 'hola') {

  let ping = Math.floor(message.client.ping);
  
  message.channel.send("https://tenor.com/view/hola-saludo-hola-tu-gif-9988118  ")
}
if (command === 'si') {

  let ping = Math.floor(message.client.ping);
  
  message.channel.send("https://tenor.com/view/yep-gif-4361784 ")
}
if (command === 'no') {

  let ping = Math.floor(message.client.ping);
  
  message.channel.send(" https://tenor.com/view/tonton-tonton-sticker-no-nope-gif-13636081 ")
}
if(command === 'pregunta'){

  if(!message.content.startsWith(prefix)) return; //Si no empieza con el prefix, no harÃ¡ nada
  const Discord = require('discord.js'); //Agregamos Discord.js
  
  var rpts = [
      "Si",
      "Probablemente",
      "No lo se",
      "Probablemente no.",
      "No",
      "No pos dinosaurio.", 
    ];
  
    if (!args)
      return message.reply(" Nope!`, Debes escribir una pregunta!");
    message.channel.send({
      color: (0xff4d4d),
      embed: {
        title: message.author.username + `, A tu pregunta:`,
        fields: [
          {
            name: "Pregunta:",
            value: "```" + args.join(" ") + "```"
          },
          {
            name: "Mi respuesta es:",
            value: "```" + rpts[Math.floor(Math.random() * rpts.length)] + "```"
          }
        ]
      }
    });
  
    message.delete();
}

if(command === 'kick'){

let user = message.mentions.users.first();
let razon = args.slice(1).join(' ');

var perms = message.member.hasPermission("KICK_MEMBERS");

if(!perms) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);

if (!razon) return message.channel.send('Escriba una razón, `%kick @username [razón]`');
if (!message.guild.member(user).kickable) return message.reply('No puedo patear al usuario mencionado.');
     
message.guild.member(user).kick(razon);
message.channel.send(`**${user.username}**, fue pateado del servidor, razón: ${razon}.`);
}
if(command === 'ban'){

  let user = message.mentions.users.first();
  let razon = args.slice(1).join(' ');
  
  var perms = message.member.hasPermission("BAN_MEMBERS");
  
  if(!perms) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
  if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
  
  if (!razon) return message.channel.send('Escriba una razón, `%ban @username [razón]`');
  if (!message.guild.member(user).kickable) return message.reply('No puedo banear al usuario mencionado.');
       
  message.guild.member(user).ban(razon);
  message.channel.send(`**${user.username}**, fue baneado del servidor, razón: ${razon}.`);
}

if(command === 'love'){

let users = message.mentions.users.map(m => m.username).join(' y ');
if(!users) return message.channel.send('Mencione a dos usuarios para calcular');
    
const random = Math.floor(Math.random() * 100);
let heard = "";
 
    if(random < 50){
        heard=':broken_heart:';

    }else if(random < 80){
        heard=':sparkling_heart: ';
        
    }else if(random < 101){
        heard=':heart:';

    }
            
const embed = new Discord.RichEmbed()
    .setAuthor('El porcentaje de amor de '+users+' es:')
    .setDescription(heard+' **'+random+' %**'+' '+heard)
    .setColor(0xff4d4d)

message.channel.send(embed);
}

});
client.login(config.token) ;