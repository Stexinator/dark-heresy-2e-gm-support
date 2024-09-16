export default class DarkHeresy2eCriticalEffect {
    static async outputEffectToChat(message) {
        let rolls = message.getFlag('dark-heresy', 'rolls');

        let totalCritWounds = message.getFlag('dark-heresy', 'totalCritWounds');
        let righteousFury = rolls.find(roll => roll.source.toLowerCase().includes('critical effect'));

        //all rolls should have the same type, so just grab the first one
        let types = {
            E: 'Energy',
            I: 'Impact',
            R: 'Rending',
            X: 'Explosive'
        };

        let locations = {
            'ARMOUR.HEAD': 'Head',
            'ARMOUR.LEFT_ARM': 'Arm',
            'ARMOUR.RIGHT_ARM': 'Arm',
            'ARMOUR.BODY': 'Body',
            'ARMOUR.LEFT_LEG': 'Leg',
            'ARMOUR.RIGHT_LEG': 'Leg'
        };

        let rolltableName = types[rolls[0].type] + ' - ' + locations[rolls[0].location];

        if (righteousFury) {
            await game.tables
                .getName(rolltableName)
                .draw({ roll: new Roll('' + righteousFury.damage), displayChat: true });
        }

        if (totalCritWounds) {
            game.tables
                .getName(rolltableName)
                .draw({ roll: new Roll('' + Math.min(totalCritWounds, 10)), displayChat: true });
        }
    }
}
