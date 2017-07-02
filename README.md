# rBot
A node.js selfbot for the masses.
rBot is a user-friendly, easy-to-use, Discord.js selfbot written in in discord.js. It includes a buch of useful commands, and tools.

[A brief description of a selfbot](#a-brief-description-of-a-selfbot)

[A few rules](#a-few-rules)

[Getting your token](#getting-your-token)

[Installing Node](#installing-node)

[Download the bot](#download-the-bot)

[Edit config files](#edit-config-files)

[Start the bot](#start-the-bot)

[Updating the bot](#updating-the-bot)

[FAQ](#faq)

[Credits](#credits)

# A brief description of a Selfbot:

A selfbot, unlike a traditional bot account, is a bot that runs under a user account, which is you. It can read, edit, and send messages, because well...it is you. Selfbots are cool because only you can use it, and it stays with you throughout the servers you go on.

# A few rules

The rules for a selfbot, as quoted by TheRacingLion on Github: 

"A selfbot must not, under any circumstance, respond to other user's messages. This means it should not respond to commands, should not autoreply to certain keywords, etc. You must be the only one that can control it.
A selfbot must not, under any circumstance, do "invite scraping". This is the action of detecting server invites in chat, and automatically joining a server using that invite.
As selfbots run under your account they are subject to the same Terms of Service. Meaning they should not spam, insult or demean others, post NSFW material, spread viruses or illegal material, etc. They have to follow the same rules that you follow."


Breaking any of those rules will most likely get you banned from Discord, so its best to adhere to them.

# Getting your token

In order for you to login with your selfbot, you'll need to get your token. If you know how to do this, great! Go ahead and fetch your token. If you do not, [Follow this awesome guide by TheRacingLion:](https://github.com/TheRacingLion/Discord-SelfBot/wiki/Discord-Token-Tutorial) to get it.

# Installing Node

Installing node is pretty straight-forward, so go on over to http://nodejs.org and make sure you download the **Current** version (the LTS one is heavily outdated and the bot will not work without it.) If you have node already, make sure you are on node version 8.1.2 or higher, as this bot requires it to run. 

# Download the bot

I assume you already have git installed, so just simply run `git clone http://github.com/RTK99/rBot.git` in your command line (Windows, CMD or Mac/Linux just Terminal) to download the bot, then change your directory to the `rBot/` folder. Run `npm install` to install the needed modules for the bot.

# Edit config files

Find the file named `config.json.example`, and open it up in whatever editor you choose. Inside, you should see this:
```json
{
 "token": "TOKEN_HERE", 
 "prefix": "PREFIX_HERE",
 "blacklisted_servers": ["ExampleID"] //For multiple servers do ["Example1", "Example2"], so on, so forth
}
```

Replace `TOKEN_HERE` with your actual token, and `PREFIX_HERE` with the prefix of your choice. optionally, you may specify servers on which you want to block the selfbot from running, by simply inserting the ID of that server. Save the file as `config.json`.

*Important* make sure the file is saved as `config.json`, or the bot will not start. 

# Start the bot

In your command prompt/terminal, type `node start.js` and press enter to start the bot. Wait a few seconds, and the bot should be running! If you see "Hello [your-username] then the startup was a success!

# Updating the bot

To update the bot, simply type `git pull` in the terminal to update the bot, followed by `node start.js` to restart the bot.

# FAQ:
Q: 'How can I keep the bot running if I shut down my PC?'

Simple answer: Ya can't. You would need a computer that is always on, or another hosting method, such as a VPS. I personally recommend OVH, as they have great value and reasonable prices. http://ovh.com/us/vps

'Do I actually have to keep the window open to run the bot?'

A: Actually, no! There is a great module out there called PM2 which will keep the bot running in the background, as long as your computer is on. To install PM2 and set it up, just type `npm install pm2 -g` to install it. To start the bot, the command is now `pm2 start start.js`. For more info about PM2, just go to http://pm2.keymetrics.io.

# Credits

Thanks to RayzrDev, creator of SharpBot, another great selfbot, since rBot shares some of SharpBot's core code.

I hope you enjoy this amazing selfbot I made, and if you have any questions, just contact me on Discord at rTexel#0202.

If you have an issue, just feel free to submit an issue in the Issues tab above.

Happy Selfbotting!

