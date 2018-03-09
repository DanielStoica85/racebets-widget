## Introduction

With this test task we want to get an idea of your proficiency in frontend related web development technologies. We will give you a real task specification below and you are free to use whatever technologies, bundlers, pre-processors, framework, libraries, etc. to create your application. You shall provide us with either an archive file or a hosted Git repository of your resulting work including a readme file to describe the required steps to get it working.

##Task

Below you see a screenshot of our website:
http://confluence.racebetsint.com/download/attachments/13500968/next-race-box.png?version=2&modificationDate=1439907026000&api=v2

You shall implement the widget itself (red outline on the screenshot) and a "Race Type Filter" component displayed separately on the same site (blue outline on the screenshot). By default 3 filters shall be active: "Gallop", "Jumping" and "Trot". "Dogs" race type is switched off by default. Depending on the active filters you shall always show the race with matching race type which has the highest purse. Take the currency into account when comparing the purses using a exchange rate for GBP/EUR that you can predefine somewhere.

While the filter section does not need to be designed (can be simply checkboxes) the Next Race widget shall look as much as possible as in the screenshot and work in all modern browsers (Firefox, Chrome, Safari, IE10+).  If there is no silk given for one of the runners in a race, there should be no empty space in front of the names but the rows should start with the names. The button shall be a link to http://www.racebets.com/bet/{id_race}.

Attached we are providing a JSON file that contains the data that shall be displayed. Its structure is explained further below. Load this JSON on initialisation of the "Next Races Box" widget.

The "Next Races Box" widget should be prepared to receive updated JSON data at any time. Create a simple test for your component.

You shall copy and flags, icons, silks etc. you require from our website www.racebets.com.


## JSON Structure

The "data" element of the root object contains an object with the next 4 races of each race type: Trot (T), Gallop (G), Dogs (D) and Jumping (J).

Each of these race objects contains the relevant information you require to display the race in the widget.

    event: Title and country code
    race_type: Trot (T), Gallop (G), Dogs (D) or Jumping (J)
    post_time: Unix timestamp of the post time in order to calculate the remaining time till the race will start
    num_runners: Number of runners starting
    distance: Distance of the race in meters
    purse: Prize money
    runners: Object of the top 3 runners

Each runners object contains

    name: The name of the runner
    odds: The odds of the runner
    silk: Filename of the silk of the runner to be displayed in front of its name (if any)