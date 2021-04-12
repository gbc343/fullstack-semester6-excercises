var express = require('express');
var bodyParser = require('body-parser')

var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(express.json())

/* GET users listing. */
router.get('/', function(req, res) {

 res.send('respond with a resource');
});

router.post('/users', function (req, res){
  //let firstName = req.body.firstName
 //let lastName = req.body.lastName
  console.log(res.body);
  console.log(res.body);
  res.send("reshelloponse")
})

module.exports = router;
