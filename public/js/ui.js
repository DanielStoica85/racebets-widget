const nextRace = new NextRace();

class UI {
    constructor() {
        this.nextRaceWidget = document.getElementById('next-race');
        this.raceTypeInputs = document.querySelectorAll('.filter-checkbox');
        this.updateTimeLeft;
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

    populateNextRace(races) {

        // get checked statuses
        let checkedTypes = ui.getCheckedRaceTypes();

        if (checkedTypes.length > 0) {

            // get race with highest purse
            const highestPurseRace = nextRace.getHighestPurseRace(checkedTypes, races);

            if (highestPurseRace) {

                // display highest purse race
                ui.displayHighestPurseRace(highestPurseRace);

                // display number of runners
                ui.displayRaceData(highestPurseRace);

            } else {
                ui.displayErrorMessage('No upcoming races of selected types to display!');
            }

        } else {
            ui.displayErrorMessage('Sorry, there are no upcoming races to display!');
        }

    }

    displayHighestPurseRace(highestPurseRace) {

        let output = '';

        let minutesUntilHighestPurseRace = Math.floor((highestPurseRace.post_time - Math.floor(Date.now() / 1000)) / 60);

        output +=
            `<div id="next-race-head">
                
                <a href="/race/details/${highestPurseRace.id_race}"><div class="flag country-${highestPurseRace.event.country}"></div></a>
                <div class="race-city"><a href="/race/details/${highestPurseRace.id_race}"><h3>${highestPurseRace.event.title}</h3></a></div>
                <div id="time-left"><a href="/race/details/${highestPurseRace.id_race}"><h3>${minutesUntilHighestPurseRace} minutes</h3></a></div>
                
            </div>`;

        this.nextRaceWidget.innerHTML = output;
        this.timeLeftDisplay = document.querySelector('#time-left h3');

        if (this.updateTimeLeft) {
            clearInterval(this.updateTimeLeft);            
        }
        // update time until race
        this.updateTimeLeft = setInterval(() => {
            let timeLeft = Math.floor((highestPurseRace.post_time - Math.floor(Date.now() / 1000)) / 60);
            if (timeLeft > 2) {
                this.timeLeftDisplay.textContent = timeLeft + ' minutes';
            }
            else if (timeLeft >= 0 && timeLeft <= 2) {
                this.timeLeftDisplay.textContent = 'Due';
            }
            else {
                this.timeLeftDisplay.textContent = 'Started';
                clearInterval(this.updateTimeLeft);
            }
        }, 60000);

    }

    displayRaceData(highestPurseRace) {

        let nextRaceBody = document.createElement('div');
        nextRaceBody.classList.add('next-race-body');
        this.nextRaceWidget.appendChild(nextRaceBody);

        this.displayNumberOfRunners(nextRaceBody, highestPurseRace);
        this.displayDistance(nextRaceBody, highestPurseRace);
        this.displayPurse(nextRaceBody, highestPurseRace);
        this.displayIcon(nextRaceBody, highestPurseRace);

        this.displayRunners(highestPurseRace);
    }

    displayNumberOfRunners(nextRaceBody, highestPurseRace) {

        let runnersDiv = document.createElement('div');
        runnersDiv.classList.add('race-details', 'runners');
        runnersDiv.innerHTML = `<a href="/race/details/${highestPurseRace.id_race}"><span>${highestPurseRace.num_runners} Runners |</span></a>`;
        nextRaceBody.appendChild(runnersDiv);

    }

    displayDistance(nextRaceBody, highestPurseRace) {

        let distanceDiv = document.createElement('div');
        distanceDiv.classList.add('race-details', 'distance');
        distanceDiv.innerHTML = `<a href="/race/details/${highestPurseRace.id_race}"><span> ${highestPurseRace.distance} m |</span></a>`;
        nextRaceBody.appendChild(distanceDiv);

    }

    displayPurse(nextRaceBody, highestPurseRace) {

        let purseDiv = document.createElement('div');
        purseDiv.classList.add('race-details', 'purse');
        purseDiv.innerHTML = `<a href="/race/details/${highestPurseRace.id_race}"><span>${highestPurseRace.purse.amount} ${highestPurseRace.purse.currency} |</span></a>`;
        nextRaceBody.appendChild(purseDiv);

    }

    displayIcon(nextRaceBody, highestPurseRace) {

        let iconDiv = document.createElement('div');
        iconDiv.classList.add('race-details', 'icon', `icon-${highestPurseRace.race_type}`);
        let iconImage = document.createElement('img');
        iconImage.src = `../img/race-types/race-type-${highestPurseRace.race_type}.svg`;
        nextRaceBody.appendChild(iconDiv);
        iconDiv.appendChild(iconImage);

    }

    displayRunners(highestPurseRace) {

        let nextRaceRunners = document.createElement('ul');
        nextRaceRunners.classList.add('runners-list');
        this.nextRaceWidget.appendChild(nextRaceRunners);

        let output = '';

        highestPurseRace.runners.forEach(runner => {
            if (runner.silk.length > 0) {
                output += `<li class="runner">
                    <a href="/race/details/${highestPurseRace.id_race}" target="_blank">
                        <img src="../img/silks/${runner.silk}" alt="Silk">
                        <p>${runner.name}</p>
                    </a>
                    <a href="/race/details/${highestPurseRace.id_race}" target="_blank">
                        <button class="bet-button">Bet</button>
                    </a>                    
                </li>`;
            }
            else {
                output += `<li class="runner">
                    <a href="/race/details/${highestPurseRace.id_race}" class="no-silk-runner">
                        <p>${runner.name}</p>
                        <button class="bet-button">Bet</button>
                    </a>
                </li>`;
            }
        });

        nextRaceRunners.innerHTML = output;
    }

    displayErrorMessage(message) {
        this.nextRaceWidget.innerHTML = `<h3 class="no-races">${message}</h3>`;
    }


}