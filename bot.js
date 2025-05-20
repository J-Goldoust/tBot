require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('سلام! خوش اومدی 👋'));
bot.help((ctx) => ctx.reply('دستوراتی که می‌تونی استفاده کنی: /start /help'));
bot.on('text', (ctx) => {
  ctx.reply(`تو گفتی: ${ctx.message.text}`);
});

bot.launch();
console.log('ربات راه افتاد ✅');
