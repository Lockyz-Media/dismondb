![npm](https://img.shields.io/npm/v/pokemontypedex)
![GitHub package.json version](https://img.shields.io/github/package-json/v/lockyz-dev/pokemontypedex)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/Lockyz-Dev/pokemontypedex)

# Dismon Database
The Dismon Database is a node.js module that allows you to show information on all the Types in the Pokemon Games

## Features
- Easy to use!
- Use only a few lines to get information on ANY pokemon type
- The database is constantly being expanded and improved upon

## Description
The Dismon Database was a feature we used in a few of our own bots.
We wanted to open-source it and give everyone access.

Basically, the Dismon Database is full of information on any of the below.
- Pokemon Types
- MORE to come

## Installation
`npm install pokemontypedex`

## Current Update
- Added .moveCount
- Added .singleTypePokemonCount
- Added .dualTypePokemonCount
- Moved all counters under .counts
- Added counters for every single generation

## Documentation
This documentation is unfinished and will be worked on more when some variables are renamed.
### Information
- `.name` - The name of the specific type
- `.genAdded` - The generation in which the type was added

## Counts
- `.counts.totalPokemonCount` - The amount of pokemon with this type *as of generation 9*
- `.counts.moveCount` - The amount of moves with this type *as of generation 9*
- `.counts.singleTypePokemonCount` - The amount of single-typed pokemon with this type
- `.counts.dualTypePokemonCount` - The amount of dual-typed pokemon with this type
- `.counts.gen1PokemonCount` - The amount of generation 1 pokemon with this type
- `.counts.gen2PokemonCount` - The amount of generation 2 pokemon with this type
- `.counts.gen3PokemonCount` - The amount of generation 3 pokemon with this type
- `.counts.gen4PokemonCount` - The amount of generation 4 pokemon with this type
- `.counts.gen5PokemonCount` - The amount of generation 5 pokemon with this type
- `.counts.gen6PokemonCount` - The amount of generation 6 pokemon with this type
- `.counts.gen7PokemonCount` - The amount of generation 7 pokemon with this type
- `.counts.gen8PokemonCount` - The amount of generation 8 pokemon with this type
- `.counts.gen9PokemonCount` - The amount of generation 9 pokemon with this type

### Current Generation
- `.attackTypemap` - The current attack typemap, the name is subject to change.
- `.attackTypemap.noEffect` - Types that type A cannot cause damage against
- `.attackTypemap.notVeryEffective` - Types that type A is not very effective against
- `.attackTypemap.superEffective` - Types that type A is super effective against
- `.defenceTypemap` - The current defense typemap, the name is subject to change.
- `.defenceTypemap.noEffect` - Types that type A cannot be damaged by
- `.defenceTypemap.notVeryEffective` - Types that are not very effective when used against Type A
- `.defenceTypemap.superEffective` - Types that are super effective when used against Type A

### Generation One
- `.genOneAttackTypemap` - The attack typemap from Generation 1
- `.genOneAttackTypemap.noEffect` - Types that type A cannot cause damage against
- `.genOneAttackTypemap.notVeryEffective` - Types that type A is not very effective against
- `.genOneAttackTypemap.superEffective` - Types that type A is super effective against
- `.genOneDefenseTypemap` - The defense typemap from Generation 1
- `.genOneDefenseTypemap.noEffect` - Types that type A cannot be damaged by
- `.genOneDefenseTypemap.notVeryEffective` - Types that are not very effective when used against Type A
- `.genOneDefenseTypemap.superEffective` - Types that are super effective when used against Type A

### Generations Two to Five
- `.genTwoFiveAttackTypemap` - The attack typemap from Generations 2-5
- `.genTwoFiveAttackTypemap.noEffect` - Types that type A cannot cause damage against
- `.genTwoFiveAttackTypemap.notVeryEffective` - Types that type A is not very effective against
- `.genTwoFiveAttackTypemap.superEffective` - Types that type A is super effective against
- `.genTwoFiveDefenseTypemap` - The defense typemap from Generations 2-5
- `.genTwoFiveDefenseTypemap.noEffect` - Types that type A cannot be damaged by
- `.genTwoFiveDefenseTypemap.notVeryEffective` - Types that are not very effective when used against Type A
- `.genTwoFiveDefenseTypemap.superEffective` - Types that are super effective when used against Type A
