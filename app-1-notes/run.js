const yargs = require('yargs')

const notes = require('./notes')

var argv = yargs.argv

var command = argv._[0]

switch(command){
    case ('add') : {
        notes.add(argv.title, argv.body)
        break
    }
    case ('edit') : { 
        notes.edit(argv.title, argv.body)
        break
    }
    case ('list') : {
        notes.list()
        break
    }
    case ('remove') : {
        notes.remove(argv.title) 
        break
    }
    default : {
        console.log('note command not found')
        break
    }
}