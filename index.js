var types = [
    /*
    Dismon Typings Database 3.0
        EXAMPLE ITEM
    {
            name: "NAME",
            pokemonCount: "Number",
            genAdded: "Number",
            statAverages: {
                hp: "",
                attack: "",
                defense: "",
                spAttack: "",
                spDefense: "",
                speed: "",
            },
            attackProCon: {
                noEffect: "", 
                notVerEffect: "",
                supEffect: "",
            },
            defProCon: {
                noEffect: "", 
                notVerEffect: "",
                supEffect: "",
            },
            genOneAtt: {
                noEffect: "", 
                notVerEffect: "",
                supEffect: "",
            },
            genOneDef: {
                noEffect: "Currently Unavailable", 
                notVerEffect: "Currently Unavailable",
                supEffect: "Currently Unavailable",
            },
            genTwoToFiveAtt: {
                noEffect: "", 
                notVerEffect: "",
                supEffect: "",
            },
            genTwoToFiveDef: {
                noEffect: "Currently Unavailable", 
                notVerEffect: "Currently Unavailable",
                supEffect: "Currently Unavailable",
            }
         },
          ANY INFORMATION THAT IS INCORRECT NEEDS TO BE CHANGED.
          DESCRIPTIONS CAN ONLY BE ONE LINE. SEPERATE LINES WITH \n
          All unused Data needs to be removed.
          All the text before the { on each item needs to be removed.
          Needs to have a command created in the bot to access it.
          More information will be added if necessary
      */
     {
         name: "Normal",
         pokemonCount: "149",
         genAdded: "Gen 1",
         statAverages: {
            hp: "76.0",
            attack: "74.0",
            defense: "61.2",
            spAttack: "59.2",
            spDefense: "64.8",
            speed: "71.1",
         },
         attackProCon: {
            noEffect: "Ghost", 
            notVerEffect: "Rock, Steel",
            supEffect: "None",
         },
         defProCon: {
            noEffect: "Ghost", 
            notVerEffect: "None",
            supEffect: "Fighting",
         },
         genOneAtt: {
             noEffect: "Ghost",
             notVerEffect: "Rock",
             supEffect: "None",
         },
         genOneDef: {
             noEffect: "Currently Unavailable", 
             notVerEffect: "Currently Unavailable",
             supEffect: "Currently Unavailable",
         },
         genTwoToFiveAtt: {
             noEffect: "Currently Unavailable",
             notVerEffect: "Currently Unavailable",
             supEffect: "Currently Unavailable",
         },
         genTwoToFiveDef: {
             noEffect: "Currently Unavailable", 
             notVerEffect: "Currently Unavailable",
             supEffect: "Currently Unavailable",
         }
     },
     {
        name: "Fire",
        pokemonCount: "95",
        genAdded: "Gen 1",
        statAverages: {
            hp: "70.9",
            attack: "84.1",
            defense: "70.8",
            spAttack: "89.3",
            spDefense: "72.9",
            speed: "75.5",
        },
        attackProCon: {
            noEffect: "None",
            notVerEffect: "Fire, Water, Rock, Dragon",
            supEffect: "Grass, Ice, Bug, Steel",
        },
        defProCon: {
            noEffect: "None",
            notVerEffect: "Fire, Grass, Ice, Bug, Steel, Fairy",
            supEffect: "Water, Ground, Rock",
        },
        genOneAtt: {
            noEffect: "None",
            notVerEffect: "Fire, Water, Rock, Dragon",
            supEffect: "Grass, Ice, Bug",
        },
        genOneDef: {
            noEffect: "Currently Unavailable", 
            notVerEffect: "Currently Unavailable",
            supEffect: "Currently Unavailable",
        },
        genTwoToFiveAtt: {
           noEffect: "Currently Unavailable",
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       },
       genTwoToFiveDef: {
           noEffect: "Currently Unavailable", 
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       }
     },
     {
        name: "Water",
        genAdded: "Gen 1",
        pokemonCount: "172",
        statAverages: {
            hp: "70.7",
            attack: "75.6",
            defense: "74.9",
            spAttack: "75",
            spDefense: "71.6",
            speed: "66.2",
        },
        attackProCon: {
            noEffect: "None", 
            notVerEffect: "Water, Grass, Dragon",
            supEffect: "Fire, Ground, Rock",
        },
        defProCon: {
            noEffect: "None",
            notVerEffect: "Fire, Water, Ice, Steel",
            supEffect: "Electric Grass",
        },
        genOneAtt: {
            noEffect: "None",
            notVerEffect: "Water, Grass, Dragon",
            supEffect: "Fire, Ground, Rock",
        },
        genOneDef: {
            noEffect: "Currently Unavailable", 
            notVerEffect: "Currently Unavailable",
            supEffect: "Currently Unavailable",
        },
        genTwoToFiveAtt: {
           noEffect: "Currently Unavailable",
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       },
       genTwoToFiveDef: {
           noEffect: "Currently Unavailable", 
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       }
     },
     {
        name: "Electric",
        genAdded: "Gen 1",
        pokemonCount: "86",
        statAverages: {
            hp: "64",
            attack: "74.8",
            defense: "68.9",
            spAttack: "86.7",
            spDefense: "70.8",
            speed: "83.2",
        },
        attackProCon: {
            noEffect: "Ground",
            notVerEffect: "Electric, Grass, Dragon",
            supEffect: "Water, Flying",
        },
        defProCon: {
            noEffect: "None",
            notVerEffect: "Electric, Flying, Steel",
            supEffect: "Ground",
        },
        genOneAtt: {
            noEffect: "Ground",
            notVerEffect: "Electric, Grass, Dragon",
            supEffect: "Water, Flying",
        },
        genOneDef: {
            noEffect: "Currently Unavailable", 
            notVerEffect: "Currently Unavailable",
            supEffect: "Currently Unavailable",
        },
        genTwoToFiveAtt: {
           noEffect: "Currently Unavailable",
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       },
       genTwoToFiveDef: {
           noEffect: "Currently Unavailable", 
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       }
     },
     {
        name: "Grass",
        genAdded: "Gen 1",
        pokemonCount: "137",
        statAverages: {
            hp: "66.4",
            attack: "75.5",
            defense: "74",
            spAttack: "71.9",
            spDefense: "71.6",
            speed: "61.1",
        },
        attackProCon: {
            noEffect: "None",
            notVerEffect: "Fire, Grass, Poison, Flying, Bug, Dragon, Steel",
            supEffect: "Water, Ground, Rock",
        },
        defProCon: {
            noEffect: "None",
            notVerEffect: "Water, Electric, Grass, Ground",
            supEffect: "Fire, Ice, Poison, Flying, Bug",
        },
        genOneAtt: {
            noEffect: "None",
            notVerEffect: "Fire, Grass, Poison, Flying, Bug, Dragon",
            supEffect: "Water, Ground, Rock",
        },
        genOneDef: {
            noEffect: "Currently Unavailable", 
            notVerEffect: "Currently Unavailable",
            supEffect: "Currently Unavailable",
        },
        genTwoToFiveAtt: {
           noEffect: "Currently Unavailable",
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       },
       genTwoToFiveDef: {
           noEffect: "Currently Unavailable", 
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       }
     },
     {
        name: "Ice",
        genAdded: "Gen 1",
        pokemonCount: "65",
        statAverages: {
            hp: "78.2",
            attack: "86.9",
            defense: "79.8",
            spAttack: "75.6",
            spDefense: "77.1",
            speed: "67.3",
        },
        attackProCon: {
            noEffect: "None",
            notVerEffect: "Fire, Water, Ice, Steel",
            supEffect: "Grass, Ground, Flying, Dragon",
        },
        defProCon: {
            noEffect: "None",
            notVerEffect: "Ice",
            supEffect: "Fire, Fighting, Rock, Steel",
        },
        genOneAtt: {
            noEffect: "None",
            notVerEffect: "Water, Ice",
            supEffect: "Grass, Ground, Flying, Dragon",
        },
        genOneDef: {
            noEffect: "Currently Unavailable", 
            notVerEffect: "Currently Unavailable",
            supEffect: "Currently Unavailable",
        },
        genTwoToFiveAtt: {
           noEffect: "Currently Unavailable",
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       },
       genTwoToFiveDef: {
           noEffect: "Currently Unavailable", 
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       }
     },
     {
        name: "Fighting",
        genAdded: "Gen 1",
        pokemonCount: "91",
        statAverages: {
            hp: "75.9",
            attack: "107.2",
            defense: "77.3",
            spAttack: "66.6",
            spDefense: "73.2",
            speed: "78.9",
        },
        attackProCon: {
            noEffect: "Ghost",
            notVerEffect: "Poison, Flying, Psychic, Bug, Fairy",
            supEffect: "Normal, Ice, Rock, Dark, Steel",
        },
        defProCon: {
            noEffect: "None",
            notVerEffect: "Bug, Rock, Dark",
            supEffect: "Flying, Psychic, Fairy",
        },
        genOneAtt: {
            noEffect: "Ghost",
            notVerEffect: "Poison, Flying, Psychic, Bug",
            supEffect: "Normal, Ice, Rock",
        },
        genOneDef: {
            noEffect: "Currently Unavailable", 
            notVerEffect: "Currently Unavailable",
            supEffect: "Currently Unavailable",
        },
        genTwoToFiveAtt: {
           noEffect: "Currently Unavailable",
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       },
       genTwoToFiveDef: {
           noEffect: "Currently Unavailable", 
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       }
     },
     {
        name: "Poison",
        genAdded: "Gen 1",
        pokemonCount: "92",
        statAverages: {
            hp: "68.1",
            attack: "73.9",
            defense: "68.7",
            spAttack: "71.8",
            spDefense: "71.7",
            speed: "68.3",
        },
        attackProCon: {
            noEffect: "Steel",
            notVerEffect: "Poison, Ground, Rock, Ghost",
            supEffect: "Grass, Fairy",
        },
        defProCon: {
            noEffect: "None",
            notVerEffect: "Grass, Fighting, Poison, Bug, Fairy",
            supEffect: "Ground, Psychic",
        },
        genOneAtt: {
            noEffect: "None",
            notVerEffect: "Poison, Ground, Rock, Ghost",
            supEffect: "Grass, Bug",
        },
        genOneDef: {
            noEffect: "Currently Unavailable", 
            notVerEffect: "Currently Unavailable",
            supEffect: "Currently Unavailable",
        },
        genTwoToFiveAtt: {
           noEffect: "Currently Unavailable",
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       },
       genTwoToFiveDef: {
           noEffect: "Currently Unavailable", 
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       }
     },
     {
        name: "Ground",
        genAdded: "Gen 1",
        pokemonCount: "89",
        statAverages: {
            hp: "75.9",
            attack: "92.3",
            defense: "88.3",
            spAttack: "60.5",
            spDefense: "66.1",
            speed: "58.6",
        },
        attackProCon: {
            noEffect: "Flying",
            notVerEffect: "Grass, Bug",
            supEffect: "Fire, Electric, Poison, Rock, Steel",
        },
        defProCon: {
            noEffect: "Electric",
            notVerEffect: "Poison, Rock",
            supEffect: "Water, Grass, Ice",
        },
        genOneAtt: {
            noEffect: "Flying",
            notVerEffect: "Grass, Bug",
            supEffect: "Fire, Electric, Poison, Rock",
        },
        genOneDef: {
            noEffect: "Currently Unavailable", 
            notVerEffect: "Currently Unavailable",
            supEffect: "Currently Unavailable",
        },
        genTwoToFiveAtt: {
           noEffect: "Currently Unavailable",
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       },
       genTwoToFiveDef: {
           noEffect: "Currently Unavailable", 
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       }
     },
     {
        name: "Flying",
        genAdded: "Gen 1",
        pokemonCount: "132",
        statAverages: {
            hp: "72.1",
            attack: "81.1",
            defense: "69",
            spAttack: "78.1",
            spDefense: "71.9",
            speed: "85",
        },
        attackProCon: {
            noEffect: "None",
            notVerEffect: "Electric, Rock, Steel",
            supEffect: "Grass, Fighting, Bug",
        },
        defProCon: {
            noEffect: "Ground",
            notVerEffect: "Grass, Fighting, Bug",
            supEffect: "Electric, Ice, Rock",
        },
        genOneAtt: {
            noEffect: "None",
            notVerEffect: "Electric, Rock",
            supEffect: "Grass, Fighting, Bug",
        },
        genOneDef: {
            noEffect: "Currently Unavailable", 
            notVerEffect: "Currently Unavailable",
            supEffect: "Currently Unavailable",
        },
        genTwoToFiveAtt: {
           noEffect: "Currently Unavailable",
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       },
       genTwoToFiveDef: {
           noEffect: "Currently Unavailable", 
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       }
     },
     {
        name: "Psychic",
        genAdded: "Gen 1",
        pokemonCount: "130",
        statAverages: {
            hp: "74",
            attack: "75.8",
            defense: "76.7",
            spAttack: "95.5",
            spDefense: "88",
            speed: "76.3",
        },
        attackProCon: {
            noEffect: "Dark",
            notVerEffect: "Psychic, Steel",
            supEffect: "Fighting, Poison",
        },
        defProCon: {
            noEffect: "None",
            notVerEffect: "Fighting, Psychic",
            supEffect: "Bug, Ghost, Dark",
        },
        genOneAtt: {
            noEffect: "None",
            notVerEffect: "Psychic",
            supEffect: "Fighting, Poison",
        },
        genOneDef: {
            noEffect: "Currently Unavailable", 
            notVerEffect: "Currently Unavailable",
            supEffect: "Currently Unavailable",
        },
        genTwoToFiveAtt: {
           noEffect: "Currently Unavailable",
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       },
       genTwoToFiveDef: {
           noEffect: "Currently Unavailable", 
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       }
     },
     {
        name: "Bug",
        genAdded: "Gen 1",
        pokemonCount: "100",
        statAverages: {
            hp: "56.8",
            attack: "71",
            defense: "70.9",
            spAttack: "56",
            spDefense: "65.4",
            speed: "61.6",
        },
        attackProCon: {
            noEffect: "None",
            notVerEffect: "Fire, Fighting, Poison, Flying, Ghost, Steel, Fairy",
            supEffect: "Grass, Psychic, Dark",
        },
        defProCon: {
            noEffect: "None",
            notVerEffect: "Grass, Fighting, Ground",
            supEffect: "Fire, Flying, Rock",
        },
        genOneAtt: {
            noEffect: "None",
            notVerEffect: "Fire, Fighting, Flying, Ghost",
            supEffect: "Grass, Poison, Psychic",
        },
        genOneDef: {
            noEffect: "Currently Unavailable", 
            notVerEffect: "Currently Unavailable",
            supEffect: "Currently Unavailable",
        },
        genTwoToFiveAtt: {
           noEffect: "Currently Unavailable",
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       },
       genTwoToFiveDef: {
           noEffect: "Currently Unavailable", 
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       }
     },
     {
        name: "Rock",
        genAdded: "Gen 1",
        pokemonCount: "86",
        statAverages: {
            hp: "68.5",
            attack: "91.9",
            defense: "103.3",
            spAttack: "59.4",
            spDefense: "71.4",
            speed: "54.5",
        },
        attackProCon: {
            noEffect: "None",
            notVerEffect: "Fighting, Ground, Steel",
            supEffect: "Fire, Ice, Flying, Bug",
        },
        defProCon: {
            noEffect: "None",
            notVerEffect: "Normal, Fire, Poison, Flying",
            supEffect: "Water, Grass, Fighting, Ground, Steel",
        },
        genOneAtt: {
            noEffect: "None",
            notVerEffect: "Fighting, Flying",
            supEffect: "Fire, Ice, Flying, Bug",
        },
        genOneDef: {
            noEffect: "Currently Unavailable", 
            notVerEffect: "Currently Unavailable",
            supEffect: "Currently Unavailable",
        },
        genTwoToFiveAtt: {
           noEffect: "Currently Unavailable",
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       },
       genTwoToFiveDef: {
           noEffect: "Currently Unavailable", 
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       }
     },
     {
        name: "Ghost",
        genAdded: "Gen 1",
        pokemonCount: "84",
        statAverages: {
            hp: "66.4",
            attack: "80.6",
            defense: "79.3",
            spAttack: "84.4",
            spDefense: "78.6",
            speed: "67",
        },
        attackProCon: {
            noEffect: "Normal",
            notVerEffect: "Dark",
            supEffect: "Psychic, Ghost",
        },
        defProCon: {
            noEffect: "Normal, Fighting",
            notVerEffect: "Poison, Bug",
            supEffect: "Ghost, Dark",
        },
        genOneAtt: {
            noEffect: "Normal, Psychic",
            notVerEffect: "None",
            supEffect: "Ghost",
        },
        genOneDef: {
            noEffect: "Currently Unavailable", 
            notVerEffect: "Currently Unavailable",
            supEffect: "Currently Unavailable",
        },
        genTwoToFiveAtt: {
           noEffect: "Currently Unavailable",
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       },
       genTwoToFiveDef: {
           noEffect: "Currently Unavailable", 
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       }
     },
     {
        name: "Dragon",
        genAdded: "Gen 1",
        pokemonCount: "85",
        statAverages: {
            hp: "88.2",
            attack: "100.9",
            defense: "88.7",
            spAttack: "98",
            spDefense: "86.4",
            speed: "81.1",
        },
        attackProCon: {
            noEffect: "Fairy",
            notVerEffect: "Steel",
            supEffect: "Dragon",
        },
        defProCon: {
            noEffect: "None",
            notVerEffect: "Fire, Water, Electric, Grass",
            supEffect: "Ice, Dragon, Fairy",
        },
        genOneAtt: {
            noEffect: "None",
            notVerEffect: "None",
            supEffect: "Dragon",
        },
        genOneDef: {
            noEffect: "Currently Unavailable", 
            notVerEffect: "Currently Unavailable",
            supEffect: "Currently Unavailable",
        },
        genTwoToFiveAtt: {
           noEffect: "Currently Unavailable",
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       },
       genTwoToFiveDef: {
           noEffect: "Currently Unavailable", 
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       }
     },
     {
        name: "Dark",
        genAdded: "Gen 2",
        pokemonCount: "89",
        statAverages: {
            hp: "72.9",
            attack: "92.7",
            defense: "69.1",
            spAttack: "74.6",
            spDefense: "68.6",
            speed: "76.9",
        },
        attackProCon: {
            noEffect: "None",
            notVerEffect: "Fighting, Dark, Fairy",
            supEffect: "Psychic, Ghost",
        },
        defProCon: {
            noEffect: "Psychic",
            notVerEffect: "Ghost, Dark",
            supEffect: "Fighting, Bug, Fairy",
        },
        genOneAtt: {
            noEffect: "Didn't Exist", 
            notVerEffect: "Didn't Exist",
            supEffect: "Didn't Exist",
        },
        genOneDef: {
            noEffect: "Didn't Exist", 
            notVerEffect: "Didn't Exist", 
            supEffect: "Didn't Exist", 
        },
        genTwoToFiveAtt: {
           noEffect: "Currently Unavailable",
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       },
       genTwoToFiveDef: {
           noEffect: "Currently Unavailable", 
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       }
     },
     {
        name: "Steel",
        genAdded: "Gen 2",
        pokemonCount: "83",
        statAverages: {
            hp: "70.1",
            attack: "95.4",
            defense: "108.8",
            spAttack: "71.1",
            spDefense: "81.2",
            speed: "62.3",
        },
        attackProCon: {
            noEffect: "None",
            notVerEffect: "Fire, Water, Electric, Steel",
            supEffect: "Ice, Rock, Fairy",
        },
        defProCon: {
            noEffect: "Poison",
            notVerEffect: "Normal, Grass, Ice, Flying, Psychic, Bug, Rock, Dragon, Fairy",
            supEffect: "Fire, Fighting, Ground",
        },
        genOneAtt: {
            noEffect: "Didn't Exist", 
            notVerEffect: "Didn't Exist",
            supEffect: "Didn't Exist",
        },
        genOneDef: {
            noEffect: "Didn't Exist", 
            notVerEffect: "Didn't Exist", 
            supEffect: "Didn't Exist", 
        },
        genTwoToFiveAtt: {
           noEffect: "Currently Unavailable",
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       },
       genTwoToFiveDef: {
           noEffect: "Currently Unavailable", 
           notVerEffect: "Currently Unavailable",
           supEffect: "Currently Unavailable",
       }
     },
     {
        name: "Fairy",
        genAdded: "Gen 6",
        pokemonCount: "73",
        statAverages: {
            hp: "67.6",
            attack: "70.2",
            defense: "74.2",
            spAttack: "82.4",
            spDefense: "85.9",
            speed: "64.8",
        },
        attackProCon: {
            noEffect: "None",
            notVerEffect: "Fire, Poison, Steel",
            supEffect: "Fighting, Dragon, Dark",
        },
        defProCon: {
            noEffect: "Dragon",
            notVerEffect: "Fighting, Bug, Dark",
            supEffect: "Poison, Steel",
        },
        genOneAtt: {
            noEffect: "Didn't Exist", 
            notVerEffect: "Didn't Exist",
            supEffect: "Didn't Exist",
        },
        genOneDef: {
            noEffect: "Didn't Exist", 
            notVerEffect: "Didn't Exist", 
            supEffect: "Didn't Exist", 
        },
        genTwoToFiveAtt: {
            noEffect: "Didn't Exist", 
            notVerEffect: "Didn't Exist",
            supEffect: "Didn't Exist",
       },
       genTwoToFiveDef: {
            noEffect: "Didn't Exist", 
            notVerEffect: "Didn't Exist",
            supEffect: "Didn't Exist",
       }
     }
];
module.exports = types;