var express = require("express");
var router = express.Router();

const Favourites = require("../models/favouriteModel");

router.post('/favourites', async (req, res) => {
  const body = {
    userid: req.body.id,
    favourites: req.body.favs
  }
  const saveRes = Favourites.save(body);
  try {
    res.send(saveRes);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put('/favourites', async (req, res) => {
  Favourites.findOneAndUpdate({ userid : req.body.id}, {favourites: req.body.favs})
  .then( res =>{
    if(res) {
      res.send('Successfully Updated!');
    } else {
      res.send('Error in Updating');
    }
  }, err =>{
    res.send(err);
  })
})

router.get('/favourites', async (req, res) => {
  const result = await Favourites.find();
  try {
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
});

// router.post("/technologies", async (req, res) => {
//  // console.log('technologies hitting here....', req.body.id);
//   Favourites.find({ userid : req.body.id})
//   .then( techs =>{
//     //console.log('technologies hitting here.... result', techs);
//     //res.status(200).json(res);
//     res.send(techs);
//   }, err =>{
//     //console.log('technologies hitting here.... error', err);
//     //res.status(500).json(err);
//     res.send(err);
//   })
// });

module.exports = router;
