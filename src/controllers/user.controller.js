const express = require("express");
const User = require("../models/user.model");
const { body, validationResult } = require("express-validator")

const { upload } = require("../utils");
const  transporter  = require("../configs/mail");
const router = express.Router();
// const upload = multer({ dest: `${__dirname}/../../uploads` })


router.get("/", async (req, res) => {
    const { page = 1, pageSize = 3 } = req.query;
    let offeset = (page - 1) * pageSize;

    let users = await User.find().skip(offeset).limit(pageSize)
    let totalPages = Math.ceil((await User.find().countDocuments()) / pageSize)

    res.status(200).json({ data: users, totalPages })
});

// body("first_name").isLength({ min: 3, max: 10 }).withMessage("first name required min 3 length"),
//     body("last_name").isLength({ min: 3, max: 10 }).withMessage("last name required min 3 length"),
//     body("age").isFloat({ min: 1, max: 120 }),
//     body("email").isEmail(),



router.post("/", async (req, res) => {
       
        try {
            let currentCount = await User.find().countDocuments();
            let createdUser = await User.create({
                id: currentCount + 1,
                ...req.body,
               
            });

            let info = await transporter.sendMail({
                from: 'vikalpvarshney012@gmail.com', // sender address
                to: 'vikalpvarshney012@gmail.com',
                // to: createdUser.email, // list of receivers
                subject: "Hello User register succesfully✔", // Subject line
                text: "Hello world?", // plain text body
                html: "<b>Hello world?</b>", // html body
           attachments: [
               {
                   filename: "Attachment 1",
                   path: `${__dirname}/../../package.json`
               },
              
           ],
           alternatives:[
               {
                   contentType: 'text/html',
                   path: `${__dirname}/template.html`,
               },
           ],
           
           
            });



            res.status(200).send("Registration email send");
        } catch (e) {
            console.log(e.message);
            res.status(400).send(e.message);
        }
    });

module.exports = router;














// const express = require("express");
// const User = require("../models/user.model");
// const {body , validationResult }= require("express-validator")

// const {upload}= require("../utils")
// const router = express.Router();
// // const upload = multer({ dest: `${__dirname}/../../uploads` })


// router.get("/", async (req, res) => {
//     const { page = 1, pageSize = 3 } = req.query;
//     let offeset = (page - 1) * pageSize;

//     let users = await User.find().skip(offeset).limit(pageSize)
//     let totalPages = Math.ceil((await User.find().countDocuments()) / pageSize)

//     res.status(200).json({ data: users, totalPages })
// });

// // body("first_name").isLength({ min: 3, max: 10 }).withMessage("first name required min 3 length"),
// //     body("last_name").isLength({ min: 3, max: 10 }).withMessage("last name required min 3 length"),
// //     body("age").isFloat({ min: 1, max: 120 }),
// //     body("email").isEmail(),



// router.post("/", 

// upload.array("avatar"),

// async (req, res) => {
//     const error= validationResult(req);
//     if(!error.isEmpty()){
//         return res.status(400).json({errors: error.array()})
//     }
//     try {
//         let currentCount = await User.find().countDocuments();
//         let createdUser = await User.create({
//             id: currentCount+1,
//             ...req.body,
//             avatar: req.files.map((f)=>f.path),
//         });
//         res.status(200).json(createdUser);
//     } catch (error) {
//         console.log(e.message);
//         res.status(400).send(e.message);
//     }
// });

// module.exports = router;



























// pagination


// const express = require("express");
// const User = require("../models/user.model");
// const { body, validationResult } = require("express-validator")


// const router = express.Router();
// // const upload = multer({ dest: `${__dirname}/../../uploads` })


// router.get("/", async (req, res) => {
//     const { page = 1, pageSize = 3 } = req.query;
//     let offeset = (page - 1) * pageSize;

//     let users = await User.find().skip(offeset).limit(pageSize)
//     let totalPages = Math.ceil((await User.find().countDocuments()) / pageSize)

//     res.status(200).json({ data: users, totalPages })
// });





// router.post("/",

//     body("first_name").isLength({ min: 3, max: 10 }).withMessage("first name required min 3 length"),
//     body("last_name").isLength({ min: 3, max: 10 }).withMessage("last name required min 3 length"),
//     body("age").isFloat({ min: 1, max: 120 }),
//     body("email").isEmail(),

//     async (req, res) => {
//         const error = validationResult(req);
//         if (!error.isEmpty()) {
//             return res.status(400).json({ errors: error.array() })
//         }
//         try {
//             let currentCount = await User.find().countDocuments();
//             let createdUser = await User.create({
//                 id: currentCount + 1,
//                 ...req.body,
                
//             });
//             res.status(200).json(createdUser);
//         } catch (error) {
//             console.log(e.message);
//             res.status(400).send(e.message);
//         }
//     });

// module.exports = router;