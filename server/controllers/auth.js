const bcrypt = require('bcryptjs');
const users = []


module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        //if (users[i].username === username && users[i].password === password) {
        let existing = bcrypt.compareSync(password, users[i].pinHash) 

        if (existing){
          users[i].username.push(username)
          res.status(200).send(users[i])
          return
        } else {
          res.status(400).send("User not found.")
        }
        
    let salt = bcrypt.genSaltsSync(5)
    let pinHash = bcrypt.hashSync(password, salt)

      }
     
    },
      register: (req, res) => {
        pinHash, 
        console.log('Registering User')
        console.log(req.body)
        users.push(req.body)
        res.status(200).send(req.body)
    }
}