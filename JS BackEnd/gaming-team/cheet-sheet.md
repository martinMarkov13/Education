# Cheet sheet 
 
1. Initialize project - npm init -yy
2. Install dev enviroment and dependencies- npm i nodemon -D, and setup start script
3. Install and setup express 
    - npm i express;
    - require express in index.js, setup test first action and app.listen with port
    - add static middleware - app.use(express.static('public')) for css and images
        *Add body parser - app.use(expres.urlencoded({extended:false}))
        * add routes with routes.js file - require('express').Router() and require it in index.js
4. Add static resources in public folder using path  - app.use(express.static(path.resolve(__dirname, 'public')))  
5. Add views folder with ready htmls from resources
6.Add view engine - express-handlebars
    - npm i express-handlebars
    - require it to express
    - config handlesbars - app.engine('hbs', handlebars.engine({
        extname: 'hbs'
    }))
        app.set('view engine', 'hbs')
    - config views folder - app.set('views', 'src/views') in index.js
    - add main layout in views/layouts - main.hbs
    - add partials folder in views/partials
    - render home page
    - fix static files path in main.hbs -  
7. Add controlers folder with homeController (including Router()) and add it in router.js - router.use(homeController)
8. Add database 
    - install mongoose - npm i mongoose
    - connect database - mongoose.connect('mongodb://127.0.0.1:27017/petstagram).then(()=> console.log("DB connected succesfully)).catch(err => console.log("DB error", err.message))

9. Authentication
    - Add user controller - app.get(/login, (req, res) => { res.redner('users/login')})
    - add controller to routes.js
    - fix routes in header navigation in main layout
    - render login page  (in userController)
    - render register page -- || --
10. Add user model in models folder
    - new mongoose.Schema({}) with the fields and the validations
    - add unique index for username - unique: true
    - validate repeat password with virtual property - userSchema.virtual('repeatPassword).set(function(value){
        if(this.password !==value){
            throw new Error("password missmatch)
        }
    })
    
11. Modify login and register forms in views
12. Add login and register post actions in controller
13. Add user manager(service) in managers folder
    - require in userController
    - Add register method
    - validate if user already exists (in manager)
14. Hash password
    - install bcrypt - npm i bcrypt
    - hash password in user model - userSchema.pre('save', async function(){
        const hash = await bcrypt.hash(this.password, 10)
        this.password = hash
    })
15. Login 
    - validate hash password on login (in userManaer)- 
        * find user by username
        * check password with bcrypt.compare
16. Generate JWT token
    - npm i jsonwebtoken
    - create lib folder with jwt.js
    - promisify jsonwebtoken 
        * require util from util 
        * const jwt = {
        sign: util.promisify(jsonwebtoken.sign),
        verify: util.promisify(jsonwebtoken.verify)
        module.exports = jwt
    }
    - generate token in userManager - const payload = {
        _id: user._id,
        username: user.username,
        email: user.email
    }
        const token = await jwt.sign(payload, secret, { expiresIn: '2d'})
        return token
17. Return token in cookie
    - npm i cookie-parser
    - config cookie-parser in index.js - app.use(cookieParser())
    - set cookie with token - in userController, on login - res.cookie('token', token) and res.redirect('/')
18. Logout
    - create router.get(/logout) in userController and res.clearCookie('token') + res.redirect
19. Authentication middleware - create middleware folder and authMiddleware.js
    - exports.auth = async (req, res, next) => {
        const token = req.cookies['token']
        if(token){
            try{
               const decodedToken = await jwt.verify(token, SECRET)
                req.user = decodedToken
               next()
            }catch(err){    
                res.clearCookie('token')

                res.redirect('users/login')
            }
        }else{
            next()
        }
    }
    - use middleware - require it in index.js and app.use(auth from authMiddleware) after cookieParser !!
    - implement auth middleware
    - attach decoded token to requests
    - handle invalid token
20. Authorization middleware 
21. Dynamic navigation - main.hbs
    - add conditional in main layout and create it via res.locals.user = decoded Token and res.locals.isAuthenticated = true;
22. Error handling
    - add 404 page
    - add global error handler for common case scenarios (optional) - create errorHandler in middlewares
    - use global error handler after routes in index.js
    - create redirect router to 404 in routes.js
    - add error message extractor -  create folder utils with errorHelper.js 
23. Show error notifications
    -add error container to main layout
    - show error container conditionally
    - pass error to render
    - add local error handler  - for example try catch in userController
24. Aumatically login after register 