const types = require('./indexv4.js')

const type = "Water";

for (var i=0;i<types.length;i++) {
    if(type == types[i].name.en) {
        console.log(types[i].typemaps.generationOne.attack)
    }
}