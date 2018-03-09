const ui = new UI();

document.addEventListener("DOMContentLoaded", function (event) {

    axios.get('/api/next_races').then((response) => {

<<<<<<< HEAD
            ui.populateNextRace(response.data.data.races);

        })
        .catch((err) => console.log(err));

    document.getElementById('race-type-filter').addEventListener('change', function (e) {

        if (e.target.tagName == 'INPUT') {
            axios.get('/api/next_races').then((response) => {

                    ui.populateNextRace(response.data.data.races);

                })
                .catch((err) => console.log(err));
        }
    });
=======
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
>>>>>>> ae30ad8202801c588b14e303945dea00f71ab7f1

});