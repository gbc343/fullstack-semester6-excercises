const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter first name'],
    trim: true,
    lowercase: true
  },
  username:{
    minlength:4,
  },
  
  email: {
    type: String,
    required: true,
    //index: true, //Optional if unique is defined
    unique: [true, "Duplicate Email Not allowed"],
    trim: true,
    uppercase: true,
    //minlength:10,
    //maxlength: 50,
    //Custom validation
    validate: function(value) {
      var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      return emailRegex.test(value);
    }
  },
 

  address:{
    street:{
        required:true,
    },
    suite:{
        required:true
    },
  city:{
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  zipcode:{
      required:true,
      validate: function(value) {
        var emailRegex = /^([0-9]{5})(?:[-\s]*([0-9]{4}))?$/;
        return emailRegex.test(value);
      }
  },
  geo:{
      lat,
      lng
  }

},
  phone:{
      type: String,
      required: true,
      validate: function(value) {
        var emailRegex = /^\+?\d+[\d\s]+$/;
        return emailRegex.test(value);
      }
  },
  website:{
      
      required:true
  },

  company:{
      name:{
          required
      },
      catchPrase:{
          type:String
      },
      bs:{
          type:String
      }
  }

});

//Declare Virtual Fields
EmployeeSchema.virtual('fullname')
              .get(function(){
                return `${this.firstname} ${this.lastname}`
              })
              .set(function(value){
                //Set values as needed
              })

//Custome Schema Methods
//1. Instance Method Declaration
EmployeeSchema.methods.getFullName = function(){
  console.log(`Full Name : ${this.firstname} ${this.lastname}`)
  return `${this.firstname} ${this.lastname}`
}

//2. Static method declararion
EmployeeSchema.statics.getEmployeeByFirstName = function(value){
  return this.find({firstname : value})
}


/*
EmployeeSchema.pre('save', true, (next) => {
  console.log("Before Save")
  //next();
});
*/

EmployeeSchema.post('init', (doc) => {
  console.log('%s has been initialized from the db', doc._id);
});

EmployeeSchema.post('validate', (doc) => {
  console.log('%s has been validated (but not saved yet)', doc._id);
});

EmployeeSchema.post('save', (doc) => {
  console.log('%s has been saved', doc._id);
});

EmployeeSchema.post('remove', (doc) => {
  console.log('%s has been removed', doc._id);
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;