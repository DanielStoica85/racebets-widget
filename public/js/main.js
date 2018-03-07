const ui = new UI();

document.addEventListener("DOMContentLoaded", function (event) {

    axios.get('/api/next_races').then((response) => {

            // get checked statuses
            let checkedTypes = ui.getCheckedRaceTypes();

            if (checkedTypes.length > 0) {

                // get race with highest purse
                const highestPurseRace = nextRace.getHighestPurseRace(checkedTypes, response.data.data.races);

                // display highest purse race
                ui.displayHighestPurseRace(highestPurseRace);

                // display number of runners
                ui.displayRaceData(highestPurseRace);

            }

        })
        .catch((err) => console.log(err));

});