module.exports = (app) => {
    app.get('/' , (req,res)=>{
        //res.send("home")
        res.render('./views/teste.ejs')
    })
}