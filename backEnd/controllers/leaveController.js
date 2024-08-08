const Leave = require('../models/leave');
const mongoose = require('mongoose');
const User = require('../models/user'); 

//get all leaves
const getLeavesAdmin = async (req, res) => {
    try {
        const leaves = await Leave.find({}).sort({ createdAt: -1 });
        res.status(200).json(leaves);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const getLeaves = async (req, res) => {
    try {
        const user_id = req.user._id

        const leaves = await Leave.find({ user_id }).sort({ createdAt: -1 });
        res.status(200).json(leaves);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//get a single leave
const getleave = async (req, res) => {
    try {
        const { id } = req.params  //params are in the url like http://localhost:3000/api/leaves/'params'
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({ error: 'no such leave' });
        }

        const leave = await Leave.findById(id);
        if(!leave){
            return res.status(400).json({ error: 'no such leave' });
        }
        res.status(200).json(leave);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
function calculateDaysDifference(start, finish) {
    const startDate = new Date(start);
    const finishDate = new Date(finish);
    
    // Calculate the difference in milliseconds
    const diffInMs = finishDate - startDate;
    
    // Convert milliseconds to days
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    
    // Return the difference in days (inclusive)
    return Math.ceil(diffInDays) + 1; // +1 to include both start and finish dates
}

//create new leave
const createLeave = async (req, res) => {
    
    try {
        const {
            typeLeave,
            startDate,
            finishDate,
            justification,
            justificationFile } = req.body

        const user_id = req.user._id
        const findUser = await User.findOne({_id: user_id});

        const leave = await Leave.create({
            typeLeave: typeLeave,
            startDate: startDate,
            finishDate: finishDate,
            days: calculateDaysDifference(startDate, finishDate),
            justification: justification,
            justificationFile: justificationFile,
            statut: 'pending',
            user_id: user_id,
            firstName: findUser.firstName,
            lastName: findUser.lastName,
            email: findUser.email
        });
        res.status(201).json(leave)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

//delete leave
const deleteLeave = async (req, res) => {
    try {
        const { id } = req.params 
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({ error: 'no such leave' });
        }
        const leave = await Leave.findOneAndDelete({_id: id});
        if(!leave){
            return res.status(400).json({ error: 'no such leave' });
        }
        res.status(200).json(leave)

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
//update leave
const updateLeave = async (req, res) => {
    try {
        const { id } = req.params 

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({ error: 'no such leave' });
        }

        const leave = await Leave.findByIdAndUpdate({_id: id}, {...req.body} )
        if(!leave){
            return res.status(400).json({ error: 'no such leave' });
        }
        res.status(200).json(leave)

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    createLeave,
    getLeavesAdmin,
    getLeaves,
    getleave,
    deleteLeave,
    updateLeave
}