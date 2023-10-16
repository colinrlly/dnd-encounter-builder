# dnd-encounter-builder

A clone-ish of the DND Beyond encounter builder I am creating as part of my application for the DND Beyond Frontend Developer position.

# Architecture Plan

## Frontend

- NextJS/React - pretty much industry standard for a front end
- Tailwind CSS using the Tailwind UI kit - excited to try Tailwind after hearing about it forever
- Deployed to Vercel - vercel is the easiest way to deploy a Next app and I am prioritizing speed

## Backend

- Firebase - going with Firebase because from my research it seems to get the backend set up as quickly as possible which will let me focus on the frontend
- Considered Supabase, Django, Node.
- Node - too much manual configuration and library decisions. This is a front end focused exercise and I don't want to get caught up deciding on every piece of a backend.
- Django - less decisions needed then Node but still would need to figure out how to host it quickly which could take a while to get right.
- Supabase - cool open source backend as a service but Firebase just seems better

## Authentication

Foregoing any kind of authentication since it would distract the target user, the DND Beyond hiring team, from experiencing the core of the app

## Analytics

Firebase has built in backend analytics and Next/Vercel have their own built in analytics. In a more production ready environment I would consider more robust observability tools but for this exercise I plan to utalize the two previously mentioned tools since they will be the fastest to configure.

# Additional Planning

## UI Design

Experimented with bing AI to generate innovative UI designs for this DND Encounter builder. The AI offered interesting ideas for style direction but did not offer too many ideas for UX. I believe it will be useful to guide the overall design tone of the application but I will need to go into Figma to create more robust designs.

## DND Data

I plan to use the [open5e.com](https://open5e.com) list of monsters in order to populate the encounter builder. open5e looks to have an API which I am excited to dive into for this application. The question stands do I dynamically pull the monster list data from open5e into the frontend and then save the monster IDs to my database once the user creates their encounter? Or do I pull all the data from open5e into my database to start 🤔. My initial take is to dynamically pull the data from open5e every time the user starts creating an encounter. I need to investigate the API more though to see if things like filtering are supported. I also need to investigate the API to see if every monster has a unique ID.

After further exploration I have decided to use the open5e API for class, race, and monster data. I am able to run robust and finely tuned queries to the open5e API which will support my needs for this app.

## Functionality Enhancements

The main idea I have to differentiate this encounter builder from the one on DND Beyond is to expolore other methods to determine the difficulty of the encounter past the formula that is presented in the Dungeon Masters Guide. From my experience the difficulty rating provided by the DND Beyond encounter builder does not accurately represent the difficulty of the encounter. Things like action econmy need to be taken into consideration and I am planning to research other methods I am sure exist on the internet for determining the difficulty of DND encounters.

## List of Features

- Ability to create players which can be used later (name, race, class, level)
- Ability to add those players to an encounter which contains a list of monsters
- Ability to see monster stat block when searching through list of monsters to add to encounter
- Ability to search monster list when adding them to encounter
- Ability to see difficulty of encounter dynamically when adding monsters and players
- Ability to run encounter and keep track of initiative, hp, and death saving throws

## Initial Database Schema Plan (Firestore noSQL)

SEE THE DATABASE DOCUMENTATION FOR THE CURRENT SCHEMA

```json
{
  "encounters": {
    "players": [
      "jVMbDrQNkWsFtDopf8JG",
    ],
    "monsters": [
      "ape",
    ],
  },
  "players": [
    "jVMbDrQNkWsFtDopf8JG": {
      "class": "wizard",
      "level": 4,
      "name": "nortle",
      "race": "elf",
    },
  ],
},
```

## Database

Decided to use Firebase Firestore Database over Firebase Realtime Database because from what I've read online Firestore is the next generation of Firebase and offers more features. I also played around with both databases in the Firebase UI and I like the UI of Firestore better. I also think the document/collection structure of Firestore is better then the raw JSON structure of Realtime database.
