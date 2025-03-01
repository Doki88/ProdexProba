import express from 'express';
import User from '../models/User.js';
import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import { admin, protectRoute } from '../middleware/authMiddleware.js';

const userRoutes = express.Router();

//TODO: redefine expiresIn
const genToken = (id) => {
	return jwt.sign({ id }, process.env.TOKEN_SECRET, { expiresIn: '60d' });
};

// login
const loginUser = asyncHandler(async (req, res) => {
    
    const username = req.body.credentials.username;
    const password = req.body.credentials.password;

    // console.log('username: ' + username)
    // console.log('password: ' + password)


	const user = await User.findOne({ username });
   
	if (user && (await user.matchPasswords(password))) {
		user.firstLogin = false;
		await user.save();
		res.json({
		    _id: user._id,
			username: user.username,
			isAdmin: user.isAdmin,
			token: genToken(user._id),
		});
	} else {
		res.status(401).send('Invalid Email or Password.');
		throw new Error('User not found.');
	}
});


userRoutes.route('/login').post(loginUser);
  
export default userRoutes;