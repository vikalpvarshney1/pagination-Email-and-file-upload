//file upload

// const mongoose = require("mongoose")
// const userSchema = new mongoose.Schema({
//     id: { type: Number, required: true },
//     first_name: { type: String, required: true },
//     last_name: { type: String, required: true },
//     age: { type: Number, required: true },
//     email: { type: String, required: true },
//     gender: { type: String, required: false, default: "Male" },
//     avatar: [{ type: String, required: true }]
// }, {
//     versionKey: false,
//     timestamps: true
// })

// const User = mongoose.model("user", userSchema);
// module.exports = User;






// pagination

const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: false, default: "Male" }
}, {
    versionKey: false,
    timestamps: true
})

const User = mongoose.model("user", userSchema);
module.exports = User;