somePromise = new Promise( (resolve, reject)=>{
    reject("reject is fired first.")
    resolve ( 'resolved')

    reject ('rejected')
} )


somePromise.then((message) => {
    console.log(message)
}, (errorMessage) => {
    console.log(errorMessage)
})
