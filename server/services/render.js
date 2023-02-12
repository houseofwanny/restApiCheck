
const axios = require('axios');

exports.homeRoutes = (req, res)=>{
    //make a get request to /api/test
    axios.get('http://localhost:3001/api/test')
    .then(function(response){
        res.render('index',{test : response.data});
    })
    .catch(err=>{
        res.send(err);
    })

}


exports.add_user = (req, res)=>{
    res.render('add_user');
}


exports.update_user = (req, res)=>{
    axios.get('http://localhost:3001/api/test',{params:{ id: req.query.id}})
        .then(function(userdata){
            res.render("update_user",{user : userdata.data}) 
    })
    .catch(err =>{
        res.send(err);
    })
}
