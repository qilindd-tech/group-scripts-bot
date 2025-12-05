import { Telegraf, Context, Markup } from 'telegraf';
import { Database } from 'better-sqlite3';

// Remaining code from src/bot.ts
type SessionState = {
  action: 'add_template' | 'add_trigger' | 'song_request' | 'delete_template' | null;
  meta?: any;
};

export function createBot(token: string, db: Database, filesDir: string, adminUsernames: string[]) {
  const bot = new Telegraf(token);

  const sessions = new Map<string, SessionState>();
  const keyFor = (chatId: number | undefined, userId: number | undefined) => `${chatId ?? 0}:${userId ?? 0}`;

  const addOrUpdateMember = (ctx: Context, user: any) => {
    if (!user || !ctx.chat) return;
    try {
      db.prepare(`
        INSERT OR REPLACE INTO members (user_id, username, first_name, last_name, chat_id)
        VALUES (?, ?, ?, ?, ?)
      `).run(user.id, user.username || null, user.first_name || null, user.last_name || null, ctx.chat!.id);
    } catch (e) {
      console.error('addOrUpdateMember error', e);
    }
  };

  // More code follows...
}