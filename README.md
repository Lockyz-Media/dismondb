![npm](https://img.shields.io/npm/v/pokemontypedex)
![GitHub package.json version](https://img.shields.io/github/package-json/v/lockyzdev/pokemontypedex)

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
`.name` - The name of the specific type
`.genAdded` - The generation in which the type was added
`.pokemonCount` - The amount of pokemon with this type *as of generation 9*
`.attackProCon` - The current attack typemap, the name is subject to change.
`.attackProCon.noEffect` - Types that type A cannot cause damage against
`.attackProCon.notVerEffect` - Types that type A is not very effective against
`.attackProCon.supEffect` - Types that type A is super effective against
`.defProCon` - The current defense typemap, the name is subject to change.
`.defProCon.noEffect` - Types that type A cannot be damaged by
`.defProCon.notVerEffect` - Types that are not very effective when used against Type A
`.defProCon.supEffect` - Types that are super effective when used against Type A
`.genOneAtt` - The attack typemap from Generation 1
`.genOneAtt.noEffect` - Types that type A cannot cause damage against
`.genOneAtt.notVerEffect` - Types that type A is not very effective against
`.genOneAtt.supEffect` - Types that type A is super effective against