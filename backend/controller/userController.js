const models = require('../models');
const userModel = models.User;

//all user list
exports.index = (req,res) => {
    console.log('user list');
    userModel.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error =>{
        res.status(500).json({ message: "Something went wrong!" });
    });
};

//create user
exports.create = (req, res) => {
    console.log('add user');
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }
    console.log('====user=====',user);
    userModel.create(user).then(result => {
        res.status(200).json({
            message: "user created successfully",
            user: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error:error
        })
    })
}

//update user
exports.update = (req, res) =>{
    console.log('update user');
    const id = req.params.id;
    const updatedUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    }
    userModel.update(updatedUser, {where: {id:id}}).then(result => {
        res.status(200).json({
            message: "user updated successfully",
            result: result,
            user: updatedUser
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error:error
        })
    })
}

//delete user
exports.destroy = (req, res) =>{
    console.log('delete user');
    const id = req.params.id;
    userModel.destroy({where: { id: id }}).then(result => {
        res.status(200).json({
            message: "user deleted successfully",
            result: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error:error
        })
    })
}