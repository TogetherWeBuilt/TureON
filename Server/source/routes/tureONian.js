let express = require('express');
const {register,login} = require('../controller/tureONianController')
const router = express.Router();


router.route('/tureONian/register').post(register);

router.route('/tureONian/login').post(login);

//async (req,res,next) => {
//     try{
//     user = await tureONian.find({username:req.body.username}).exec();

//     if(user.length<1){
//         return res.status(401).json({
//             message:"Authentication failed (no such username)......"
//         });
//     }
//     bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
//         if(err){
//             return result.status(401).json({
//                 message:"Authentication failed (password not match error)......"
//             });
//         }
//         if(result){
            
//             const token = jwt.sign(
//             {
//                 username:user[0].email,
//                 userId:user[0]._id
//             },
//             process.env.KEY,
//             {
//                 expiresIn:"2h"
//             })
//             return res.status(200).json({
//                 message:"Authentication successful you are logged in......",
//                 token:token
//             }); 

//         }
//         res.status(401).json({
//             message:'Authentication failed (password not match)......'
//         });

//     });
// }
// catch(err){
//         console.log(err);
//         res.status(500).json({
//             error:err
//         });
//     } 
// });

module.exports = router;


















   
