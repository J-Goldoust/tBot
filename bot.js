const { Telegraf } = require('telegraf');
const express = require('express');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);
const app = express();

bot.start((ctx) => ctx.reply('سلام! خوش اومدی 👋'));
bot.help((ctx) => ctx.reply('دستوراتی که می‌تونی استفاده کنی: /start /help'));
bot.on('text', (ctx) => {
  ctx.reply(`تو گفتی: ${ctx.message.text}`);
});

// استفاده از webhook
app.use(bot.webhookCallback('/secret-path'));

// راه‌اندازی webhook در Telegraf
bot.telegram.setWebhook(`https://${process.env.RENDER_EXTERNAL_URL}/secret-path`);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`ربات روی پورت ${PORT} اجرا شد 🚀`);
});
