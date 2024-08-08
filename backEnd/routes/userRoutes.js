const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user'); 
const jwt = require('jsonwebtoken');
const Auth = require('../middleware/auth')
const verifyUser = require('../middleware/verifiyUser')

router.post("/register", async (request, response) => {
    try {
        // Extract email and password from request body
        const {firstName,lastName,email, password,isAdmin} = request.body;
        // Find user by email
        const findUser = await User.findOne({ email: email });
        if (findUser) {
           return response.status(401).send({ error: "Email already in used !"});
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance with hashed password and save it
        const newUser = await User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: null,
            salary: null,
            password: hashedPassword,
            isAdmin:isAdmin,
            nb_days: 15,
        });

        // Send success response
        response.status(201).send({ msg: "Registered successfully!"});
    } catch (err) {
        response.status(500).send({ error: err.message });
    }
});



 
router.post('/login',verifyUser, async (request,response) => {
    try{
        const { email, password } = request.body;
        const findUser = await User.findOne({email: email});

        if(!findUser){
                 return response.status(401).send({error: "Wrong email or password!"});
        }
        const passwordMatch = await bcrypt.compare(password, findUser.password);
        if(passwordMatch){
            const token = findUser.generateAuthToken();
            router.token = token; 
            response.status(200).send({token:token, user: findUser, message: "Logged in successfully!"});
        } else {
            response.status(400).send({error: "Wrong email or password!"});
        }
    } catch (err){
        response.status(500).send({ error: err.message });
    }
})


//get user
router.get('/user/:email', async (request,response) => {
    const { email } = request.params;
    try{
        if(!email) return response.status(501).send({error: "invalid email"});

        const findUser = await User.findOne({email: email});
        if(!findUser){
            return response.status(501).send({error: "couldn't find the user"});
        }
        const {password, ...rest} = Object.assign({},findUser.toJSON());
        return response.status(201).send(rest);
        
    } catch (error){
        return response.status(404).send({error: "cannot find user data"});
    }

})

router.get('/getAllUsers', async (request,response) => {
    try{

        const findUsers = await User.find({isAdmin: false}).sort({ createdAt: -1 });
        return response.status(201).send(findUsers);
        
    } catch (error){
        return response.status(404).send({error: "cannot find users data"});
    }

})

//update user
router.put('/updateUser', Auth, async (req, res) => {
    try {
        const userId  = req.user._id;
        const updateData = req.body;

        if (!userId) {
            return res.status(400).send({ error: "User ID is required!" });
        }

        const result = await User.updateOne({ _id: userId }, updateData);

        if (result.nModified === 0) {
            return res.status(404).send({ error: "User not found or no changes made!" });
        }

        return res.status(200).send({ msg: "User updated successfully!" });
    } catch (error) {
        return res.status(500).send({ error: "An error occurred while updating the user." });
    }
});

router.put('/updateUserSolde', Auth, async (req, res) => {
    try {
        const { nb_days, userId } = req.body; // Assuming nb_days and userId are sent in the request body

        if (!userId) {
            return res.status(400).send({ error: "User ID is required!" });
        }

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).send({ error: "User not found!" });
        }

        // Calculate new nb_days value by decrementing the current nb_days
        const updatedNbDays = user.nb_days - nb_days;
        if(updatedNbDays < 0){
            return res.status(400).send({ error: "solde user is out!" });
        }

        // Update the user's nb_days in the database
        const result = await User.updateOne({ _id: userId }, { nb_days: updatedNbDays });

        if (result.nModified === 0) {
            return res.status(404).send({ error: "No changes made to nb_days!" });
        }

        return res.status(200).send({ msg: "User's nb_days updated successfully!" });
    } catch (error) {
        console.error("Error updating nb_days:", error);
        return res.status(500).send({ error: "An error occurred while updating nb_days." });
    }
});


module.exports = router;



