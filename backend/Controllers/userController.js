import User from "../models/UserSchema.js"
import Booking from "../models/BookingSchema.js"
import Doctors from "../models/ReviewSchema.js"

export const updateUser = async (req, res) => {
    const id = req.params.id

    try {
        const updateUser = await 
        User.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res
            .status(200)
            .json({
                success: true,
                message: 'User Successfully Updated',
                data: updateUser
            })

    } catch (err) {
        res.status(500).json({ success: false, message: 'User Update is Failed' })

    }
}

export const deleteUser = async (req, res) => {
    const id = req.params.id

    try {
        await User.findByIdAndDelete(id);

        res
            .status(200)
            .json({
                success: true,
                message: 'User Successfully Deleted!',
            })

    } catch (err) {
        res.status(500).json({ success: false, message: 'User Delete is Failed' })

    }
}

export const getSingleUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id).select("-password"); // hide the password in data base in single users
        res
            .status(200)
            .json({
                success: true,
                message: 'User Found',
                data: user,
            })

    } catch (err) {
        console.error(err);
        res.status(404).json({ success: false, message: 'User is Not found!' });

    }
}

export const getAllUser = async (req, res) => {
    try {
        const users = await User.find({}).select("-password"); // hide the password in data base in all users
        res
            .status(200)
            .json({
                success: true,
                message: 'User Found',
                data: users,
            })
    } catch (err) {
        res
        .status(404)
        .json({ 
        success: false,
        message: 'Not found!' })

    }
}


export const getUserProfile = async (req, res) => {
    const userId = req.userId

    try {
        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const { password, ...rest } = user._doc
        res
            .status(200)
            .json({
                success: true,
                message: 'Profile info is getting',
                data: { ...rest },
            });
    } catch (err) {
        res
            .status(500)
            .json({ success: false,
             message: "Something went wrong, cannot get" })
    }
};


export const getMyAppointments = async (req, res) => {

    try {

        //step -1 : retrieve appointments from booking
        const booking = await Booking.find({user:req.userId})
 
        //step -2 : extract doctor ids from appointments from booking
        const doctorIds = booking.map(el=>el.doctor.id)
        //step - 3  : retrieve doctor using doctor ids 
        const doctors = await Doctor.find({_id: {$in:doctorIds}}).select('-password')

        res.status(200).json({success:true, message:'Appointments area getting ' , data:doctors})

    } catch (err) {
        res
        .status(500)
        .json({ success: false,
         message: "Something went wrong, cannot get" })
    }
}