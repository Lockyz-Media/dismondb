![npm](https://img.shields.io/npm/v/pokemontypedex)
![GitHub package.json version](https://img.shields.io/github/package-json/v/lockyz-dev/pokemontypedex)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/Lockyz-Dev/pokemontypedex)

# Typedex
The typedex is a node.js module that allows you to show information on all the Types in the Pokemon Games

## Features
- Easy to use!
- Use only a few lines to get information on ANY pokemon type
- The database is constantly being expanded and improved upon

## Description
The typedex was a feature we used in a few of our own bots.
We wanted to open-source it and give everyone access.

Basically, the Typedex is a collection of information on the various types from the game Pokemon.

## Installation
`npm install pokemontypedex`

## Documentation
This documentation is unfinished and will be worked on more when some variables are renamed.
### Information
- `.name` - The name of the specific type
- `.genAdded` - The generation in which the type was added
- `.pokemonCount` - The amount of pokemon with this type *as of generation 9*

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