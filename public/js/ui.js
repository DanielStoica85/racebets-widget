const nextRace = new NextRace();

class UI {
    constructor() {
        this.nextRaceWidget = document.getElementById('next-race');
        this.raceTypeInputs = document.querySelectorAll('.filter-checkbox');
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

    displayHighestPurseRace(highestPurseRace) {

        let output = '';

        let minutesUntilHighestPurseRace = Math.floor((highestPurseRace.post_time - Math.floor(Date.now() / 1000)) / 60);

        output +=
            `<div id="next-race-head">
                <div class="flag country-${highestPurseRace.event.country}"></div>
                <div class="race-city"><h3>${highestPurseRace.event.title}</h3></div>
                <div id="time-left"><h3>${minutesUntilHighestPurseRace} minutes</h3></div>
            </div>`;

        this.nextRaceWidget.innerHTML = output;
        this.timeLeftDisplay = document.querySelector('#time-left h3');

        // update time until race
        setInterval(() => {
            this.timeLeftDisplay.textContent = Math.floor((highestPurseRace.post_time - Math.floor(Date.now() / 1000)) / 60) + ' minutes';
            console.log(this.timeLeftDisplay.textContent);
        }, 60000);

    }

    displayRaceData(highestPurseRace) {

        let nextRaceBody = document.createElement('div');
        nextRaceBody.classList.add('next-race-body');
        nextRaceBody.innerHTML = `<a href="/race/details/id/${highestPurseRace.id_race}"></a>`;
        this.nextRaceWidget.appendChild(nextRaceBody);
        let nextRaceLink = document.querySelector('.next-race-body a');

        ui.displayNumberOfRunners(nextRaceLink, highestPurseRace);
        ui.displayDistance(nextRaceLink, highestPurseRace);
        ui.displayPurse(nextRaceLink, highestPurseRace);
        ui.displayIcon(nextRaceBody, highestPurseRace);
    }

    displayNumberOfRunners(nextRaceLink, highestPurseRace) {

        let runnersSpan = document.createElement('span');
        runnersSpan.classList.add('race-details', 'runners');
        runnersSpan.textContent = `${highestPurseRace.num_runners} Runners |`;
        nextRaceLink.appendChild(runnersSpan);

    }

    displayDistance(nextRaceLink, highestPurseRace) {

        let distanceSpan = document.createElement('span');
        distanceSpan.classList.add('race-details', 'distance');
        distanceSpan.textContent = ` ${highestPurseRace.distance} m |`;
        nextRaceLink.appendChild(distanceSpan);

    }

    displayPurse(nextRaceLink, highestPurseRace) {

        let purseSpan = document.createElement('span');
        purseSpan.classList.add('race-details', 'purse');
        purseSpan.textContent = ` ${highestPurseRace.purse.amount} ${highestPurseRace.purse.currency} |`;
        nextRaceLink.appendChild(purseSpan);

    }

    displayIcon(nextRaceBody, highestPurseRace) {

        let iconSpan = document.createElement('span');
        iconSpan.classList.add('race-details', 'icon', `icon-${highestPurseRace.race_type}`);
        nextRaceBody.appendChild(iconSpan);

    }


}