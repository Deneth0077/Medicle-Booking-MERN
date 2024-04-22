import jwt from 'jsonwebtoken';
import Doctor from '../models/DoctorSchema.js';
import User from '../models/UserSchema.js';

export const authenticate = async (req, res, next) => {
    const authToken = req.headers.authorization;

    if (!authToken || !authToken.startsWith("Bearer ")) {
        return res
            .status(401)
            .json({ success: false, message: "No token, authorization denied" });
    }

    try {
        const token = authToken.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.userId = decoded.id; // Assuming 'id' is the field containing the user ID
        req.user = decoded; // Set the decoded user object

        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token is Expired' });
        }

        return res.status(401).json({ success: false, message: 'Invalid Token' });
    }
};

// restrict.js
export const restrict = roles => async (req, res, next) => {
    try {
        const userId = req.userId;
        const decoded = req.user;

        if (!decoded || !decoded.role) {
            return res.status(401).json({ success: false, message: 'Invalid Token' });
        }

        let user;

        if (decoded.role === 'patient') {
            user = await User.findById(userId);
        } else if (decoded.role === 'doctor') {
            user = await Doctor.findById(userId);
        }

        if (!user || !roles.includes(user.role)) {
            return res.status(401).json({ success: false, message: 'You are not Authorized!' });
        }

        next();
    } catch (error) {
        console.error('Error in restrict middleware:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};



// export const authenticate = async (req, res, next) => {
//     // Get token from headers
//     const authToken = req.headers.authorization;

//     // Check if the token exists
//     if (!authToken || !authToken.startsWith("Bearer")) {
//         return res
//             .status(401)
//             .json({ success: false, message: "No token, authorization denied" });
//     }

//     try {
        
//         const token = authToken.split("")[1];

//         //verify Token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

//         req.userId = decoded.userId
//         req.role = decoded.role

//         next(); // be call the next function
//     } catch (error) {
  
//        if(error.name ==='TokenExpiredError'){
//         return res.status(401).json({message:'Token is Expired'})
//        }

//        return res.status(401).json({success:false, message:'Invalid Token'})
//     }
// };


// export const restrict = roles=> async(req,res, next)=>{
//     const userId = req.userId

//     let user;

//     const patient = await User.findById(userId)
//     const doctor = await Doctor.findById(userId)

//     if(patient){
//         user= patient
//     }
//     if(doctor){
//         user=doctor
//     }
//     if(!roles.includes(user.role)){
//         return res
//         .status(401)
//         .json({ success:false, message:'Your is not Authorized !'})
//     }
//     next();
// }