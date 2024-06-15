import mongoose from "mongoose"

export const connectToDb = async() =>{
    try{
        if(mongoose.connection.readyState ===0){
            await mongoose.connect("mongodb+srv://sbinayaraj:LnIYxUXQc6myOnh4@cluster0.b08szvg.mongodb.net/KTMRESTRO?retryWrites=true&w=majority&appName=Cluster0",{
                useNewUrlParser: true,
                       useUnifiedTopology: true
                     });
            console.log("Data Base Just Connected")
        }else{
            console.log("Data Base already Connected...")
        }
    }
    catch(error){
        console.log("Error while connecting to DB",error);
        

    }
   
}