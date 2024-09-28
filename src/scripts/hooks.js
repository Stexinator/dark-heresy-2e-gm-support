import DarkHeresy2eCriticalEffect from './criticalEffect.js';
import DarkHeresy2ePsy from './psy.js';

Hooks.on('createChatMessage', async function (message, html) {
    if (!game.user.isGM) return;

    if (message.getFlag('dark-heresy', 'rolls')) {
        DarkHeresy2eCriticalEffect.outputEffectToChat(message);
    }

    if (message.getFlag('dark-heresy', 'rollData')?.psy?.hasPhenomena) {
        DarkHeresy2ePsy.perils(message);
    }
});
