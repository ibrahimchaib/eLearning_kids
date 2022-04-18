const { Child, User } = require("../models");

//get request by Id
exports.show = async(req, res)=>{
    await Child.findByPk(req.params.id)
    .then((result) => {
      res.status(200).json({
        data: result,
      });
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
        message: "Not Found",
      });
    });
}
//request ALL Data
exports.index = async(req, res)=>{
    await Child.findAll()
    .then((result) => {
      if (result != "") {
        res.status(200).json({
          data: result,
          msg: "sucess",
        });
      } else {
        res.status(500).json({
          data: error,
          msg: "Something went Wrong",
        });
      }
    })
    .catch(() => {
      res.status(404).json({
        msg: "Data base Empty",
      });
    });
}
//create Childs
exports.create = async(req, res)=>{
    await Child.create(req.body).then((result) => {
        const Child_result = result;
        const { username, email, password, profileId, profileType } = {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profileId: result.id,
          profileType: "Child",
        };
        User.create({ username, email, password, profileId, profileType }).then(
          (User_result) => {
            res.status(201).json({
              User_result, 
              Child_result
            });
          }
        );
      }).catch(()=>{
        res.status(404).json('something went wrong')
      })
}
exports.update = async(req, res)=>{
    await Child.findByPk(req.params.id)
    .then((data) => {
      if (data.id) {
        Child.update(req.body, { where: { id: data.id } }).then(() => {
          res.status(200).json({
            msg: "Updates Sucess",
            data
          });
        });
      }
    })
    .catch(() => {
      res.status(404).json({
        message: "Not Found",
      });
    });
}
//delete by ID
exports.destroy = async (req, res) => {
  await Child.findByPk(req.params.id)
    .then((data) => {
        User.destroy({where : {profileId: data.id}})
        Child.destroy({ where: { id: data.id } })
        .then(() => {
          res.status(200).json({
            msg: "Record Deleted",
            status : 'sucess'
          });
        });
    })
    .catch(() => {
      res.status(404).json({
        message: "Not Found",
        status: '404'
      });
    });
};