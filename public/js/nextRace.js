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

    getHighestPurseRace(races, highestPurseRaceId) {
        return races.filter(race => race.id_race === highestPurseRaceId)[0];
    }


}