import BookingSchema from "../models/BookingSchema.js"
import Doctor from "../models/DoctorSchema.js"

export const updateDoctor = async (req, res) => {
    const id = req.params.id

    try {
        const updateDoctor = await 
        Doctor.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res
            .status(200)
            .json({
                success: true,
                message: 'Doctor Successfully Updated',
                data: updateDoctor
            })

    } catch (err) {
        res.status(500).json({ success: false, message: 'Doctor Update is Failed' })

    }
}

export const deleteDoctor = async (req, res) => {
    const id = req.params.id

    try {
        await Doctor.findByIdAndDelete(id);

        res
            .status(200)
            .json({
                success: true,
                message: 'Doctor Successfully Deleted!',
            })

    } catch (err) {
        res.status(500).json({ success: false, message: 'Doctor Delete is Failed' })

    }
}

export const getSingleDoctor = async (req, res) => {
    const id = req.params.id

    try {
        const doctor = await Doctor.findById(id)
        .populate("reviews")
        .select("-password"); // hide the password in data base in single Doctors
        res
            .status(200)
            .json({
                success: true,
                message: 'Doctor Found',
                data: doctor
            })

 } catch (err) {
    console.error(err);
    res.status(404).json({ success: false, message: 'Doctor is Not found!' });
}

}

export const getAllDoctor = async (req, res) => {
    try {

        const {query} = req.query
        let doctors;

        if(query){
            doctors = await Doctor.find({
                isApproved:'approved',
                $or: [
                    {name:{$regex:query, $options:'i'}},
                    { specialization: {$regex: query, $options:'i'}}
                ],
            }).select("-password");
        } else{

            doctors = await Doctor.find({ isApproved:'approved'}).select(
                "-password"
            ); // hide the password in data base in all Doctors
        }
        res
            .status(200)
            .json({
                success: true,
                message: 'Doctor Found',
                data: doctors
            })

    } catch (err) {
        res.status(404).json({ success: false, message: 'Not found!' })

    }
}


export const getDoctorProfile = async(req, res)=>{
    const doctorId = req.userId

    try {
        const doctor = await Doctor.findById(doctorId)
        if (!doctor) {
            return res.status(404).json({ success: false, message: "Doctor not found" });
        }

        const { password, ...rest } = doctor._doc
        const appointments = await Booking.find({doctor:doctorId})
        res
            .status(200)
            .json({
                success: true,
                message: 'Profile info is getting',
                data: { ...rest, appointments },
            });
    } catch (err) {
        res
            .status(500)
            .json({ success: false,
             message: "Something went wrong, cannot get" })
    }
}