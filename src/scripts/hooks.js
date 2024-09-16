import DarkHeresy2eCriticalEffect from './criticalEffect.js';

Hooks.on('createChatMessage', async function (message, html) {
    if (message.getFlag('dark-heresy', 'rolls')) {
        DarkHeresy2eCriticalEffect.outputEffectToChat(message);
    }
});
