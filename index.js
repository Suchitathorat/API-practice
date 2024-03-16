import express from 'express'

const app = express();
app.use(express.json());

const   PORT = 5000;


app.get("/order/food",(req,res)=>{
    const{menu,quantity}=req.query;
   

    res.json({
        message:`you have ordered ${quantity} ${menu} `,
        
    })
       
})





app.get("/user/info",(req,res)=>{
    const{user,country}=req.headers;

    res.json({
        details:`you are ${user} from ${country}`
    })
       
})






app.get ("/food/:type" , ( req,res)=>{

    const{type}=req.params;

    if(type=="veg"){
        res.json({
        message:   "You have ordered veg food"
        })
    }
    else{
        res.json({
        message: "You have orederd non-veg food "
        })
    } 
})





app.post('/user/age' ,(req,res)=>{
    const{name ,age}=(req.body);

    res.json({
        message:`Hello ${name} you are ${age} years old`

    })

})




app.listen(PORT ,()=>{
    console.log(`Server is running on port ${PORT}`)
})