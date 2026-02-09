![npm](https://img.shields.io/npm/v/dismondb)
![GitHub package.json version](https://img.shields.io/github/package-json/v/Lockyz-Media/dismondb)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/Lockyz-Media/dismondb)

# V5 Status
V5 is currently conceptual in nature. At this point we're focusing on getting the schema down, and inserting example data (that may not be entirely correct)

# V5 plans
- Remove ALL older versions of the typedex from this branch (these will be kept live in V4 however) as they have been deprecated for some time.
- Update the index.js to actually serve the new schema
- Add more functions for getting specific data instead of JUST the entire type information for each type.
- (MAYBE) Add more main objects to the db (rather than JUST a typedex)

# DismonDB
The DismonDB is a node.js module that allows you to show information on all the Types in the mainline Pokemon Games

## Features
- Easy to use!
- Use only a few lines to get information on ANY pokemon type
- The database is constantly being expanded and improved upon

## Description
The Dismon Database was a feature we used in a few of our own bots.
We wanted to open-source it and give everyone access.

Basically, the DismonDB is full of information on any of the below.
- Pokemon Types
- MORE to come

## Installation
`npm install dismondb`

## Current Update
- ALL "versions" are now json files
- Added a single function for the typedex
- Added "images"
- Renamed to "DismonDB"
- Nested the "Name" and added properties for different languages
-- Only supports English and Japanese at this current time
- All Typemaps have been nested further
-- Instead of genOneAttackTypemap.noEffect it's typemaps.gen1.noEffect
-- This should increase clarity and all us to add more values in the future.
-- This also means they all can follow the same naming scheme
- Renamed counts to counters
-- Instead of counts.moveCount it's counters.moves
- Nested the stat averages by two more levels
-- Instead of statAverages.hp it's stats.average.overall.hp
-- More stat types will be added in the future (e.g min stat, max stat)
- Fixed a few spelling errors
-- Defence not Defense
- Changed relevant strings to int and long
- Updated outdated stat averages
-- Some hadn't been set when I updated the db to Gen 9 data