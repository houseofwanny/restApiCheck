var userdbs = require('../model/model');

//create and save new user
exports.create=(req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }

    //new user
    const user = new userdbs({
        name: req.body.name,
        age: req.body.age,
        favouriteFoods: req.body.favouriteFoods
    })

    //save user to database
    user
        .save(user)
        .then(data=>{
           // res.send(data)
           res.redirect('/add-user')
        })

        .catch(err=>{
            res.status(500).send({
                message : err.message || "Some error occured while creating the operation"
            });
        });
}

//retrieve and return all users or a single user
exports.find=(req,res)=>{
    
    if(req.query.id){
        const id = req.query.id;

        userdbs.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message:"not found user with id"+id})
            }else{
                res.send(data)
            }
        })
        .catch(err=>{
            res.status(500).send({message:"Error retrieving user with id"+id})
        })
    }else{
        userdbs.find()
        .then(user =>{
            res.send(user)
        })
        .catch(err=>{
            res.status(500).send({message : err.message || "Error occured while retrieving informations"})
        })
    }
}



//Update by userID
exports.update=(req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message: "Data to update can not be empty"})
    }
    const id = req.params.id;
    userdbs.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
     .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot Update user with ${id} Maybe user not found`})
        }else{
            res.send(data)
        }
     })
     .catch(err=>{
        res.status(500).send({message:"Error Update user informations"})
     })
}

//delete a user with ID
exports.delete=(req,res)=>{
    const id = req.params.id;

    userdbs.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`Cannot delete with id ${id}, it may be wrong`})
        }else{
            res.send({
                message:"User was deleted..."
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:"could not be deleted with id"+id
        });
    });
}