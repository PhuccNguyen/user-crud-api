import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email : {
        type: String, 
        required: [true, "Please enter a valid email address"]
    },

    username : {
         type: String,
         required: [true, "Please enter a valid User Name"]
        },

    birthday : {
        type: Date, 
        required: true
    },
});

const User = mongoose.model("User", UserSchema);
export default User; 