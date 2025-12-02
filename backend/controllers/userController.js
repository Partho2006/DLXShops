import validator from 'validator';
import bcrypt from 'bcrypt';
import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({
                success: false,
                message: "User does not exist."
            })
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = createToken(user._id);
            return res.json({
                success: true,
                token
            });
        } else {
            return res.json({
                success: false,
                message: "Invalid credentials."
            })
        }
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            message: error.message
        })
    }
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const exits = await userModel.findOne({ email });

        if (exits) {
            return res.json({
                success: false,
                message: "User with this email already exists."
            })
        }
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Please enter a valid email."
            })
        }
        if (password.length < 6) {
            return res.json({
                success: false,
                message: "Please enter a strong password of minimum 6 characters."
            })
        }
        const salt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name, email, password: hashedPassword
        });
        const user = await newUser.save();

        const token = createToken(user._id);
        return res.json({
            success: true,
            token
        });

    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            message: error.message
        })
    }
}

const adminLogin = async (req, res) => {
}

export { loginUser, registerUser, adminLogin }