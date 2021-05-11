var express = require("express");
var router = express.Router();

const Favourites = require("../models/favouriteModel");

router.post('/favourites', async (req, res) => {
  const newObj = new Favourites({
    userid: req.body.userid,
    favourites: req.body.favourites
  });
  const saveRes = newObj.save();
  try {
    res.send(saveRes);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put('/favourites', async (req, res) => {
  console.log('fav$$$$%%%%%%%%', req.body[0]);
  Favourites.findOneAndUpdate({ userid : req.body[0].userid}, {favourites: req.body[0].favourites});
  try {
    res.send('Successfully Updated!');
  } catch (err) {
    res.status(500).send(err);
  }
  // .then( res =>{
  //   if(res) {
  //     res.send('Successfully Updated!');
  //   } else {
  //     res.send('Error in Updating');
  //   }
  // }, err =>{
  //   res.send(err);
  // })
})

router.get('/favourites/:id', async (req, res) => {
  // console.log('get fav$$$$$$$$$$$$$$$$$$',req.params.id);
  const result = await Favourites.find({userid: req.params.id});
  try {
    res.send(result);
  } catch (err) {
    res.status(500).send(err);
  }
//   User.find({ name: 'Punit'}, function (err, docs) {
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log("First function call : ", docs);
//     }
// });
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
