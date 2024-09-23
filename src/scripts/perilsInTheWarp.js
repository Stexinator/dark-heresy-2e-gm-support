export default class DarkHeresy2ePerilsInTheWarp {
    static async perils(message) {
        let psy = message.getFlag('dark-heresy', 'rollData').psy;

        // Class
        // unbound/daemonic +10
        let psyclass = '';
        if (!psy.push && psy.class !== 'bound') {
            psyclass = '+10';
        }

        // Push
        // unbound +5 per +1PR max 20
        // daemonic +10 per +1PR max 30
        let push = '';
        if (psy.push && psy.class !== 'bound') {
            let max = psy.class == 'unbound' ? 20 : 30;
            let multi = psy.class == 'unbound' ? 5 : 10;
            push = '+' + Math.min(max, (psy.value - psy.rating) * multi);
        }

        // Sustaining
        // +10
        let sustaining = '';

        // Warp Conduit +30
        let conduit = psy.warpConduit ? '+30' : '';

        //max 75, afterwards Perils of the Warp
        let psychicPhenomena = 'Psychic Phenomena';

        await game.tables
            .getName(psychicPhenomena)
            .draw({ roll: new Roll('1d100' + psyclass + push + sustaining + conduit), displayChat: true });
    }
}
