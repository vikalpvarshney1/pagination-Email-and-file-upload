
//pagination

// const mongoose = require("mongoose")
// const connect = async()=>{
//     return mongoose.connect("mongodb://127.0.0.1:27017/user");
// }
// module.exports= connect;




//fileupload

const mongoose = require("mongoose")
const connect = async () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/test");
}
module.exports = connect;