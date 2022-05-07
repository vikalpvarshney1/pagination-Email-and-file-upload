const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a7b9a40be3bd87",
        pass: "cbcf4e6ad3fd64"
        //
    }
});

module.exports=transport;