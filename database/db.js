import mongoose from "mongoose";


const Connection = async(URL) => {
    try {
        await mongoose.connect(URL,{useNewUrlParser : true,useUnifiedTopology: true});
        console.log("database connect");
    }
    catch (error) {
        console.log("Error in connect MDB");
        console.log(error);
    }
}

export default Connection;