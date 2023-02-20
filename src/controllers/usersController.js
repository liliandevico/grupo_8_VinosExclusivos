const path = require('path');
const fs = require('fs');

const usersPath = path.join(__dirname, '/../data/users.json');

const usersController = {
    getUsers: ()=>{
        return JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
    },
    login: function (req, res) {
        res.render('login')
    },
    
    register: function (req, res) {
        res.render('register')
    },

    usersCreate:function (req, res) {
        res.render('../products/register')
    },

    usersStore:function (req,res) {
        let user = usersController.getUsers();
        
        let newUser = {            
            "id":req.body.id,
            "name": req.body.name,
            "lastname":req.body.lastname,
            "email":req.body.email,
            "username":req.body.username,
            "password":req.body.password,
            "confirmpassword": req.body.confirmpassword
    }

    console.log("nuevo usuario", newUser);

user.push(newUser);

    fs.writeFileSync(usersPath, JSON.stringify(user, null, ' '));

    res.redirect('register');


    },

    usersEdit:{

    },
    update:{

    },

    delete:{

    },

    destroy:{

    }


}


module.exports = usersController;