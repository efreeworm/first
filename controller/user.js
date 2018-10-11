const Users = require('../models/user')
let resultJson = {
    state: 0,
    msg: ''
}
class UserController {
    async register (req, res, next) {
        console.log(req.body)
        let { account, pwd } = req.body
        // req.params.id
        // req.query.id
        try {
            // Users.register(params,function(err,doc){
            //     res.send(doc)
            // })
            let result = await Users.register({ account: account, pwd: pwd })
            resultJson.state = 1
            resultJson.msg = result
            res.send(resultJson)
        }
        catch (e) {
            resultJson.state = 0
            resultJson.msg = e
            res.send(resultJson)
        }
    };
    
    async login (req, res, next) {
        let { account, pwd } = req.body
        try {
            let result = await Users.login({ account: account, pwd: pwd })
            resultJson.state = 1
            resultJson.msg = result
            res.send(resultJson)
        }
        catch (e) {
            resultJson.state = 0
            resultJson.msg = e
            res.send(resultJson)
        }
    };
}

module.exports = UserController
