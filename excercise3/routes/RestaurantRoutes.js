const express = require('express');
const restaurantModel = require('../models/Restaurant.js');
const app = express();

//Read ALL
//http://localhost:8081/employees
app.get('/restaurants', async (req, res) => {
 
  const restaurant = await restaurantModel.find({})
              .select("address city cuisine name restaurant_id")
              //.sort({'salary' : 'desc'});  
  
  try {
    res.status(200).send(restaurant);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Read By ID
//http://localhost:8081/employee?id=60174acfcde1ab2e78a3a9b0
app.get('/restaurant/cuisine/:name', async (req, res) => {
  //const employees = await employeeModel.find({_id: req.query.id});
  //const employees = await employeeModel.findById(req.query.id);
    const name = req.params.name
    const restaurant = await restaurantModel.find({cuisine : name}).select("address city cuisine name restaurant_id");

  try {
    res.send(restaurant);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Search By First Name - PATH Parameter
//http://localhost:8081/employees/firstname/pritesh
app.get('/restaurant/', async (req, res) => {
  const sortBy = req.params.sortBy
  const restaurant = await restaurantModel.find({}).select("address city cuisine name restaurant_id").sort({'restaurant_id': sortBy});
 
  
});

app.get('/restaurant/Delicatessen', async (req, res) => {
    const restaurant = await restaurantModel.find({}).select("address city cuisine name restaurant_id")
    .where('cuisine').in(['Delicatessen'])
    .where('city').not(['Brooklyn'])
    .exec((err, data) => {
      if (err){
          res.send(JSON.stringify({status:false, message: "No data found"}));
      }else{
          res.send(data);
      }
    });
} )










 
module.exports = app