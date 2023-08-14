module.exports = (mongoose) =>{
    (async () =>{
        try{
          await  mongoose.connect(`mongodb://127.0.0.1:27017/local`)
                console.log(`Que je suis top en terme de base de donées `)
        } catch (error){
            console.log(`C'est foutu, ${error}`)
        }
    })()
}