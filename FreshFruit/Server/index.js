const cors = require("cors");
const express = require("express");
const path = require("path")
const app = express();
const PORT = 9000;

app.use(express.json())
app.use(express.urlencoded({extended : true}));

app.use(cors({
    origin: "*",
    credentials: true,
    methods: ["GET","POST","PUT", "DELETE", "PATCH"],  
}));
app.use("/Images",express.static(path.join(__dirname,"../public/Images")));


app.get("/",(req,res)=>{
    const Data = [
        {
            name:"Mango",
            price:99,
            image:"/Images/Mango.png",
            type:"fruit"
        },
        {
            name:"Apple",
            price:79,
            image:"/Images/Apple.png",
            type:"fruit"
        },
        {
            name:"Tomato",
            price:49,
            image:"/Images/tomato.png",
            type:"vegetables"
        },
        {
            name:"Chicken",
            price:299,
            image:"/Images/Chicken.png",
            type:"Meats"
        }
    ];
    return res.json({Data:Data});
});

app.listen(PORT,()=>{
    console.log("Server has been started");
})