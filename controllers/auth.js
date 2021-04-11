const User = require("../models/User");

exports.createUpdateUser = (req, res) => {
    const { email, picture, name } = req.user;

    User.findOneAndUpdate(
        { email },
        { name: email.split("@")[0], image: picture },
        { new: true })
        .then(user => {
            if (user) {
                console.log("update")
                res.status(200).json(user)
            } else {
                User.create({
                    email,
                    name: email.split("@")[0],
                    image: picture
                })
                    .then((newUser) => res.status(200).json(newUser))
                    .catch(error => res.status(500).json({ message: error.message }))
            }
        })
        .catch(error => res.status(500).json({ message: error }))
}

exports.currentUser = (req, res) => {
    User.findOne({ email: req.user.email })
        .then((user) => res.status(200).json(user))
        .catch(error => res.status(500).json({ message: error.message }))

}