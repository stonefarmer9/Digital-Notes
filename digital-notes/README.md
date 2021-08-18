# Digital-Notes

A Digital notes app to demonstrate my technical vue abilities

## Goals

To create an easy to use notes app using Vuejs.

The main use case for the app is for Dungeons and Dragons and other Table-top roleplaying games.

The app will consist of the following features:

- Note Groups set up as follows:

  - Quests
  - NPC's (non-player characters)
  - Locations
  - Loot \* Character - A page dedicated to the players character

- Notes List Panel :

  - Will show a list of notes as input by the user.
  - The list will be sortable by 3 columns - Note Group, Note Title, Date Created
  - The list will be searchable
  - Note will be able to be flagged/marked for special attention \* Notes can be selected for reading

- Note Panel : \* Will render a selected note and show all pertinent information
- Note creation form:
  - A form to allow users to create notes.
  - The form will have the following fields:
  - Note title
  - Note Group - Quests, NPC's etc
  - Tags input - For Tagging Notes with links to other notes
  - Note details - A sub form allowing users to select note type from a drop down, type meaning list, text, large text, a magic item (to build a pre-created layout showing the pertinent info)

## Technologies

### Front End

- VueJS Version 3 - Front end framework
- Vuex - centralised State storage
- Vue-Router - Routing for view
- Vue CLI

### API Layer

- NodeJs
- Node Express

### Database

- MongoDB

## Approach

The first step will be to build the front end using local storage to persist any needed data.

Once we have a functioning Front-end MVP we will build the MongoDB and API layer to begin persisting data fully.

### MVP

The MVP for thos project will be a Front-End app that can store and render notes from all groups and be persisted within the browser.

### MVP .02

The next stage of MVP will be an app that saves data in a MongoDB database.

## Testing

Testing for the App will be carried out in a TDD methodology as much as possible. To ensure this process is followed correctly my commits for each feature will follow this structure:
1 Commit a failing test. 2. Commit a passing test 3. Commit a refactor (if necessary)

N.B. As this is a personal project, there may be commits of non-fully functioning code dependant on time allowances

I will aim for 90 - 95% code coverage in my tests.

We will use the following testing technologies:

- Jest for node and any FE functional scripts
- Vue-Testing-library for component testing
- Puppeteer for user based testing
