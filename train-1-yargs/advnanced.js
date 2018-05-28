// how to describe advanced vars

const yargs = require('yargs')

const titleOptions = {
        describe:"title of note",
        demand:true,
        alias:'t'
    };

const bodyOptions = {
        describe : "body of note",
        demand:true,
        alias : 'b'
    };

var args = yargs
.command('add', 'add new note', {
    title: titleOptions,
    body : bodyOptions,
})
.command('list', 'list of all notes')
.help()
.argv;

console.log(args._[0]);
console.log(args.title);
console.log(args.body);