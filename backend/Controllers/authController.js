import User from '../models/UserSchema.js';
import Doctor from '../models/DoctorSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: '15d',
        }
    );
};

export const register = async (req, res) => {
    const { email, password, name, role, photo, gender } = req.body;

    try {
        let user = null;

        if (role === 'patient') {
            user = await User.findOne({ email });
        } else if (role === 'doctor') {
            user = await Doctor.findOne({ email });
        }

        // Check if user exists
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // Create user instance based on role
        if (role === 'patient') {
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role,
            });
        } else if (role === 'doctor') {
            user = new Doctor({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role,
            });
        }

        await user.save();

        res.status(200).json({ success: true, message: 'User successfully created' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ success: false, message: 'Internal server error. User creation unsuccessful' });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = null;

        // Find user based on role
        const patient = await User.findOne({ email });
        const doctor = await Doctor.findOne({ email });

        if (patient) {
            user = patient;
        } else if (doctor) {
            user = doctor;
        }

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare password
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).json({ status: false, message: 'Invalid password' });
        }

        // Get token
        const token = generateToken(user);

        // Destructure user properties to exclude sensitive information
        const { password: userPassword, role, appointments, ...rest } = user._doc;

        res.status(200).json({
            status: true,
            message: 'Successfully logged in',
            token,
            data: { ...rest },
            role,
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ status: false, message: 'Login failed' });
    }
};
