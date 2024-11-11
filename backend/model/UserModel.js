const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        name: { 
            type: String, 
            required: true 
        },
        email: { 
            type: String, 
            required: [true, "Your email address is required"], 
            unique: true 
        },
        username:{
          type:String,
          required:true,
        },
        password: { 
            type: String, 
            required: true 
        },
        token: { 
            type: String 
        }
    },
    {
        timestamps: true // Adds createdAt and updatedAt fields automatically
    }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
