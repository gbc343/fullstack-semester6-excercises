const express = require('express');
const employeeModel = require('../models/Employee');
const app = express();

//Read ALL
//http://localhost:8081/employees
app.get('/users', async (req, res) => {
  //const employees = await employeeModel.find({});
  //Sorting
  //use "asc", "desc", "ascending", "descending", 1, or -1
  //const employees = await employeeModel.find({}).sort({'firstname': -1});
  
  //Select Specific Column
  const employees = await employeeModel.find({})
              .select("firstname lastname salary")
              .sort({'salary' : 'desc'});  
  
  try {
    res.status(200).send(employees);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Read By ID
//http://localhost:8081/employee?id=60174acfcde1ab2e78a3a9b0
app.get('/user', async (req, res) => {
  //const employees = await employeeModel.find({_id: req.query.id});
  //const employees = await employeeModel.findById(req.query.id);
  const employees = await employeeModel.find({_id: req.query.id}).select("firstname lastname salary");

  try {
    res.send(employees);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Search By First Name OR Last Name
//http://localhost:8081/employees/search?firstname=pritesh&lastname=patel
app.get('/user/search', async (req, res) => {
  //console.log(req.query)
  if(Object.keys(req.query).length != 2){
    res.send(JSON.stringify({status:false, message: "Insufficient query parameter"}))
  }else{
    const userName = req.query.username
    
    //{ $or: [{ name: "Rambo" }, { breed: "Pugg" }, { age: 2 }] },
    //const employees = await employeeModel.find({ $and: [{firstname : fname}, {lastname : lname}]});
    const user = await employeeModel.find({ $or: [{firstname : fname}]});
    ///Use below query for AND condition
    //const employees = await employeeModel.find({firstname : fname, lastname : lname});

    try {
      if(employees.length != 0){
        res.send(employees);
      }else{
        res.send(JSON.stringify({status:false, message: "No data found"}))
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
});





  
