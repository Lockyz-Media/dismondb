var types = [
    /*
    Dismon Typings Database 3.1.0
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
            attackTypemap: {
                noEffect: "", 
                notVeryEffective: "",
                superEffective: "",
            },
            defenceTypemap: {
                noEffect: "", 
                notVeryEffective: "",
                superEffective: "",
            },
            genOneAttackTypemap: {
                noEffect: "", 
                notVeryEffective: "",
                superEffective: "",
            },
            genOneDefenseTypemap: {
                noEffect: "", 
                notVeryEffective: "",
                superEffective: "",
            },
            genTwoFiveAttackTypemap: {
                noEffect: "", 
                notVeryEffective: "",
                superEffective: "",
            },
            genTwoFiveDefenseTypemap: {
                noEffect: "", 
                notVeryEffective: "",
                superEffective: "",
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
         attackTypemap: {
            noEffect: "Ghost", 
            notVeryEffective: "Rock, Steel",
            superEffective: "None",
         },
         defenceTypemap: {
            noEffect: "Ghost", 
            notVeryEffective: "None",
            superEffective: "Fighting",
         },
         genOneAttackTypemap: {
             noEffect: "Ghost",
             notVeryEffective: "Rock",
             superEffective: "None",
         },
         genOneDefenseTypemap: {
             noEffect: "Currently Unavailable", 
             notVeryEffective: "Currently Unavailable",
             superEffective: "Currently Unavailable",
         },
         genTwoFiveAttackTypemap: {
             noEffect: "Currently Unavailable",
             notVeryEffective: "Currently Unavailable",
             superEffective: "Currently Unavailable",
         },
         genTwoFiveDefenseTypemap: {
             noEffect: "Currently Unavailable", 
             notVeryEffective: "Currently Unavailable",
             superEffective: "Currently Unavailable",
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
        attackTypemap: {
            noEffect: "None",
            notVeryEffective: "Fire, Water, Rock, Dragon",
            superEffective: "Grass, Ice, Bug, Steel",
        },
        defenceTypemap: {
            noEffect: "None",
            notVeryEffective: "Fire, Grass, Ice, Bug, Steel, Fairy",
            superEffective: "Water, Ground, Rock",
        },
        genOneAttackTypemap: {
            noEffect: "None",
            notVeryEffective: "Fire, Water, Rock, Dragon",
            superEffective: "Grass, Ice, Bug",
        },
        genOneDefenseTypemap: {
            noEffect: "Currently Unavailable", 
            notVeryEffective: "Currently Unavailable",
            superEffective: "Currently Unavailable",
        },
        genTwoFiveAttackTypemap: {
           noEffect: "Currently Unavailable",
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
       },
       genTwoFiveDefenseTypemap: {
           noEffect: "Currently Unavailable", 
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
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
        attackTypemap: {
            noEffect: "None", 
            notVeryEffective: "Water, Grass, Dragon",
            superEffective: "Fire, Ground, Rock",
        },
        defenceTypemap: {
            noEffect: "None",
            notVeryEffective: "Fire, Water, Ice, Steel",
            superEffective: "Electric Grass",
        },
        genOneAttackTypemap: {
            noEffect: "None",
            notVeryEffective: "Water, Grass, Dragon",
            superEffective: "Fire, Ground, Rock",
        },
        genOneDefenseTypemap: {
            noEffect: "Currently Unavailable", 
            notVeryEffective: "Currently Unavailable",
            superEffective: "Currently Unavailable",
        },
        genTwoFiveAttackTypemap: {
           noEffect: "Currently Unavailable",
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
       },
       genTwoFiveDefenseTypemap: {
           noEffect: "Currently Unavailable", 
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
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
        attackTypemap: {
            noEffect: "Ground",
            notVeryEffective: "Electric, Grass, Dragon",
            superEffective: "Water, Flying",
        },
        defenceTypemap: {
            noEffect: "None",
            notVeryEffective: "Electric, Flying, Steel",
            superEffective: "Ground",
        },
        genOneAttackTypemap: {
            noEffect: "Ground",
            notVeryEffective: "Electric, Grass, Dragon",
            superEffective: "Water, Flying",
        },
        genOneDefenseTypemap: {
            noEffect: "Currently Unavailable", 
            notVeryEffective: "Currently Unavailable",
            superEffective: "Currently Unavailable",
        },
        genTwoFiveAttackTypemap: {
           noEffect: "Currently Unavailable",
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
       },
       genTwoFiveDefenseTypemap: {
           noEffect: "Currently Unavailable", 
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
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
        attackTypemap: {
            noEffect: "None",
            notVeryEffective: "Fire, Grass, Poison, Flying, Bug, Dragon, Steel",
            superEffective: "Water, Ground, Rock",
        },
        defenceTypemap: {
            noEffect: "None",
            notVeryEffective: "Water, Electric, Grass, Ground",
            superEffective: "Fire, Ice, Poison, Flying, Bug",
        },
        genOneAttackTypemap: {
            noEffect: "None",
            notVeryEffective: "Fire, Grass, Poison, Flying, Bug, Dragon",
            superEffective: "Water, Ground, Rock",
        },
        genOneDefenseTypemap: {
            noEffect: "Currently Unavailable", 
            notVeryEffective: "Currently Unavailable",
            superEffective: "Currently Unavailable",
        },
        genTwoFiveAttackTypemap: {
           noEffect: "Currently Unavailable",
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
       },
       genTwoFiveDefenseTypemap: {
           noEffect: "Currently Unavailable", 
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
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
        attackTypemap: {
            noEffect: "None",
            notVeryEffective: "Fire, Water, Ice, Steel",
            superEffective: "Grass, Ground, Flying, Dragon",
        },
        defenceTypemap: {
            noEffect: "None",
            notVeryEffective: "Ice",
            superEffective: "Fire, Fighting, Rock, Steel",
        },
        genOneAttackTypemap: {
            noEffect: "None",
            notVeryEffective: "Water, Ice",
            superEffective: "Grass, Ground, Flying, Dragon",
        },
        genOneDefenseTypemap: {
            noEffect: "Currently Unavailable", 
            notVeryEffective: "Currently Unavailable",
            superEffective: "Currently Unavailable",
        },
        genTwoFiveAttackTypemap: {
           noEffect: "Currently Unavailable",
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
       },
       genTwoFiveDefenseTypemap: {
           noEffect: "Currently Unavailable", 
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
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
        attackTypemap: {
            noEffect: "Ghost",
            notVeryEffective: "Poison, Flying, Psychic, Bug, Fairy",
            superEffective: "Normal, Ice, Rock, Dark, Steel",
        },
        defenceTypemap: {
            noEffect: "None",
            notVeryEffective: "Bug, Rock, Dark",
            superEffective: "Flying, Psychic, Fairy",
        },
        genOneAttackTypemap: {
            noEffect: "Ghost",
            notVeryEffective: "Poison, Flying, Psychic, Bug",
            superEffective: "Normal, Ice, Rock",
        },
        genOneDefenseTypemap: {
            noEffect: "Currently Unavailable", 
            notVeryEffective: "Currently Unavailable",
            superEffective: "Currently Unavailable",
        },
        genTwoFiveAttackTypemap: {
           noEffect: "Currently Unavailable",
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
       },
       genTwoFiveDefenseTypemap: {
           noEffect: "Currently Unavailable", 
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
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
        attackTypemap: {
            noEffect: "Steel",
            notVeryEffective: "Poison, Ground, Rock, Ghost",
            superEffective: "Grass, Fairy",
        },
        defenceTypemap: {
            noEffect: "None",
            notVeryEffective: "Grass, Fighting, Poison, Bug, Fairy",
            superEffective: "Ground, Psychic",
        },
        genOneAttackTypemap: {
            noEffect: "None",
            notVeryEffective: "Poison, Ground, Rock, Ghost",
            superEffective: "Grass, Bug",
        },
        genOneDefenseTypemap: {
            noEffect: "Currently Unavailable", 
            notVeryEffective: "Currently Unavailable",
            superEffective: "Currently Unavailable",
        },
        genTwoFiveAttackTypemap: {
           noEffect: "Currently Unavailable",
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
       },
       genTwoFiveDefenseTypemap: {
           noEffect: "Currently Unavailable", 
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
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
        attackTypemap: {
            noEffect: "Flying",
            notVeryEffective: "Grass, Bug",
            superEffective: "Fire, Electric, Poison, Rock, Steel",
        },
        defenceTypemap: {
            noEffect: "Electric",
            notVeryEffective: "Poison, Rock",
            superEffective: "Water, Grass, Ice",
        },
        genOneAttackTypemap: {
            noEffect: "Flying",
            notVeryEffective: "Grass, Bug",
            superEffective: "Fire, Electric, Poison, Rock",
        },
        genOneDefenseTypemap: {
            noEffect: "Currently Unavailable", 
            notVeryEffective: "Currently Unavailable",
            superEffective: "Currently Unavailable",
        },
        genTwoFiveAttackTypemap: {
           noEffect: "Currently Unavailable",
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
       },
       genTwoFiveDefenseTypemap: {
           noEffect: "Currently Unavailable", 
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
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
        attackTypemap: {
            noEffect: "None",
            notVeryEffective: "Electric, Rock, Steel",
            superEffective: "Grass, Fighting, Bug",
        },
        defenceTypemap: {
            noEffect: "Ground",
            notVeryEffective: "Grass, Fighting, Bug",
            superEffective: "Electric, Ice, Rock",
        },
        genOneAttackTypemap: {
            noEffect: "None",
            notVeryEffective: "Electric, Rock",
            superEffective: "Grass, Fighting, Bug",
        },
        genOneDefenseTypemap: {
            noEffect: "Currently Unavailable", 
            notVeryEffective: "Currently Unavailable",
            superEffective: "Currently Unavailable",
        },
        genTwoFiveAttackTypemap: {
           noEffect: "Currently Unavailable",
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
       },
       genTwoFiveDefenseTypemap: {
           noEffect: "Currently Unavailable", 
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
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
        attackTypemap: {
            noEffect: "Dark",
            notVeryEffective: "Psychic, Steel",
            superEffective: "Fighting, Poison",
        },
        defenceTypemap: {
            noEffect: "None",
            notVeryEffective: "Fighting, Psychic",
            superEffective: "Bug, Ghost, Dark",
        },
        genOneAttackTypemap: {
            noEffect: "None",
            notVeryEffective: "Psychic",
            superEffective: "Fighting, Poison",
        },
        genOneDefenseTypemap: {
            noEffect: "Currently Unavailable", 
            notVeryEffective: "Currently Unavailable",
            superEffective: "Currently Unavailable",
        },
        genTwoFiveAttackTypemap: {
           noEffect: "Currently Unavailable",
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
       },
       genTwoFiveDefenseTypemap: {
           noEffect: "Currently Unavailable", 
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
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
        attackTypemap: {
            noEffect: "None",
            notVeryEffective: "Fire, Fighting, Poison, Flying, Ghost, Steel, Fairy",
            superEffective: "Grass, Psychic, Dark",
        },
        defenceTypemap: {
            noEffect: "None",
            notVeryEffective: "Grass, Fighting, Ground",
            superEffective: "Fire, Flying, Rock",
        },
        genOneAttackTypemap: {
            noEffect: "None",
            notVeryEffective: "Fire, Fighting, Flying, Ghost",
            superEffective: "Grass, Poison, Psychic",
        },
        genOneDefenseTypemap: {
            noEffect: "Currently Unavailable", 
            notVeryEffective: "Currently Unavailable",
            superEffective: "Currently Unavailable",
        },
        genTwoFiveAttackTypemap: {
           noEffect: "Currently Unavailable",
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
       },
       genTwoFiveDefenseTypemap: {
           noEffect: "Currently Unavailable", 
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
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
        attackTypemap: {
            noEffect: "None",
            notVeryEffective: "Fighting, Ground, Steel",
            superEffective: "Fire, Ice, Flying, Bug",
        },
        defenceTypemap: {
            noEffect: "None",
            notVeryEffective: "Normal, Fire, Poison, Flying",
            superEffective: "Water, Grass, Fighting, Ground, Steel",
        },
        genOneAttackTypemap: {
            noEffect: "None",
            notVeryEffective: "Fighting, Flying",
            superEffective: "Fire, Ice, Flying, Bug",
        },
        genOneDefenseTypemap: {
            noEffect: "Currently Unavailable", 
            notVeryEffective: "Currently Unavailable",
            superEffective: "Currently Unavailable",
        },
        genTwoFiveAttackTypemap: {
           noEffect: "Currently Unavailable",
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
       },
       genTwoFiveDefenseTypemap: {
           noEffect: "Currently Unavailable", 
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
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
        attackTypemap: {
            noEffect: "Normal",
            notVeryEffective: "Dark",
            superEffective: "Psychic, Ghost",
        },
        defenceTypemap: {
            noEffect: "Normal, Fighting",
            notVeryEffective: "Poison, Bug",
            superEffective: "Ghost, Dark",
        },
        genOneAttackTypemap: {
            noEffect: "Normal, Psychic",
            notVeryEffective: "None",
            superEffective: "Ghost",
        },
        genOneDefenseTypemap: {
            noEffect: "Currently Unavailable", 
            notVeryEffective: "Currently Unavailable",
            superEffective: "Currently Unavailable",
        },
        genTwoFiveAttackTypemap: {
           noEffect: "Currently Unavailable",
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
       },
       genTwoFiveDefenseTypemap: {
           noEffect: "Currently Unavailable", 
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
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
        attackTypemap: {
            noEffect: "Fairy",
            notVeryEffective: "Steel",
            superEffective: "Dragon",
        },
        defenceTypemap: {
            noEffect: "None",
            notVeryEffective: "Fire, Water, Electric, Grass",
            superEffective: "Ice, Dragon, Fairy",
        },
        genOneAttackTypemap: {
            noEffect: "None",
            notVeryEffective: "None",
            superEffective: "Dragon",
        },
        genOneDefenseTypemap: {
            noEffect: "Currently Unavailable", 
            notVeryEffective: "Currently Unavailable",
            superEffective: "Currently Unavailable",
        },
        genTwoFiveAttackTypemap: {
           noEffect: "Currently Unavailable",
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
       },
       genTwoFiveDefenseTypemap: {
           noEffect: "Currently Unavailable", 
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
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
        attackTypemap: {
            noEffect: "None",
            notVeryEffective: "Fighting, Dark, Fairy",
            superEffective: "Psychic, Ghost",
        },
        defenceTypemap: {
            noEffect: "Psychic",
            notVeryEffective: "Ghost, Dark",
            superEffective: "Fighting, Bug, Fairy",
        },
        genOneAttackTypemap: {
            noEffect: "Didn't Exist", 
            notVeryEffective: "Didn't Exist",
            superEffective: "Didn't Exist",
        },
        genOneDefenseTypemap: {
            noEffect: "Didn't Exist", 
            notVeryEffective: "Didn't Exist", 
            superEffective: "Didn't Exist", 
        },
        genTwoFiveAttackTypemap: {
           noEffect: "Currently Unavailable",
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
       },
       genTwoFiveDefenseTypemap: {
           noEffect: "Currently Unavailable", 
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
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
        attackTypemap: {
            noEffect: "None",
            notVeryEffective: "Fire, Water, Electric, Steel",
            superEffective: "Ice, Rock, Fairy",
        },
        defenceTypemap: {
            noEffect: "Poison",
            notVeryEffective: "Normal, Grass, Ice, Flying, Psychic, Bug, Rock, Dragon, Fairy",
            superEffective: "Fire, Fighting, Ground",
        },
        genOneAttackTypemap: {
            noEffect: "Didn't Exist", 
            notVeryEffective: "Didn't Exist",
            superEffective: "Didn't Exist",
        },
        genOneDefenseTypemap: {
            noEffect: "Didn't Exist", 
            notVeryEffective: "Didn't Exist", 
            superEffective: "Didn't Exist", 
        },
        genTwoFiveAttackTypemap: {
           noEffect: "Currently Unavailable",
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
       },
       genTwoFiveDefenseTypemap: {
           noEffect: "Currently Unavailable", 
           notVeryEffective: "Currently Unavailable",
           superEffective: "Currently Unavailable",
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
        attackTypemap: {
            noEffect: "None",
            notVeryEffective: "Fire, Poison, Steel",
            superEffective: "Fighting, Dragon, Dark",
        },
        defenceTypemap: {
            noEffect: "Dragon",
            notVeryEffective: "Fighting, Bug, Dark",
            superEffective: "Poison, Steel",
        },
        genOneAttackTypemap: {
            noEffect: "Didn't Exist", 
            notVeryEffective: "Didn't Exist",
            superEffective: "Didn't Exist",
        },
        genOneDefenseTypemap: {
            noEffect: "Didn't Exist", 
            notVeryEffective: "Didn't Exist", 
            superEffective: "Didn't Exist", 
        },
        genTwoFiveAttackTypemap: {
            noEffect: "Didn't Exist", 
            notVeryEffective: "Didn't Exist",
            superEffective: "Didn't Exist",
       },
       genTwoFiveDefenseTypemap: {
            noEffect: "Didn't Exist", 
            notVeryEffective: "Didn't Exist",
            superEffective: "Didn't Exist",
       }
     }
];
module.exports = types;