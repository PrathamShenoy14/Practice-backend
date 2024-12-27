import connectDB from "./db";

connectDB()
.then(()=>{
    
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port: ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.error("Connection Failed !!! ", err);
})