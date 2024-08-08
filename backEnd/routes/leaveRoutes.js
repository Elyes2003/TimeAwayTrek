const express = require('express')
const Leave = require('../models/leave');
const { createLeave, getLeaves, getleave, deleteLeave, updateLeave ,getLeavesAdmin} = require('../controllers/leaveController')
const requireAuth = require('../middleware/auth')

const router = express.Router();

router.use(requireAuth)
router.get('/admin',getLeavesAdmin)


//GET all leaves
router.get('/',getLeaves)

//GET a single leave
router.get('/:id',getleave)

//POST a new leave
router.post('/',createLeave)

//DELETE a leave
router.delete('/:id',deleteLeave)

//UPDATE a leave
router.patch('/:id',updateLeave)

module.exports = router;
