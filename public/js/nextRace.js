class NextRace {
    constructor() {

    }

    getTypeFilteredRaces(checkedTypes, races) {
        return races.filter(race => checkedTypes.indexOf(race.race_type) !== -1);
    }

    getHighestPurseRaceId(typeFilteredRaces) {

        let maxPurse = 0;
        let maxPurseRaceId = '';
        typeFilteredRaces.forEach(race => {
            let amount = race.purse.currency === 'GBP' ? race.purse.amount * 1.12 : race.purse.amount;
            if (amount > maxPurse) {
                maxPurseRaceId = race.id_race;
            }
        })
        return maxPurseRaceId;
    }

    // get race of highest purse
    getHighestPurseRace(checkedTypes, races) {

        // get races of checked race types
        let typeFilteredRaces = nextRace.getTypeFilteredRaces(checkedTypes, races);
        // get race id of checked type with highest purse
        let highestPurseRaceId = nextRace.getHighestPurseRaceId(typeFilteredRaces);

        return races.filter(race => race.id_race === highestPurseRaceId)[0];
    }

<<<<<<< HEAD
=======

>>>>>>> ae30ad8202801c588b14e303945dea00f71ab7f1
}