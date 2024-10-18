const express=require("express")


const app= express();

app.use(function(req,res,next){


    if(new Date().getHours()>11 || new Date().getHours<9){
        res.render("closed.ejs")
        return 
    }
    next()
})
 
  
app.get("/",(req,res)=>{
    res.render("index.ejs")
})


app.get("/contact",(req,res)=>{
    res.render("contact.ejs")
})


app.get("/about",(req,res)=>{
    res.render("about.ejs")
})

 
app.listen(8000,()=>{
    console.log("server running on port 8000 ")
})

