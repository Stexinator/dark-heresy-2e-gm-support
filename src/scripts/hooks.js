import DarkHeresy2eCriticalEffect from './criticalEffect.js';
import DarkHeresy2ePerilsInTheWarp from './perilsInTheWarp.js';

Hooks.on('createChatMessage', async function (message, html) {
    if (message.getFlag('dark-heresy', 'rolls')) {
        DarkHeresy2eCriticalEffect.outputEffectToChat(message);
    }

    if (message.getFlag('dark-heresy', 'rollData')?.psy?.hasPhenomena) {
        DarkHeresy2ePerilsInTheWarp.perils(message);
    }
});
