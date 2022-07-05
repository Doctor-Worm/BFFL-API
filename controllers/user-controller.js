const { User } = require('../models');

// /api/users


// post new user
// put to update a user by its _id
// delete to remove user by its _id

// /api/users/:userId/friends/:friendId
// post to add new friend to a user's friend list
// delete to remove a friend from a user's friend list

const userController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
            .then(dbUserData => res.json(dbUserData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

    // get single user by its _id and populated thought and friend data
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
            .then(dbUserData => {
                if (!dbUserData) {
                    res.status(404).json({ message: 'No user found with this id!' });
                    return;
                }
                res.json(dbUserData);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },

};


module.exports = userController;