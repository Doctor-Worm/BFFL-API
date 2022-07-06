const router = require('express').Router();
const { getAllThoughts, getThoughtById, createThought, updateThought, deleteThought } = require('../controllers/thought-controller');
const { addReaction, deleteReaction } = require('../controllers/reaction-controller');

router.route('/')
    .get(getAllThoughts);

router.route('/:thoughtId')
    .get(getThoughtById)
    
router.route('/:userId')
    .post(createThought);

router.route('/:userId/:thoughtId')
    .put(updateThought)
    .delete(deleteThought);
    
router.route('/:thoughtId/reactions')
    .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;