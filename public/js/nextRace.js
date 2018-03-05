class NextRace {
    constructor() {

    }

    getTypeFilteredRaces(checkedTypes, races) {
        return races.filter(race => checkedTypes.indexOf(race.race_type) !== -1);
    }

    getHighestPurseRaceId(typeFilteredRaces) {

        // get races ids and purses (in euros)
        let racesFilteredByPurse = [];

        typeFilteredRaces.forEach(race => {
            if (race.purse.currency === 'GBP') {
                racesFilteredByPurse.push({
                    id: race.id_race,
                    purse: race.purse.amount * 1.12
                });
            } else {
                racesFilteredByPurse.push({
                    id: race.id_race,
                    purse: race.purse.amount
                });
            }
        });

        let maxPurse = racesFilteredByPurse[0].purse;
        let maxPurseRaceId = racesFilteredByPurse[0].id;
        racesFilteredByPurse.forEach(race => {
            if (race.purse > maxPurse) {
                maxPurse = race.amount;
                maxPurseRaceId = race.id;
            }
        })
        return maxPurseRaceId;
    }

    getHighestPurseRace(races, highestPurseRaceId) {
        return races.filter(race => race.id_race === highestPurseRaceId)[0];
    }


}