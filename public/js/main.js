const ui = new UI();

document.addEventListener("DOMContentLoaded", function (event) {

    axios.get('/api/next_races').then((response) => {

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

});