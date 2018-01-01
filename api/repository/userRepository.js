module.exports = {
    createUser(newUser, res) {

        newUser.save(function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    },

    listallusers(User, res) {
        User.find({}, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
    }
}