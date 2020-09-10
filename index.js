const fastify=require('fastify')()

fastify.get('/',(req,res)=>{
    res.send({
        "Invalid":"Please add /g in the url to get desired result"
    })
})

fastify.get('/g',(req,res)=>{
    res.redirect('https://www.google.com/')
})

fastify.listen(3000, function (err, address) {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening on ${address}`)
})