const { Chiled } = require("../models");

//get request by Id
exports.show = async(req, res)=>{
    await Chiled.findByPk(req.params.id)
    .then((result) => {
      res.status(200).json({
        data: result,
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
        message: "Not Found",
      });
    });
}
//request ALL Data
exports.index = async(req, res)=>{
    await Chiled.findAll()
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
//create Chileds
exports.create = async(req, res)=>{
    await Chiled.create(req.body).then((result) => {
        res.status(201).json(result);
        const { username, email, password, profileId, profileType } = {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profileId: result.id,
          profileType: "Chiled",
        };
        User.create({ username, email, password, profileId, profileType }).then(
          (result) => {
            res.status(201).json();
          }
        );
      });
}
exports.update = async(req, res)=>{
    await Chiled.findByPk(req.params.id)
    .then((data) => {
      if (data.id) {
        Chiled.update(req.body, { where: { id: data.id } }).then(() => {
          res.status(200).json({
            msg: "Updates Sucess",
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
  await Chiled.findByPk(req.params.id)
    .then((data) => {
      if (data.id) {
        Team.destroy({ where: { id: req.params.id } }).then(() => {
          res.status(200).json({
            msg: "Record Deleted",
            status : 'sucess'
          });
        });
      }
    })
    .catch(() => {
      res.status(404).json({
        message: "Not Found",
        status: '404'
      });
    });
};