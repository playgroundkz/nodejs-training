const fs = require('fs')

fetchNotes = () => {
    try {
        var notes = JSON.parse( fs.readFileSync('store.json') )
        return notes
    }catch(e){
        return []
    }
}

saveNotes = (data) => {
    try {
        fs.writeFileSync('store.json', JSON.stringify(data) )
    }catch(e){
        console.log('could not save file')
        console.log(e)
    }
}

function add(title, body){
    console.log('will add note')
    var note = {
            title : title,
            body : body,
        }
    var notes = fetchNotes()
    var dublicatedNotes = notes.filter( (note) => {return title == note.title} )
    if (dublicatedNotes.length == 0){
        notes.push(note)
        saveNotes(notes)
        return note
    }else{
        console.log('duplicated note. adding operation canceled')
    }

    // console.log('title', title)
    // console.log('body', body)
}

function list (){
    console.log('will retrieve a list of notes')
}

function edit(title, body){
    console.log('title', title)
    console.log('body', body)
    console.log('will edit note')
}

function remove(title){
    var notes = fetchNotes()
    saveNotes(notes.filter( (note) => {return title != note.title} ))
}

module.exports.add      = add
module.exports.list     = list
module.exports.edit     = edit
module.exports.remove   = remove