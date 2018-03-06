const ui = new UI();

document.addEventListener("DOMContentLoaded", function (event) {

    axios.get('/api/next_races').then((response) => {
            ui.displayHighestPurseRace(response.data.data.races);
        })
        .catch((err) => console.log(err));

});