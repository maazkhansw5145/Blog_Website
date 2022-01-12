import mongoose from 'mongoose';


const ContactSchema = mongoose.Schema ({
    name : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
    },
    subject : {
        type : String,
        required : false,
    },
    message : {
        type : String,
        required : true,
    },
   
})

const postcontact = mongoose.model('contact',ContactSchema);

export default postcontact;