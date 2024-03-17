const { SECRET } = require("../config/config")
const jwt = require("../lib/jwt")

exports.auth = async (req, res, next) => {
    const token = req.cookies['token']
    if(token){
        try{
            const decodedToken = await jwt.verify(token, SECRET)

            req.user = decodedToken;
            res.locals.user = decodedToken;
            res.locals.isAuthenticated = true;

            next()
        }catch(err){
            res.clearCookie('token')

            res.redirect('users/login')
        }
    }else{
        next()
    }
}

exports.isAuthorized = async (req, res, next) => {

    if(!req.user) {
        return res.redirect('/users/login')
    }
    
    next()
}