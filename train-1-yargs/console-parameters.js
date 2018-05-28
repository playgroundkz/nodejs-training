// console parameters
// cd .\train-1-yarn\

// node .\console-parameters.js add -t="text text" -g='some text'

console.log('\n\n');
var vars = {}
array_length = process.argv.length
for(var i = 0; i < array_length; i+= 1){
    if (i > 1){
        var vals = process.argv[i].split('=');
        vars[vals[0].replace(/^-/, '') ] = vals[1];
    } 
}
console.log(vars.g);

console.log('\n\n');

