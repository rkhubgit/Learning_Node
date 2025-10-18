const User = require('../Models/userModel')





const Signup = (req, res) => {
    const {name, email, password, role, mobile, Score, batch, gender} = req.body

    // const newUser = new User({name, email, password, role, mobile, Score, batch, gender})
    // newUser.save()
    // for creating the multiple element
    // User.insertMany(req.body)
    // User.Create(req.body)
    User.insertMany(req.body)
    .then((user) => {
        console.log(user);
        res.send('user signup successfully')
    })
    .catch((err) => {
        console.error(`error is occurred : ${err.code} and error message is ${err.message}`)
    })   
}

const Login = (req, res) => {

}

const Profile = (req, res) => {

}

const GetUserList = (req, res) => {
    
    // for find the all users
    User.find()
    .then((user) => {
        // console.log(user)
     res.send(user);
    })
    .catch((err) => {
        console.log(`Error is occurred: ${err.message}`)
    })

    // for find the only one user 
    // User.findOne()
    // .then((user) => {
    //     res.send(user);
    // })
    // .catch((err) => {
    //     console.log(`Error is occurred: ${err.message}`)
    // })

    // user findById 
    // User.findById('68f209a4c8265df499fe95ce')
    // .then((user) => {
    //     res.send(user);
    // })
    // .catch((err) => {
    //     console.log(`Error is occurred: ${err.message}`)
    // })

    // filter the data used by reactjs and shown only it's email and name 
    // User.find({role: 'Reactjs Developer'}).select(['email', 'name'])
    //filter the data used by reactjs and remove only it's email and name 
    // User.find({role: 'Reactjs Developer'}).select({email: 0, name: 0})
    // .then((user) => {
    //     res.send(user)
    // })
    // .catch((err) => {
    //     console.log(`Error is occurred: ${err.message}`)
    // })

    // if the anyone is true than show filter data
    // User.find({$or: [{score: 40}, {batch: "macos"}]})
    // .select({username: 1, score: 1, batch: 1})
    // .then((count) => {
    //     res.send(count)
    // })
    // .catch((err) => {
    //     res.send('error occurred !')
    // })
}

// for updating the user
const UpdateUser = (req, res) => {
    // User.findByIdAndUpdate(req.params.id, req.body) 
    // for return the what is the user is updated
    // it will return the updated/user data
    User.findByIdAndUpdate(req.params.id,   {$set: req.body}, {new: true}) 
    .then((user) => {
        console.log(user) 
        // res.send(user)
        res.send('user updated successfully')
    })
    .catch((err) => {
        console.log(`Error is occurred: ${err.message}`)
    })

    // for updating the one value using the email
    // User.findOneAndUpdate({email: req.params.email}, req.body ,{new: true}) 
    // .then((user) => {
    //     res.send(user)
    //     // res.send('user updated successfully')
    // })
    // .catch((err) => {
    //     console.log(`Error is occurred: ${err.message}`)
    // })

    // for updating the many values 
    // User.updateMany({batch: 'linux'}, req.body)
    // .then((user) => {
    //     console.log(user);
    //     // res.send('user updated successfully')
    //     res.send(user)
    // })
    // .catch((err) => {
    //     console.log(err)
    // })
}

const deleteUser = (req, res) => {
    // for delete one user and return the acknowledge
    // User.deleteOne()
    // .then((user) => {
    //     console.log(user);
    //     res.send(user)
    // }).catch((err) => {
    //     console.log(err)
    // })
//  return the deleted user
//     User.findByIdAndDelete(req.params.id).then((user) => {
//     console.log(user);
//     // res.send("deleted user");
//     res.send(user)
//   });

}


// const deleteUserV2 = (req, res) => {
//     console.log('delte many');
//     User.deleteMany({email: "use9r@mail11"})
//     .then((data) => {
//         console.log(data);
//         res.send('deleted')
//     })
// };

const pagiNated = (req, res) => {
    const {page, limit} = req.query
    if(page && limit){
        console.log('dataaaa' ,User)
        User.find().skip(parseInt((page-1) * limit)).limit(parseInt(limit))
        .then((user) => {
        console.log(user)
        res.send(user)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).send(err)
    })
    }else{
        res.send([])
    }
   
}

// const pagiNated = (req, res) => {
//     User.paginate({}, {page: 2, limit: 3})
//     .then((response) => {
//         console.log(response);
//         res.send('pagination')
//     })
// }


 
module.exports = {Login, Signup, Profile, GetUserList, UpdateUser, deleteUser,pagiNated}