const express          = require('express');
const router           = express.Router();
const AppointmentModel = require('../model/appointment.model');


router.post('/', (req,res) => {
   if(!req.body){
     res.status(404).send('Request body is missing')
   }

   let model = new AppointmentModel(req.body);
   model.save()
        .then(doc => {
          if(!doc || doc.length ===0){
            return res.status(500).send(doc)
          }
          res.status(201).send(doc)
        })
        .catch(err => {
          res.status(500).json(err)
        })

});

router.get('/', (req,res) => {
  if(!req.body){
    res.status(500).send('Request body is missing');
  }
  AppointmentModel.find({}, (err, appointments) => {
    if(err) return next(err);
    res.json(appointments)
  })
});

router.delete('/', (req,res) => {
console.log('inside delete')
  if(!req.body){
    res.status(500).send('Request body is missing');
  }

  AppointmentModel.findOneAndRemove({
    _id:req.body._id
  })
  .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
});

router.delete('/remove-all', (req,res) => {
  if(!req.body){
    res.status(500).send('Request body is missing');
  }
  AppointmentModel.remove({})
                  .then(doc => res.json(doc))
                  .catch(err => res.status(500).json(err))
});




module.exports = router;
