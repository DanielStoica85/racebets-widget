const nextRace = new NextRace();

class UI {
    constructor() {
        this.nextRaceWidget = document.getElementById('next-race');
        this.raceTypeInputs = document.querySelectorAll('.filter-checkbox');
    }

    displayHighestPurseRace(races) {

        let output = '';
        let raceTime = '';

        // get checked statuses
        let checkedTypes = ui.getCheckedRaceTypes();

        if (checkedTypes.length > 0) {
            // get races of checked race types
            let typeFilteredRaces = nextRace.getTypeFilteredRaces(checkedTypes, races);
            // get race id of checked type with highest purse
            let highestPurseRaceId = nextRace.getHighestPurseRaceId(typeFilteredRaces);
            // get race of highest purse
            let highestPurseRace = nextRace.getHighestPurseRace(races, highestPurseRaceId);

            let minutesUntilHighestPurseRace = Math.floor((highestPurseRace.post_time - Math.floor(Date.now() / 1000)) / 60);

            output +=
                `<div id="next-race-head">
                    <div class="flag country-${highestPurseRace.event.country}"></div>
                    <div class="race-city"><h3>${highestPurseRace.event.title}</h3></div>
                    <div id="time-left"><h3>${minutesUntilHighestPurseRace} minutes</h3></div>
                </div>`;
        } else {
            output = '';
        }

        this.nextRaceWidget.innerHTML = output;

    }

    getCheckedRaceTypes() {
        let checkedRaceTypes = [];
        this.raceTypeInputs.forEach((input) => {
            if (input.checked === true) {
                checkedRaceTypes.push(input.id);
            }
        });
        return checkedRaceTypes.map(raceType => raceType.slice(0, 1).toUpperCase());
    }

}